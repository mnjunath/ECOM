import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
    toast.success("Added to cart");
  };

  return (
    <div className="bg-white border border-neutral-200 p-6 hover:shadow-lg transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-56 w-full object-cover mb-6"
      />

      <h2 className="text-lg font-semibold mb-2">
        {product.title}
      </h2>

      <p className="text-neutral-600 mb-4">
        ${product.price}
      </p>

      <button
        onClick={handleAdd}
        className="w-full bg-black text-white py-3 uppercase text-sm tracking-wide hover:bg-neutral-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
