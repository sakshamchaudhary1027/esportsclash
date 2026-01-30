"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  // 👇 YAHI FIX HAI
  const { data: session, status } = useSession();

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-800 bg-[#0b0b0f]">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-white">
        EsportsClash
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {status === "loading" ? null : !session ? (
          <button
            onClick={() => signIn("google")}
            className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded text-white"
          >
            Login with Google
          </button>
        ) : (
          <>
            {session.user?.image && (
              <img
                src={session.user.image}
                alt="profile"
                className="w-8 h-8 rounded-full"
              />
            )}

            <button
              onClick={() => signOut()}
              className="border border-gray-600 px-4 py-2 rounded text-white hover:bg-gray-800 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
