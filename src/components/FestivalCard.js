function FestivalCard({ festival }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      <div className="h-56 overflow-hidden">
        <img
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-green-700">
            {festival.category}
          </span>

          <span className="text-sm text-gray-500">
            {festival.month}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {festival.name}
        </h3>

        <p className="text-gray-600 text-sm leading-6">
          {festival.description}
        </p>

      </div>

    </div>
  );
}

export default FestivalCard;