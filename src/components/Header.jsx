import { useState } from "react";
import NavBar from "./NavBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full bg-gray-900 text-gray-100 h-[100px] shadow-[rgba(255,255,255,0.2)_0px_4px_10px] flex justify-between items-center px-6 relative">
      <a href="#">
        <i className="fa-solid fa-tooth fa-flip-horizontal fa-xl hover:text-cyan-400 text-5xl p-3 border-4 border-gray-700 hover:border-cyan-400 rounded-[50%] duration-200"></i>
      </a>

      <div className="hidden lg:flex">
        <NavBar isMobile={false} />
      </div>

      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <i
          className={`fa-solid ${
            isOpen ? "fa-xmark" : "fa-bars"
          } fa-xl hover:text-cyan-300 text-4xl p-3 duration-200 cursor-pointer`}
        ></i>
      </button>

      <div
        className={`lg:hidden absolute top-[100px] left-0 w-full bg-gray-800 py-4 shadow-2xl border-t border-gray-700 transition-all duration-300 transform origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <NavBar isMobile={true} closeMenu={closeMenu} />
      </div>
    </div>
  );
}
