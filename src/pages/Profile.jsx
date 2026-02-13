import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateProfile } from "../features/auth/authSlice";
import { toast } from "react-toastify";

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPassword(user.password);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password }));
    toast.success("Profile updated");
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold mb-10">
        Profile Settings
      </h1>

      <div className="bg-white border border-neutral-200 p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            className="w-full border border-neutral-300 p-4 focus:outline-none focus:border-black transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="w-full border border-neutral-300 p-4 focus:outline-none focus:border-black transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full border border-neutral-300 p-4 focus:outline-none focus:border-black transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 uppercase tracking-wider hover:bg-neutral-800 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
