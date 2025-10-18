"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <span className="text-[#d4ff00] text-2xl font-black tracking-tight">
              SFB
            </span>
            <span className="text-white text-xs uppercase tracking-wider mt-1">
              Marketing Limited
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <NavItem label="SERVICES" href="/services" />
            <NavItem label="CHANNELS" href="/channels" hasDropdown />
            <NavItem label="INDUSTRIES" href="/industries" hasDropdown />
            <NavItem label="OUR WORK" href="/our-work" />
            <NavItem label="INSIGHTS" href="/insights" />
            <NavItem label="ABOUT US" href="/about" />
            <NavItem label="CAREERS" href="/careers" />
            <NavItem label="CONTACT US" href="/contact" />
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
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <NavItem label="SERVICES" href="/services" hasDropdown mobile />
              <NavItem label="CHANNELS" href="/channels" hasDropdown mobile />
              <NavItem label="INDUSTRIES" href="/industries" hasDropdown mobile />
              <NavItem label="OUR WORK" href="/our-work" mobile />
              <NavItem label="INSIGHTS" href="/insights" mobile />
              <NavItem label="ABOUT US" href="/about" mobile />
              <NavItem label="CAREERS" href="/careers" mobile />
              <NavItem label="CONTACT US" href="/contact" mobile />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavItem({ label, href, hasDropdown = false, mobile = false }) {
  return (
    <Link 
      href={href}
      className={`text-white hover:text-[#d4ff00] font-medium text-sm tracking-wide transition-colors flex items-center space-x-1 group ${mobile ? 'w-full justify-between py-2' : ''}`}
    >
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
    </Link>
  );
}