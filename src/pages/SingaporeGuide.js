import React from "react";
import { Link } from "react-router-dom";


function SingaporeGuide() {

  return (

    <main>

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative min-h-[95vh] overflow-hidden">

        <img
          src="/images/guide/guide-hero.png"
          alt="Singapore city"
          className="absolute inset-0 w-full h-full object-cover"
        />

      </section>


      {/* ==================================================
          INTRO
      ================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
            Before You Travel
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            A little preparation goes a long way
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            Singapore is easy to explore, but knowing a few basics
            before you arrive can help you spend less time figuring
            things out and more time enjoying the city.
          </p>

        </div>

      </section>


      {/* ==================================================
          GETTING AROUND
      ================================================== */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Getting Around
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Moving around Singapore
            </h2>

            <p className="text-gray-600 text-lg mt-4 max-w-2xl">
              The city is compact and well connected, making it easy
              to move between neighbourhoods and attractions.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


            {/* MRT */}

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                🚇
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-6">
                MRT
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                A convenient way to travel between many parts of
                Singapore, especially when exploring the city.
              </p>

            </div>


            {/* Bus */}

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                🚌
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-6">
                Bus
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                Useful for reaching neighbourhoods and places that
                are not directly beside an MRT station.
              </p>

            </div>


            {/* Taxi */}

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
                🚕
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-6">
                Taxi & Ride-hailing
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                A comfortable option when you have luggage or are
                travelling between several places.
              </p>

            </div>


            {/* Walking */}

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition">

              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl">
                🚶
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-6">
                Walking
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                Some of the best experiences come from walking
                through Singapore's historic neighbourhoods.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          QUICK INFORMATION
      ================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}

            <div className="rounded-[2.5rem] overflow-hidden">

              <img
                src="/images/guide/singapore-street.jpg"
                alt="Singapore street"
                className="w-full h-[500px] object-cover"
              />

            </div>


            {/* Information */}

            <div>

              <p className="text-green-700 uppercase tracking-widest font-semibold mb-4">
                Good To Know
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                The basics at a glance
              </h2>


              <div className="grid sm:grid-cols-2 gap-5 mt-8">


                <div className="bg-green-50 rounded-2xl p-6">

                  <div className="text-2xl">
                    🌦️
                  </div>

                  <h3 className="font-bold text-gray-900 mt-4">
                    Weather
                  </h3>

                  <p className="text-gray-600 text-sm leading-6 mt-2">
                    Expect a warm, tropical climate and keep an
                    umbrella handy for sudden rain.
                  </p>

                </div>


                <div className="bg-orange-50 rounded-2xl p-6">

                  <div className="text-2xl">
                    💵
                  </div>

                  <h3 className="font-bold text-gray-900 mt-4">
                    Currency
                  </h3>

                  <p className="text-gray-600 text-sm leading-6 mt-2">
                    Singapore uses the Singapore dollar (SGD).
                  </p>

                </div>


                <div className="bg-blue-50 rounded-2xl p-6">

                  <div className="text-2xl">
                    🗣️
                  </div>

                  <h3 className="font-bold text-gray-900 mt-4">
                    Language
                  </h3>

                  <p className="text-gray-600 text-sm leading-6 mt-2">
                    English is widely used, alongside Malay,
                    Mandarin and Tamil.
                  </p>

                </div>


                <div className="bg-purple-50 rounded-2xl p-6">

                  <div className="text-2xl">
                    📱
                  </div>

                  <h3 className="font-bold text-gray-900 mt-4">
                    Connectivity
                  </h3>

                  <p className="text-gray-600 text-sm leading-6 mt-2">
                    Staying connected is easy with mobile data
                    and Wi-Fi options.
                  </p>

                </div>


              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          TAMIL TRAVELLER
      ================================================== */}

      <section className="py-24 bg-green-900 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


            {/* Content */}

            <div>

              <p className="text-green-300 uppercase tracking-widest font-semibold mb-4">
                Tamil Traveller
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Discover the Tamil side of Singapore
              </h2>

              <p className="text-green-100 text-lg leading-8 mt-6">
                If you want to explore Singapore's Tamil heritage,
                Little India is a natural place to begin. From
                temples and historic streets to food and festivals,
                the neighbourhood offers plenty to discover.
              </p>


              <div className="space-y-5 mt-8">


                <div className="flex gap-4">

                  <div className="text-2xl">
                    🛕
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Visit the temples
                    </h3>

                    <p className="text-green-100 mt-1">
                      Take time to experience the architecture,
                      traditions and atmosphere.
                    </p>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="text-2xl">
                    🍛
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Explore Tamil food
                    </h3>

                    <p className="text-green-100 mt-1">
                      Discover traditional dishes and everyday
                      favourites around Little India.
                    </p>

                  </div>

                </div>


                <div className="flex gap-4">

                  <div className="text-2xl">
                    🎉
                  </div>

                  <div>

                    <h3 className="font-bold">
                      Experience the festivals
                    </h3>

                    <p className="text-green-100 mt-1">
                      Time your visit around cultural celebrations
                      for a different experience of the city.
                    </p>

                  </div>

                </div>

              </div>


              <Link
                to="/tamil-heritage"
                className="inline-block mt-9 bg-white text-green-900 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition"
              >
                Explore Tamil Heritage
              </Link>

            </div>


            {/* Image */}

            <div className="rounded-[2.5rem] overflow-hidden">

              <img
                src="/images/tamil/little-india.jpg"
                alt="Little India Singapore"
                className="w-full h-[520px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHAT TO PACK
      ================================================== */}

      {/* ==================================================
    PACK SMART
================================================== */}

