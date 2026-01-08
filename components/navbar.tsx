"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const gamesData = {
  featured: ["Free Fire", "BGMI", "Valorant", "Clash of Clans"],
  trending: ["Free Fire", "BGMI"],
  new: ["League of Legends", "Fortnite"],
};

export default function Navbar() {
  const [gamesOpen, setGamesOpen] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof gamesData>("featured");

  const menuRef = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setGamesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
<header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800 w-full">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold">
          Esports<span className="text-purple-500">Clash</span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">

          {/* GAMES */}
          <div className="relative" ref={menuRef}>
            <div className="glow-border">
              <button
                onClick={() => setGamesOpen(!gamesOpen)}
                className="px-4 py-2 rounded-md hover:text-white"
              >
                Games
              </button>
            </div>

            {gamesOpen && (
              <div className="absolute left-0 top-full mt-4 w-[560px] bg-[#12121a] border border-gray-800 rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-6">

                {/* CATEGORIES */}
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveCategory("featured")}
                    className={`w-full text-left px-4 py-3 rounded-lg border ${
                      activeCategory === "featured"
                        ? "border-purple-500 bg-purple-600/20"
                        : "border-gray-700 hover:border-purple-500"
                    }`}
                  >
                    Featured Games
                  </button>

                  <button
                    onClick={() => setActiveCategory("trending")}
                    className={`w-full text-left px-4 py-3 rounded-lg border ${
                      activeCategory === "trending"
                        ? "border-purple-500 bg-purple-600/20"
                        : "border-gray-700 hover:border-purple-500"
                    }`}
                  >
                    Trending Games
                  </button>

                  <button
                    onClick={() => setActiveCategory("new")}
                    className={`w-full text-left px-4 py-3 rounded-lg border ${
                      activeCategory === "new"
                        ? "border-purple-500 bg-purple-600/20"
                        : "border-gray-700 hover:border-purple-500"
                    }`}
                  >
                    New Games
                  </button>

                  <Link
                    href="/games"
                    className="block mt-4 text-sm text-purple-400 hover:underline"
                  >
                    View All Games →
                  </Link>
                </div>

                {/* GAMES LIST (ALWAYS SHOWS) */}
                <div className="bg-black/40 rounded-xl p-4 space-y-2">
                  {gamesData[activeCategory].map((game) => (
                    <p
                      key={game}
                      className="px-3 py-2 rounded hover:bg-purple-600 cursor-pointer"
                    >
                      {game}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* EVENTS */}
          <div className="glow-border">
            <Link
              href="/events"
              className="block px-4 py-2 rounded-md hover:text-white"
            >
              Events
            </Link>
          </div>

          {/* ABOUT */}
          <div className="glow-border">
            <Link
              href="/about"
              className="block px-4 py-2 rounded-md hover:text-white"
            >
              About Us
            </Link>
          </div>

          {/* PROFILE */}
          <div className="glow-border">
            <button className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
              S
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
