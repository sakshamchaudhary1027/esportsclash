"use client";

import { useState } from "react";

export default function AdminPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    game: "",
    prize: "",
    poster: "",
    description: "",
    date: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/tournaments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      alert("Tournament created successfully");
      setForm({
        title: "",
        game: "",
        prize: "",
        poster: "",
        description: "",
        date: "",
      });
    } else {
      alert("Failed to create tournament");
    }
  }

  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Admin – Create Tournament</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl space-y-4 bg-[#12121a] p-6 rounded-xl border border-gray-800"
      >
        <input
          required
          placeholder="Tournament Title"
          className="w-full p-3 bg-black border border-gray-700 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          required
          placeholder="Game (BGMI, Free Fire, Valorant)"
          className="w-full p-3 bg-black border border-gray-700 rounded"
          value={form.game}
          onChange={(e) => setForm({ ...form, game: e.target.value })}
        />

        <input
          required
          placeholder="Prize Pool (₹10,000)"
          className="w-full p-3 bg-black border border-gray-700 rounded"
          value={form.prize}
          onChange={(e) => setForm({ ...form, prize: e.target.value })}
        />

        <input
          required
          placeholder="Poster URL (/events/bgmi.jpg)"
          className="w-full p-3 bg-black border border-gray-700 rounded"
          value={form.poster}
          onChange={(e) => setForm({ ...form, poster: e.target.value })}
        />

        <input
          type="date"
          required
          className="w-full p-3 bg-black border border-gray-700 rounded"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <textarea
          required
          placeholder="Tournament Description"
          className="w-full p-3 bg-black border border-gray-700 rounded"
          rows={4}
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded font-medium disabled:opacity-60"
        >
          {loading ? "Creating..." : "Create Tournament"}
        </button>
      </form>
    </main>
  );
}
