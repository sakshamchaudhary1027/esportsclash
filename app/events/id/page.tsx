"use client";

import { useParams } from "next/navigation";

const events = [
  {
    id: "1",
    game: "BGMI",
    title: "BGMI Pro Scrims",
    date: "12 Jan 2026",
    prize: "₹25,000",
    poster: "/events/bgmi.jpg",
    description:
      "Compete with top BGMI squads in intense professional scrims. Fair play and instant payouts.",
  },
  {
    id: "2",
    game: "Free Fire",
    title: "Free Fire Clash Cup",
    date: "15 Jan 2026",
    prize: "₹10,000",
    poster: "/events/freefire.jpg",
    description:
      "Fast-paced Free Fire tournament open for all skill levels. Join and prove your skills.",
  },
  {
    id: "3",
    game: "Valorant",
    title: "Valorant Night Tournament",
    date: "18 Jan 2026",
    prize: "₹30,000",
    poster: "/events/valorant.jpg",
    description:
      "Competitive Valorant matches with top teams. Strategic gameplay and big rewards.",
  },
];

export default function EventDetailsPage() {
  const params = useParams();
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Event not found
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#0b0b0f] text-white">

      {/* HERO */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={event.poster}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
          <span className="text-purple-400 mb-2">{event.game}</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {event.title}
          </h1>
          <p className="text-gray-300 max-w-xl">
            {event.description}
          </p>
        </div>
      </section>

      {/* DETAILS */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* INFO */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">Tournament Details</h2>
            <p className="text-gray-400">
              📅 Date: {event.date}
            </p>
            <p className="text-gray-400">
              🏆 Prize Pool:{" "}
              <span className="text-purple-400">{event.prize}</span>
            </p>
            <p className="text-gray-400">
              🎮 Game: {event.game}
            </p>
          </div>

          {/* JOIN CARD */}
          <div className="bg-[#12121a] border border-gray-800 rounded-xl p-6 h-fit">
            <h3 className="text-lg font-semibold mb-4">
              Ready to Join?
            </h3>
            <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded font-medium">
              Join Tournament
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}
