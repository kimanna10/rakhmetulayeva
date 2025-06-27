import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Решение 1: Явное объявление динамического поведения
export const dynamic = "force-dynamic";
// ИЛИ Решение 2: Альтернативный вариант
export const revalidate = 0;

export default async function AdminPage() {
  // 1. Получаем куки (синхронно)
  const token = cookies().get("token")?.value;

  console.log(token);
  // 2. Немедленный редирект если нет токена
  if (!token) {
    console.log("Токен не найден, перенаправление на /login");
    redirect("/login");
  }

  // 3. Проверка токена через API
  try {
    const verifyUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/verify`;

    const res = await fetch(verifyUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Ошибка верификации:", await res.text());
      throw new Error("Токен недействителен");
    }

    // 4. Успешный рендеринг
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold">Админ-панель</h1>
        <p>Добро пожаловать!</p>
      </div>
    );
  } catch (error) {
    console.error("Финальная ошибка проверки:", {
      message: error.message,
      stack: error.stack,
    });
    redirect("/login");
  }
}
