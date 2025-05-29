import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img4 from "../assets/img4.jpg";


const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/cart");
      setCartCount(res.data.length);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
      {/* <div className="w-5 h-5 rounded-full bg-white" /> */}
      <img src={img4} alt="" className="h-20"/>
      <div className="flex space-x-10 text-2xl">
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Waitlist</a>
        <Link to="/cart" className="hover:underline">
          Cart ({cartCount})
        </Link>
        <Link to={"/checkout"}>
        <button className="bg-white -mt-1 text-black px-4 py-1.5 text-xl font-semibold rounded">
          Buy
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
