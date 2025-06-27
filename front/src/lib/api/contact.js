import { fetchFromApi } from "./api";

const CONTACT_ID = "1";

// Получить контакт
export async function getContact() {
  return fetchFromApi(`/contacts/${CONTACT_ID}`);
}

// Обновить контакт
export async function updateContact(updatedData) {
  return fetchFromApi(`/contacts/${CONTACT_ID}`, {
    method: "PUT",
    body: JSON.stringify(updatedData),
  });
}
