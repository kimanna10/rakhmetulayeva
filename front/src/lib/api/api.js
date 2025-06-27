// const BASE_URL =
//   process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

// export async function fetchFromApi(endpoint, options = {}) {
//   const res = await fetch(`${BASE_URL}${endpoint}`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     ...options,
//   });

//   if (!res.ok) {
//     throw new Error(`Ошибка при запросе ${endpoint}: ${res.status}`);
//   }

//   return res.json();
// }

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

// export async function fetchFromApi(endpoint, options = {}) {
//   const res = await fetch(`${BASE_URL}${endpoint}`, {
//     headers: {
//       "Content-Type": "application/json",
//       ...(options.headers || {}),
//     },
//     credentials: "include", // ✅ отправлять cookies (в т.ч. токен)
//     ...options,
//   });

//   if (!res.ok) {
//     const text = await res.text();
//     throw new Error(`Ошибка при запросе ${endpoint}: ${res.status} – ${text}`);
//   }

//   return res.json();
// }

export async function fetchFromApi(endpoint, options = {}) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      credentials: "include",
    });

    // Читаем ответ как текст (на случай если сервер возвращает не JSON)
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};

    if (!res.ok) {
      const error = new Error(data.error || "Неверные учетные данные");
      error.status = res.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Fetch error:", {
      url: `${BASE_URL}${endpoint}`,
      error: error.message,
    });
    throw error;
  }
}
