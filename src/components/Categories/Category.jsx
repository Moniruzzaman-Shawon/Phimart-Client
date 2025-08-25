import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import CategoryItems from "./CategoryItems";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiClient.get("/categories").then((res) => setCategories(res.data));
  }, []);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Category Heading */}
      <div className="flex justify-between items-center px-4 md:px-8 mb-4 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Shop by Category
        </h2>
        <a href="#" className="btn btn-secondary px-6 py-6 rounded-xl text-lg">
          View All
        </a>
      </div>
      
      {/* Category Grid */}

      <CategoryItems categories={categories} />
    </section>
  );
};

export default Category;
