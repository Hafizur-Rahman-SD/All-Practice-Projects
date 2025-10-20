import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">
        <Link to="/">JobTracker</Link>
      </h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">Home</Link>

        {user ? (
          <>
            <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-200">Login</Link>
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
