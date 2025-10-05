import { Link } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Left: App Name */}
      <Link to="/" className="text-2xl font-bold text-[#A6E22E] hover:text-[#C7FF57] transition-all">
        LinguaLearn
      </Link>

      {/* Right: Buttons */}
      <div className="flex items-center gap-4">
        {!user ? (
          <>
            <Link
              to="/signin"
              className="px-4 py-2 rounded-lg border border-[#A6E22E] text-[#A6E22E] hover:bg-[#A6E22E] hover:text-black transition"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-[#A6E22E] text-black font-semibold hover:bg-[#C7FF57] transition"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/lessons"
              className="hover:text-[#A6E22E] transition"
            >
              Lessons
            </Link>
            <Link
              to="/quizzes"
              className="hover:text-[#A6E22E] transition"
            >
              Quizzes
            </Link>
            <Link
              to="/profile"
              className="hover:text-[#A6E22E] transition"
            >
              Profile
            </Link>
            <button
              onClick={logout}
              className="ml-3 px-4 py-2 rounded-lg bg-[#A6E22E] text-black font-semibold hover:bg-[#C7FF57] transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
