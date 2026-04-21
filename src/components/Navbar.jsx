import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur">
      <div className="max-w-8xl mx-auto px-3 sm:px-4">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="font-semibold text-white flex-shrink-0">
            <a href="#">
              <h1 className="text-xl sm:text-2xl md:text-4xl">
                Travel Mongolia
              </h1>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-4 xl:space-x-8 items-center">
            <a
              href="#home"
              className="text-white hover:text-blue-400 transition text-sm xl:text-lg"
            >
              HOME
            </a>
            <a
              href="#travels"
              className="text-white hover:text-green-400 transition text-sm xl:text-lg"
            >
              TRAVELS
            </a>
            <a
              href="#loan"
              className="text-white hover:text-purple-400 transition text-sm xl:text-lg"
            >
              LOAN
            </a>
            <a
              href="#about"
              className="text-white hover:text-blue-400 transition text-sm xl:text-lg"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="text-white hover:text-yellow-400 transition text-sm xl:text-lg"
            >
              CONTACT
            </a>
          </div>

          {/* Auth Buttons - Hidden on small mobile */}
          <div className="hidden md:flex gap-2 lg:gap-3 items-center flex-shrink-0">
            <button className="text-white border border-white rounded-lg px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm hover:bg-white hover:text-black transition">
              Login
            </button>
            <button className="text-white bg-blue-600 rounded-lg px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm hover:bg-blue-700 transition">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col space-y-1.5 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/90 border-t border-gray-700 pb-4 px-3 sm:px-4">
            <a
              href="#home"
              className="block text-white hover:text-blue-400 py-2 text-sm transition"
            >
              HOME
            </a>
            <a
              href="#travels"
              className="block text-white hover:text-green-400 py-2 text-sm transition"
            >
              TRAVELS
            </a>
            <a
              href="#loan"
              className="block text-white hover:text-purple-400 py-2 text-sm transition"
            >
              LOAN
            </a>
            <a
              href="#about"
              className="block text-white hover:text-blue-400 py-2 text-sm transition"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-yellow-400 py-2 text-sm transition"
            >
              CONTACT
            </a>
            <div className="flex gap-2 mt-4 md:hidden">
              <button className="flex-1 text-white border border-white rounded px-3 py-1.5 text-xs hover:bg-white hover:text-black transition">
                Login
              </button>
              <button className="flex-1 text-white bg-blue-600 rounded px-3 py-1.5 text-xs hover:bg-blue-700 transition">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
