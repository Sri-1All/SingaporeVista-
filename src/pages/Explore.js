import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/record.json";
import PlaceCard from "../components/PlaceCard";

function Explore() {

  // --------------------------------------------------
  // Hero Carousel
  // --------------------------------------------------

  const heroImages = [
    "/images/places/chinatown.jpg",
    "/images/places/marina-bay-sands.jpg",
    "/images/places/Universal-Studios.jpg"
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((previousSlide) =>
        (previousSlide + 1) % heroImages.length
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);


  // --------------------------------------------------
  // Search & Category Filter
  // --------------------------------------------------

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Landmarks",
    "Nature",
    "Culture",
    "Adventure"
  ];


  // --------------------------------------------------
  // Filter Places from record.json
  // --------------------------------------------------

  const filteredPlaces = data.places.filter((place) => {

    const matchesCategory =
      selectedCategory === "All" ||
      place.category === selectedCategory;

    const matchesSearch =
      place.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;

  });


  return (

    <main>

      {/* ==================================================
          HERO CAROUSEL
      ================================================== */}

      <section className="relative h-[65vh] min-h-[500px] overflow-hidden">

        {/* Background Images */}

        {heroImages.map((image, index) => (

          <img
            key={image}
            src={image}
            alt={`Singapore view ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentSlide === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          />

        ))}


        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/50"></div>


        {/* Hero Content */}

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full text-white">

            <p className="text-green-400 uppercase tracking-[0.25em] font-semibold mb-4">
              Explore Singapore
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
              Find Your Singapore
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-8 max-w-2xl mt-6">
              From iconic landmarks and peaceful gardens to vibrant
              neighbourhoods and unforgettable adventures, discover
              the places that make Singapore unique.
            </p>

          </div>

        </div>


        {/* Carousel Indicators */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">

          {heroImages.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/50"
              }`}
            ></button>

          ))}

        </div>

      </section>


      {/* ==================================================
          INTRODUCTION
      ================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
            A City With Many Faces
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore Singapore In Your Own Way
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            Singapore brings together futuristic architecture,
            lush green spaces, historic neighbourhoods, diverse
            cultures and experiences for every kind of traveller.
            Explore the city at your own pace and discover a side
            of Singapore that goes beyond the usual tourist attractions.
          </p>

        </div>

      </section>


      {/* ==================================================
          SEARCH & FILTER
      ================================================== */}

     <section className="py-16 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading + Search */}

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

      {/* Heading */}

      <div>

        <p className="text-green-700 uppercase tracking-widest font-semibold mb-2">
          Discover
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Where will you go?
        </h2>

        <p className="text-gray-600 mt-3 max-w-xl">
          Explore Singapore by destination, culture, nature and adventure.
        </p>

      </div>


      {/* Search */}

      <div className="w-full md:w-[380px]">

        <div className="relative">

          <input
            type="text"
            placeholder="Search places..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
            className="w-full bg-white border border-gray-500 rounded-full px-6 py-4 pr-12 outline-none focus:ring-2 focus:ring-green-600 shadow-sm"
          />

          

        </div>

      </div>

    </div>


    {/* Category Buttons */}

    <div className="mt-10">

      <p className="text-sm font-semibold text-gray-500 mb-4">
        Explore by category
      </p>

      <div className="flex flex-wrap gap-3">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-medium transition ${
              selectedCategory === category
                ? "bg-green-700 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-200 hover:border-green-600 hover:text-green-700"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

    </div>

  </div>

</section>
      {/* ==================================================
          PLACES GRID
      ================================================== */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-end justify-between mb-10">

            <div>

              <p className="text-green-700 uppercase tracking-widest font-semibold mb-2">
                Places to Discover
              </p>

              <h2 className="text-4xl font-bold text-gray-900">
                {selectedCategory === "All"
                  ? "Explore Singapore"
                  : selectedCategory}
              </h2>

            </div>

            <p className="text-gray-500 hidden sm:block">
              {filteredPlaces.length} places
            </p>

          </div>


          {/* Places */}

          {filteredPlaces.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredPlaces.map((place) => (

                <PlaceCard
                  key={place.id}
                  place={place}
                />

              ))}

            </div>

          ) : (

            /* No Results */

            <div className="bg-white rounded-3xl py-20 text-center">

              <h3 className="text-2xl font-bold text-gray-900">
                We couldn't find that place
              </h3>

              <p className="text-gray-500 mt-3">
                Try searching for another destination or choose
                a different category.
              </p>

              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-6 bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition"
              >
                Clear Search
              </button>

            </div>

          )}

        </div>

      </section>


      {/* ==================================================
          EXPERIENCES
      ================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Choose Your Experience
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Singapore, your way
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              Whether you love history, nature, food or adventure,
              create a Singapore experience that matches your interests.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


            {/* Culture */}

            <div className="relative h-72 rounded-2xl overflow-hidden group">

              <img
                src="/images/experiences/culture.jpg"
                alt="Singapore culture"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-0 p-6 text-white">

                <p className="text-green-300 font-semibold text-sm">
                  EXPERIENCE
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  Culture & Heritage
                </h3>

                <p className="text-sm text-gray-200 mt-2">
                  Discover temples, neighbourhoods and stories
                  shaped by generations.
                </p>

              </div>

            </div>


            {/* Nature */}

            <div className="relative h-72 rounded-2xl overflow-hidden group">

              <img
                src="/images/experiences/nature.jpg"
                alt="Singapore nature"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-0 p-6 text-white">

                <p className="text-green-300 font-semibold text-sm">
                  EXPERIENCE
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  Nature & Greenery
                </h3>

                <p className="text-sm text-gray-200 mt-2">
                  Escape into gardens, parks and peaceful
                  natural spaces.
                </p>

              </div>

            </div>


            {/* Food */}

            <div className="relative h-72 rounded-2xl overflow-hidden group">

              <img
                src="/images/experiences/food.jpg"
                alt="Singapore food"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-0 p-6 text-white">

                <p className="text-green-300 font-semibold text-sm">
                  EXPERIENCE
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  Food & Flavours
                </h3>

                <p className="text-sm text-gray-200 mt-2">
                  Taste the multicultural flavours found across
                  Singapore.
                </p>

              </div>

            </div>


            {/* Adventure */}

            <div className="relative h-72 rounded-2xl overflow-hidden group">

              <img
                src="/images/experiences/adventure.jpg"
                alt="Singapore adventure"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-0 p-6 text-white">

                <p className="text-green-300 font-semibold text-sm">
                  EXPERIENCE
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  Adventure
                </h3>

                <p className="text-sm text-gray-200 mt-2">
                  Find exciting activities for an unforgettable
                  Singapore trip.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          QUIET SINGAPORE
      ================================================== */}

      <section className="py-20 bg-green-900 text-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-green-300 uppercase tracking-widest font-semibold mb-3">
              Take Your Time
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover the quieter side of Singapore
            </h2>

            <p className="text-green-100 leading-8 mt-6">
              Singapore is not only about skyscrapers and busy streets.
              Walk through heritage neighbourhoods, spend an afternoon
              in a garden, discover local food and experience the city
              beyond the usual itinerary.
            </p>

            <Link
              to="/trip-planner"
              className="inline-block mt-8 bg-white text-green-900 px-7 py-3 rounded-full font-semibold hover:bg-green-100 transition"
            >
              Build My Journey 
            </Link>

          </div>


          <div className="h-80 rounded-3xl overflow-hidden">

            <img
              src="/images/experiences/quiet-singapore.jpg"
              alt="Quiet Singapore neighbourhood"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>


      {/* ==================================================
          TRAVEL TIPS
      ================================================== */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-10">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-2">
              Before You Go
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              A few things to know
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


            {/* Weather */}

            <div className="bg-white rounded-2xl p-7 shadow-sm">

              <div className="text-3xl mb-4">
                🌦️
              </div>

              <h3 className="text-xl font-bold">
                Tropical Weather
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Singapore is warm and humid throughout the year.
                Keep an umbrella and comfortable clothing handy.
              </p>

            </div>


            {/* Transport */}

            <div className="bg-white rounded-2xl p-7 shadow-sm">

              <div className="text-3xl mb-4">
                🚇
              </div>

              <h3 className="text-xl font-bold">
                Easy to Get Around
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                The MRT and public transport network make it easy
                to move between neighbourhoods and attractions.
              </p>

            </div>


            {/* Food */}

            <div className="bg-white rounded-2xl p-7 shadow-sm">

              <div className="text-3xl mb-4">
                🥢
              </div>

              <h3 className="text-xl font-bold">
                Come Hungry
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                From hawker centres to fine dining, Singapore offers
                an incredible variety of food and flavours.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="py-24 bg-white text-center">

        <div className="max-w-3xl mx-auto px-6">

          <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
            Your Journey Starts Here
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to explore Singapore?
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            Choose your favourite places, discover new experiences
            and start building a Singapore journey you'll remember.
          </p>

          <Link
            to="/trip-planner"
            className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Plan Your Singapore Trip 
          </Link>

        </div>

      </section>

    </main>

  );
}

export default Explore;