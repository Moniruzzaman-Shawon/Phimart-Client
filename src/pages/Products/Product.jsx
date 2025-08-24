import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ErrorAlert from "../../components/ErrorAlert";
import apiClient from "../../services/api-client";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/products/")
      .then((res) => setProducts(res.data.results))
      .catch((err) => setError(err.messege))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mx-auto py-16 bg-gray-50">
      <div className="flex justify-between items-center px-4 md:px-8 mb-4 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold ">Trending Products</h2>
        <a href="#" className="btn btn-secondary px-6 py-6 rounded-xl text-lg">
          View All
        </a>
      </div>
      {/* Spinner */}
      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-bars text-secondary loading-xl"></span>
        </div>
      )}

      {/* Error */}

      {error && <ErrorAlert />}

      {/* Product Slider  */}
      {!isLoading && !error && products.length > 0 && <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        navigation //  enables navigation arrows
        slidesPerView={1} // adjust number of slides per view
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          2560: { slidesPerView: 4 },
        }}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <ProductItem product={product} />
            </SwiperSlide>
          ))
        ) : (
          <div
            role="alert"
            className="alert alert-error flex justify-center items-center mx-16"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>No products found</span>
          </div>
        )}
      </Swiper> }
      {!isLoading && !error && products.length === 0 && (
        
        <p className="text-red-500">No Products Available</p>
      )}
    </section>
  );
};

export default Product;
