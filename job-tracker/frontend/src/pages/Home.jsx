import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { user, loginWithGoogle } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6">
      <h1 className="text-5xl font-extrabold mb-6 text-center">
        Welcome to Job Tracker
      </h1>
      <p className="text-xl mb-8 text-center max-w-xl">
        Keep track of all your job applications, manage your dashboard, and never miss an opportunity!
      </p>

      {user ? (
        <Link
          to="/dashboard"
          className="bg-white text-blue-600 px-6 py-3 rounded font-bold hover:bg-gray-100 transition"
        >
          Go to Dashboard
        </Link>
      ) : (
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={loginWithGoogle}
            className="bg-white text-blue-600 px-6 py-3 rounded font-bold hover:bg-gray-100 transition"
          >
            Login with Google
          </button>
          <Link
            to="/signup"
            className="border border-white px-6 py-3 rounded font-bold hover:bg-white hover:text-blue-600 transition"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
}
