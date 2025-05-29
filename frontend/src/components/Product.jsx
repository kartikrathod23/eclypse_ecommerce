import React, { useState } from "react";
import vid3 from "../assets/vid3.mp4";
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.jpg";

const Product = () => {

    const [selectedSize, setSelectedSize] = useState(null);
    const sizes = ["XS", "S", "M", "L", "XL"];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
            {/* Left: Video */}
            <div className="h-screen">
                <video
                    src={vid3}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right: Product Details */}
            <div className="p-8 flex flex-col justify-between bg-white">
                {/* Description */}
                <div>
                    <p className="text-xl text-black text-left">
                        A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened finish, this piece captures presence without force. Worn here in the stillness of a city in motion.
                    </p>

                    {/* Thumbnails */}
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

                    {/* Price */}
                    <div className="mt-6 text-4xl text-left font-semibold text-black">₹ 7,999 <span className="text-xl text-gray-500 font-normal">MRP incl. of all taxes</span></div>

                    {/* Size Options */}
                    <div className="mt-6">
                        <div className="text-2xl text-gray-500 font-medium mb-2 flex items-center gap-10">
                            Please select a size
                            <a href="#" className="underline text-xl text-gray-500">Size chart</a>
                        </div>
                        <div className="flex gap-8">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 mt-4 py-2 border rounded transition-colors duration-200
              ${selectedSize === size
                                            ? "bg-black text-white border-black"
                                            : "bg-gray-300 text-gray-500 border-gray-300"}
            `}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                     <hr className="text-gray-900 mt-10" />
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex gap-4">
                    <button className="w-1/2 py-3 border border-gray-400 text-black text-xl rounded font-medium">
                        Add to Cart
                    </button>
                    <button className="w-full py-3 bg-black text-white text-xl rounded font-medium">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
