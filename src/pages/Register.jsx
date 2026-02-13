import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    toast.success("Registration successful");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="bg-white border border-neutral-200 p-12 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-neutral-300 p-4 focus:outline-none focus:border-black transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-neutral-300 p-4 focus:outline-none focus:border-black transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-neutral-300 p-4 focus:outline-none focus:border-black transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-4 uppercase tracking-wider hover:bg-neutral-800 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-8 text-sm text-neutral-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline hover:text-black"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
