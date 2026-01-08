import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Esports<span className="text-purple-400">Clash</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/tournaments" className="hover:text-white">Tournaments</Link>
          <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
          <Link href="/login" className="hover:text-white">Login</Link>
        </nav>
      </div>
    </header>
  );
}
