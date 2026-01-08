const data = [
  { id: 1, game: "BGMI", name: "BGMI Pro League", prize: 5000 },
  { id: 2, game: "Free Fire", name: "FF Night Cup", prize: 3000 },
  { id: 3, game: "Valorant", name: "Valorant Scrims", prize: 10000 },
];

export default function TournamentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tournaments</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((t) => (
          <div key={t.id} className="border border-gray-800 p-4">
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="text-gray-400">{t.game}</p>
            <p className="mt-2">Prize: ₹{t.prize}</p>

            <button className="mt-4 w-full bg-white text-black py-2">
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
