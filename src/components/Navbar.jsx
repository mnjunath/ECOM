import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out");
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-neutral-200 px-10 py-5 flex justify-between items-center">
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold tracking-wide">
          ECOM
        </h1>

        <div className="flex gap-8 text-neutral-600 text-sm uppercase tracking-wider">
          <Link to="/" className="hover:text-black transition">
            Dashboard
          </Link>
          <Link to="/products" className="hover:text-black transition">
            Products
          </Link>
          <Link to="/cart" className="hover:text-black transition">
            Cart ({cartItems.length})
          </Link>
          <Link to="/profile" className="hover:text-black transition">
            Profile
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <span className="text-sm text-neutral-600">
          {user?.name}
        </span>

        <button
          onClick={handleLogout}
          className="bg-black text-white px-5 py-2 text-sm uppercase tracking-wide hover:bg-neutral-800 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
