import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggelMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 m-2">
        {/* bg-black/60 :-bg-black makes the background black.
/60 means 60% transparency, so the background is semi-transparent.
This is useful for overlays or stylish UI effects. */}
        <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
          {/* left logo */}
          <img
            src={logo}
            alt="Logo"
            width={120}
            height={24}
            className="cursor-pointer"
          />
          {/* Center : Links {hidden on mobile} */}
          <div className="hidden md:flex space-x-6">
            <a href="#works" className="hover:text-neutral-300">
              How It's Works
            </a>
            <a href="#works" className="hover:text-neutral-300">
              Priceing
            </a>
            <a href="#works" className="hover:text-neutral-300">
              Testimonials
            </a>
          </div>
          {/* Right : Buttons (hidden on mobile) */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#" className="hover:text-neutral-200">
              Login
            </a>
            <a
              href="#"
              className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
            >
              Get Demo
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Start Free Trial
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggelMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <RiMenu3Fill /> : <RxCross2 />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {!isOpen && (
          <div className="md:hidden bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2 gap-3 flex flex-col items-center">
            <a href="#" className="hover:text-neutral-200">
              Product
            </a>
            <a href="#" className="hover:text-neutral-200">
              Pricing
            </a>
            <a href="#" className="hover:text-neutral-200">
              Resources
            </a>
            <a href="#" className="hover:text-neutral-200">
              Login
            </a>
            <a
              href="#"
              className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
            >
              Get a Demo
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Start Free Trial
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
