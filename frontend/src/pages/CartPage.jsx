import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const fetchCartItems = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/cart");
      setCartItems(res.data);
    } catch (err) {
      console.error("Failed to load cart items:", err);
    }
  };

  const deleteItem = async (productId, size) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${productId}/${size}`);
      fetchCartItems(); // refresh after deletion
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  const handlePlaceOrder = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-300">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="border border-gray-500 p-4 rounded bg-gray-800 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-medium">{item.name}</h2>
                  <p>Size: {item.size}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className="text-lg font-semibold">
                    ₹{item.price * item.quantity}
                  </div>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                    onClick={() => deleteItem(item.productId, item.size)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <button
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 text-xl rounded"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
