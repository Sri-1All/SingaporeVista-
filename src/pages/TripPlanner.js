import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/record.json";
import Currency from "../components/Currency";
import SingaporeMap from "../components/Map";

function TripPlanner() {

  const [days] = useState(3);

  const [interests] = useState([
    "Heritage",
    "Food"
  ]);


  /* --------------------------------------------------
     Get places from record.json
  -------------------------------------------------- */

  const places = data.places || [];


  /* --------------------------------------------------
     Create itinerary based on selected days
  -------------------------------------------------- */

  const itineraryPlaces = places.slice(0, days * 2);


  const getDayPlaces = (day) => {

    const start = (day - 1) * 2;

    return itineraryPlaces.slice(start, start + 2);

  };


  return (

    <main>


      {/* ==================================================
          HERO VIDEO
      ================================================== */}

      <section className="relative min-h-[70vh] overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/trip/trip-hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >

          <source
            src="/videos/singapore-trip.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.

        </video>


        {/* Overlay */}

        <div className="absolute inset-0 bg-black/50"></div>


        {/* Hero Content */}

        <div className="relative z-10 min-h-[70vh] flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-3xl text-white">

              <p className="text-green-300 uppercase tracking-[0.25em] font-semibold mb-4">
                Trip Planner
              </p>


              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Plan Your Singapore Journey
              </h1>


              <p className="text-lg md:text-xl text-gray-200 leading-8 mt-6 max-w-2xl">
                Build a journey around the places you want to see,
                the food you want to taste and the experiences you
                want to remember.
              </p>


              <button
                onClick={() =>
                  document
                    .getElementById("travel-tools")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    })
                }
                className="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Start Planning
              </button>

            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          INTRO
      ================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
            Your Journey, Your Way
          </p>


          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Build a trip that feels like yours
          </h2>


          <p className="text-gray-600 text-lg leading-8 mt-6">
            Singapore has something for every kind of traveller.
            Explore attractions, plan your budget, check the weather
            and discover the city at your own pace.
          </p>

        </div>

      </section>



      {/* ==================================================
          TRAVEL TOOLS
      ================================================== */}

      <section
        id="travel-tools"
        className="py-24 bg-gray-50"
      >

        <div className="max-w-7xl mx-auto px-6">


          {/* Heading */}

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Travel Tools
            </p>


            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Plan your Singapore adventure
            </h2>


            <p className="text-gray-600 text-lg leading-8 mt-5">
              Use our travel tools to prepare for your journey,
              explore Singapore and make your trip easier.
            </p>

          </div>



          {/* Travel Tool Cards */}

          <div className="grid md:grid-cols-3 gap-7">


            {/* ==================================================
                MAP
            ================================================== */}

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition">

              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl mb-6">
                🗺️
              </div>


              <h3 className="text-2xl font-bold text-gray-900">
                Explore Singapore
              </h3>


              <p className="text-gray-600 leading-7 mt-4">
                Discover attractions, historical places, food spots
                and other interesting locations across Singapore.
              </p>

            <button
  onClick={() =>
    document.getElementById("singapore-map")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  className="inline-block mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition"
>
  Explore Map
</button>

            </div>



            {/* ==================================================
                CURRENCY
            ================================================== */}

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition">

              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl mb-6">
                💱
              </div>


              <h3 className="text-2xl font-bold text-gray-900">
                Currency Converter
              </h3>


              <p className="text-gray-600 leading-7 mt-4">
                Convert your currency to Singapore dollars and
                estimate your travel expenses before your trip.
              </p>


              <button
                onClick={() =>
                  document
                    .getElementById("currency-converter")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    })
                }
                className="mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Convert Currency
              </button>

            </div>



            {/* ==================================================
                WEATHER
            ================================================== */}

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-md transition">

              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl mb-6">
                🌤️
              </div>


              <h3 className="text-2xl font-bold text-gray-900">
                Singapore Weather
              </h3>


              <p className="text-gray-600 leading-7 mt-4">
                Check Singapore's current weather before planning
                your sightseeing and outdoor activities.
              </p>


              <Link
                to="/#Weather"
                className="inline-block mt-6 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Check Weather
              </Link>

            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          CURRENCY CONVERTER
      ================================================== */}

      <section
        id="currency-converter"
        className="bg-white"
      >

        <Currency />

      </section>

      <section>
       <SingaporeMap />
      </section>



     {/* ==================================================
    YOUR SINGAPORE PLAN
================================================== */}

