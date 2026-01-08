export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-sm text-gray-500 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} EsportsClash. All rights reserved.</p>
        <p>Made for competitive gamers 🎮</p>
      </div>
    </footer>
  );
}
