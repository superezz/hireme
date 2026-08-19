import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/features/authSlice";
import api from "../config/api";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await api.post("/api/users/logout");
    } catch (error) {
      console.error("Logout failed:", error);
    }
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="bg-white border-b border-slate-200">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 text-slate-800 transition-all">
        <Link to="/">
          <img src="/viewme-logo.png" alt="ViewMe" className="h-10 w-auto object-contain" />
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <p className="max-sm:hidden text-slate-600">Hi, {user?.name}</p>

          <button
            onClick={logoutUser}
            className="bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 px-6 py-2 rounded-full active:scale-95 transition-all duration-200 shadow-sm hover:shadow text-slate-700 hover:-translate-y-0.5"
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
