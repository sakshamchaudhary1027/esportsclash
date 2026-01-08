"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-purple-500">Compete.</span>{" "}
            Win. Dominate.
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mb-8">
            Join competitive esports tournaments for BGMI, Free Fire,
            Valorant and more. Built for serious gamers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tournaments"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded font-medium"
            >
              Explore Tournaments
            </Link>

            <Link
              href="/login"
              className="border border-gray-600 px-6 py-3 rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why EsportsClash?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-[#12121a] p-6 rounded-lg border border-gray-800">
              <h3 className="font-semibold mb-2">⚡ Fast Matches</h3>
              <p className="text-gray-400 text-sm">
                Join tournaments instantly with real-time updates.
              </p>
            </div>

            <div className="bg-[#12121a] p-6 rounded-lg border border-gray-800">
              <h3 className="font-semibold mb-2">💰 Real Prizes</h3>
              <p className="text-gray-400 text-sm">
                Compete and win real cash rewards securely.
              </p>
            </div>

            <div className="bg-[#12121a] p-6 rounded-lg border border-gray-800">
              <h3 className="font-semibold mb-2">🎮 Multiple Games</h3>
              <p className="text-gray-400 text-sm">
                BGMI, Free Fire, Valorant & more supported.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* GAMES */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Supported Games
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {["BGMI", "Free Fire", "Valorant", "CS2", "COD Mobile"].map(
              (game) => (
                <span
                  key={game}
                  className="border border-gray-700 px-5 py-2 rounded text-sm text-gray-300"
                >
                  {game}
                </span>
              )
            )}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 text-center border-t border-gray-800">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Compete?
        </h2>

        <p className="text-gray-400 mb-8">
          Create your free account and start winning today.
        </p>

        <Link
          href="/register"
          className="bg-white text-black px-8 py-3 rounded font-medium"
        >
          Create Free Account
        </Link>
      </section>

    </main>
  );
}
