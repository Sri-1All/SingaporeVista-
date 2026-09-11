import { Link } from "react-router-dom";
import data from "../data/record.json";
import TamilVoiceCard from "../components/TamilVoiceCard";

function TamilVoices() {
  const voices = data.tamilVoices || [];

  return (
    <main>

      {/* =========================
          HERO
      ========================= */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">

        <img
          src="/images/tamil/tamil-voices.jpg"
          alt="Tamil community in Singapore"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-white">

            <p className="text-green-300 uppercase tracking-[0.25em] font-semibold mb-4">
              Tamil Voices of Singapore
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              The people behind the story
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-8 mt-6 max-w-2xl">
              Meet people from Singapore&apos;s Tamil community who are
              creating, leading, teaching and contributing in their
              own ways.
            </p>

          </div>
        </div>

      </section>


      {/* =========================
          INTRODUCTION
      ========================= */}
      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
            The Community Today
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            A community with many voices
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            Singapore&apos;s Tamil community is made up of people from
            different backgrounds and professions. Their work in
            the arts, business, education, writing and community life
            adds to the wider story of Singapore.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-4">
            Here, we bring some of those stories together and look
            beyond history to the people shaping the community today.
          </p>

        </div>

      </section>


      {/* =========================
          FEATURED VOICES
      ========================= */}
      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Meet The Voices
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              People making their mark
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl text-lg">
              From creative fields to education and community work,
              explore a few of the people whose work represents
              different sides of Singapore&apos;s Tamil community.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {voices.map((voice) => (
              <TamilVoiceCard
                key={voice.id}
                person={voice}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =========================
          VOICES BY FIELD
      ========================= */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Many Paths
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Different fields, one community
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              Tamil voices can be found across many areas of
              Singaporean life, from creative work and business
              to education and community service.
            </p>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

            {/* Artists */}
            <div className="bg-amber-50 rounded-3xl p-6 text-center border border-amber-100">
              <div className="text-3xl mb-4">🎨</div>

              <h3 className="font-bold text-gray-900">
                Artists
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Creativity &amp; expression
              </p>
            </div>


            {/* Entrepreneurs */}
            <div className="bg-blue-50 rounded-3xl p-6 text-center border border-blue-100">
              <div className="text-3xl mb-4">💼</div>

              <h3 className="font-bold text-gray-900">
                Entrepreneurs
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Ideas &amp; enterprise
              </p>
            </div>


            {/* Writers */}
            <div className="bg-purple-50 rounded-3xl p-6 text-center border border-purple-100">
              <div className="text-3xl mb-4">✍️</div>

              <h3 className="font-bold text-gray-900">
                Writers
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Stories &amp; language
              </p>
            </div>


            {/* Academics */}
            <div className="bg-green-50 rounded-3xl p-6 text-center border border-green-100">
              <div className="text-3xl mb-4">📚</div>

              <h3 className="font-bold text-gray-900">
                Academics
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Knowledge &amp; learning
              </p>
            </div>


            {/* Leaders */}
            <div className="bg-rose-50 rounded-3xl p-6 text-center border border-rose-100">
              <div className="text-3xl mb-4">🤝</div>

              <h3 className="font-bold text-gray-900">
                Leaders
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Community &amp; service
              </p>
            </div>


            {/* Creators */}
            <div className="bg-orange-50 rounded-3xl p-6 text-center border border-orange-100">
              <div className="text-3xl mb-4">🏅</div>

              <h3 className="font-bold text-gray-900">
                Creators
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                New ideas &amp; influence
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          COMMUNITY SPOTLIGHT
      ========================= */}
      {voices.length > 0 && (
        <section className="py-24 bg-green-900 text-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 gap-12 items-center">

              <div className="h-[480px] rounded-[2rem] overflow-hidden">

                <img
                  src={voices[0].image}
                  alt={voices[0].name}
                  className="w-full h-full object-cover object-top"
                />

              </div>


              <div>

                <p className="text-green-300 uppercase tracking-widest font-semibold mb-4">
                  Community Spotlight
                </p>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Voices that inspire the next generation
                </h2>

                <p className="text-green-300 font-semibold mt-8">
                  {voices[0].category || voices[0].role}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {voices[0].name}
                </h3>

                <p className="text-green-100 leading-8 mt-5">
                  {voices[0].shortBio || voices[0].description}
                </p>

              </div>

            </div>

          </div>

        </section>
      )}


      {/* =========================
          YOUNG VOICES
      ========================= */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center mb-14">

            <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
              Looking Ahead
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              The next generation has a voice too
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              Tamil heritage continues to grow as younger generations
              find new ways to express their identity, build communities
              and make their mark in Singapore.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            {/* Young Creators */}
            <div className="group bg-purple-50 border border-purple-100 rounded-[2rem] p-8 hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl mb-7">
                🎨
              </div>

              <p className="text-purple-700 uppercase tracking-widest text-xs font-bold">
                Creativity
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                Young Creators
              </h3>

              <p className="text-gray-600 leading-7 mt-4">
                From digital content and filmmaking to music and design,
                young creators are finding fresh ways to bring Tamil
                culture into today&apos;s world.
              </p>

            </div>


            {/* Young Entrepreneurs */}
            <div className="group bg-orange-50 border border-orange-100 rounded-[2rem] p-8 hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mb-7">
                💡
              </div>

              <p className="text-orange-700 uppercase tracking-widest text-xs font-bold">
                Innovation
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                Young Entrepreneurs
              </h3>

              <p className="text-gray-600 leading-7 mt-4">
                New businesses, ideas and initiatives are opening
                different paths for young people to contribute to
                Singapore&apos;s economy and community.
              </p>

            </div>


            {/* Young Changemakers */}
            <div className="group bg-emerald-50 border border-emerald-100 rounded-[2rem] p-8 hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-3xl mb-7">
                🌱
              </div>

              <p className="text-emerald-700 uppercase tracking-widest text-xs font-bold">
                Community
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-2">
                Young Changemakers
              </h3>

              <p className="text-gray-600 leading-7 mt-4">
                Through education, volunteering and community work,
                young people are finding their own ways to make a
                difference around them.
              </p>

            </div>

          </div>


          {/* Closing Statement */}
          <div className="mt-16 bg-green-900 rounded-[2rem] px-8 py-12 md:px-16 text-center text-white">

            <p className="text-green-300 uppercase tracking-widest font-semibold text-sm">
              The Next Chapter
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mt-3">
              The story is still being written.
            </h3>

            <p className="text-green-100 max-w-2xl mx-auto leading-8 mt-4">
              Every generation adds something of its own while carrying
              forward the traditions and values that came before.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          HERITAGE CONNECTION
      ========================= */}
      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* IMAGE */}
            <div className="relative">

              <div className="h-[520px] rounded-[2.5rem] overflow-hidden">

                <img
                  src="/images/tamil/tamil-heritage.jpg"
                  alt="Tamil heritage in Singapore"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="mt-5 px-2">

                <p className="text-green-700 uppercase tracking-widest text-xs font-bold">
                  Community &amp; Culture
                </p>

                <p className="text-gray-600 leading-7 mt-2">
                  Celebrating culture together, one generation at a time.
                </p>

              </div>

            </div>


            {/* CONTENT */}
            <div>

              <p className="text-green-700 uppercase tracking-[0.2em] font-semibold mb-4">
                From Past To Present
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                The heritage continues through its people
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-7">
                The story of Singapore&apos;s Tamil community is not only
                found in its temples, festivals and historic places.
                It can also be seen in the people who continue to keep
                those traditions alive in their everyday lives.
              </p>

              <p className="text-gray-600 text-lg leading-8 mt-5">
                Some carry the language forward, some celebrate through
                music and dance, while others contribute through education,
                business, community work and new ideas.
              </p>


              <div className="border-l-4 border-green-600 pl-6 my-9">

                <p className="text-2xl font-semibold text-gray-900 leading-9">
                  “Heritage is not only something we inherit.
                  It is something we continue to shape.”
                </p>

              </div>


              <div className="flex flex-col sm:flex-row gap-4">

                <Link
                  to="/tamil-heritage"
                  className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold text-center transition"
                >
                  Explore Tamil Heritage
                </Link>

                <Link
                  to="/festivals-food"
                  className="border border-gray-300 hover:border-green-600 hover:text-green-700 text-gray-700 px-8 py-4 rounded-full font-semibold text-center transition"
                >
                  Discover Festivals
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default TamilVoices;