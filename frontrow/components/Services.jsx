"use client";

import { useState, useEffect } from "react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      number: "01",
      title: "Prospect-to-Placement Program",
      tagline: "Find. Quality. Place. Perform.",
      description:
        "We help companies find top-tier, commission-ready sales talent, especially students and young professionals hungry to prove themselves.",
      features: [
        "Research high-quality leads based on your ideal candidate",
        "Personalised outreach via LinkedIn, email, and other platforms",
        "Pre-screening, shortlisting, and interview coordination",
        "Onboarding and integration support",
        "Ongoing performance tracking and coaching",
      ],
      outcome:
        "You get a fully-managed talent pipeline that delivers motivated salespeople who don't just show up, they close.",
      color: "from-[#8b9d7c] to-[#6b7d5c]",
      icon: "👥",
    },
    {
      number: "02",
      title: "Social Media Growth & Management",
      tagline: "Stand out. Stay consistent. Get results.",
      description:
        "We turn your social media channels into powerful brand magnets. Whether you're building authority on LinkedIn or going viral on Instagram, we plan, post, and grow with purpose.",
      features: [
        "Custom content strategy (posts, stories, reels, etc.)",
        "Weekly content creation & scheduling",
        "Engagement tactics to grow your audience",
        "Analytics and monthly reports",
        "Platform-specific growth (Instagram, LinkedIn, Facebook)",
      ],
      outcome:
        "A consistent, branded presence that attracts, educates, and converts your ideal audience.",
      color: "from-[#6b7d5c] to-[#556b47]",
      icon: "📱",
    },
    {
      number: "03",
      title: "Paid Advertising Campaigns",
      tagline: "Spend smart. Scale fast.",
      description:
        "Get in front of the right people at the right time with ROI-focused ad campaigns across Meta, Google, and beyond.",
      features: [
        "Campaign strategy and audience targeting",
        "Ad creative and copywriting",
        "A/B testing and optimization",
        "Budget management",
        "Weekly performance reports",
      ],
      outcome:
        "High-converting traffic, more leads, and measurable results all from ads that actually work.",
      color: "from-[#9bae8c] to-[#7a8c6d]",
      icon: "🎯",
    },
    {
      number: "04",
      title: "Business Account Setup & Optimization",
      tagline: "Your online identity, built right from Day 1.",
      description:
        "Before people trust your brand, they Google you. We make sure you show up strong across all platforms.",
      features: [
        "Account creation on key platforms (Instagram, LinkedIn, Facebook)",
        "Business info optimization (bios, CTAs, links, highlights)",
        "Brand-aligned visuals and covers",
        "Profile SEO for discoverability",
      ],
      outcome:
        "Professional, conversion-ready profiles that make the right first impression and attract your ideal clients.",
      color: "from-[#c9b896] to-[#a89873]",
      icon: "⚙️",
    },
    {
      number: "05",
      title: "Email Marketing Campaigns",
      tagline: "Emails people actually want to open.",
      description:
        "We turn your email list into a sales machine keeping leads engaged and guiding them toward action.",
      features: [
        "Campaign planning and email copywriting",
        "Audience segmentation and automation",
        "Performance tracking (open rates, CTRs, conversions)",
        "A/B testing for constant improvement",
      ],
      outcome:
        "Stronger relationships, better engagement, and increased sales straight from the inbox.",
      color: "from-[#7a8c6d] to-[#556b47]",
      icon: "📧",
    },
    {
      number: "06",
      title: "Affiliate Marketing Systems",
      tagline: "Turn Your Customers Into Your Sales Team.",
      description:
        "We build and manage affiliate programs that drive scalable, low-risk revenue through word-of-mouth and referral-based promotion.",
      features: [
        "Strategy and structure for your affiliate program",
        "Branded dashboards for affiliates",
        "Custom affiliate recruitment funnels",
        "Commission tracking and payouts",
        "Ongoing management and optimization",
      ],
      outcome:
        "Scalable revenue through a network of motivated affiliates promoting your brand.",
      color: "from-[#8b9d7c] to-[#6b7d5c]",
      icon: "🤝",
    },
  ];

  const platforms = [
    {
      name: "Shopify",
      description:
        "Ecommerce that sells. We build, optimize, and manage Shopify stores designed to convert from clean product pages to seamless checkout flows.",
      icon: "🛍️",
    },
    {
      name: "Etsy",
      description:
        "Creative commerce, optimized. We help Etsy sellers grow through optimized listings, SEO, and marketing strategies that drive traffic and turn browsers into buyers.",
      icon: "🎨",
    },
    {
      name: "TikTok Shop",
      description:
        "Turning views into purchases. We help brands succeed on TikTok Shop with viral content strategies, optimized listings, and direct-to-cart conversions.",
      icon: "🎬",
    },
  ];

  const tools = [
    { name: "Meta Business Suite", desc: "Instagram & Facebook mastery" },
    { name: "Google Ads", desc: "Intent meets conversion" },
    { name: "LinkedIn", desc: "B2B done right" },
    { name: "Canva", desc: "Visuals that pop" },
  ];

  const b2bServices = [
    {
      title: "B2B PERFORMANCE MARKETING",
      description:
        "Drive high-value lead generation through data-driven performance marketing strategies, leveraging paid search, LinkedIn ABM, and targeted placements to put your brand in front of the right decision-makers.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
      gradient: "from-[#2d3e2e] to-[#1a2419]",
    },
    {
      title: "B2B CONTENT MARKETING",
      description:
        "We create SEO-optimized blogs, white papers, video content, and case studies that position your brand as an authority and nurture leads through the sales funnel.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      gradient: "from-[#556b47] to-[#3d4f3e]",
    },
    {
      title: "B2B CRM & MARKETING AUTOMATION",
      description:
        "Streamline lead nurturing with email marketing, automated workflows, and CRM integrations, ensuring personalized engagement at every stage of the buyer journey.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      gradient: "from-[#6b7d5c] to-[#4a5c3e]",
    },
  ];

  const successStories = [
    {
      title:
        "How We Drove a 6x Increase in Users Generated for an International Product Management SaaS",
      category: "B2B MARKETING",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
    },
    {
      title:
        "Achieving scalable growth with server-side tracking and consent-based KPIs",
      category: "B2B MARKETING",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
    },
    {
      title:
        "We amplified brand visibility and generated demand in a new market",
      category: "B2B MARKETING",
      image:
        "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800",
    },
    {
      title:
        "Boosting awareness and improving engagement with distributor websites",
      category: "B2B MARKETING",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
    },
  ];

  const brands = [
    "Remote",
    "Pipedrive",
    "Phrase",
    "Bitwarden",
    "Asana",
    "Antalis",
    "Facelift",
    "Learnship",
    "Feedzai",
    "SportFive",
  ];

  return (
    <div className="bg-[#f5f1e8] overflow-hidden">
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-25px) translateX(5px);
          }
        }
        @keyframes wave {
          0%,
          100% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(15px) translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateX(-10px) translateY(-25px) rotate(-5deg);
          }
          75% {
            transform: translateX(10px) translateY(-15px) rotate(3deg);
          }
        }
        @keyframes shimmerSlide {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        @keyframes borderGlow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(201, 184, 150, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(201, 184, 150, 0.6),
              0 0 60px rgba(107, 125, 92, 0.3);
          }
        }
        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0.5);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }
        @keyframes slideInDiagonal {
          from {
            opacity: 0;
            transform: translate(-50px, 50px) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg);
          }
        }
        @keyframes scrollInfinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .slide-in-left {
          animation: slideInFromLeft 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .slide-in-right {
          animation: slideInFromRight 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .slide-in-bottom {
          animation: slideInFromBottom 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .slide-in-top {
          animation: slideInFromTop 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-scale {
          animation: fadeInScale 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .float-animate {
          animation: float 6s ease-in-out infinite;
        }
        .wave-animate {
          animation: wave 5s ease-in-out infinite;
        }
        .shimmer-slide {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(201, 184, 150, 0.4),
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmerSlide 3s infinite;
        }
        .border-glow {
          animation: borderGlow 2s ease-in-out infinite;
        }
        .rotate-in {
          animation: rotateIn 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bounce-animate {
          animation: bounce 2s ease-in-out infinite;
        }
        .expand-width {
          animation: expandWidth 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .slide-diagonal {
          animation: slideInDiagonal 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-lift {
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-lift:hover {
          transform: translateY(-20px) scale(1.05);
          box-shadow: 0 30px 60px rgba(45, 62, 46, 0.3);
        }
        .scroll-animate {
          animation: scrollInfinite 30s linear infinite;
        }
        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.5s;
        }
        .stagger-6 {
          animation-delay: 0.6s;
        }
      `}</style>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#2d3e2e] via-[#3d4f3e] to-[#1a2419] text-white pt-32 pb-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-[#6b7d5c] rounded-full blur-3xl float-animate"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#8b9d7c] rounded-full blur-3xl wave-animate"
            style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#c9b896] rounded-full blur-3xl float-animate"
            style={{
              transform: `translate(-50%, -50%) translateY(${
                scrollY * 0.15
              }px)`,
              animationDelay: "2s",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-bold text-[#c9b896] mb-6 tracking-[0.3em] uppercase slide-in-top">
              Our Services
            </p>
            <h1 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight slide-in-left">
              WE DON'T DO{" "}
              <span className="font-light italic text-[#c9b896]">
                Guesswork
              </span>
              <br />
              <span className="slide-in-right inline-block">
                WE BUILD <span className="text-[#c9b896]">SYSTEMS</span>
              </span>
            </h1>
            <p className="text-xl text-[#e8e4dc] mb-12 leading-relaxed max-w-3xl mx-auto font-light slide-in-bottom stagger-2">
              Most marketing agencies sell you followers. We deliver results.
              Whether it's filling your sales pipeline or running profitable
              ads, our work is always rooted in strategy.
            </p>
            <div className="flex flex-wrap gap-6 justify-center slide-in-bottom stagger-3">
              <button className="px-12 py-5 bg-[#c9b896] text-[#2d3e2e] rounded-full font-semibold text-lg hover:scale-110 hover:shadow-2xl transition-all duration-500 flex items-center space-x-3 group relative overflow-hidden">
                <span className="absolute inset-0 shimmer-slide"></span>
                <span className="relative">Book a Free Call</span>
                <span className="text-xl group-hover:translate-x-3 transition-transform duration-300 relative">
                  →
                </span>
              </button>
              <button className="px-12 py-5 border-2 border-[#c9b896] text-[#c9b896] rounded-full font-semibold text-lg hover:bg-[#c9b896] hover:text-[#2d3e2e] transition-all duration-500 hover:scale-110">
                Explore Services
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#6b7d5c]/20 hover:border-[#c9b896]/50 hover:bg-white/10 transition-all duration-500 hover-lift slide-in-bottom stagger-1">
              <div className="text-5xl mb-4 opacity-80 bounce-animate">⚡</div>
              <h3 className="font-semibold text-xl mb-2 text-[#c9b896]">
                Performance-Driven
              </h3>
              <p className="text-[#e8e4dc] text-sm font-light">
                Results that matter
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#6b7d5c]/20 hover:border-[#c9b896]/50 hover:bg-white/10 transition-all duration-500 hover-lift slide-in-bottom stagger-2">
              <div
                className="text-5xl mb-4 opacity-80 bounce-animate"
                style={{ animationDelay: "0.3s" }}
              >
                🎯
              </div>
              <h3 className="font-semibold text-xl mb-2 text-[#c9b896]">
                Strategic Approach
              </h3>
              <p className="text-[#e8e4dc] text-sm font-light">
                No guesswork here
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#6b7d5c]/20 hover:border-[#c9b896]/50 hover:bg-white/10 transition-all duration-500 hover-lift slide-in-bottom stagger-3">
              <div
                className="text-5xl mb-4 opacity-80 bounce-animate"
                style={{ animationDelay: "0.6s" }}
              >
                🔄
              </div>
              <h3 className="font-semibold text-xl mb-2 text-[#c9b896]">
                Ongoing Optimization
              </h3>
              <p className="text-[#e8e4dc] text-sm font-light">
                Constant improvement
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#6b7d5c]/20 hover:border-[#c9b896]/50 hover:bg-white/10 transition-all duration-500 hover-lift slide-in-bottom stagger-4">
              <div
                className="text-5xl mb-4 opacity-80 bounce-animate"
                style={{ animationDelay: "0.9s" }}
              >
                💎
              </div>
              <h3 className="font-semibold text-xl mb-2 text-[#c9b896]">
                Transparent Process
              </h3>
              <p className="text-[#e8e4dc] text-sm font-light">
                Simple and clear
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-[#f5f1e8] to-[#e8e4dc] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#6b7d5c] rounded-full blur-3xl wave-animate"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 fade-scale">
            <h2 className="text-6xl font-bold mb-6 text-[#2d3e2e] tracking-tight">
              OUR{" "}
              <span className="font-light italic text-[#556b47]">SERVICES</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#6b7d5c] to-[#c9b896] mx-auto expand-width"></div>
            <p className="text-lg text-[#5a5a5a] max-w-4xl mx-auto font-light mt-6">
              Six powerful solutions designed to accelerate your growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer hover-lift ${
                  index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                } stagger-${index + 1}`}
                onClick={() => setActiveService(index)}
              >
                <div className="absolute inset-0 shimmer-slide opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}
                ></div>

                <div className="absolute inset-0 border-glow opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                <div className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-6xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 rotate-in">
                      {service.icon}
                    </div>
                    <span
                      className={`text-8xl font-light opacity-5 bg-gradient-to-br ${service.color} bg-clip-text text-transparent group-hover:opacity-15 transition-all duration-700`}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold mb-3 text-[#2d3e2e] group-hover:text-[#556b47] transition-all duration-500 group-hover:translate-x-2">
                    {service.title}
                  </h3>

                  <p className="text-lg font-medium text-[#6b7d5c] mb-4 italic">
                    {service.tagline}
                  </p>

                  <p className="text-[#5a5a5a] mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        style={{
                          transitionDelay: `${idx * 0.1}s`,
                          transform: "translateX(-20px)",
                        }}
                      >
                        <span className="text-[#6b7d5c] text-xl mt-1 transform group-hover:scale-125 transition-transform duration-300">
                          ✓
                        </span>
                        <span className="text-[#5a5a5a] text-sm font-light group-hover:translate-x-2 transition-transform duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`p-5 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 border border-[#6b7d5c]/20 group-hover:border-[#6b7d5c]/50 transition-all duration-500 group-hover:scale-105`}
                  >
                    <p className="text-sm font-light text-[#2d3e2e]">
                      <span className="font-semibold text-[#556b47]">
                        Outcome:
                      </span>{" "}
                      {service.outcome}
                    </p>
                  </div>

                  <button className="mt-6 px-8 py-3 bg-[#556b47] text-[#f5f1e8] rounded-full font-semibold hover:scale-110 hover:bg-[#6b7d5c] transition-all duration-500 flex items-center space-x-2 group relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative">Learn More</span>
                    <span className="text-xl group-hover:translate-x-2 transition-transform duration-300 relative">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Marketing Services */}
      <section className="py-20 bg-gradient-to-br from-[#f5f1e8] to-[#e8e4dc] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#6b7d5c] rounded-full blur-3xl wave-animate"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 fade-scale">
            <p className="text-sm font-bold text-[#556b47] mb-4 tracking-[0.3em] uppercase">
              B2B Marketing Services
            </p>
            <h2 className="text-6xl font-bold mb-6 text-[#2d3e2e] tracking-tight">
              OUR{" "}
              <span className="font-light italic text-[#556b47]">
                METHODOLOGY
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#6b7d5c] to-[#c9b896] mx-auto expand-width"></div>
            <p className="text-lg text-[#5a5a5a] max-w-4xl mx-auto font-light mt-6">
              Front Row's methodology is centered around creating sustainable,
              scalable growth for businesses with complex sales cycles. We
              understand that B2B buyers are more informed, more selective, and
              require multiple decision-making touchpoints before making a call.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {b2bServices.map((service, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden shadow-2xl hover-lift ${
                  index === 0
                    ? "slide-in-left"
                    : index === 1
                    ? "slide-in-bottom"
                    : "slide-in-right"
                } stagger-${index + 1}`}
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-90 group-hover:opacity-75 transition-opacity duration-500`}
                  ></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#c9b896] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed mb-6 opacity-90">
                    {service.description}
                  </p>
                  <button className="px-6 py-3 bg-[#c9b896] text-[#2d3e2e] rounded-full font-semibold hover:scale-110 transition-all duration-300 flex items-center space-x-2 group relative overflow-hidden">
                    <span className="absolute inset-0 shimmer-slide"></span>
                    <span className="relative">Learn More</span>
                    <span className="text-lg group-hover:translate-x-2 transition-transform duration-300 relative">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Success Stories */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="slide-in-left">
                <p className="text-sm font-bold text-[#556b47] mb-4 tracking-[0.3em] uppercase">
                  Our Work
                </p>
                <h2 className="text-6xl font-bold mb-6 text-[#2d3e2e] tracking-tight">
                  B2B SUCCESS{" "}
                  <span className="font-light italic text-[#556b47]">
                    STORIES
                  </span>
                </h2>
              </div>
              <div className="slide-in-right">
                <p className="text-lg text-[#5a5a5a] leading-relaxed font-light mb-6">
                  Long sales cycles, multi-touchpoint customer journeys, and
                  intricate account-level often challenge marketers.
                </p>
                <p className="text-lg text-[#5a5a5a] leading-relaxed font-light mb-8">
                  As B2B performance marketing specialists, we dive deep into
                  the data, crafting customized full-funnel marketing campaigns
                  that deliver tangible bottom-line value and maximize ROI.
                </p>
                <button className="px-10 py-4 border-2 border-[#556b47] text-[#556b47] rounded-full font-semibold hover:bg-[#556b47] hover:text-white transition-all duration-500 flex items-center space-x-3 group">
                  <span>Explore All Work</span>
                  <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer hover-lift slide-in-bottom stagger-${
                    index + 1
                  }`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d3e2e] via-[#2d3e2e]/50 to-transparent opacity-80"></div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-[#556b47] text-white text-xs font-medium px-3 py-1 rounded-full">
                      {story.category}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-base font-semibold leading-tight group-hover:text-[#c9b896] transition-colors duration-300">
                      {story.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="py-20 bg-gradient-to-br from-[#2d3e2e] to-[#1a2419] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#c9b896] rounded-full blur-3xl float-animate"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 slide-in-top">
            <p className="text-sm font-bold text-[#c9b896] mb-4 tracking-[0.3em] uppercase">
              Platform Expertise
            </p>
            <h2 className="text-6xl font-bold mb-6 tracking-tight">
              WHERE WE{" "}
              <span className="font-light italic text-[#c9b896]">Excel</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#c9b896] to-[#6b7d5c] mx-auto expand-width"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className={`group relative p-10 rounded-2xl bg-gradient-to-br from-[#2d3e2e]/80 to-[#1a2419]/80 backdrop-blur-sm border border-[#6b7d5c]/30 hover:border-[#c9b896] transition-all duration-700 cursor-pointer hover-lift ${
                  index === 0
                    ? "slide-in-left"
                    : index === 1
                    ? "slide-in-bottom"
                    : "slide-in-right"
                } stagger-${index + 1}`}
                onMouseEnter={() => setHoveredPlatform(index)}
                onMouseLeave={() => setHoveredPlatform(null)}
                style={{
                  transform:
                    hoveredPlatform === index
                      ? "perspective(1000px) rotateY(5deg) rotateX(5deg)"
                      : "",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6b7d5c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                <div className="absolute inset-0 shimmer-slide opacity-0 group-hover:opacity-100 rounded-2xl"></div>

                <div className="text-6xl mb-6 transform group-hover:scale-150 group-hover:rotate-12 transition-all duration-700 relative z-10 rotate-in">
                  {platform.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-[#c9b896] transition-all duration-500 relative z-10 group-hover:translate-x-3">
                  {platform.name}
                </h3>
                <p className="text-[#e8e4dc] leading-relaxed font-light relative z-10 group-hover:translate-x-2 transition-transform duration-500">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-[#c9b896] to-[#a89873] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl wave-animate"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 fade-scale">
            <h2 className="text-6xl font-bold mb-6 text-[#2d3e2e] tracking-tight">
              TOOLS WE <span className="font-light italic">Master</span>
            </h2>
            <div className="w-32 h-1 bg-[#2d3e2e] mx-auto expand-width"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`p-8 bg-[#2d3e2e] text-white rounded-2xl hover:scale-110 hover:-rotate-3 transition-all duration-700 cursor-pointer hover:shadow-2xl group slide-diagonal stagger-${
                  index + 1
                } relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6b7d5c] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-2xl"></div>
                <h3 className="text-2xl font-bold mb-3 text-[#c9b896] group-hover:text-white transition-all duration-500 group-hover:scale-110 inline-block relative">
                  {tool.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></span>
                </h3>
                <p className="text-[#e8e4dc] text-sm font-light group-hover:translate-y-1 transition-transform duration-300">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#3d4f3e] to-[#2d3e2e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9b896] rounded-full blur-3xl float-animate"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 slide-in-top">
            <p className="text-sm font-bold text-[#c9b896] mb-4 tracking-[0.3em] uppercase">
              What Clients Say
            </p>
            <h2 className="text-6xl font-bold tracking-tight">
              REAL{" "}
              <span className="font-light italic text-[#c9b896]">Results</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#c9b896] to-[#6b7d5c] mx-auto expand-width mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="p-10 bg-gradient-to-br from-[#2d3e2e]/80 to-[#1a2419]/80 backdrop-blur-sm rounded-2xl border border-[#6b7d5c]/30 hover:border-[#c9b896] transition-all duration-700 hover-lift group slide-in-left relative overflow-hidden">
              <div className="absolute inset-0 shimmer-slide opacity-0 group-hover:opacity-100"></div>
              <div className="text-6xl text-[#c9b896] mb-6 font-serif opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-125 inline-block">
                "
              </div>
              <p className="text-xl leading-relaxed mb-8 font-light relative z-10 group-hover:translate-x-2 transition-transform duration-500">
                We brought in SFB to help find new sales reps, and within a few
                weeks, we had three closers already making us revenue.
              </p>
              <div className="border-t border-[#6b7d5c]/30 pt-6 relative z-10">
                <p className="font-semibold text-lg text-[#c9b896] group-hover:translate-x-2 transition-transform duration-300">
                  Founder
                </p>
                <p
                  className="text-[#e8e4dc] font-light group-hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: "0.1s" }}
                >
                  Blacksmith Ltd
                </p>
              </div>
            </div>

            <div className="p-10 bg-gradient-to-br from-[#2d3e2e]/80 to-[#1a2419]/80 backdrop-blur-sm rounded-2xl border border-[#6b7d5c]/30 hover:border-[#c9b896] transition-all duration-700 hover-lift group slide-in-right relative overflow-hidden">
              <div className="absolute inset-0 shimmer-slide opacity-0 group-hover:opacity-100"></div>
              <div className="text-6xl text-[#c9b896] mb-6 font-serif opacity-30 group-hover:opacity-60 transition-all duration-500 group-hover:scale-125 inline-block">
                "
              </div>
              <p className="text-xl leading-relaxed mb-8 font-light relative z-10 group-hover:translate-x-2 transition-transform duration-500">
                Our Instagram was dead. They brought it back to life with
                content that actually connects.
              </p>
              <div className="border-t border-[#6b7d5c]/30 pt-6 relative z-10">
                <p className="font-semibold text-lg text-[#c9b896] group-hover:translate-x-2 transition-transform duration-300">
                  Brand Owner
                </p>
                <p
                  className="text-[#e8e4dc] font-light group-hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: "0.1s" }}
                >
                  Khaadi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-20 bg-gradient-to-r from-[#c9b896] via-[#b8a786] to-[#c9b896] overflow-hidden">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold text-[#2d3e2e] mb-2 tracking-[0.3em] uppercase">
            Our Brand Partners
          </p>
        </div>

        <div className="relative">
          <div className="flex space-x-12 scroll-animate">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-6 bg-[#2d3e2e] rounded-2xl text-white font-bold text-2xl hover:bg-[#556b47] transition-colors duration-300 whitespace-nowrap"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#2d3e2e] via-[#3d4f3e] to-[#1a2419] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#c9b896] rounded-full blur-3xl float-animate"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#6b7d5c] rounded-full blur-3xl float-animate"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-7xl font-bold mb-8 tracking-tight leading-tight fade-scale">
              LET'S GROW{" "}
              <span className="font-light italic text-[#c9b896]">Together</span>
            </h2>
            <p className="text-2xl mb-12 text-[#e8e4dc] leading-relaxed font-light max-w-2xl mx-auto slide-in-bottom stagger-2">
              You don't need a big agency — you need the right partner. Let's
              talk about how we can support your growth goals.
            </p>
            <div className="flex flex-wrap gap-6 justify-center slide-in-bottom stagger-3">
              <button className="px-12 py-5 bg-[#c9b896] text-[#2d3e2e] rounded-full font-semibold text-xl hover:scale-110 hover:shadow-2xl transition-all duration-500 flex items-center space-x-3 group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative">Book a Free Call</span>
                <span className="text-2xl group-hover:translate-x-3 group-hover:scale-125 transition-all duration-300 relative">
                  →
                </span>
              </button>
              <button className="px-12 py-5 border-2 border-[#c9b896] text-[#c9b896] rounded-full font-semibold text-xl hover:bg-[#c9b896] hover:text-[#2d3e2e] transition-all duration-500 hover:scale-110 hover:rotate-2">
                Send Us a Message
              </button>
            </div>
            <p className="mt-12 text-lg font-medium text-[#e8e4dc]/80 slide-in-bottom stagger-4">
              Need a Custom Solution? We're flexible. Let's create a marketing
              solution that fits your goals, team, and budget.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}