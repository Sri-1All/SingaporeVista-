import { useState } from "react";

function PlaceCard({ place }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* PLACE CARD */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">

        <div className="h-64 overflow-hidden">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-5">

          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-green-700 font-medium">
              {place.category}
            </span>

            <span className="text-sm">
              ⭐ {place.rating}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {place.name}
          </h3>

          <p className="text-sm text-gray-500 mb-3">
            📍 {place.location}
          </p>

          <p className="text-gray-600 text-sm leading-6 mb-5">
            {place.description}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="text-green-700 font-semibold hover:text-green-900 transition"
          >
            View Details ↗
          </button>

        </div>
      </div>


      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-5"
          onClick={() => setShowModal(false)}
        >

          {/* MODAL CONTENT */}
          <div
            className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src={place.image}
                alt={place.name}
                className="w-full h-72 object-cover"
              />

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-700 text-xl shadow-md transition"
              >
                ✕
              </button>

            </div>


            {/* CONTENT */}
            <div className="p-7">

              {/* CATEGORY */}
              <span className="text-green-600 font-semibold text-sm">
                {place.category}
              </span>

              {/* TITLE */}
              <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-3">
                {place.name}
              </h2>


              {/* LOCATION + RATING */}
              <div className="flex flex-wrap gap-5 text-sm text-gray-600 mb-5">

                <span>
                  📍 {place.location}
                </span>

                <span>
                  ⭐ {place.rating}
                </span>

              </div>


              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-7">
                {place.description}
              </p>


              {/* EXTRA INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-xs text-gray-600 mb-1">
                    Best Time to Visit
                  </p>

                  <p className="font-semibold text-gray-900">
                     🕐 {place.bestTime}
                  </p>
                </div>


                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-xs text-gray-600 mb-1">
                    Experience
                  </p>

                  <p className="font-semibold text-gray-900">
                    ✨ {place.experience}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default PlaceCard;