function FoodCard({ food }) {
  return (
    <div className="group relative h-80 rounded-2xl overflow-hidden">

      <img
        src={food.image}
        alt={food.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

        <span className="text-sm text-green-300 font-semibold">
          {food.category}
        </span>

        <h3 className="text-2xl font-bold mt-1">
          {food.name}
        </h3>

        <p className="text-sm text-gray-200 mt-2">
          {food.description}
        </p>

      </div>

    </div>
  );
}

export default FoodCard;