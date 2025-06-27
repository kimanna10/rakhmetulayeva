import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import authRouter from "./routes/auth.js";
import contactsRouter from "./routes/contacts.js";
import projectsRouter from "./routes/projects.js";

const app = express();
const port = 3001;

const adapter = new JSONFile("db.json");

// 💡 Добавили дефолтные данные прямо сюда ↓↓↓
export const db = new Low(adapter, {
  projects: [],
  contacts: [],
});

await db.read();
// await db.write(); // не забудь сохранить

app.use(
  cors({
    origin: ["https://rakhmetulayeva.vercel.app", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/projects", projectsRouter);
app.use("/contacts", contactsRouter);

// Мидлвар для проверки куки
app.use((req, res, next) => {
  console.log("Полученные куки:", req.cookies); // Добавьте этот лог
  next();
});

// Эндпоинт проверки авторизации
app.get("/check-auth", (req, res) => {
  console.log("Токен из куки:", req.cookies.token); // Проверьте это
  res.json({ cookies: req.cookies });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
