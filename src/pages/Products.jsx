import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setSearchQuery, resetProducts } from "../features/products/productSlice";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Products() {
  const dispatch = useDispatch();
  const loaderRef = useRef(null);

  const { products, page, loading, hasMore, searchQuery } =
    useSelector((state) => state.products);

  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    dispatch(resetProducts());
    dispatch(fetchProducts({ page: 1, searchQuery: "" }));
  }, [dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(resetProducts());
      dispatch(setSearchQuery(inputValue));
      dispatch(fetchProducts({ page: 1, searchQuery: inputValue }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [inputValue, dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          hasMore &&
          !loading
        ) {
          dispatch(fetchProducts({ page, searchQuery }));
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loading, page, searchQuery, dispatch]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Explore Products
        </h1>

        <p className="text-neutral-600 mb-8">
          Discover premium curated items.
        </p>

        <input
          type="text"
          placeholder="Search products..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-4 border border-neutral-300 w-full max-w-md focus:outline-none focus:border-black transition"
        />
      </div>

      {products.length === 0 && !loading && (
        <div className="text-center py-20 text-neutral-500 text-lg">
          No products found.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {loading && <Loader />}

      <div ref={loaderRef} className="h-10"></div>
    </div>
  );
}

export default Products;
