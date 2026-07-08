import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

// Авторизация через данные из .env.local
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

/**
 * Функция для получения данных из любой вкладки таблицы
 * @param {string} sheetTitle - Имя вкладки (например, "projects")
 */
async function getProjectsFromSheet(sheetTitle) {
  try {
    // Подключаемся к таблице
    const doc = new GoogleSpreadsheet(process.env.SHEET_ID, serviceAccountAuth);

    // Загружаем инфо о таблице
    await doc.loadInfo();

    // Выбираем нужный лист
    const sheet = doc.sheetsByTitle[sheetTitle];
    if (!sheet) {
      console.error(`Ошибка: Лист с именем "${sheetTitle}" не найден!`);
      return [];
    }

    // Получаем все ряды и превращаем их в чистые объекты
    const rows = await sheet.getRows();
    return rows.map((row) => row.toObject());
  } catch (error) {
    console.error(
      "Критическая ошибка при загрузке данных из Google Sheets:",
      error,
    );
    return []; // Возвращаем пустой массив, чтобы сайт не сломался
  }
}
// А в конце файла замените module.exports на:
export { getProjectsFromSheet };
