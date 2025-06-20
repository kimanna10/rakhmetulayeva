"use client";
import { useEffect, useState } from "react";

export default function ProjectForm({ existing, onSuccess }) {
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    img: "",
    link: "",
    type: "instagram",
  });

  useEffect(() => {
    if (existing) {
      setForm(existing);
    } else {
      setForm({
        title: "",
        subtitle: "",
        description: "",
        img: "",
        link: "",
        type: "instagram",
      });
    }
  }, [existing]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const method = existing ? "PUT" : "POST";
    await fetch("/api/projects", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    onSuccess?.();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded">
      <h2 className="text-lg font-semibold">
        {existing ? "Редактировать проект" : "Добавить новый проект"}
      </h2>

      {["title", "subtitle", "img", "link"].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      ))}

      <textarea
        name="description"
        rows={4}
        placeholder="Описание"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="instagram">Instagram</option>
        <option value="youtube">YouTube</option>
      </select>

      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        {existing ? "Обновить" : "Создать"}
      </button>
    </form>
  );
}
