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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof gamesData>("featured");

  const menuRef = useRef<HTMLDivElement>(null);

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
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur border-b border-gray-800">
      
      {/* FULL WIDTH BAR */}
      <div className="w-full px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-white">
          Esports<span className="text-purple-500">Clash</span>
        </Link>

        {/* DESKTOP NAV */}
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
                  {(
                    Object.keys(gamesData) as Array<
                      keyof typeof gamesData
                    >
                  ).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key)}
                      className={`w-full text-left px-4 py-3 rounded-lg border ${
                        activeCategory === key
                          ? "border-purple-500 bg-purple-600/20"
                          : "border-gray-700 hover:border-purple-500"
                      }`}
                    >
                      {key.charAt(0).toUpperCase() + key.slice(1)} Games
                    </button>
                  ))}

                  <Link
                    href="/games"
                    className="block mt-4 text-sm text-purple-400 hover:underline"
                  >
                    View All Games →
                  </Link>
                </div>

                {/* GAMES LIST */}
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
            <Link href="/events" className="block px-4 py-2">
              Events
            </Link>
          </div>

          {/* ABOUT */}
          <div className="glow-border">
            <Link href="/about" className="block px-4 py-2">
              About Us
            </Link>
          </div>

          {/* PROFILE */}
          <div className="glow-border">
            <button className="w-9 h-9 rounded-full bg-purple-600 text-white font-semibold">
              S
            </button>
          </div>
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
{mobileOpen && (
  <div className="md:hidden w-full bg-black border-t border-gray-800">
    <div className="flex flex-col px-6 py-6 space-y-4 text-base">

      <Link
        href="/events"
        onClick={() => setMobileOpen(false)}
        className="w-full px-4 py-3 rounded-lg bg-[#12121a] border border-gray-800 hover:border-purple-500"
      >
        Events
      </Link>

      <Link
        href="/games"
        onClick={() => setMobileOpen(false)}
        className="w-full px-4 py-3 rounded-lg bg-[#12121a] border border-gray-800 hover:border-purple-500"
      >
        Games
      </Link>

      <Link
        href="/about"
        onClick={() => setMobileOpen(false)}
        className="w-full px-4 py-3 rounded-lg bg-[#12121a] border border-gray-800 hover:border-purple-500"
      >
        About Us
      </Link>

      <Link
        href="/profile"
        onClick={() => setMobileOpen(false)}
        className="w-full px-4 py-3 rounded-lg bg-purple-600 text-white text-center"
      >
        Profile
      </Link>

    </div>
  </div>
)}

    </header>
  );
}
