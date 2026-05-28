import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaFeatherAlt } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-violet-500 to-sky-500 flex justify-center items-center shadow-md">
            <FaFeatherAlt className="text-white text-xl" />
          </div>

          <h1 className="text-3xl font-bold text-slate-800">
            MiniBlog
          </h1>
        </div>

        <nav className="flex items-center gap-7 font-medium text-slate-600">

          <Link
            className="hover:text-violet-600 transition duration-300"
            to="/"
          >
            Home
          </Link>

          <Link
            className="hover:text-violet-600 transition duration-300"
            to="/create"
          >
            Create
          </Link>

          <Link
            className="hover:text-violet-600 transition duration-300"
            to="/dashboard"
          >
            Dashboard
          </Link>

          {!token ? (
            <Link
              to="/login"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-sky-500 text-white shadow-md hover:scale-105 duration-300"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-red-50 text-red-500 hover:bg-red-100 duration-300"
            >
              <FiLogOut />
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;