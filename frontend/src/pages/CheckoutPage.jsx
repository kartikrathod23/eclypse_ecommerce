import React from "react";
import { Link ,useNavigate} from "react-router-dom";

const CheckoutPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-black -mt-8">
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        {/* Left: Back Arrow + Logo */}
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

          <img
            src="https://via.placeholder.com/32x32.png?text=%E2%97%8F"
            alt="Logo"
            className="w-8 h-8 rounded"
          />
        </div>

        {/* Right: Nav Items */}
        <div className="flex items-center space-x-10 text-xl">
          <a href="#" className="text-gray-700 hover:text-black">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Waitlist
          </a>
          <a
            href="#"
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
              <input className="w-full border rounded px-4 py-2" type="text" />
            </div>
            <div>
              <label className="text-xl">Last Name</label>
              <input className="w-full border rounded px-4 py-2" type="text" />
            </div>
          </div>

          <div>
            <label className="text-xl">Street Address</label>
            <input className="w-full border rounded px-4 py-2" type="text" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xl">Apt Number</label>
              <input className="w-full border rounded px-4 py-2" type="text" />
            </div>
            <div>
              <label className="text-xl">State</label>
              <input className="w-full border rounded px-4 py-2" type="text" />
            </div>
            <div>
              <label className="text-xl">Zip</label>
              <input className="w-full border rounded px-4 py-2" type="text" />
            </div>
          </div>

          <div className="flex gap-4 mt-16">
            <button className="border border-black px-6 py-2 rounded w-1/3">
              cancel
            </button>
            <button className="bg-black text-white px-6 py-2 rounded w-full">
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

          <button className="mt-6 bg-black text-white px-6 py-3 rounded w-full text-center">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