<section className="py-20 bg-green-800 text-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto mb-12">

      <p className="text-green-300 uppercase tracking-widest font-semibold mb-3">
        Your Singapore Plan
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Make every part of your journey count
      </h2>

      <p className="text-gray-400 text-lg leading-8 mt-5">
        From iconic attractions to local flavours, discover
        different sides of Singapore and create memories your way.
      </p>

    </div>


    <div className="grid md:grid-cols-3 gap-7">

      {/* Discover */}

      <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">

        <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl mb-6">
          📍
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Discover
        </h3>

        <p className="text-gray-600 leading-7 mt-4">
          Visit iconic landmarks, hidden gems and historic
          neighbourhoods across Singapore.
        </p>

      </div>


      {/* Experience */}

      <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">

        <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl mb-6">
          🍜
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Experience
        </h3>

        <p className="text-gray-600 leading-7 mt-4">
          Taste local food, experience Singapore's cultures
          and explore the traditions that make the city unique.
        </p>

      </div>


      {/* Explore */}

      <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">

        <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl mb-6">
          🧭
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          Explore Freely
        </h3>

        <p className="text-gray-600 leading-7 mt-4">
          Use our travel tools to check locations, weather and
          currency while planning your Singapore adventure.
        </p>

      </div>

    </div>

  </div>

