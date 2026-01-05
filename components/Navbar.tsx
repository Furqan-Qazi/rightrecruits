import React from "react";
import { BellDot } from "lucide-react";
const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-7 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl px-6 py-3 bg-black/60 text-white rounded-full border border-white/30 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <BellDot size={28} className="text-lime-400" /> {/* Ye icon pehle */}
        <h1 className="text-2xl font-bold text-lime-300">
          Right <span className="text-lime-200">Recruits</span>
        </h1>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
        <li className="cursor-pointer hover:text-lime-200 transition">Home</li>
        <li className="cursor-pointer hover:text-lime-200 transition">
          Service
        </li>
        <li className="cursor-pointer hover:text-lime-200 transition">
          About Us
        </li>
        <li className="cursor-pointer hover:text-lime-200 transition">Jobs</li>
        <li className="cursor-pointer hover:text-lime-200 transition">Pages</li>
        <li className="cursor-pointer hover:text-lime-200 transition">
          Contact Us
        </li>
      </ul>

      {/* Button */}
      <div className="ml-4">
        <button className="bg-lime-500 text-black font-semibold px-5 py-2 rounded-full hover:bg-lime-400 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