<section className="py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-[0.9fr_1.5fr] gap-14 items-center">


      {/* LEFT CONTENT */}

      <div>

        <p className="text-green-700 uppercase tracking-[0.2em] font-semibold mb-4">
          Before You Leave
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Pack smart,
          <br />
          <span className="text-green-700">
            travel light.
          </span>
        </h2>

        <p className="text-gray-600 text-lg leading-8 mt-6 max-w-md">
          A few simple things can make your days around Singapore
          much more comfortable. Keep these essentials close
          and you're ready to explore.
        </p>


        {/* Small decorative line */}

        <div className="flex items-center gap-3 mt-8">

          <div className="w-12 h-1 bg-green-700 rounded-full"></div>

          <div className="w-2 h-2 bg-green-700 rounded-full"></div>

          <div className="w-20 h-1 bg-green-200 rounded-full"></div>

        </div>

      </div>



      {/* RIGHT CARDS */}

      <div className="grid sm:grid-cols-2 gap-5">


        {/* Umbrella */}

        <div className="group relative overflow-hidden rounded-[2rem] bg-green-700 p-7 text-white min-h-[210px] hover:-translate-y-2 transition duration-300">

          <span className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10"></span>

          <span className="absolute right-6 top-5 text-green-200 text-sm font-bold">
            01
          </span>


          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-4xl">
              ☂️
            </div>

            <h3 className="text-2xl font-bold mt-7">
              Umbrella
            </h3>

            <p className="text-green-100 mt-2 leading-6">
              Be ready for sudden tropical showers.
            </p>

          </div>

        </div>



        {/* Comfortable Shoes */}

        <div className="group relative overflow-hidden rounded-[2rem] bg-orange-100 p-7 min-h-[210px] hover:-translate-y-2 transition duration-300">

          <span className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-orange-200/60"></span>

          <span className="absolute right-6 top-5 text-orange-400 text-sm font-bold">
            02
          </span>


          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-4xl shadow-sm">
              👟
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-7">
              Comfortable Shoes
            </h3>

            <p className="text-gray-600 mt-2 leading-6">
              You'll want them for exploring the city on foot.
            </p>

          </div>

        </div>



        {/* Sunscreen */}

        <div className="group relative overflow-hidden rounded-[2rem] bg-sky-100 p-7 min-h-[210px] hover:-translate-y-2 transition duration-300">

          <span className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-sky-200/70"></span>

          <span className="absolute right-6 top-5 text-sky-500 text-sm font-bold">
            03
          </span>


          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-4xl shadow-sm">
              🧴
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-7">
              Sunscreen
            </h3>

            <p className="text-gray-600 mt-2 leading-6">
              Stay comfortable while enjoying the outdoors.
            </p>

          </div>

        </div>



        {/* Day Bag */}

        <div className="group relative overflow-hidden rounded-[2rem] bg-purple-100 p-7 min-h-[210px] hover:-translate-y-2 transition duration-300">

          <span className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-purple-200/70"></span>

          <span className="absolute right-6 top-5 text-purple-500 text-sm font-bold">
            04
          </span>


          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-4xl shadow-sm">
              🎒
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-7">
              Day Bag
            </h3>

            <p className="text-gray-600 mt-2 leading-6">
              Keep your everyday essentials together while exploring.
            </p>

          </div>

        </div>


      </div>

    </div>

  </div>

</section>

      {/* ==================================================
          QUICK TIPS
      ================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Travel Better
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Small tips, better experiences
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-7">


            <div className="bg-amber-50 border border-amber-100 rounded-[2rem] p-8">

              <span className="text-3xl">
                🕐
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Start early
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                Early mornings can be a great time to explore
                popular places at a more relaxed pace.
              </p>

            </div>


            <div className="bg-blue-50 border border-blue-100 rounded-[2rem] p-8">

              <span className="text-3xl">
                💧
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Stay hydrated
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                Singapore's tropical weather means keeping
                water with you is always a good idea.
              </p>

            </div>


            <div className="bg-purple-50 border border-purple-100 rounded-[2rem] p-8">

              <span className="text-3xl">
                📸
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-6">
                Leave room for discovery
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                Don't plan every minute. Give yourself time to
                discover places you didn't expect.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

     <section className="py-14 md:py-16 bg-green-900 text-white">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <p className="text-green-300 uppercase tracking-widest font-semibold text-sm mb-3">
      Ready To Explore?
    </p>

    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
      Now you know. It's time to experience Singapore.
    </h2>

    <p className="text-green-100 text-base md:text-lg leading-7 mt-5 max-w-2xl mx-auto">
      Explore the city, discover its heritage and build
      a journey that feels like your own.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">

      <Link
        to="/explore"
        className="bg-white text-green-900 hover:bg-green-50 px-7 py-3 rounded-full font-semibold transition"
      >
        Explore Singapore
      </Link>

      <Link
        to="/trip-planner"
        className="border border-green-300 text-white hover:bg-green-800 px-7 py-3 rounded-full font-semibold transition"
      >
        Plan Your Trip
      </Link>

    </div>

  </div>

</section>
    </main>

  );
}


export default SingaporeGuide;