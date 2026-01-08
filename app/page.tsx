"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full bg-[#0b0b0f] text-white">

      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/hero-poster.gif"
          alt="Esports Action"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            Compete. <span className="text-purple-500">Win.</span> Dominate.
          </h1>

          <p className="text-gray-300 mb-10 text-base sm:text-lg">
            Join India’s next-gen esports platform.
            Compete in BGMI, Free Fire, Valorant & more tournaments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/events"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded font-medium"
            >
              Explore Events
            </Link>
            <Link
              href="/profile"
              className="border border-gray-400 hover:border-white px-8 py-3 rounded font-medium"
            >
              My Profile
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="w-full py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-purple-500">10K+</p>
            <p className="text-gray-400 text-sm">Players</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-500">500+</p>
            <p className="text-gray-400 text-sm">Tournaments</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-500">₹1Cr+</p>
            <p className="text-gray-400 text-sm">Prizes</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-500">24/7</p>
            <p className="text-gray-400 text-sm">Support</p>
          </div>
        </div>
      </section>

      {/* ================= SUPPORTED GAMES ================= */}
      <section className="w-full py-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14">
            Supported Games
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
            {[
              { name: "BGMI", img: "/games/bgmi.png" },
              { name: "Free Fire", img: "/games/freefire.png" },
              { name: "Valorant", img: "/games/valorant.png" },
              { name: "Clash of Clans", img: "/games/coc.png" },
              { name: "Fortnite", img: "/games/fortnite.png" },
            ].map((game) => (
              <div
                key={game.name}
                className="group flex flex-col items-center gap-4 bg-[#12121a] border border-gray-800 rounded-xl py-8 hover:border-purple-500 transition"
              >
                <img
                  src={game.img}
                  alt={game.name}
className="h-14 object-contain transition"
                />
                <p className="text-sm text-gray-300 group-hover:text-white">
                  {game.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14">
            Why EsportsClash?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fair Play",
                desc: "Verified matches & anti-cheat systems.",
              },
              {
                title: "Fast Payouts",
                desc: "Secure and instant prize distribution.",
              },
              {
                title: "All Major Games",
                desc: "BGMI, Free Fire, Valorant & more.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#12121a] border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-28 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Compete?
          </h2>
          <p className="text-gray-400 mb-8">
            Create your profile and start winning today.
          </p>
          <Link
            href="/events"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded font-medium"
          >
            Get Started
          </Link>
        </div>
      </section>

    </main>
  );
}
