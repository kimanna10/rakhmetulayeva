"use client";
import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Error sending message!");
    }
  };

  const inputStyle =
    "w-full p-3 bg-neutral-900  rounded-sm border border-neutral-800 rounded outline-none focus:border-white transition-colors duration-300";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-lg justify-center mx-auto"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className={inputStyle}
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        required
        className={inputStyle}
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="For what purpose do you want to book?"
        required
        rows={4}
        className={inputStyle}
      />
      <button
        type="submit"
        className="w-full py-3 bg-white text-black font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors rounded-sm"
      >
        Send
      </button>

      {status && (
        <p className="text-sm text-center text-neutral-400 mt-2">{status}</p>
      )}
    </form>
  );
}
