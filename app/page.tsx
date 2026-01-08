"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white">

      {/* HERO VISUAL */}
<div className="relative">
  <div className="absolute -inset-6 bg-purple-600/30 blur-3xl rounded-full animate-pulse"></div>

  <div className="relative overflow-hidden rounded-2xl border border-gray-800">
    <img
      src="/hero-poster.gif"
      alt="Esports Action"
      className="w-full h-full object-cover"
    />
  </div>
</div>

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
{/* ================= GAMES SHOWCASE ================= */}
<section className="w-full py-24 border-t border-gray-800">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-14">
      Popular Games
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
      {[
        {
          name: "BGMI",
          logo: "/games/bgmi.png",
        },
        {
          name: "Free Fire",
          logo: "/games/freefire.png",
        },
        {
          name: "Valorant",
          logo: "/games/valorant.png",
        },
        {
          name: "Clash of Clans",
          logo: "/games/coc.png",
        },
        {
          name: "Fortnite",
          logo: "/games/fortnite.png",
        },
      ].map((game) => (
        <div
          key={game.name}
          className="group bg-[#12121a] border border-gray-800 rounded-xl p-6 flex items-center justify-center hover:border-purple-500 transition"
        >
          <img
            src={game.logo}
            alt={game.name}
            className="h-12 grayscale group-hover:grayscale-0 transition"
          />
        </div>
      ))}
    </div>
  </div>
</section>
