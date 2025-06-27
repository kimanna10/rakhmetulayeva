"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    try {
      setLoading(true);

      // 1. Очистка старых кук
      // await fetch("http://localhost:3001/auth/logout", {
      //   credentials: "include",
      // });

      // 2. Отправка запроса с явным URL
      const response = await fetch(
        "https://rakhmetulayeva.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username.trim(),
            password: password.trim(),
          }),
          credentials: "include",
        }
      );

      // 3. Обработка ответа
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Неверные учетные данные");
      }

      router.push("/admin");
    } catch (error) {
      console.error("Полная ошибка:", {
        message: error.message,
        stack: error.stack,
      });
      alert("Ошибка входа: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Вход в админку</h1>

      <input
        type="text"
        placeholder="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 mb-4"
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        className={`bg-black text-white px-4 py-2 w-full ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Загрузка..." : "Войти"}
      </button>
    </div>
  );
}
