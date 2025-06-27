import express from "express";
import { db } from "../server.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  await db.read();

  const id = Number(req.params.id); // 🔧 Преобразуем в число
  const contact = db.data.contacts.find((c) => c.id === id);

  if (!contact) {
    return res.status(404).json({ error: "Not found" });
  }

  res.json(contact);
});

// 🔐 Защищённый PUT-запрос (обновление контакта)
router.put("/:id", verifyToken, async (req, res) => {
  await db.read();
  const contact = db.data.contacts.find((c) => c.id === req.params.id);
  if (!contact) return res.status(404).json({ error: "Not found" });

  Object.assign(contact, req.body);
  await db.write();

  res.json(contact);
});

export default router;
