import React from "react";
import mainVid from "../assets/mainVid.mp4";
import vid2 from "../assets/vid2.mp4";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const HeroSection = () => {
  return (
    <div className="mt-20 max-w-[1600px] mx-auto px-8 text-left">
      {/* Logo Heading */}
      <h1 className="text-[6rem] font-medium tracking-tight mb-6">
        Eclypse<sup className="text-6xl align-top top-8">®</sup>
      </h1>

      {/* Video Placeholder */}
      <div className="relative mb-4">
        <video
          className="w-full h-[550px] object-cover rounded-xl opacity-70"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={mainVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Text */}
        <p className="absolute bottom-4 right-4 text-white text-3xl italic px-2 py-1 rounded">
          A silhouette worth remembering
        </p>
      </div>


      {/* Description */}
      <div className="text-5xl max-w-4xl mb-12 mt-40">
        <p>
          Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
        </p>
      </div>

      {/* Learn More */}
      <a
        href="#"
        className="text-2xl mt-10 underline underline-offset-4 hover:text-gray-300"
      >
        Learn more about Eclypse ↗
      </a>

      <div className="grid grid-cols-3 gap-4 mt-40 mb-40">
        {/* Video */}
        <div className="col-span-2 row-span-1">
          <video
            className="w-full h-full object-cover rounded"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={mainVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Image 1 */}
        <HoverCard image={img1} text="In the Premium wool blend in signature vermilion" />

        {/* Image 2 */}
        <HoverCard image={img2} text="Discreet side pockets with clean finish" />

        {/* Image 3 */}
        <HoverCard image={img3} text="Hand-cut and assembled in small batches" />

        {/* Image 4 */}
        {/* <HoverCard image={img4} text="Premium wool blend in signature vermilion" /> */}

        {/* Image 5 - Eclipse logo (replaces image on hover) */}
        <div className="relative group overflow-hidden rounded bg-black">
          <img
            src={img4}
            alt="eclipse logo"
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000 opacity-0 group-hover:opacity-100">
            <h1 className="text-[6rem] font-medium tracking-tight mb-6">
              Eclypse<sup className="text-6xl align-top top-8">®</sup>
            </h1>
          </div>
        </div>
      </div>

      <p className="text-white text-5xl mb-20">Silhouette No. 1 - Vermilion</p>
    </div>
  );
};

const HoverCard = ({ image, text }) => (
  <div className="relative group overflow-hidden rounded">
    <img src={image} alt={text} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
    <div className="absolute bottom-0 w-full text-white text-4xl font-bold p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
      {text}
    </div>
  </div>
);


export default HeroSection;
