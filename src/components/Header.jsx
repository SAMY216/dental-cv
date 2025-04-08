import { useState } from "react";
import NavBar from "./NavBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full bg-gray-900 text-gray-100 h-[80px] md:h-[100px] shadow-[rgba(255,255,255,0.2)_0px_4px_10px] flex justify-between items-center px-6 relative">
      <a href="#">
        <i className="fa-solid fa-tooth fa-flip-horizontal hover:text-cyan-400 text-3xl md:text-5xl py-1 px-2 md:py-2 md:px-3 border-4 border-gray-700 hover:border-cyan-400 rounded-full duration-200"></i>
      </a>

      {/* Desktop NavBar */}
      <div className="hidden lg:flex">
        <NavBar isMobile={false} />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-[6px] group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-full h-[4px] rounded transition-all duration-500 ${
            isOpen ? "bg-cyan-400 rotate-45 translate-y-[10px]" : "bg-[#f3f4f6]"
          }`}
        ></div>
        <div
          className={`w-[75%] h-[4px] rounded transition-all duration-500 ${
            isOpen ? "opacity-0" : "bg-[#f3f4f6]"
          }`}
        ></div>
        <div
          className={`w-full h-[4px] rounded transition-all duration-500 ${
            isOpen
              ? "bg-cyan-400 -rotate-45 -translate-y-[10px]"
              : "bg-[#f3f4f6]"
          }`}
        ></div>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-[80px] md:top-[100px] left-0 w-full bg-gray-800 py-4 shadow-2xl border-t border-gray-700 transition-all duration-300 transform origin-top z-10 ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <NavBar isMobile={true} closeMenu={closeMenu} />
      </div>
    </div>
  );
}
