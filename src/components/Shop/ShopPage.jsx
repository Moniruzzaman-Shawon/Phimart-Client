import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    setLoading(true); // ✅ start loading before request
    apiClient
      .get("/products")
      .then((res) => {
        setProducts(res.data.results);
        setTotalPages(Math.ceil(res.data.count / res.data.results.length));
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <ProductList products={products} loading={loading} />
      <Pagination totalPages={totalPages} handlePageChange={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
};

export default ShopPage;
