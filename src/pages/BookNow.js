import React, { useState } from "react";

function BookNow() {

  const [formData, setFormData] = useState({
    experience: "",
    date: "",
    travellers: 1,
    name: "",
    email: "",
    phone: "",
    requests: ""
  });


  const [submitted, setSubmitted] = useState(false);


  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    setSubmitted(true);

  };


  return (

    <main>


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative min-h-[75vh] overflow-hidden">

        <img
          src="/images/book/book-hero.jpg"
          alt="Singapore travel experience"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>


        <div className="relative z-10 min-h-[55vh] flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-3xl text-white">

              <p className="text-green-300 uppercase tracking-[0.25em] font-semibold mb-4">
                Book Your Experience
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Your Singapore
                <br />
                adventure starts here.
              </h1>

              <p className="text-lg md:text-xl text-gray-200 leading-8 mt-6 max-w-2xl">
                Choose an experience, pick your dates and tell us
                how you'd like to explore Singapore.
              </p>

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
            Start Your Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Tell us about your trip
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            Whether you're here for the heritage, food, festivals
            or simply to experience the city, start by sharing
            a few details about your journey.
          </p>

        </div>

      </section>



      {/* ==================================================
          BOOKING FORM
      ================================================== */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[1.5fr_0.8fr] gap-10">


            {/* ==================================================
                FORM
            ================================================== */}

            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm">

              {!submitted ? (

                <form onSubmit={handleSubmit}>


                  {/* Experience */}

                  <div className="mb-9">

                    <p className="text-green-700 uppercase tracking-widest text-sm font-bold">
                      Step 01
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                       What would you like to explore?
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4 mt-6">

                      {[
                        "Singapore Explorer",
                        "Tamil Heritage",
                        "Festivals & Food",
                        "Custom Experience"
                      ].map((experience) => (

                        <label
                          key={experience}
                          className={`cursor-pointer rounded-2xl border p-5 transition ${
                            formData.experience === experience
                              ? "border-green-700 bg-green-50"
                              : "border-gray-200 hover:border-green-400"
                          }`}
                        >

                          <input
                            type="radio"
                            name="experience"
                            value={experience}
                            checked={
                              formData.experience === experience
                            }
                            onChange={handleChange}
                            className="sr-only"
                          />

                          <div className="flex items-center gap-3">

                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                formData.experience === experience
                                  ? "border-green-700"
                                  : "border-gray-300"
                              }`}
                            >

                              {formData.experience === experience && (
                                <div className="w-2.5 h-2.5 rounded-full bg-green-700"></div>
                              )}

                            </div>

                            <span className="font-semibold text-gray-900">
                              {experience}
                            </span>

                          </div>

                        </label>

                      ))}

                    </div>

                  </div>



                  {/* Trip details */}

                  <div className="mb-9">

                    <p className="text-green-700 uppercase tracking-widest text-sm font-bold">
                      Step 02
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                      Trip details
                    </h3>


                    <div className="grid md:grid-cols-2 gap-5 mt-6">


                      <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Date
                        </label>

                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-green-600"
                        />

                      </div>


                      <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Travellers
                        </label>

                        <select
                          name="travellers"
                          value={formData.travellers}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-green-600"
                        >

                          {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (

                            <option key={number} value={number}>
                              {number} {number === 1 ? "Traveller" : "Travellers"}
                            </option>

                          ))}

                        </select>

                      </div>

                    </div>

                  </div>



                  {/* Traveller details */}

                  <div className="mb-9">

                    <p className="text-green-700 uppercase tracking-widest text-sm font-bold">
                      Step 03
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                      Your details
                    </h3>


                    <div className="grid md:grid-cols-2 gap-5 mt-6">


                      <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-green-600"
                        />

                      </div>


                      <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-green-600"
                        />

                      </div>


                      <div className="md:col-span-2">

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+65 ..."
                          className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-green-600"
                        />

                      </div>

                    </div>

                  </div>



                  {/* Special requests */}

                  <div>

                    <p className="text-green-700 uppercase tracking-widest text-sm font-bold">
                      Step 04
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                      Anything else?
                    </h3>

                    <textarea
                      name="requests"
                      value={formData.requests}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about any preferences or special requests..."
                      className="w-full mt-6 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-green-600 resize-none"
                    ></textarea>

                  </div>



                  {/* Submit */}

                  <button
                    type="submit"
                    className="w-full mt-8 bg-green-700 hover:bg-green-800 text-white py-4 rounded-full font-semibold text-lg transition"
                  >
                    Confirm My Journey 
                  </button>

                </form>

              ) : (


                /* ==================================================
                    SUCCESS
                ================================================== */

                <div className="py-16 text-center">

                  <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center text-4xl">
                    ✓
                  </div>

                  <p className="text-green-700 uppercase tracking-widest font-semibold text-sm mt-7">
                    Thank You
                  </p>

                  <h2 className="text-4xl font-bold text-gray-900 mt-3">
                    Your journey is on its way!
                  </h2>

                  <p className="text-gray-600 leading-7 mt-5 max-w-lg mx-auto">
                    We've received your travel details. This demo
                    booking has been recorded and your Singapore
                    experience is ready to take shape.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border border-green-700 text-green-700 px-7 py-3 rounded-full font-semibold hover:bg-green-50 transition"
                  >
                    Make Another Booking
                  </button>

                </div>

              )}

            </div>



            {/* ==================================================
                BOOKING SUMMARY
            ================================================== */}

            <div className="lg:sticky lg:top-28 h-fit">

              <div className="bg-green-900 text-white rounded-[2.5rem] p-8 md:p-9">

                <p className="text-green-300 uppercase tracking-widest text-sm font-semibold">
                  Your Journey
                </p>

                <h3 className="text-3xl font-bold mt-3">
                  Booking Summary
                </h3>


                <div className="mt-8 space-y-5">


                  <div className="border-b border-white/10 pb-5">

                    <p className="text-green-300 text-sm">
                      Travel Interest
                    </p>

                    <p className="font-semibold mt-1">
                      {formData.experience || "Not selected yet"}
                    </p>

                  </div>


                  <div className="border-b border-white/10 pb-5">

                    <p className="text-green-300 text-sm">
                      Date
                    </p>

                    <p className="font-semibold mt-1">
                      {formData.date || "Choose your date"}
                    </p>

                  </div>


                  <div className="border-b border-white/10 pb-5">

                    <p className="text-green-300 text-sm">
                      Travellers
                    </p>

                    <p className="font-semibold mt-1">
                      {formData.travellers}
                    </p>

                  </div>


                  <div>

                    <p className="text-green-300 text-sm">
                      Traveller
                    </p>

                    <p className="font-semibold mt-1">
                      {formData.name || "Your name"}
                    </p>

                  </div>

                </div>


                <div className="mt-10 pt-7 border-t border-white/10">

                  <p className="text-green-100 text-sm leading-6">
                    Your booking request is a starting point.
                    You can customise your experience according
                    to your interests and travel plans.
                  </p>

                </div>

              </div>


              {/* Small reassurance card */}

              <div className="bg-white rounded-[2rem] p-7 mt-5 border border-gray-100">

                <div className="flex gap-4">

                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-xl shrink-0">
                    ✈️
                  </div>

                  <div>

                    <h4 className="font-bold text-gray-900">
                      Travel your way
                    </h4>

                    <p className="text-gray-500 text-sm leading-6 mt-1">
                      Explore Singapore at your own pace and
                      make the journey your own.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          EXPERIENCE STRIP
      ================================================== */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-6">


            <div className="rounded-[2rem] bg-green-50 p-8">

              <span className="text-3xl">
                🛕
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-5">
                Heritage
              </h3>

              <p className="text-gray-600 leading-6 mt-2">
                Walk through the stories and traditions that
                shaped Singapore.
              </p>

            </div>


            <div className="rounded-[2rem] bg-orange-50 p-8">

              <span className="text-3xl">
                🍛
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-5">
                Food
              </h3>

              <p className="text-gray-600 leading-6 mt-2">
                Taste your way through neighbourhoods and
                unforgettable local flavours.
              </p>

            </div>


            <div className="rounded-[2rem] bg-purple-50 p-8">

              <span className="text-3xl">
                🎉
              </span>

              <h3 className="text-xl font-bold text-gray-900 mt-5">
                Festivals
              </h3>

              <p className="text-gray-600 leading-6 mt-2">
                Experience the celebrations that bring
                Singapore's cultures to life.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="py-24 bg-green-900 text-white text-center">

        <div className="max-w-3xl mx-auto px-6">

          <p className="text-green-300 uppercase tracking-widest font-semibold mb-4">
            Singapore Vista
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Your story begins with a journey.
          </h2>

          <p className="text-green-100 text-lg leading-8 mt-5">
            Explore Singapore, discover its heritage and create
            memories worth taking home.
          </p>

        </div>

      </section>


    </main>

  );

}

export default BookNow;