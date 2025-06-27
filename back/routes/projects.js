import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { db } from "../server.js";

const router = express.Router();

router.get("/", async (req, res) => {
  await db.read();
  res.json(db.data.projects);
});

// Получить проект по ID
router.get("/:id", (req, res) => {
  const projectId = req.params.id;
  const project = db.data.projects.find(
    (p) => String(p.id) === String(projectId)
  );

  if (!project) {
    return res.status(404).json({ message: "Проект не найден" });
  }

  res.json(project);
});

// 🔐 Добавить проект (только авторизованным)
router.post("/", verifyToken, async (req, res) => {
  await db.read();
  const newProject = req.body;
  db.data.projects.push(newProject);
  await db.write();
  res.status(201).json(newProject);
});

// 🔐 Обновить проект по ID (только авторизованным)
router.put("/:id", verifyToken, async (req, res) => {
  await db.read();
  const { id } = req.params;
  const index = db.data.projects.findIndex((p) => p.id == id);
  if (index === -1) return res.status(404).json({ error: "Not found" });

  db.data.projects[index] = { ...db.data.projects[index], ...req.body };
  await db.write();
  res.json(db.data.projects[index]);
});

// 🔐 Удалить проект (только авторизованным)
router.delete("/:id", verifyToken, async (req, res) => {
  await db.read();
  db.data.projects = db.data.projects.filter((p) => p.id != req.params.id);
  await db.write();
  res.status(204).end();
});

export default router;
