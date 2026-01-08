"use client";

import { useRouter } from "next/navigation";
import { login } from "../../lib/auth";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = () => {
    login(); // auto login after register
    router.push("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-6">Register</h1>

      <input
        placeholder="Username"
        className="w-full border p-2 mb-3"
      />
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
        onClick={handleRegister}
        className="w-full bg-black text-white py-2"
      >
        Create Account
      </button>
    </div>
  );
}
