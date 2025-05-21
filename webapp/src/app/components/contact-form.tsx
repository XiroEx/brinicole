'use client'

import React, { useState } from "react";
import { submitContactForm } from "../calls/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error" | "loading";
    message?: string;
  }>({ type: "idle", message: "" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "loading" });
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      message: string;
    };

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    try {
      await submitContactForm(data);
      setStatus({ type: "success", message: "Message sent successfully!" });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    }
  };

  return (
    <form className="flex flex-col gap-4 pop" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        placeholder="Your Name"
        className="px-4 py-2 border border-[var(--color-secondary)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] bg-[var(--color-secondary)] text-white"
        required
      />
      <input
        type="text"
        name="email"
        value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        placeholder="Your Email"
        className="px-4 py-2 border border-[var(--color-secondary)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] bg-[var(--color-secondary)] text-white"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        placeholder="Your Message"
        rows={2}
        className="px-4 py-2 border border-[var(--color-secondary)] rounded-lg focus:outline-none focus:border-[var(--color-primary)] bg-[var(--color-secondary)] text-white"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-primary)] transition duration-300 pop"
        disabled={status.type === "loading"}
      >
        {status.type === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status.type !== "idle" && status.message && (
        <span
          className={`text-sm text-center ${
            status.type === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {status.message}
        </span>
      )}
    </form>
  );
}