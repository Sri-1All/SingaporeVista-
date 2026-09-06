import React, { useState } from "react";

function Currency() {

  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("SGD");
  const [result, setResult] = useState(null);
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);


  const convertCurrency = async () => {

    if (!amount || amount <= 0) {
      setResult(null);
      setRate(null);
      return;
    }

    if (fromCurrency === toCurrency) {
      setResult(Number(amount).toFixed(2));
      setRate(1);
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(
        `https://api.frankfurter.dev/v2/rate/${fromCurrency}/${toCurrency}`
      );

      const data = await response.json();

      const convertedAmount =
        Number(amount) * data.rate;

      setResult(convertedAmount.toFixed(2));
      setRate(data.rate);

    } catch (error) {

      console.error("Currency conversion error:", error);

      setResult(null);
      setRate(null);

    }

    setLoading(false);
  };


  return (

    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-green-700 uppercase tracking-widest font-semibold text-sm mb-3">
            Travel Smart
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Know your Singapore currency
          </h2>

          <p className="text-gray-600 text-lg mt-4">
            Convert currencies and get a quick estimate for your trip.
          </p>

        </div>


        {/* Converter */}

        <div className="max-w-4xl mx-auto">

          <div className="bg-white rounded-[2rem] border border-gray-200 shadow-sm p-6 md:p-8">


            {/* Currency Inputs */}

            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-5 items-end">


              {/* FROM */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  I have
                </label>

                <div className="border border-gray-200 rounded-2xl p-4 focus-within:ring-2 focus-within:ring-green-500">

                  <div className="flex items-center gap-3">

                    <select
                      value={fromCurrency}
                      onChange={(e) => {
                        setFromCurrency(e.target.value);
                        setResult(null);
                        setRate(null);
                      }}
                      className="bg-transparent font-semibold text-gray-900 focus:outline-none"
                    >

                      <option value="INR">
                        🇮🇳 INR
                      </option>

                      <option value="SGD">
                        🇸🇬 SGD
                      </option>

                      <option value="USD">
                        🇺🇸 USD
                      </option>

                      <option value="EUR">
                        🇪🇺 EUR
                      </option>

                      <option value="GBP">
                        🇬🇧 GBP
                      </option>

                      <option value="JPY">
                        🇯🇵 JPY
                      </option>

                    </select>


                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setResult(null);
                        setRate(null);
                      }}
                      placeholder="0.00"
                      className="w-full text-2xl font-bold text-gray-900 focus:outline-none"
                    />

                  </div>

                </div>

              </div>


              {/* SWAP ICON */}

              <div className="hidden md:flex w-12 h-12 rounded-full bg-green-50 text-green-700 items-center justify-center text-xl font-bold">
                ⇄
              </div>


              {/* TO */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  I want
                </label>

                <div className="border border-gray-200 rounded-2xl p-4">

                  <div className="flex items-center gap-3">

                    <select
                      value={toCurrency}
                      onChange={(e) => {
                        setToCurrency(e.target.value);
                        setResult(null);
                        setRate(null);
                      }}
                      className="bg-transparent font-semibold text-gray-900 focus:outline-none"
                    >

                      <option value="SGD">
                        🇸🇬 SGD
                      </option>

                      <option value="INR">
                        🇮🇳 INR
                      </option>

                      <option value="USD">
                        🇺🇸 USD
                      </option>

                      <option value="EUR">
                        🇪🇺 EUR
                      </option>

                      <option value="GBP">
                        🇬🇧 GBP
                      </option>

                      <option value="JPY">
                        🇯🇵 JPY
                      </option>

                    </select>


                    <div className="text-2xl font-bold text-gray-900">
                      {result ? result : "0.00"}
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Convert Button */}

            <button
              onClick={convertCurrency}
              className="w-full mt-7 bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold transition"
            >

              {loading
                ? "Converting..."
                : "Convert Currency"}

            </button>


            {/* Result */}

            {result && (

              <div className="mt-6 bg-green-50 rounded-2xl p-5 text-center">

                <p className="text-sm text-gray-500">
                  Converted Amount
                </p>

                <p className="text-3xl font-bold text-green-800 mt-1">
                  {result} {toCurrency}
                </p>


                {rate && (

                  <p className="text-sm text-gray-500 mt-2">
                    1 {fromCurrency} ={" "}
                    {Number(rate).toFixed(4)} {toCurrency}
                  </p>

                )}

              </div>

            )}

          </div>


          <p className="text-center text-xs text-gray-400 mt-4">
            Exchange rates are provided for travel planning purposes.
          </p>

        </div>

      </div>

    </section>

  );
}

export default Currency;