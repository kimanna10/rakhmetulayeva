// hash.js
import bcrypt from "bcrypt";

const password = "admin-kamila12345"; // Твой настоящий пароль
const saltRounds = 10;

bcrypt.hash(password, saltRounds).then((hash) => {
  console.log("ХЭШ:", hash);
});
