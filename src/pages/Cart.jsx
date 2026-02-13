import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="text-center text-neutral-500 text-lg py-20">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-12">
        Your Cart
      </h1>

      <div className="space-y-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-neutral-200 p-8 flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold mb-2">
                {item.title}
              </h2>
              <p className="text-neutral-600">
                ${item.price}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() =>
                  dispatch(decreaseQuantity(item.id))
                }
                className="border px-4 py-2"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch(increaseQuantity(item.id))
                }
                className="border px-4 py-2"
              >
                +
              </button>
            </div>

            <div className="font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <button
              onClick={() => {
                dispatch(removeFromCart(item.id));
                toast.success("Removed");
              }}
              className="text-sm underline text-neutral-500 hover:text-black"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-right text-2xl font-bold">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
