import { Link } from "react-router-dom";
function PackageCard({ packageItem }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      <div className="h-60 overflow-hidden">
        <img
          src={packageItem.image}
          alt={packageItem.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-900">
          {packageItem.name}
        </h3>

        <p className="text-green-700 font-medium mt-2">
          {packageItem.duration}
        </p>

        <p className="text-gray-600 text-sm leading-6 mt-3">
          {packageItem.description}
        </p>

        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-xs text-gray-500">
              Starting from
            </p>

            <p className="text-2xl font-bold text-gray-900">
              ₹{packageItem.price.toLocaleString("en-IN")}
            </p>
          </div>


          <Link
              to="/book-now"
              className="bg-green-700 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Book Now
            </Link>
          

        </div>

      </div>

    </div>
  );
}

export default PackageCard;