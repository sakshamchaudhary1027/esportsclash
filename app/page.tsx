"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          <span className="text-purple-400">Esports</span>Clash
        </h1>

        <p className="text-gray-400 mb-8">
          Compete in BGMI, Free Fire, Valorant and more esports tournaments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tournaments"
            className="bg-white text-black px-6 py-3 rounded"
          >
            View Tournaments
          </Link>

          <Link
            href="/login"
            className="border border-gray-600 px-6 py-3 rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
