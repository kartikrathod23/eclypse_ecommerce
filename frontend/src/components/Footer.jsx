import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12 relative mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
        {/* Left - Logo & Nav Links */}
        <div className="flex flex-col gap-6">
          <div className="text-3xl font-light flex items-center gap-1">
            Eclypse <sup className="text-xs">↗</sup>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm text-gray-300">
            <span className="hover:text-white cursor-pointer">Home</span> /
            <span className="hover:text-white cursor-pointer">About</span> /
            <span className="hover:text-white cursor-pointer">Buy</span> /
            <span className="hover:text-white cursor-pointer">Our Customers</span> /
            <span className="hover:text-white cursor-pointer">Contacts</span>
          </nav>
        </div>

        {/* Middle - Contact Info */}
        <div className="flex flex-col gap-4 text-sm text-gray-300 text-left">
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-500 mb-1">
              Contact
            </p>
            <p className="text-lg text-white font-light">
              +91 123-456-7890
            </p>
          </div>
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-500 mb-1">
              Email
            </p>
            <p>eclypse@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="absolute right-6 -md:right-20 top-0 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ArrowUp size={40} />
      </button>

      {/* Bottom Copyright */}
      <div className="mt-12 text-xs text-gray-500 text-right">
        © Eclypse 2025
      </div>

      {/* Left/Right Pagination Buttons (for aesthetic only) */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white rounded-full px-4 py-1 flex gap-4 items-center">
        <ChevronLeft size={16} className="cursor-pointer" />
        <ChevronRight size={16} className="cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
