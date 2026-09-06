import { Link } from "react-router-dom";
import data from "../data/record.json";
import FestivalCard from "../components/FestivalCard";
import FoodCard from "../components/FoodCard";

function FestivalsFood() {

  const festivals = data.festivals || [];
  const foods = data.foods || [];

  return (

    <main>

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative min-h-[85vh] overflow-hidden">

        <img
          src="/images/festivals/festival-hero.jpg"
          alt="Festival celebration in Singapore"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>


      {/* ==================================================
          INTRO
      ================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
            Experience The Culture
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Where celebrations meet everyday life
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            Festivals bring people together, while food carries
            stories from one generation to the next. In Singapore,
            both have become an important part of experiencing
            Tamil culture.
          </p>

        </div>

      </section>


      {/* ==================================================
          FESTIVALS
      ================================================== */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

            <div>

              <p className="text-green-700 uppercase tracking-widest font-semibold mb-3">
                Celebrate
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Festivals to experience
              </h2>

              <p className="text-gray-600 text-lg leading-7 mt-4 max-w-2xl">
                Discover some of the festivals and celebrations
                that bring colour, tradition and community together.
              </p>

            </div>

            <div className="text-gray-500">
              {festivals.length} celebrations
            </div>

          </div>


          {/* Festival Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {festivals.map((festival) => (

              <FestivalCard
                key={festival.id}
                festival={festival}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          FESTIVAL STORY
      ================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


            {/* IMAGE */}

            <div className="rounded-[2.5rem] overflow-hidden">

              <img
                src="/images/festivals/deepavali.jpg"
                alt="Deepavali celebration in Singapore"
                className="w-full h-[500px] object-cover"
              />

            </div>


            {/* CONTENT */}

            <div>

              <p className="text-green-700 uppercase tracking-[0.2em] font-semibold mb-4">
                More Than A Festival
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Celebrations bring the community together
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-6">
                Festivals are more than dates on a calendar. They
                are moments when families, friends and communities
                come together to celebrate traditions and create
                new memories.
              </p>

              <p className="text-gray-600 text-lg leading-8 mt-5">
                From temple celebrations to colourful streets and
                family gatherings, these occasions offer visitors
                a chance to see another side of Singapore.
              </p>

              <div className="mt-8 border-l-4 border-green-600 pl-6">

                <p className="text-xl font-semibold text-gray-900 leading-8">
                  A celebration is often where culture becomes
                  something you can see, hear and experience.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          FOOD INTRO
      ================================================== */}

      <section className="py-24 bg-orange-50">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="text-orange-700 uppercase tracking-widest font-semibold mb-3">
            Taste Singapore
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            A taste of Tamil Singapore
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            Food is one of the easiest ways to discover a culture.
            Walk through Little India and you'll find traditional
            dishes, familiar flavours and local favourites all
            sharing the same streets.
          </p>

        </div>

      </section>


      {/* ==================================================
          FOOD CARDS
      ================================================== */}

      <section className="py-14 bg-orange-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12">

            <p className="text-orange-700 uppercase tracking-widest font-semibold mb-3">
              Local Flavours
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What should you try?
            </h2>

            <p className="text-gray-600 text-lg mt-4 max-w-2xl">
              Start with some of the dishes that have become
              familiar favourites in Singapore.
            </p>

          </div>


          {/* Food Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {foods.map((food) => (

              <FoodCard
                key={food.id}
                food={food}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          FOOD + HERITAGE
      ================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">


            {/* CONTENT */}

            <div className="order-2 lg:order-1">

              <p className="text-green-700 uppercase tracking-[0.2em] font-semibold mb-4">
                Food & Memory
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Some recipes carry a story
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-6">
                Food can be closely tied to family, festivals and
                memories. Recipes passed down through generations
                often find a place in everyday life as well as
                special occasions.
              </p>

              <p className="text-gray-600 text-lg leading-8 mt-5">
                That is what makes exploring Singapore's food scene
                more than simply finding something delicious to eat.
                It is also a way to discover the people and traditions
                behind the food.
              </p>

              <Link
                to="/explore"
                className="inline-block mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Explore Singapore
              </Link>

            </div>


            {/* IMAGE */}

            <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden">

              <img
                src="/images/food/tamil-food.jpg"
                alt="Tamil food in Singapore"
                className="w-full h-[500px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="py-12 md:py-14 bg-green-900 text-white">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <p className="text-green-300 uppercase tracking-widest font-semibold text-sm mb-3">
      Experience It Yourself
    </p>

    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
      Come for the sights. Stay for the stories and flavours.
    </h2>

    <p className="text-green-100 text-base md:text-lg leading-7 mt-5 max-w-2xl mx-auto">
      Plan your Singapore journey and discover the places,
      celebrations and food that make the city memorable.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">

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

export default FestivalsFood;