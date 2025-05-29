import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";

const testimonials = [
  {
    quote: "Understated, but unforgettable. It feels like it was made for me",
    name: "Random Woman",
    location: "NY, USA",
    image: "/img1.jpg", // Replace with your image paths
  },
  {
    quote: "Timeless style that speaks volumes. I feel confident every time I wear it.",
    name: "Another Customer",
    location: "CA, USA",
    image: "/img2.jpg",
  },
  {
    quote: "Perfectly tailored and so elegant. It’s my favorite outfit now.",
    name: "Stylish Person",
    location: "TX, USA",
    image: "/img3.jpg",
  },
];

const TestimonialSlider = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-black text-white py-16 px-4 flex flex-col md:flex-row justify-between ">
      {/* Left Content */}
      <div className="flex-1 max-w-4xl mb-12 md:mb-0">
        <p className="text-xl uppercase tracking-widest text-gray-400 mb-6 text-left">
          Our Customers
        </p>
        <div className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
          <span className="text-[5rem] font-bold">"</span> <span className="text-5xl text-left w-full">{testimonials[selected].quote}</span>
        </div>
        <div>
          <div className="text-xl text-gray-400 font-semibold text-left">
            {testimonials[selected].name}
          </div>
          <div className="text-xl text-left mt-6 text-gray-400">{testimonials[selected].location}</div>
        </div>
      </div>

      {/* Right Avatars */}
      <div className="flex mt-16 flex-col items-center gap-20 relative">
        <button
          className="text-gray-400 w-10 hover:text-white absolute -left-20 top-[0%]"
          onClick={() =>
            setSelected((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
          }
        >
          <ChevronLeft size={60} />
        </button>

        {testimonials.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={`Customer ${index}`}
            onClick={() => setSelected(index)}
            className={`w-12 h-12 rounded-full object-cover cursor-pointer border-2 transition duration-300 ${
              selected === index
                ? "border-white"
                : "border-transparent opacity-70"
            }`}
          />
        ))}
      </div>
      <hr className="text-white mt-10"/>
    </div>
  );
};

export default TestimonialSlider;
