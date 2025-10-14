"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-black"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[#d4ff00] text-2xl font-black tracking-tight">
              SFB
            </span>
            <span className="text-white text-xs uppercase tracking-wider mt-1">
              Marketing Limited
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <NavItem label="SERVICES" hasDropdown />
            <NavItem label="CHANNELS" hasDropdown />
            <NavItem label="INDUSTRIES" hasDropdown />
            <NavItem label="OUR WORK" />
            <NavItem label="INSIGHTS" />
            <NavItem label="ABOUT US" />
            <NavItem label="CAREERS" />
            <NavItem label="CONTACT US" />
          </div>

          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <NavItem label="SERVICES" hasDropdown mobile />
              <NavItem label="CHANNELS" hasDropdown mobile />
              <NavItem label="INDUSTRIES" hasDropdown mobile />
              <NavItem label="OUR WORK" mobile />
              <NavItem label="INSIGHTS" mobile />
              <NavItem label="ABOUT US" mobile />
              <NavItem label="CAREERS" mobile />
              <NavItem label="CONTACT US" mobile />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavItem({ label, hasDropdown = false, mobile = false }) {
  return (
    <button className={`text-white hover:text-[#d4ff00] font-medium text-sm tracking-wide transition-colors flex items-center space-x-1 group ${mobile ? 'w-full justify-between' : ''}`}>
      <span>{label}</span>
      {hasDropdown && (
        <svg
          className="w-4 h-4 group-hover:translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </button>
  );
}
