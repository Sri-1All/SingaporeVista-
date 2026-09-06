import { Link } from "react-router-dom";
import data from "../data/record.json";

function TamilHeritage() {

  return (

    <main>

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative h-[65vh] min-h-[500px] overflow-hidden">

        <img
          src="/images/tamil/history.jpg"
          alt="Tamil heritage in Singapore"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full text-white">

            <p className="text-green-300 uppercase tracking-[0.25em] font-semibold mb-4">
              Tamil Heritage of Singapore
            </p>

            <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
              A Story That Crossed the Seas
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mt-6 leading-8">
              Discover the history, places, language, traditions and
              community that have helped shape Singapore's Tamil heritage.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          INTRODUCTION
      ================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
            More Than A Community
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The Tamil story in Singapore
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            Tamil connections with Singapore and Southeast Asia reach back
            centuries. Over time, Tamil-speaking communities became part of
            Singapore's social, cultural, religious and economic landscape.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            Today, that heritage can be experienced through historic
            neighbourhoods, temples, language, literature, food, festivals
            and community life.
          </p>

        </div>

      </section>


      
      {/* ==================================================
    STORY TIMELINE
================================================== */}

<section className="py-24 bg-gray-50 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}

    <div className="max-w-3xl mx-auto text-center mb-20">

      <p className="text-green-700 uppercase tracking-[0.2em] font-semibold mb-3">
        A Journey Through Time
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        A story that grew with Singapore
      </h2>

      <p className="text-gray-600 text-lg leading-8 mt-5">
        From the first recorded arrivals to a thriving community,
        the Tamil story in Singapore has been shaped by people,
        places, traditions and generations.
      </p>

    </div>


    {/* Timeline */}

    <div className="relative max-w-6xl mx-auto">


      {/* WAVE LINE */}

      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">

        <svg
          width="180"
          height="100%"
          viewBox="0 0 180 1000"
          preserveAspectRatio="none"
          className="h-full"
        >

          <path
            d="M90 0
               C20 100, 20 180, 90 250
               C160 320, 160 400, 90 500
               C20 600, 20 680, 90 750
               C160 820, 160 900, 90 1000"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-green-400"
          />

        </svg>

      </div>


      {/* ==================================================
          STORY 1
      ================================================== */}

      <div className="relative grid md:grid-cols-2 gap-10 md:gap-24 items-center mb-24">

        {/* Left */}

        <div className="md:text-right">

          <span className="text-5xl md:text-6xl font-bold text-green-700">
            1819
          </span>

          <p className="text-sm uppercase tracking-widest text-gray-400 mt-2">
            The Beginning of a Recorded Story
          </p>

        </div>


        {/* Right Card */}

        <div className="relative">

          <div className="bg-green-600 rounded-3xl p-8 shadow-sm border border-green-600">

            <span className="text-black text-2xl">
              #!
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mt-3">
              Naraina Pillai arrives in Singapore
            </h3>

            <p className="text-white leading-8 mt-4">
              Naraina Pillai, a native of the Coromandel Coast,
              arrived in Singapore in 1819. His journey became
              an important part of the early recorded history
              of Singapore's Tamil community.
            </p>

          </div>

        </div>

      </div>


      {/* ==================================================
          STORY 2
      ================================================== */}

      <div className="relative grid md:grid-cols-2 gap-10 md:gap-24 items-center mb-24">

        {/* Left Card */}

        <div className="md:order-1">

          <div className="bg-green-600 rounded-3xl p-8 shadow-sm border border-green-600">

            <span className="text-black text-2xl">
              #!
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mt-3">
              A community begins to take root
            </h3>

            <p className="text-white leading-8 mt-4">
              As Singapore developed as a trading port, Tamil-speaking
              communities grew around work, places of worship,
              neighbourhoods and social networks.
            </p>

            <p className="text-yellow-300 leading-7 mt-3">
              These early communities helped create the foundations
              for Tamil cultural life in Singapore.
            </p>

          </div>

        </div>


        {/* Right */}

        <div className="md:order-2">

          <span className="text-5xl md:text-6xl font-bold text-green-700">
            1800s
          </span>

          <p className="text-sm uppercase tracking-widest text-gray-400 mt-2">
            A Community Takes Root
          </p>

        </div>

      </div>


      {/* ==================================================
          STORY 3
      ================================================== */}

      <div className="relative grid md:grid-cols-2 gap-10 md:gap-24 items-center mb-24">

        {/* Left */}

        <div className="md:text-right">

          <span className="text-5xl md:text-6xl font-bold text-green-700">
            Heritage
          </span>

          <p className="text-sm uppercase tracking-widest text-gray-400 mt-2">
            Temples & Traditions
          </p>

        </div>


        {/* Right Card */}

        <div>

          <div className="bg-green-600 rounded-3xl overflow-hidden shadow-sm border border-green-600">

            <div className="h-56">

              <img
                src="/images/tamil/temple.jpg"
                alt="Sri Mariamman Temple"
                className="w-full h-full object-cover"
              />

            </div>

            <div className="p-8">

              <h3 className="text-2xl font-bold text-gray-900">
                Places became part of the story
              </h3>

              <p className="text-white leading-8 mt-4">
                Temples and community spaces became important places
                for worship, festivals, gathering and cultural
                continuity. Sri Mariamman Temple remains one of
                the most significant landmarks in this story.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ==================================================
          STORY 4
      ================================================== */}

      <div className="relative grid md:grid-cols-2 gap-10 md:gap-24 items-center mb-24">

        {/* Left Card */}

        <div>

          <div className="bg-green-600 rounded-3xl p-8 shadow-sm border border-green-600">

            <span className="text-black text-2xl">
              #!
            </span>

            <h3 className="text-2xl font-bold text-black mt-3">
              Language carried the culture forward
            </h3>

            <p className="text-green-100 leading-8 mt-4">
              Tamil language, education and literature became
              important ways of preserving identity and connecting
              younger generations with their heritage.
            </p>

          </div>

        </div>


        {/* Right */}

        <div>

          <span className="text-5xl md:text-6xl font-bold text-green-700">
            Today
          </span>

          <p className="text-sm uppercase tracking-widest text-gray-400 mt-2">
            A Living Language
          </p>

        </div>

      </div>


      {/* ==================================================
          STORY 5
      ================================================== */}

      <div className="relative grid md:grid-cols-2 gap-10 md:gap-24 items-center">

        {/* Left */}

        <div className="md:text-right">

          <span className="text-5xl md:text-6xl font-bold text-green-700">
            Now
          </span>

          <p className="text-sm uppercase tracking-widest text-gray-400 mt-2">
            A Living Heritage
          </p>

        </div>


        {/* Right Card */}

        <div>

          <div className="bg-green-900 text-white rounded-3xl p-8 shadow-lg">

            <span className="text-green-300 text-2xl">
              ^_^
            </span>

            <h3 className="text-2xl font-bold mt-3">
              Carrying the Legacy Forward
            </h3>

            <p className="text-green-100 leading-8 mt-4">
              Today, Tamil heritage can be experienced through
              festivals, temples, food, arts, literature, education
              and the people who continue to shape Singapore's
              multicultural identity.
            </p>

            <p className="text-green-200 leading-7 mt-4">
              The story isn't only about where the community came from.
              It's also about where it is going.
            </p>

          </div>

        </div>

      </div>


    </div>

  </div>

</section>

      {/* ==================================================
          HERITAGE CARDS FROM record.json
      ================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Explore The Heritage
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Stories, places and traditions
            </h2>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {data.tamilHeritage.map((heritage) => (

              <div
                key={heritage.id}
                className="bg-gray-50 rounded-3xl overflow-hidden group"
              >

                <div className="h-72 overflow-hidden">

                  <img
                    src={heritage.image}
                    alt={heritage.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>


                <div className="p-7">

                  <p className="text-green-700 uppercase tracking-widest text-sm font-semibold">
                    {heritage.category}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-2">
                    {heritage.title}
                  </h3>

                  <p className="text-gray-600 leading-7 mt-4">
                    {heritage.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          LITTLE INDIA
      ================================================== */}

      <section className="py-20 bg-green-900 text-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="h-[420px] rounded-3xl overflow-hidden">

            <img
              src="/images/tamil/little-india.jpg"
              alt="Little India Singapore"
              className="w-full h-full object-cover"
            />

          </div>


          <div>

            <p className="text-green-300 uppercase tracking-widest font-semibold mb-3">
              A Living Heritage District
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Little India
            </h2>

            <p className="text-green-100 leading-8 mt-6">
              Walk through colourful streets filled with temples,
              traditional shops, restaurants, markets and architecture.
              Little India offers visitors a way to experience the
              continuing cultural life of Singapore's Indian community.
            </p>

            <Link
              to="/explore"
              className="inline-block mt-8 bg-white text-green-900 px-7 py-3 rounded-full font-semibold hover:bg-green-100 transition"
            >
              Explore Little India 
            </Link>

          </div>

        </div>

      </section>


      {/* ==================================================
          TEMPLES & SPIRITUAL HERITAGE
      ================================================== */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Sacred Spaces
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Temples that carry generations of tradition
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              Temples are more than places of worship. They have also
              served as important spaces for community, festivals,
              traditions and cultural continuity.
            </p>

          </div>


          <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-sm">

            <div className="h-96">

              <img
                src="/images/tamil/sri-mariamman.jpg"
                alt="Sri Mariamman Temple"
                className="w-full h-full object-cover"
              />

            </div>


            <div className="p-8">

              <p className="text-green-700 uppercase tracking-widest text-sm font-semibold">
                Historic Temple
              </p>

              <h3 className="text-3xl font-bold text-gray-900 mt-2">
                Sri Mariamman Temple
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                It was built in 1827, which is the oldest and first Hindu temple in Singapore and located in the heart of Singapore's Chinatown area,
                Sri Mariamman Temple is an important landmark in the
                history of Singapore's Tamil Hindu community.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          LANGUAGE & LITERATURE
      ================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Language • Literature • Identity
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Tamil lives through its language
            </h2>

            <p className="text-gray-600 leading-8 mt-6 text-justify">
              Language is one of the strongest ways a community carries
              its heritage forward. Tamil education, literature,
              storytelling and creative expression continue to connect
              generations.
            </p>

            <p className="text-gray-600 leading-8 mt-4 text-justify">
              Singapore's Tamil literary tradition also forms part of the
              wider cultural story of the city.To sustain interest in the Tamil language and literature, the Association of Singapore Tamil Writers(ASTW) kickstarted Kannadasan Vizha, a festival honouring talents that elevate Singapore's literary presence on a global stage.
The festival began as an in-person event with artists from India flying in for special performances and keynote speeches. Debates on various topics in Tamil and singing competitions for both youth and adults were also held at the event.
            </p>

          </div>


          <div className="h-96 rounded-3xl overflow-hidden">

            <img
              src="/images/tamil/tamil-language.jpg"
              alt="Tamil language and literature"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>



     {/* ==================================================
    LIVING TRADITIONS
================================================== */}

<section className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-14">

      <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
        Living Traditions
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Heritage is more than places
      </h2>

      <p className="text-gray-600 text-lg leading-8 mt-5">
        Culture lives through the traditions people practise,
        celebrate, create and share every day.
      </p>

    </div>


    {/* Cards */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


      {/* FESTIVALS */}

      <div className="group bg-amber-50 rounded-[2rem] p-8 border border-amber-100 hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl mb-7 group-hover:scale-110 transition">
          🪔
        </div>

        <p className="text-amber-700 uppercase tracking-widest text-xs font-bold">
          Celebration
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-2">
          Festivals
        </h3>

        <p className="text-gray-600 leading-7 mt-4">
          Festivals bring generations together and keep
          traditional customs, rituals and celebrations alive.
        </p>

        <div className="mt-6 h-1 w-12 bg-amber-400 rounded-full"></div>

      </div>


      {/* ARTS & MUSIC */}

      <div className="group bg-purple-50 rounded-[2rem] p-8 border border-purple-100 hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl mb-7 group-hover:scale-110 transition">
          🎵
        </div>

        <p className="text-purple-700 uppercase tracking-widest text-xs font-bold">
          Expression
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-2">
          Arts & Music
        </h3>

        <p className="text-gray-600 leading-7 mt-4">
          Classical music, dance, literature and creative arts
          connect Tamil traditions with new generations.
        </p>

        <div className="mt-6 h-1 w-12 bg-purple-400 rounded-full"></div>

      </div>


      {/* FOOD */}

      <div className="group bg-orange-50 rounded-[2rem] p-8 border border-orange-100 hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mb-7 group-hover:scale-110 transition">
          🍛
        </div>

        <p className="text-orange-700 uppercase tracking-widest text-xs font-bold">
          Flavours
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-2">
          Food
        </h3>

        <p className="text-gray-600 leading-7 mt-4">
          Traditional dishes carry family memories, recipes
          and flavours passed from one generation to another.
        </p>

        <div className="mt-6 h-1 w-12 bg-orange-400 rounded-full"></div>

      </div>


      {/* COMMUNITY */}

      <div className="group bg-emerald-50 rounded-[2rem] p-8 border border-emerald-100 hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-3xl mb-7 group-hover:scale-110 transition">
          🤝
        </div>

        <p className="text-emerald-700 uppercase tracking-widest text-xs font-bold">
          Together
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-2">
          Community
        </h3>

        <p className="text-gray-600 leading-7 mt-4">
          Community organisations, schools and shared spaces
          help preserve culture while bringing people together.
        </p>

        <div className="mt-6 h-1 w-12 bg-emerald-400 rounded-full"></div>

      </div>


    </div>

  </div>

</section>


      {/* ==================================================
          HERITAGE CENTRE
      ================================================== */}

    <section className="py-20 bg-[#F5EFE6]">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* Left */}
    <div>

      <p className="text-[#B85C38] uppercase tracking-widest font-semibold mb-3">
        Go Deeper
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#4A2C20] leading-tight">
        Discover the Indian Heritage Centre
      </h2>

      <p className="text-[#6B554B] leading-8 mt-6">
        Located in Little India, the Indian Heritage Centre explores
        the history and heritage of Indian communities in Singapore
        and Southeast Asia.
      </p>

      <a
        href="https://www.indianheritage.gov.sg/"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-8 bg-white text-[#B85C38] px-7 py-3 rounded-full font-semibold hover:bg-[#93472C] hover:text-white transition"
      >
        Visit Heritage Centre
      </a>

    </div>


    {/* Right */}
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#EADFD5]">

      <h3 className="text-2xl font-bold text-[#4A2C20]">
        A heritage experience
      </h3>

      <p className="text-[#6B554B] leading-7 mt-4">
        Explore galleries, objects, stories and community histories
        that help place Singapore's Tamil and wider Indian heritage
        within a larger Southeast Asian story.
      </p>

      <div className="grid grid-cols-3 gap-5 mt-8">

        <div>
          <div className="text-2xl mb-2">🏛️</div>
          <h4 className="font-semibold text-[#4A2C20]">
            Exhibitions
          </h4>
          <p className="text-sm text-[#6B554B] mt-1">
            Stories from the past
          </p>
        </div>

        <div>
          <div className="text-2xl mb-2">📜</div>
          <h4 className="font-semibold text-[#4A2C20]">
            Stories
          </h4>
          <p className="text-sm text-[#6B554B] mt-1">
            Voices of the community
          </p>
        </div>

        <div>
          <div className="text-2xl mb-2">🌏</div>
          <h4 className="font-semibold text-[#4A2C20]">
            Heritage
          </h4>
          <p className="text-sm text-[#6B554B] mt-1">
            Culture across Asia
          </p>
        </div>

      </div>

    </div>

  </div>

</section>


      {/* ==================================================
          TAMIL VOICES CONNECTION
      ================================================== */}

      <section className="py-24 bg-white text-center">

        <div className="max-w-3xl mx-auto px-6">

          <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
            From Heritage To Today
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Meet the people carrying the story forward
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            Heritage is not only about the past. Discover the artists,
            entrepreneurs, writers, academics and community leaders
            shaping Singapore's Tamil community today.
          </p>

          <Link
            to="/tamil-voices"
            className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Discover Tamil Voices 
          </Link>

        </div>

      </section>


    </main>

  );
}

export default TamilHeritage;