"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activePlatform, setActivePlatform] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);

  const testimonials = [
    {
      text: "Front Row is one of the leading agencies in Retail Media. We hold a close partnership with the team who are constantly at the forefront of the developments in our fast-paced industry. I am highly appreciative of both their expertise and their results-driven mindset.",
      author: "CORINNA HOHENLEITNER",
      position: "Director CEU, Activation, CRITEO",
      tag: "RETAIL MEDIA",
    },
    {
      text: "The Ecommerce Management team at Front Row provided exceptional Amazon services, from listing optimization to content creation, consulting and advertising. Their Amazon and further retail channels expertise helped us maximize our potential and reach a wider audience. I highly recommend [Front Row Ecommerce Management division] to anyone looking to grow their business on Amazon.",
      author: "SARAH JOHNSON",
      position: "Head of Digital, WELLNESS BRAND",
      tag: "RETAIL MEDIA",
    },
  ];

  const platforms = [
    {
      name: "ADFERENCE",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=300&fit=crop",
    },
    {
      name: "shopify",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    },
    {
      name: "REVOLVE",
      logo: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop",
    },
  ];

  const capabilities = [
    {
      title: "AMAZON MARKETPLACE GROWTH",
      subtitle:
        "Transform your brand's wellness, and CPG brands on Amazon through flexible partnership models that deliver strategic excellence and operational excellence.",
      image:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500",
      color: "bg-orange-500",
    },
    {
      title: "RETAIL MEDIA",
      subtitle:
        "Maximize your brand's visibility and profitability on leading marketplaces and retailer-owned ad networks with data-driven advertising strategies.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      color: "bg-red-900",
    },
    {
      title: "BRAND STRATEGY & CREATIVE CONTENT",
      subtitle:
        "Craft compelling brand narratives and visual identities that authentically differentiate your brand and strengthen consumer connections in an evolving marketplace.",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500",
      color: "bg-purple-900",
    },
    {
      title: "D2C MARKETING",
      subtitle:
        "Create meaningful consumer engagement strategies that connect with strategically targeted convert awareness into action and loyalty.",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500",
      color: "bg-red-700",
    },
    {
      title: "B2B MARKETING",
      subtitle:
        "Generate high-value leads and drive growth with performance-driven strategies tailored for complex B2B buying journeys.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500",
      color: "bg-blue-900",
    },
  ];

  const workItems = [
    {
      title: "Maximizing effective ad spend through A/B testing",
      description:
        "We were approaching a pivotal Amazon event in the health and beauty category whose ads weren't engaging shoppers as much as they should.",
      tag: "RETAIL MEDIA",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400",
    },
    {
      title: "Scaling a global digital shelf on Amazon",
      description:
        "A global CPG leader needed our support regarding the operational management of their digital shelf across 11 countries, comprised of over 2,000 product listings per country.",
      tag: "RETAIL MEDIA",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
    },
    {
      title:
        "Building a custom AMC dayparting analysis to drive incremental sales",
      description:
        "While monitoring the advertising performance for one of our clients, we identified a pattern in the day of the week, to better understand what was causing these issues.",
      tag: "RETAIL MEDIA",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    },
    {
      title:
        "Implementing Sponsored Ads to boost visibility on crucial platforms",
      description:
        "A global Amazon vendor in the FMCG category turned to us to improve the management of their advertising on Tesco, the largest retail chain in the UK.",
      tag: "RETAIL MEDIA",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    },
  ];

  const brandLogos = [
    "BOSCH",
    "essity",
    "HALO",
    "LEONARDO",
    "BLANCO",
    "SENNHEISER",
    "Owlet",
    "VIACOM",
    "Paulmann",
    "tesa",
    "RÖSLE",
    "Perrigo",
    "Unilever",
    "CAMPARI",
  ];

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

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextPlatform = () => {
    setActivePlatform((prev) => (prev + 1) % platforms.length);
  };

  const prevPlatform = () => {
    setActivePlatform(
      (prev) => (prev - 1 + platforms.length) % platforms.length
    );
  };

  const nextCapability = () => {
    setActiveCapability((prev) => (prev + 1) % capabilities.length);
  };

  const prevCapability = () => {
    setActiveCapability(
      (prev) => (prev - 1 + capabilities.length) % capabilities.length
    );
  };

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
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
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
        .animate-scroll {
          animation: scroll 30s linear infinite;
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

      {/* Our Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-bold text-gray-600 mb-2 tracking-wider">
              OUR WORK
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <h2 className="text-6xl font-black max-w-2xl animate-slideInLeft">
                WE'RE YOUR ECOMMERCE{" "}
                <span className="italic font-serif">NAVIGATOR</span>
              </h2>
              <div className="max-w-xl animate-slideInRight">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We expand your current business and your geographic scope with
                  both strategic ecommerce guidance and implementation. We help
                  your brand grow from advertising management and retail account
                  management to content creation and conversion optimization,
                  while developing your Shopify storefront and empowering you to
                  make data-driven decisions with Catapult, our proprietary
                  technology.
                </p>
                <button className="px-8 py-3 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white transition-all flex items-center space-x-2 group">
                  <span>EXPLORE ALL WORK</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-[#d4ff00] text-xs font-bold px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-black mb-2 group-hover:text-[#d4ff00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="text-sm font-bold hover:translate-x-2 transition-transform inline-block">
                  READ MORE →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners Scrolling Section */}
      <section className="py-16 bg-[#8b5a7d] overflow-hidden">
        <div className="mb-8">
          <p className="text-white text-sm font-bold tracking-wider text-center">
            OUR BRAND PARTNERS
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">
            {[...brandLogos, ...brandLogos].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12 flex items-center justify-center"
              >
                <span className="text-white text-3xl font-black opacity-80 hover:opacity-100 transition-opacity">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <p className="text-sm font-bold text-gray-400 mb-8 tracking-wider text-center">
            OUR TESTIMONIALS
          </p>

          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === activeTestimonial
                      ? "flex-1 opacity-100 scale-100"
                      : "flex-1 opacity-30 scale-95 blur-sm"
                  }`}
                >
                  <div className="text-left">
                    <div className="text-8xl text-[#d4ff00] mb-4 font-serif leading-none">
                      "
                    </div>
                    <p className="text-2xl font-light leading-relaxed mb-8">
                      {testimonial.text}
                    </p>
                    <div className="mt-8">
                      <p className="text-lg font-black mb-1">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-400 mb-3">
                        {testimonial.position}
                      </p>
                      <span className="inline-block bg-[#d4ff00] text-black text-xs font-bold px-3 py-1 rounded-full">
                        {testimonial.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-black mb-16 text-center">
            OUR PLATFORM PARTNERS
          </h2>

          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === activePlatform
                      ? "w-2/5 opacity-100 scale-100"
                      : "w-1/5 opacity-40 scale-90"
                  }`}
                >
                  <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                    <div className="aspect-video flex items-center justify-center p-8">
                      <span className="text-4xl font-black">
                        {platform.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevPlatform}
                className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                ←
              </button>
              <button
                onClick={nextPlatform}
                className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-12">
            <div className="lg:w-1/2">
              <h2 className="text-6xl font-black mb-6">
                DISCOVER ALL{" "}
                <span className="italic font-serif">CAPABILITIES</span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-xl text-gray-300 leading-relaxed">
                Individually, our capabilities are powerful. Together, they're
                even more dynamic—moving at the speed of commerce to uncover new
                opportunities for growth.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-6">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 transition-all duration-700 ${
                      index === activeCapability
                        ? "w-[600px] opacity-100"
                        : "w-[400px] opacity-60"
                    }`}
                  >
                    <div
                      className={`${capability.color} rounded-3xl overflow-hidden h-[500px] relative group cursor-pointer`}
                    >
                      <img
                        src={capability.image}
                        alt={capability.title}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <h3 className="text-3xl font-black mb-4">
                          {capability.title}
                        </h3>
                        <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                          {capability.subtitle}
                        </p>
                        <button className="inline-flex items-center space-x-2 bg-[#d4ff00] text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform w-fit group">
                          <span>DISCOVER</span>
                          <span className="text-xl group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevCapability}
                className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                ←
              </button>
              <button
                onClick={nextCapability}
                className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-[#d4ff00]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-slideInLeft">
              <p className="text-sm font-bold text-black mb-4 tracking-wider">
                CONTACT US
              </p>
              <h2 className="text-6xl font-black mb-6">
                LET'S START{" "}
                <span className="italic font-serif">A PARTNERSHIP</span>
              </h2>
            </div>
            <div className="lg:w-1/2 animate-slideInRight">
              <p className="text-xl text-black mb-8 leading-relaxed">
                Are you ready to accelerate your commerce growth? Pull up a seat
                and share your brand vision with us.
              </p>
              <button className="px-10 py-4 bg-black text-[#d4ff00] rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center space-x-3 group">
                <span>CONTACT US</span>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-black text-[#d4ff00] mb-4">
                FRONT ROW
              </h3>
              <p className="text-gray-400 text-sm">Commerce Catalysts</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">SERVICES</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  Retail Media
                </li>
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  Amazon Growth
                </li>
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  Brand Strategy
                </li>
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  D2C Marketing
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  About Us
                </li>
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  Our Work
                </li>
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  Careers
                </li>
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  Contact
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">CONNECT</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  LinkedIn
                </li>
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  Twitter
                </li>
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  Instagram
                </li>
                <li className="hover:text-[#d4ff00] cursor-pointer transition-colors">
                  Facebook
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Front Row. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#d4ff00] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#d4ff00] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#d4ff00] transition-colors">
                Cookie Policy
              </a>
            </div>
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