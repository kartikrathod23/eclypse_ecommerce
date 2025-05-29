import React, { useState } from "react";
import vid3 from "../assets/vid3.mp4";
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

// Toast Component
const Toast = ({ message, visible, isError }) => (
  <div
    className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg transition-transform duration-300 text-white ${
      visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    } ${isError ? "bg-red-600" : "bg-green-600"}`}
  >
    {message}
  </div>
);

const Product = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastError, setToastError] = useState(false);

  const sizes = ["XS", "S", "M", "L", "XL"];
  const price = 7999;

  const showToastMessage = (message, isError = false) => {
    setToastMsg(message);
    setToastError(isError);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      showToastMessage("Please select a size first.", true);
      return;
    }

    const product = {
      productId: "tailored-jacket",
      name: "Tailored Wool Jacket",
      size: selectedSize,
      price,
      quantity: 1,
    };

    try {
      await axios.post("http://localhost:5000/api/cart/add", product);
      showToastMessage("Added to cart!");
    } catch (error) {
      console.error("Failed to add to cart:", error);
      showToastMessage("Failed to add to cart.", true);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen relative">
      <div className="h-screen">
        <video
          src={vid3}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-8 flex flex-col justify-between bg-white">
        <div>
          <p className="text-xl text-black text-left">
            A tailored composition in motion...
          </p>

          <div className="flex gap-4 mt-6">
            {[thumb1, thumb2, thumb3].map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`thumb-${idx}`}
                className="w-44 h-60 object-cover rounded"
              />
            ))}
          </div>
          <hr className="text-gray-900 mt-10" />

          <div className="mt-6 text-4xl text-left font-semibold text-black">
            ₹ {price}{" "}
            <span className="text-xl text-gray-500 font-normal">
              MRP incl. of all taxes
            </span>
          </div>

          <div className="mt-6">
            <div className="text-2xl text-gray-500 font-medium mb-2 flex items-center gap-10">
              Please select a size
              <a href="#" className="underline text-xl text-gray-500">
                Size chart
              </a>
            </div>
            <div className="flex gap-8">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 mt-4 py-2 border rounded transition-colors duration-200 ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-gray-300 text-gray-500 border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <hr className="text-gray-900 mt-10" />
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={handleAddToCart}
            className="w-1/2 py-3 border border-gray-400 text-black text-xl rounded font-medium"
          >
            Add to Cart
          </button>
          <Link to="/checkout" className="w-1/2">
            <button className="w-full py-3 bg-black text-white text-xl rounded font-medium">
              Buy
            </button>
          </Link>
        </div>
      </div>

      {/* Toast */}
      <Toast message={toastMsg} visible={showToast} isError={toastError} />
    </div>
  );
};

export default Product;
