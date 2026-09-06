import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-2">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center"
          >
            <img
              src="/images/singapore-vista-navbar.png"
              alt="Singapore Vista"
              className="w-[190px] md:w-[220px] h-auto object-contain"
            />
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">

            <Link
              to="/"
              className="text-gray-700 hover:text-green-700 transition font-medium"
            >
              Home
            </Link>

            <Link
              to="/explore"
              className="text-gray-700 hover:text-green-700 transition font-medium"
            >
              Explore
            </Link>

            <Link
              to="/tamil-heritage"
              className="text-gray-700 hover:text-green-700 transition font-medium"
            >
              Tamil Heritage
            </Link>

            <Link
              to="/festivals-food"
              className="text-gray-700 hover:text-green-700 transition font-medium"
            >
              Festivals & Food
            </Link>

            <Link
              to="/tamil-voices"
              className="text-gray-700 hover:text-green-700 transition font-medium"
            >
              Tamil Voices
            </Link>

            <Link
              to="/trip-planner"
              className="text-gray-700 hover:text-green-700 transition font-medium"
            >
              Trip Planner
            </Link>

            <Link
              to="/singapore-guide"
              className="text-gray-700 hover:text-green-700 transition font-medium"
            >
              Guide
            </Link>

            <Link
              to="/book-now"
              className="bg-green-700 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Book Now
            </Link>

          </div>


          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >

            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>

            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>

            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>

          </button>

        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition font-medium"
              >
                Home
              </Link>

              <Link
                to="/explore"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition font-medium"
              >
                Explore
              </Link>

              <Link
                to="/tamil-heritage"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition font-medium"
              >
                Tamil Heritage
              </Link>

              <Link
                to="/festivals-food"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition font-medium"
              >
                Festivals & Food
              </Link>

              <Link
                to="/tamil-voices"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition font-medium"
              >
                Tamil Voices
              </Link>

              <Link
                to="/trip-planner"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition font-medium"
              >
                Trip Planner
              </Link>

              <Link
                to="/singapore-guide"
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition font-medium"
              >
                Singapore Guide
              </Link>

              <Link
                to="/book-now"
                onClick={closeMenu}
                className="mt-2 text-center bg-green-700 text-white px-5 py-3 rounded-full font-semibold hover:bg-green-800 transition"
              >
                Book Now
              </Link>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;