import React, { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const latitude = 1.3521;
        const longitude = 103.8198;

        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code&timezone=Asia%2FSingapore`
        );

        const data = await response.json();

        setWeather(data.current);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            Loading Singapore weather...
          </p>
        </div>
      </section>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-green-900 rounded-3xl px-7 md:px-12 py-8">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* Left Content */}
            <div className="text-white">

              <p className="text-green-300 uppercase tracking-widest font-semibold text-sm mb-2">
                Before You Explore
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Singapore Today
              </h2>

              <p className="text-green-100 max-w-md leading-7">
                Check the current weather before starting
                your Singapore adventure.
              </p>

            </div>


            {/* Weather Information */}
            <div className="bg-white rounded-2xl p-5 md:p-6 w-full lg:w-[600px]">

              {/* Location */}
              <div className="flex items-center justify-between mb-5">

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Live Weather
                  </p>

                  <h3 className="text-xl font-bold text-gray-900">
                    Singapore 🇸🇬
                  </h3>
                </div>

                <div className="text-4xl">
                  🌤️
                </div>

              </div>


              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">

                {/* Temperature */}
                <div className="bg-green-50 rounded-xl p-4 text-center">

                  <p className="text-xs text-gray-500 mb-1">
                    Temperature
                  </p>

                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    {weather.temperature_2m}°C
                  </p>

                </div>


                {/* Feels Like */}
                <div className="bg-gray-50 rounded-xl p-4 text-center">

                  <p className="text-xs text-gray-500 mb-1">
                    Feels Like
                  </p>

                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    {weather.apparent_temperature}°C
                  </p>

                </div>


                {/* Humidity */}
                <div className="bg-gray-50 rounded-xl p-4 text-center">

                  <p className="text-xs text-gray-500 mb-1">
                    Humidity
                  </p>

                  <p className="text-xl md:text-2xl font-bold text-gray-900">
                    {weather.relative_humidity_2m}%
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Weather;