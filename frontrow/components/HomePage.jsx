"use client";
// sample commit for my github
import { useState, useEffect } from "react";

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (showLoader) {
    return (
      <div className="fixed inset-0 bg-[#0a0f1a] flex items-center justify-center z-50 animate-fadeIn">
        <div className="text-center">
          <h1 className="text-7xl font-black text-[#d4ff00] tracking-wider mb-4 animate-slideUp">
            FRONT ROW
          </h1>
          <p
            className="text-xl text-[#d4ff00] tracking-wide animate-slideUp"
            style={{ animationDelay: "0.2s" }}
          >
            Commerce Catalysts
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
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
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out;
        }
      `}</style>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-sm shadow-lg" : "bg-black"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-[#d4ff00] text-2xl font-black tracking-tight">
                FRONT ROW
              </span>
              <span className="text-white text-xs uppercase tracking-wider mt-1">
                Commerce Catalysts
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

            <button className="lg:hidden text-white">
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
        </nav>
      </header>

      {/* Video Hero Section */}
      <section className="relative h-screen mt-16">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
          <video
            className="w-full h-full object-cover opacity-60"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl animate-slideUp">
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Give New Life To Skin.
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              The powerful collection meets skin tone and corrects dark spots
              with our Bio-Renewal Peptide and a brightening lipid system for
              improved cell turnover and clarity while targeting signs of aging.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-[#2a4a3a] text-white rounded-full font-medium hover:bg-[#3a5a4a] transition-all hover:scale-105">
                EXPLORE COLLECTION BENEFITS
              </button>
              <button className="px-8 py-3 bg-[#2a4a3a] text-white rounded-full font-medium hover:bg-[#3a5a4a] transition-all hover:scale-105">
                THE CLEAN SKIN REVEAL REGIMEN
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <div className="w-16 h-1 bg-white"></div>
            <div className="w-16 h-1 bg-white/30"></div>
            <div className="w-16 h-1 bg-white/30"></div>
          </div>
        </div>
      </section>

      {/* Retail Media Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="mb-8 animate-slideInLeft">
            <p className="text-sm font-bold text-gray-600 mb-2 tracking-wider">
              SERVICES › RETAIL MEDIA
            </p>
            <h2 className="text-6xl font-black mb-4">
              RETAIL <span className="italic font-serif">MEDIA</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4 animate-slideInLeft">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400"
                alt="Retail 1"
                className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400"
                alt="Retail 2"
                className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="animate-slideInRight">
              <p className="text-xl text-gray-700 leading-relaxed">
                The future of commerce is happening at the point of purchase.
                Front Row's Retail Media solutions ensure your brand stays
                visible, competitive, and profitable on the world's leading
                marketplaces and retailer-owned ad networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Media Strategy Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-5xl font-black text-black mb-6">
              OPTIMIZE YOUR RETAIL MEDIA STRATEGY
            </h2>
            <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
              Retail Media is transforming digital advertising by shifting ad
              spend closer to the point of purchase. Unlike traditional display
              or social ads, Retail Media leverages first-party shopper data
              from major retailers like Amazon, Walmart, Target, Ulta, and
              Sephora to deliver hyper-relevant ads to high-intent consumers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 animate-scaleIn">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400"
                  alt="Strategy"
                  className="w-full h-full object-cover opacity-60 hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4 text-[#d4ff00]">
                  RETAIL MEDIA
                  <br />
                  ADVERTISING STRATEGY
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A successful Retail Media strategy leverages retailer-specific
                  algorithms, first-party data, and competitive insights to win
                  high-intent shoppers and drive measurable sales.
                </p>
                <button className="flex items-center space-x-2 text-[#d4ff00] font-bold hover:translate-x-2 transition-transform group">
                  <span>LEARN MORE</span>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-gradient-to-br from-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 animate-scaleIn"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400"
                  alt="Amazon"
                  className="w-full h-full object-cover opacity-60 hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4 text-[#d4ff00]">
                  AMAZON ADVERTISING
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Winning on Amazon requires more than just bidding on keywords.
                  We build full-funnel advertising strategies across Sponsored
                  Ads, DSP, and emerging formats to drive visibility,
                  conversions, and repeat purchases.
                </p>
                <button className="flex items-center space-x-2 text-[#d4ff00] font-bold hover:translate-x-2 transition-transform group">
                  <span>LEARN MORE</span>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-gradient-to-br from-[#d4ff00] to-[#b8e000] rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 animate-scaleIn"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
                  alt="Analytics"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#d4ff00] via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-4">
                  RETAIL MEDIA ANALYTICS
                </h3>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  Retail Media success is measured in data. Our analytics
                  approach connects media performance with sales outcomes,
                  ensuring every ad dollar is working harder to grow your brand.
                </p>
                <button className="flex items-center space-x-2 text-black font-bold hover:translate-x-2 transition-transform group">
                  <span>LEARN MORE</span>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Retail Media Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-5xl font-black text-black mb-8">
                What is Retail Media?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For CPG, beauty, health, and wellness brands, Retail Media is
                essential. The competition for shelf space has extended into the
                digital realm, where brands must now fight for visibility on
                retailer websites and marketplaces. A well-executed Retail Media
                strategy ensures your products appear at the top of search
                results, in sponsored placements, and across high-converting
                display networks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Front Row helps brands navigate this hyper competitive space
                with strategies that align performance marketing, retail
                partnerships, and first-party data insights to maximize ROI.
              </p>
            </div>

            <div className="animate-slideInRight">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300"
                  alt="Mobile 1"
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=300"
                  alt="Mobile 2"
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
                  alt="Mobile 3"
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300"
                  alt="Mobile 4"
                  className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black text-center mb-16 animate-slideUp">
            Retail Media: Frequently Asked Questions
          </h2>

          <div className="max-w-5xl mx-auto space-y-4">
            <FAQItem
              question="What is Retail Media, and why does it matter for my brand?"
              answer="Retail Media refers to advertising on retailer-owned platforms like Amazon, Walmart, Target, and others. It matters because it allows brands to reach high-intent shoppers at the point of purchase with first-party data, leading to higher conversion rates and ROI."
              isExpanded={expandedFAQ === 0}
              onToggle={() => setExpandedFAQ(expandedFAQ === 0 ? null : 0)}
            />
            <FAQItem
              question="How is Retail Media different from traditional digital advertising?"
              answer="Unlike traditional digital advertising, Retail Media leverages first-party shopper data directly from retailers. This means ads are shown to consumers who are already in a buying mindset, resulting in higher conversion rates and more efficient ad spend."
              isExpanded={expandedFAQ === 1}
              onToggle={() => setExpandedFAQ(expandedFAQ === 1 ? null : 1)}
            />
            <FAQItem
              question="What are the key components of a successful Retail Media strategy?"
              answer="A successful strategy includes: optimized product listings, strategic keyword targeting, competitive bid management, compelling creative assets, performance analytics, and continuous optimization based on sales data and market trends."
              isExpanded={expandedFAQ === 2}
              onToggle={() => setExpandedFAQ(expandedFAQ === 2 ? null : 2)}
            />
            <FAQItem
              question="How does Retail Media impact omnichannel marketing?"
              answer="Retail Media creates a seamless connection between online and offline shopping experiences. It allows brands to reach consumers across multiple touchpoints, from initial product discovery to final purchase, creating a unified brand experience."
              isExpanded={expandedFAQ === 3}
              onToggle={() => setExpandedFAQ(expandedFAQ === 3 ? null : 3)}
            />
            <FAQItem
              question="Why partner with Front Row for Retail Media?"
              answer="Front Row brings deep expertise in retail platforms, proprietary analytics tools, and proven strategies that drive measurable results. We combine performance marketing excellence with retail-specific insights to maximize your ROI and accelerate growth."
              isExpanded={expandedFAQ === 4}
              onToggle={() => setExpandedFAQ(expandedFAQ === 4 ? null : 4)}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl font-black text-[#d4ff00] mb-2">
              FRONT ROW
            </h3>
            <p className="text-gray-400">Commerce Catalysts</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavItem({ label, hasDropdown = false }) {
  return (
    <button className="text-white hover:text-[#d4ff00] font-medium text-sm tracking-wide transition-colors flex items-center space-x-1 group">
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

function FAQItem({ question, answer, isExpanded, onToggle }) {
  return (
    <div className="border-b border-gray-700 transition-all duration-300 hover:border-[#d4ff00]">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-bold text-white group-hover:text-[#d4ff00] transition-colors pr-8">
          {question}
        </span>
        <span
          className={`text-3xl font-light text-[#d4ff00] transition-transform duration-300 ${
            isExpanded ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-300 text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
