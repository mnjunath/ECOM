import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

function ProtectedLayout() {
  const { isAuthenticated, sessionExpiry } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (sessionExpiry && Date.now() > sessionExpiry) {
        dispatch(logout());
        toast.error("Session expired");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionExpiry, dispatch]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      <div className="px-12 py-12">
        <Outlet />
      </div>
    </div>
  );
}

export default ProtectedLayout;