</section>



      {/* ==================================================
          SUGGESTED ITINERARY
      ================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">


          <div className="max-w-3xl mb-14">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Your Suggested Journey
            </p>


            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              A little bit of Singapore, each day
            </h2>


            <p className="text-gray-600 text-lg leading-8 mt-5">
              Here's a starting point for your trip. You can use
              it as inspiration and adjust your plans along the way.
            </p>

          </div>



          {/* Days */}

          <div className="space-y-8">

            {Array.from({ length: days }, (_, index) => {

              const day = index + 1;

              const dayPlaces = getDayPlaces(day);


              return (

                <div
                  key={day}
                  className="grid lg:grid-cols-[180px_1fr] gap-8"
                >


                  {/* Day */}

                  <div>

                    <p className="text-green-700 uppercase tracking-widest text-sm font-bold">
                      Day
                    </p>


                    <h3 className="text-5xl font-bold text-gray-900 mt-1">
                      {String(day).padStart(2, "0")}
                    </h3>

                  </div>



                  {/* Places */}

                  <div className="grid md:grid-cols-2 gap-6">

                    {dayPlaces.length > 0 ? (

                      dayPlaces.map((place) => (

                        <div
                          key={place.id}
                          className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100 hover:shadow-md transition"
                        >

                          {place.image && (

                            <img
                              src={place.image}
                              alt={place.name}
                              className="w-full h-48 object-cover rounded-2xl"
                            />

                          )}


                          <p className="text-green-700 text-sm font-semibold mt-5">
                            Must Explore
                          </p>


                          <h4 className="text-xl font-bold text-gray-900 mt-1">
                            {place.name}
                          </h4>


                          {place.description && (

                            <p className="text-gray-600 leading-6 mt-3">
                              {place.description}
                            </p>

                          )}

                        </div>

                      ))

                    ) : (

                      <div className="bg-gray-50 rounded-2xl p-7 text-gray-500">
                        Add more places to your Singapore journey.
                      </div>

                    )}

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      {/* ==================================================
          TRAVEL STYLE
      ================================================== */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">


          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Travel Your Way
            </p>


            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Leave room for unexpected moments
            </h2>


            <p className="text-gray-600 text-lg leading-8 mt-5">
              A good itinerary gives you direction without making
              every minute feel planned.
            </p>

          </div>



          <div className="grid md:grid-cols-3 gap-7">


            {/* Heritage */}

            <div className="bg-green-50 rounded-[2rem] p-8 border border-green-100">

              <div className="text-4xl mb-6">
                🏛️
              </div>


              <h3 className="text-2xl font-bold text-gray-900">
                Follow the Heritage
              </h3>


              <p className="text-gray-600 leading-7 mt-4">
                Explore historic places, temples, neighbourhoods
                and stories that shaped Singapore.
              </p>

            </div>



            {/* Food */}

            <div className="bg-orange-50 rounded-[2rem] p-8 border border-orange-100">

              <div className="text-4xl mb-6">
                🍛
              </div>


              <h3 className="text-2xl font-bold text-gray-900">
                Eat Your Way Around
              </h3>


              <p className="text-gray-600 leading-7 mt-4">
                Leave time for hawker centres, Little India and
                local dishes you may not have planned to try.
              </p>

            </div>



            {/* Nature */}

            <div className="bg-emerald-50 rounded-[2rem] p-8 border border-emerald-100">

              <div className="text-4xl mb-6">
                🌿
              </div>


              <h3 className="text-2xl font-bold text-gray-900">
                Slow Down & Explore
              </h3>


              <p className="text-gray-600 leading-7 mt-4">
                Balance the city with gardens, waterfront walks
                and Singapore's green spaces.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          TRAVEL TIPS
      ================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


            {/* Video */}

            <div className="rounded-[2.5rem] overflow-hidden">

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[500px] object-cover"
              >

                <source
                  src="/videos/singapore-travel.mp4"
                  type="video/mp4"
                />

                Your browser does not support the video tag.

              </video>

            </div>



            {/* Tips */}

            <div>

              <p className="text-green-700 uppercase tracking-widest font-semibold mb-4">
                Before You Go
              </p>


              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                A few things worth knowing
              </h2>


              <div className="space-y-6 mt-8">


                {/* Tip 01 */}

                <div className="flex gap-4">

                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold shrink-0">
                    01
                  </div>


                  <div>

                    <h3 className="font-bold text-gray-900 text-lg">
                      Plan around the weather
                    </h3>


                    <p className="text-gray-600 leading-6 mt-1">
                      Singapore can be warm and rainy, so keeping
                      some flexibility in your schedule helps.
                    </p>

                  </div>

                </div>



                {/* Tip 02 */}

                <div className="flex gap-4">

                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold shrink-0">
                    02
                  </div>


                  <div>

                    <h3 className="font-bold text-gray-900 text-lg">
                      Give yourself travel time
                    </h3>


                    <p className="text-gray-600 leading-6 mt-1">
                      Singapore's public transport makes getting
                      around the city convenient.
                    </p>

                  </div>

                </div>



                {/* Tip 03 */}

                <div className="flex gap-4">

                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold shrink-0">
                    03
                  </div>


                  <div>

                    <h3 className="font-bold text-gray-900 text-lg">
                      Leave some room to wander
                    </h3>


                    <p className="text-gray-600 leading-6 mt-1">
                      Some of the best experiences can come from
                      simply exploring a neighbourhood at your own pace.
                    </p>

                  </div>

                </div>


              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          BEFORE YOU TRAVEL
      ================================================== */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">


          {/* Heading */}

          <div className="max-w-3xl mb-12">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Before You Travel
            </p>


            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              A few essentials for your Singapore journey
            </h2>


            <p className="text-gray-600 text-lg leading-8 mt-5">
              A little preparation can make your Singapore experience
              smoother, easier and more enjoyable.
            </p>

          </div>



          {/* Essential Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


            {/* Travel Documents */}

            <div className="bg-white rounded-[2rem] p-7 border border-gray-100 shadow-sm hover:shadow-md transition">

              <div className="text-4xl mb-5">
                🛂
              </div>


              <h3 className="text-xl font-bold text-gray-900">
                Travel Documents
              </h3>


              <p className="text-gray-600 leading-6 mt-3">
                Keep your passport, booking details and required
                travel documents ready before your journey.
              </p>

            </div>



            {/* Money */}

            <div className="bg-white rounded-[2rem] p-7 border border-gray-100 shadow-sm hover:shadow-md transition">

              <div className="text-4xl mb-5">
                💳
              </div>


              <h3 className="text-xl font-bold text-gray-900">
                Money & Payments
              </h3>


              <p className="text-gray-600 leading-6 mt-3">
                Check the currency exchange rate and plan your
                travel budget before exploring Singapore.
              </p>

            </div>



            {/* Transport */}

            <div className="bg-white rounded-[2rem] p-7 border border-gray-100 shadow-sm hover:shadow-md transition">

              <div className="text-4xl mb-5">
                🚇
              </div>


              <h3 className="text-xl font-bold text-gray-900">
                Getting Around
              </h3>


              <p className="text-gray-600 leading-6 mt-3">
                Singapore's MRT and public transport make it easy
                to travel between popular attractions.
              </p>

            </div>



            {/* Weather */}

            <div className="bg-white rounded-[2rem] p-7 border border-gray-100 shadow-sm hover:shadow-md transition">

              <div className="text-4xl mb-5">
                🌦️
              </div>


              <h3 className="text-xl font-bold text-gray-900">
                Check the Weather
              </h3>


              <p className="text-gray-600 leading-6 mt-3">
                Check the weather before heading out and keep your
                plans flexible for outdoor activities.
              </p>

            </div>

          </div>

        </div>

      </section>


    </main>

  );
}

export default TripPlanner;