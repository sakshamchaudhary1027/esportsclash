"use client";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      game: "BGMI",
      title: "BGMI Pro Scrims",
      date: "12 Jan 2026",
      prize: "₹25,000",
      poster: "/events/bgmi.jpg",
      status: "Live",
    },
    {
      id: 2,
      game: "Free Fire",
      title: "Free Fire Clash Cup",
      date: "15 Jan 2026",
      prize: "₹10,000",
      poster: "/events/freefire.jpg",
      status: "Upcoming",
    },
    {
      id: 3,
      game: "Valorant",
      title: "Valorant Night Tournament",
      date: "18 Jan 2026",
      prize: "₹30,000",
      poster: "/events/valorant.jpg",
      status: "Upcoming",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#0b0b0f] text-white">

      {/* HEADER */}
      <section className="w-full py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Events & Tournaments</h1>
          <p className="text-gray-400">
            Compete in top esports tournaments and win exciting prizes.
          </p>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#12121a] border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition"
            >
              {/* POSTER */}
              <div className="h-48 overflow-hidden">
                <img
                  src={event.poster}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-purple-400">
                    {event.game}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      event.status === "Live"
                        ? "bg-green-600"
                        : "bg-gray-600"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>

                <h3 className="text-lg font-semibold">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-400">
                  📅 {event.date}
                </p>

                <p className="text-sm">
                  Prize Pool:{" "}
                  <span className="text-purple-400 font-medium">
                    {event.prize}
                  </span>
                </p>

<a
  href={`/events/${event.id}`}
  className="block text-center w-full mt-4 bg-purple-600 hover:bg-purple-700 py-2 rounded font-medium"
>
  View Details
</a>
              </div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
