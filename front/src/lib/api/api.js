export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

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
