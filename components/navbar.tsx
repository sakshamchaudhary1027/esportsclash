import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
      <h1 className="text-xl font-bold">ESPORTS</h1>
      <div className="flex gap-6 text-gray-300">
        <Link href="/">Home</Link>
        <Link href="/tournaments">Tournaments</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
}
