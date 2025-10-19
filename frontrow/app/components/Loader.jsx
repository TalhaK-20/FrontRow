import React from "react";

export default function PremiumLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#1a1f16] via-[#0f1410] to-[#2a2820] flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#556B2F] rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B7355] rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Rotating border decoration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] border border-[#6B8E23]/20 rounded-full animate-spin-slow"></div>
        <div className="absolute w-[500px] h-[500px] border border-[#D2B48C]/20 rounded-full animate-spin-reverse"></div>
      </div>

      {/* Main content */}
      <div className="relative text-center px-8 z-10">
        {/* Logo container with glow effect */}
        <div className="mb-12 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6B8E23] to-[#D2B48C] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
          <div className="relative w-32 h-32 mx-auto mb-8 animate-float">
            <img
              src="../../logo.png"
              alt="SFB Marketing"
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Company name with gradient text */}
        <h1 className="text-7xl font-black mb-6 animate-slideUp relative">
          <span className="bg-gradient-to-r from-[#8B9556] via-[#D2B48C] to-[#6B8E23] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            SFB Marketing
          </span>
          <br />
          <span
            className="bg-gradient-to-r from-[#D2B48C] via-[#C9A870] to-[#8B7355] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
            style={{ animationDelay: "0.5s" }}
          >
            Limited
          </span>
        </h1>

        {/* Tagline with elegant animation */}
        <p
          className="text-2xl tracking-[0.3em] text-[#D2B48C] mb-8 animate-fadeIn font-light uppercase"
          style={{ animationDelay: "0.3s" }}
        >
          Where Talent Meets Traffic
        </p>

        {/* Loading bar */}
        <div
          className="w-64 h-1 mx-auto bg-[#2a2820] rounded-full overflow-hidden"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="h-full bg-gradient-to-r from-[#6B8E23] via-[#D2B48C] to-[#8B7355] animate-loading-bar rounded-full"></div>
        </div>

        {/* Decorative lines */}
        <div className="absolute -left-32 top-1/2 w-24 h-px bg-gradient-to-r from-transparent to-[#6B8E23] animate-slideRight"></div>
        <div className="absolute -right-32 top-1/2 w-24 h-px bg-gradient-to-l from-transparent to-[#D2B48C] animate-slideLeft"></div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 4s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }

        .animate-slideRight {
          animation: slideRight 1s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animate-slideLeft {
          animation: slideLeft 1s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
