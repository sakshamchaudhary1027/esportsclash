const tournaments = [
  {
    id: 1,
    name: "BGMI Pro League",
    game: "BGMI",
    prize: 5000,
  },
  {
    id: 2,
    name: "Free Fire Night Cup",
    game: "Free Fire",
    prize: 3000,
  },
  {
    id: 3,
    name: "Valorant Scrims",
    game: "Valorant",
    prize: 10000,
  },
];

export default function TournamentsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Tournaments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tournaments.map((t) => (
          <div
            key={t.id}
            className="bg-[#12121a] border border-[#1f1f2e] rounded-xl p-5"
          >
            <h2 className="text-lg font-semibold">{t.name}</h2>
            <p className="text-sm text-gray-400">{t.game}</p>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm">Prize: ₹{t.prize}</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-sm px-4 py-1.5 rounded">
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
