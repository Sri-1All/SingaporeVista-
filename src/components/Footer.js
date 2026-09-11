import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative">

      {/* Top Decorative Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:pr-8">

            <Link
              to="/"
              className="inline-block text-2xl font-bold hover:text-green-400 transition"
            >
              Singapore Vista
            </Link>

            {/* Small decorative line */}
            <div className="w-12 h-1 bg-green-600 rounded-full mt-3 mb-5"></div>

            <p className="text-gray-400 leading-7">
              Discover Singapore beyond the postcard.
              Explore its places, people, heritage,
              festivals, food and stories.
            </p>

          </div>


          {/* Explore */}
          <div>

            <h3 className="font-semibold text-lg mb-5 flex items-center gap-3">
              <span className="w-1 h-5 bg-green-600 rounded-full"></span>
              Explore
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/explore"
                className="text-gray-400 hover:text-green-400 hover:translate-x-1 transition-all duration-200"
              >
                Places & Attractions
              </Link>

              <Link
                to="/tamil-heritage"
                className="text-gray-400 hover:text-green-400 hover:translate-x-1 transition-all duration-200"
              >
                Tamil Heritage
              </Link>

              <Link
                to="/festivals-food"
                className="text-gray-400 hover:text-green-400 hover:translate-x-1 transition-all duration-200"
              >
                Festivals & Food
              </Link>

              <Link
                to="/tamil-voices"
                className="text-gray-400 hover:text-green-400 hover:translate-x-1 transition-all duration-200"
              >
                Tamil Voices
              </Link>

            </div>

          </div>


          {/* Plan */}
          <div>

            <h3 className="font-semibold text-lg mb-5 flex items-center gap-3">
              <span className="w-1 h-5 bg-green-600 rounded-full"></span>
              Plan Your Trip
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/trip-planner"
                className="text-gray-400 hover:text-green-400 hover:translate-x-1 transition-all duration-200"
              >
                Travel Packages
              </Link>

              <Link
                to="/singapore-guide"
                className="text-gray-400 hover:text-green-400 hover:translate-x-1 transition-all duration-200"
              >
                Singapore Guide
              </Link>

              <Link
                to="/trip-planner"
                className="text-gray-400 hover:text-green-400 hover:translate-x-1 transition-all duration-200"
              >
                Book a Trip
              </Link>

            </div>

          </div>


          {/* Contact */}
          <div>

            <h3 className="font-semibold text-lg">
              Connect With Us
            </h3>

             <div className="w-12 h-1 bg-green-600 rounded-full mt-3 mb-5"></div>
            

            <p className="text-gray-400 leading-7">
              Follow Singapore Vista for more
              stories, places and experiences
              from Singapore.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg border border-gray-800 bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:border-green-600 hover:bg-green-700 transition-all duration-300"
  >
    f
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg border border-gray-800 bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:border-green-600 hover:bg-green-700 transition-all duration-300"
  >
    ◎
  </a>

  <a
    href="https://x.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg border border-gray-800 bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:border-green-600 hover:bg-green-700 transition-all duration-300"
  >
    X
  </a>

</div>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-gray-500 text-sm">
            © 2026 Singapore Vista. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            <span className="hover:text-green-400 transition">
              Discover
            </span>
            <span className="text-green-600 mx-2">•</span>
            <span className="hover:text-green-400 transition">
              Experience
            </span>
            <span className="text-green-600 mx-2">•</span>
            <span className="hover:text-green-400 transition">
              Remember
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;