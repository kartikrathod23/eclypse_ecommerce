import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import img4 from "../assets/img4.jpg";
import "react-toastify/dist/ReactToastify.css";

const CheckoutPage = () => {
  const navigate = useNavigate();

  // State for address fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  // Save Address Handler
  const handleSaveAddress = async () => {
    const addressData = {
      firstName,
      lastName,
      street,
      apt,
      state,
      zip,
    };

    try {
      const response = await fetch("http://localhost:5000/api/address", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addressData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Address saved successfully!");
        // Optional: Clear form after success
        setFirstName("");
        setLastName("");
        setStreet("");
        setApt("");
        setState("");
        setZip("");
      } else {
        toast.error(data.error || "Failed to save address.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong while saving the address.");
    }
  };

  // Place Order Handler
  const handlePlaceOrder = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart");
      const cartItems = await response.json();

      let totalQuantity = 0;
      let totalPrice = 0;

      if (Array.isArray(cartItems) && cartItems.length > 0) {
        cartItems.forEach((item) => {
          const quantity = item.quantity || 1;
          const price = item.price || 0;
          totalQuantity += quantity;
          totalPrice += quantity * price;
        });
      } else {
        // Default case: 1 item at fallback price
        totalQuantity = 1;
        totalPrice = 7999; // Assuming 7999 fallback
      }

      toast.success(
        `Order placed successfully!\nQuantity: ${totalQuantity}\nTotal: ₹${totalPrice}`
      );
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Something went wrong while placing the order.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black -mt-8">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate("/")} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black hover:text-gray-700 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <img src={img4} alt="" className="h-16"/>
        </div>

        <div className="flex items-center space-x-10 text-xl">
          <a href="#" className="text-gray-700 hover:text-black">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Waitlist
          </a>
          <a
            href="/cart"
            className="text-black font-medium border-b-[1.5px] border-black pb-1"
          >
            Cart
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6 md:p-12 flex flex-col md:flex-row gap-8 mt-10">
        {/* Shipping Address Form */}
        <div className="flex-1 border rounded-lg p-6 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-4 border-red-500 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
            </div>
            <h2 className="text-2xl font-medium">Add New Address</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-20">
            <div>
              <label className="text-xl">First Name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border rounded px-4 py-2"
                type="text"
                required
              />
            </div>
            <div>
              <label className="text-xl">Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border rounded px-4 py-2"
                type="text"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-xl">Street Address</label>
            <input
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full border rounded px-4 py-2"
              type="text"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xl">Apt Number</label>
              <input
                value={apt}
                onChange={(e) => setApt(e.target.value)}
                className="w-full border rounded px-4 py-2"
                type="text"
                required
              />
            </div>
            <div>
              <label className="text-xl">State</label>
              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full border rounded px-4 py-2"
                type="text"
                required
              />
            </div>
            <div>
              <label className="text-xl">Zip</label>
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full border rounded px-4 py-2"
                type="text"
                required
              />
            </div>
          </div>

          <div className="flex gap-4 mt-16">
            <button
              onClick={() => navigate("/")}
              className="border border-black px-6 py-2 rounded w-1/3"
            >
              cancel
            </button>
            <button
              onClick={handleSaveAddress}
              className="bg-black text-white px-6 py-2 rounded w-full"
            >
              Save This Address
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-96 bg-gray-100 p-6 rounded-lg text-lg flex flex-col justify-between">
          <div className="space-y-4">
            <p>
              By placing your order, you agree to our company{" "}
              <span className="font-medium cursor-pointer">Privacy policy</span>{" "}
              and{" "}
              <span className="font-medium cursor-pointer">
                Conditions of use
              </span>
              .
            </p>

            <hr className="border-gray-300" />

            <h3 className="text-xl font-medium">Order Summary</h3>

            <div className="flex justify-between">
              <p>Items - Silhouette No. 1 – Vermilion</p>
              <p>7,999</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping and handling:</p>
              <p>200</p>
            </div>
            <div className="flex justify-between">
              <p>Before tax:</p>
              <p>6,599</p>
            </div>
            <div className="flex justify-between">
              <p>Tax Collected:</p>
              <p>1,400</p>
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-between text-lg font-semibold">
              <p>Order Total:</p>
              <p>8,199</p>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-6 bg-black text-white px-6 py-3 rounded w-full text-center"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
