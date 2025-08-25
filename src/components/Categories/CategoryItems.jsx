const CategoryItems = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center p-6 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition text-black bg-gradient-to-br from-pink-100 to-blue-100"
        >
          {/* Circle placeholder for icon/initial */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-500 text-black text-xl font-bold mb-3">
            {category.name.charAt(0)}
          </div>

          {/* Category Name */}
          <p className="text-lg font-semibold">{category.name}</p>

          {/* Description */}
          <p className="text-sm text-gray-600 px-2 py-1 bg-white/70 text-center mt-1">
            {category.description}
          </p>

          {/* Product Count */}
          <span className="mt-3 text-sm bg-white/70 px-3 py-1 rounded-full">
            {category.product_count} Products
          </span>

          {/* Button */}
          <button className="mt-4 px-4 py-2 rounded-lg bg-white text-secondary font-medium hover:opacity-90 transition">
            View Products
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryItems;
