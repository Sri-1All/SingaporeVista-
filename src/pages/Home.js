import { useEffect } from "react";
import data from "../data/record.json";

import PlaceCard from "../components/PlaceCard";
import FestivalCard from "../components/FestivalCard";
import FoodCard from "../components/FoodCard";
import TamilVoiceCard from "../components/TamilVoiceCard";
import PackageCard from "../components/PackageCard";
import Weather from "../components/Weather";
import { Link } from "react-router-dom";


function Home() {
   useEffect(() => {
    if (window.location.hash === "#Weather") {
      setTimeout(() => {
        const weatherSection = document.getElementById("Weather");

        if (weatherSection) {
          weatherSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
<section className="min-h-[650px] relative overflow-hidden">

  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/singapore-hero.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Hero Content */}
  <div className="relative max-w-7xl mx-auto px-6 min-h-[650px] flex items-center">

    <div className="max-w-3xl text-white">

      <p className="uppercase tracking-[4px] text-green-300 font-semibold mb-4">
        Welcome to Singapore Vista
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
        Discover Singapore
        <br />
        Beyond the Skyline
      </h1>

      <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 leading-8">
        Explore iconic places, hidden gems, Tamil heritage,
        unforgettable festivals, diverse food and stories
        that make Singapore unique.
      </p>

      <div className="flex flex-wrap gap-4">

        <Link
          to="/Explore"
          className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold transition inline-block"
        >
          Start Exploring
        </Link>

        <Link
          to="/trip-planner"
          className="border border-white text-white hover:bg-white hover:text-gray-900 px-7 py-3 rounded-full font-semibold transition"
        >
          Plan My Trip
        </Link>

      </div>

    </div>

  </div>

</section>


      {/* Introduction */}
      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-green-700 font-semibold uppercase tracking-widest mb-3">
            Your Singapore Story
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            More Than Just a Destination
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            Singapore is a city where modern architecture meets
            centuries of culture. From the energy of Little India
            to the skyline of Marina Bay, from traditional Tamil
            festivals to world-famous food, Singapore has many
            stories waiting to be discovered.
          </p>

        </div>

      </section>


      {/* Popular Places */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">

            <div>
              <p className="text-green-700 font-semibold uppercase tracking-widest mb-2">
                Explore
              </p>

              <h2 className="text-4xl font-bold text-gray-900">
                Popular Places
              </h2>

              <p className="text-gray-600 mt-3">
                Start your Singapore adventure with these unforgettable destinations.
              </p>
            </div>

            <Link
              to="/Explore"
              className="mt-5 md:mt-0 text-green-700 font-semibold"
            >
              View All →
            </Link>

          </div>


          {/* map() */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {data.places.slice(0, 6).map((place) => (
              <PlaceCard
                key={place.id}
                place={place}
              />
            ))}

          </div>

        </div>

      </section>

      {/* Festivals */}
<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="mb-10">

      <p className="text-green-700 font-semibold uppercase tracking-widest mb-2">
        Celebrate Singapore
      </p>

      <h2 className="text-4xl font-bold text-gray-900">
        Festivals & Traditions
      </h2>

      <p className="text-gray-600 mt-3">
        Experience the traditions and celebrations that bring Singapore's
        multicultural communities together.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {data.festivals.slice(0, 3).map((festival) => (
        <FestivalCard
          key={festival.id}
          festival={festival}
        />
      ))}

    </div>

  </div>

</section>

     {/* Food */}
<section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">

      <p className="text-green-700 font-semibold uppercase tracking-widest mb-2">
        Taste Singapore
      </p>

      <h2 className="text-4xl font-bold text-gray-900">
        A City of Flavours
      </h2>

      <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
        From hawker favourites to Tamil and South Indian classics,
        discover the flavours that make Singapore special.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {data.foods.slice(0, 6).map((food) => (
        <FoodCard
          key={food.id}
          food={food}
        />
      ))}

    </div>

  </div>

</section>


      {/* Tamil Heritage Highlight */}
      <section className="py-20 bg-green-900 text-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-green-300 uppercase tracking-widest font-semibold mb-3">
              Discover a Culture
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Tamil Heritage in Singapore
            </h2>

            <p className="text-green-100 leading-8 mb-8">
              Discover the history, traditions, temples, language,
              food and cultural contributions of the Tamil community
              in Singapore.
            </p>

            <Link
              to="/tamil-heritage"
              className="bg-white text-green-900 px-7 py-3 rounded-full font-semibold hover:bg-green-100 transition"
            >
              Discover Tamil Heritage 
            </Link>

          </div>

          <div className="h-80 rounded-3xl overflow-hidden">

            <img
              src="/images/tamil/little-india.jpg"
              alt="Little India Singapore"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* Tamil Voices */}
<section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">

      <div>

        <p className="text-green-700 font-semibold uppercase tracking-widest mb-2">
          People & Stories
        </p>

        <h2 className="text-4xl font-bold text-gray-900">
          Tamil Voices of Singapore
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl">
          Meet the people whose creativity, work and contributions
          continue to shape Singapore's Tamil community.
        </p>

      </div>

      <Link
        to="/tamil-voices"
        className="mt-5 md:mt-0 text-green-700 font-semibold"
      >
        Meet More Voices →
      </Link>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {data.tamilVoices.slice(0, 3).map((person) => (
        <TamilVoiceCard
          key={person.id}
          person={person}
        />
      ))}

    </div>

  </div>

</section>

{/* Travel Packages */}
<section className="py-20 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-12">

      <p className="text-green-700 font-semibold uppercase tracking-widest mb-2">
        Plan Your Journey
      </p>

      <h2 className="text-4xl font-bold text-gray-900">
        Singapore Travel Packages
      </h2>

      <p className="text-gray-600 mt-3">
        Choose an experience or create a trip that is uniquely yours.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {data.packages.map((packageItem) => (
        <PackageCard
          key={packageItem.id}
          packageItem={packageItem}
        />
      ))}

    </div>

  </div>

</section>

       
      {/* Weather */}


      <section
        id="Weather"
        className="bg-white"
      >

        <Weather />

      </section>

    </div>
  );
}

export default Home;