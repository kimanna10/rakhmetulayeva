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
    origin: process.env.CLIENT_URL || "http://localhost:3000", // фронт
    credentials: true, // обязательно
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/projects", projectsRouter);
app.use("/contacts", contactsRouter);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
