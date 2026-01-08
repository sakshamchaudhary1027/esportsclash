"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, logout } from "../../lib/auth";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-500 mb-6">
        You are logged in (Demo)
      </p>

      <button
        onClick={() => {
          logout();
          router.push("/login");
        }}
        className="bg-black text-white px-4 py-2"
      >
        Logout
      </button>
    </div>
  );
}
