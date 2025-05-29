import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
      <div className="w-5 h-5 rounded-full bg-white" />
      <div className="flex space-x-10 text-2xl ">
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Waitlist</a>
        <a href="#" className="hover:underline">Cart</a>
      <button className="bg-white -mt-1 text-black px-4 py-1.5 text-xl font-semibold rounded">
        Buy
      </button>
      </div>
    </div>
  );
};

export default Navbar;
