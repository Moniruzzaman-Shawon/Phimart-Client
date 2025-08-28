import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";
import CategoryItems from "./CategoryItems";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // loading state
  const [error, setError] = useState(""); // optional error state

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const res = await apiClient.get("/categories");
        // check if data is in `results` (DRF paginated)
        setCategories(res.data.results || res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load categories");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Category Heading */}
      <div className="flex justify-between items-center px-4 md:px-8 mb-4 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
        <a
          href="#"
          className="btn btn-secondary px-6 py-6 rounded-xl text-lg"
        >
          View All
        </a>
      </div>

      {/* Spinner or Error */}
      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-bars text-secondary loading-xl"></span>
        </div>
      )}
      {error && !isLoading && (
        <p className="text-red-500 text-center">{error}</p>
      )}

      {/* Category Grid */}
      {!isLoading && !error && categories.length > 0 && (
        <CategoryItems categories={categories} />
      )}

      {/* No categories fallback */}
      {!isLoading && !error && categories.length === 0 && (
        <p className="text-center text-gray-500">No categories available</p>
      )}
    </section>
  );
};

export default Category;
