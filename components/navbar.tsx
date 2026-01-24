"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="p-4 flex justify-between items-center border-b border-gray-800">
      <Link href="/" className="font-bold text-xl">
        EsportsClash
      </Link>

      {!session ? (
        <button
          onClick={() => signIn("google")}
          className="bg-purple-600 px-4 py-2 rounded"
        >
          Login with Google
        </button>
      ) : (
        <button
          onClick={() => signOut()}
          className="border px-4 py-2 rounded"
        >
          Logout
        </button>
      )}
    </nav>
  );
}
