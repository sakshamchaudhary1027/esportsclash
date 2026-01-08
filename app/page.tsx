"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black"></div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              World-Class
            </span>{" "}
            Esports Platform
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Host & join competitive tournaments for BGMI, Free Fire,
            Valorant and more. Built for champions.
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              href="/tournaments"
              className="bg-white text-black px-8 py-3 font-semibold rounded"
            >
              Explore Tournaments
            </Link>
            <Link
              href="/login"
              className="border border-gray-500 px-8 py-3 rounded"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["10K+", "Players"],
            ["500+", "Tournaments"],
            ["₹1Cr+", "Prizes"],
            ["20+", "Partners"],
          ].map(([value, label]) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold">{value}</h2>
              <p className="text-gray-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["⚡ Fast Matchmaking", "Quick tournament joins & instant updates"],
              ["💰 Secure Prizes", "Transparent & instant payouts"],
              ["🎮 Multi Games", "BGMI, Free Fire, Valorant & more"],
            ].map(([title, desc]) => (
              <motion.div
                key={title}
                className="border border-gray-800 p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GAMES ================= */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Supported Games</h2>

          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            {["BGMI", "Free Fire", "Valorant", "CS2", "COD Mobile"].map(
              (game) => (
                <div
                  key={game}
                  className="border border-gray-700 px-6 py-3 rounded"
                >
                  {game}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Compete?
        </h2>
        <p className="text-gray-400 mb-8">
          Join thousands of players competing daily.
        </p>

        <Link
          href="/register"
          className="bg-white text-black px-10 py-4 font-semibold rounded"
        >
          Create Free Account
        </Link>
      </section>

    </div>
  );
}
