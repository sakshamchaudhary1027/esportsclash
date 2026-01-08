"use client";

import { useRouter } from "next/navigation";
import { login } from "../../lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    login(); // fake login
    router.push("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <input
        placeholder="Email"
        className="w-full border p-2 mb-3"
      />
      <input
        placeholder="Password"
        type="password"
        className="w-full border p-2 mb-4"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-black text-white py-2"
      >
        Login
      </button>
    </div>
  );
}
