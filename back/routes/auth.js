import bcrypt from "bcrypt";
import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import { db } from "../server.js";
dotenv.config();

const router = express.Router();
const SECRET = process.env.JWT_SECRET;

// Проверка наличия SECRET при старте
if (!SECRET) {
  console.error("FATAL ERROR: JWT_SECRET не задан в .env файле!");
  process.exit(1);
}

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Полученные данные:", req.body);

    // Проверка входных данных
    if (!username || !password) {
      return res.status(400).json({ error: "Username и password обязательны" });
    }

    await db.read();

    // Проверка существования пользователя
    const user = db.data.users?.find((u) => u.username === username);
    if (!user) {
      return res.status(401).json({ error: "Неверные учетные данные" });
    }

    // Проверка пароля
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("Неверный пароль для пользователя:", username);
      return res.status(401).json({
        error: "Неверные учетные данные",
        details: "Пароль не совпадает",
      });
    }

    // Создание JWT токена
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        role: user.role || "user", // Значение по умолчанию
      },
      SECRET,
      { expiresIn: "1h" }
    );

    // Установка куки
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   maxAge: 60 * 60 * 1000, // 1 час
    //   path: "/",
    // });

    res.cookie("token", token, {
      // token - ваш JWT
      httpOnly: true,
      secure: true,
      sameSite: "None",
      domain: ".onrender.com", // Важно: точка в начале!
      path: "/",
      maxAge: 24 * 60 * 60 * 1000, // 24 часа
    });

    res.status(200).json({
      success: true,
      user: {
        id: user.id,
        username: user.username,
      },
    });

    // Ответ без чувствительных данных
    // res.json({
    //   success: true,
    //   user: {
    //     id: user.id,
    //     username: user.username,
    //     role: user.role,
    //   },
    // });

    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
  } catch (error) {
    console.error("Ошибка входа:", error);
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
});

// routes/auth.js
// router.get("/verify", (req, res) => {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ error: "Токен не предоставлен" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     res.json({
//       username: decoded.username,
//       role: decoded.role,
//     });
//   } catch (err) {
//     res.status(401).json({ error: "Невалидный токен" });
//   }
// });
router.get("/verify", async (req, res) => {
  // 1. Получаем токен из разных источников
  const token = req.headers.authorization?.split(" ")[1] || req.cookies?.token;

  // 2. Логирование для отладки
  console.log("Запрос верификации:", {
    hasToken: !!token,
    source: req.headers.authorization ? "header" : "cookie",
  });

  // 3. Проверка наличия токена
  if (!token) {
    console.warn("Токен не предоставлен");
    return res.status(401).json({
      error: "Требуется авторизация",
      details:
        process.env.NODE_ENV === "development"
          ? "Токен не найден ни в headers, ни в cookies"
          : undefined,
    });
  }

  // 4. Верификация токена
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5. Успешный ответ
    res.json({
      success: true,
      user: {
        id: decoded.id,
        username: decoded.username,
        role: decoded.role,
      },
      expiresIn: decoded.exp
        ? new Date(decoded.exp * 1000).toISOString()
        : "не указано",
    });
  } catch (err) {
    console.error("Ошибка верификации:", {
      name: err.name,
      message: err.message,
      token: token.slice(0, 10) + "...", // Логируем только часть токена
    });

    res.status(401).json({
      error: "Неавторизованный доступ",
      details: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token").sendStatus(200);
});

export default router;
