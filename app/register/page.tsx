export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <input className="w-full border p-2 mb-3" placeholder="Username" />
      <input className="w-full border p-2 mb-3" placeholder="Email" />
      <input
        className="w-full border p-2 mb-3"
        placeholder="Password"
        type="password"
      />

      <button className="w-full bg-black text-white py-2">
        Create Account
      </button>
    </div>
  );
}
