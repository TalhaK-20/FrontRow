"use client";

import { useState } from "react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    "ALL",
    "RETAIL MEDIA",
    "SOCIAL MEDIA",
    "PAID ADS",
    "ECOMMERCE",
  ];

  const projects = [
    {
      title: "Maximizing effective ad spend through A/B testing",
      description:
        "We were approaching a pivotal Amazon event in the health and beauty category whose ads weren't engaging shoppers as much as they should.",
      category: "RETAIL MEDIA",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800",
      results: [
        "35% increase in CTR",
        "28% reduction in CPC",
        "2.4x ROAS improvement",
      ],
      color: "from-[#6b7d5c] to-[#4a5c3e]",
    },
    {
      title: "Scaling a global digital shelf on Amazon",
      description:
        "A global CPG leader needed our support regarding the operational management of their digital shelf across 11 countries, comprised of over 2,000 product listings per country.",
      category: "RETAIL MEDIA",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
      results: [
        "22,000+ listings optimized",
        "45% increase in visibility",
        "18% sales growth",
      ],
      color: "from-[#7a8c6d] to-[#556b47]",
    },
    {
      title:
        "Building a custom AMC dayparting analysis to drive incremental sales",
      description:
        "While monitoring the advertising performance for one of our clients, we identified a pattern in the day of the week, to better understand what was causing these issues.",
      category: "RETAIL MEDIA",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      results: [
        "Custom analytics dashboard",
        "32% efficiency improvement",
        "Data-driven optimization",
      ],
      color: "from-[#8b9d7c] to-[#6b7d5c]",
    },
    {
      title:
        "Implementing Sponsored Ads to boost visibility on crucial platforms",
      description:
        "A global Amazon vendor in the FMCG category turned to us to improve the management of their advertising on Tesco, the largest retail chain in the UK.",
      category: "RETAIL MEDIA",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      results: [
        "150% visibility increase",
        "3.2x return on ad spend",
        "Market leadership achieved",
      ],
      color: "from-[#9bae8c] to-[#7a8c6d]",
    },
    {
      title: "Instagram Revival for Fashion Brand",
      description:
        "Transformed a dormant Instagram account into a thriving community with engaging content and strategic growth tactics.",
      category: "SOCIAL MEDIA",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      results: [
        "280% follower growth",
        "5.8% engagement rate",
        "Brand awareness doubled",
      ],
      color: "from-[#c9b896] to-[#a89873]",
    },
    {
      title: "LinkedIn Authority Building for B2B SaaS",
      description:
        "Positioned a B2B SaaS company as a thought leader through strategic content and engagement campaigns.",
      category: "SOCIAL MEDIA",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
      results: [
        "450+ quality leads generated",
        "12 enterprise clients closed",
        "Industry recognition achieved",
      ],
      color: "from-[#b8a786] to-[#988568]",
    },
    {
      title: "Meta Ads Campaign for Wellness Brand",
      description:
        "Launched a high-converting Meta ads campaign that scaled a wellness brand from startup to market competitor.",
      category: "PAID ADS",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
      results: [
        "4.2x ROAS achieved",
        "65% reduction in CAC",
        "$2M+ in revenue driven",
      ],
      color: "from-[#6b7d5c] to-[#4a5c3e]",
    },
    {
      title: "Google Ads Optimization for Local Services",
      description:
        "Optimized Google Ads campaigns for a local service provider, focusing on high-intent keywords and geo-targeting.",
      category: "PAID ADS",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800",
      results: [
        "220% increase in qualified leads",
        "40% lower cost per lead",
        "5-star average rating boost",
      ],
      color: "from-[#7a8c6d] to-[#556b47]",
    },
    {
      title: "Shopify Store Build & Optimization",
      description:
        "Built and optimized a high-converting Shopify store for a DTC beauty brand with seamless checkout experience.",
      category: "ECOMMERCE",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800",
      results: [
        "Custom theme development",
        "72% cart abandonment reduction",
        "3.5x revenue in 6 months",
      ],
      color: "from-[#8b9d7c] to-[#6b7d5c]",
    },
    {
      title: "TikTok Shop Success Story",
      description:
        "Launched and scaled a TikTok Shop presence with viral content strategy and optimized product listings.",
      category: "ECOMMERCE",
      image:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800",
      results: [
        "2M+ video views",
        "15,000+ orders in 90 days",
        "Top seller status achieved",
      ],
      color: "from-[#9bae8c] to-[#7a8c6d]",
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const stats = [
    { number: "150+", label: "Projects Completed", icon: "📊" },
    { number: "$50M+", label: "Revenue Generated", icon: "💰" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "45+", label: "Active Clients", icon: "🤝" },
  ];

  return (
    <div className="bg-[#f5f1e8]">
      <style jsx>{`
        @keyframes fadeInUp {
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
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
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
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(201, 184, 150, 0.1),
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#2d3e2e] via-[#3d4f3e] to-[#1a2419] text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#6b7d5c] rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 w-72 h-72 bg-[#8b9d7c] rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fadeInUp">
            <p className="text-sm font-bold text-[#c9b896] mb-4 tracking-[0.3em] uppercase">
              Our Work
            </p>
            <h1 className="text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              WE'RE YOUR ECOMMERCE
              <br />
              <span className="text-[#c9b896] font-light italic">
                Navigator
              </span>
            </h1>
            <p className="text-xl text-[#e8e4dc] mb-12 leading-relaxed max-w-3xl mx-auto font-light">
              We expand your current business and your geographic scope with
              both strategic ecommerce guidance and implementation. From
              advertising management to content creation, we deliver results
              that matter.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-[#2d3e2e]/80 to-[#1a2419]/80 backdrop-blur-sm rounded-2xl border border-[#6b7d5c]/30 hover:border-[#c9b896]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 opacity-80">{stat.icon}</div>
                <div className="text-5xl font-light text-[#c9b896] mb-2 tracking-tight">
                  {stat.number}
                </div>
                <p className="text-[#e8e4dc] text-sm font-light tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-r from-[#f5f1e8] to-[#e8e4dc] top-20 z-30 border-b border-[#c9b896]/20 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full font-medium text-sm tracking-[0.15em] transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#556b47] text-[#f5f1e8] shadow-lg scale-105"
                    : "bg-white text-[#556b47] hover:bg-[#556b47]/10 border border-[#556b47]/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gradient-to-br from-[#f5f1e8] to-[#e8e4dc]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 group-hover:opacity-20 transition-opacity duration-700`}
                  ></div>

                  <div className="absolute top-6 left-6">
                    <span className="bg-[#556b47] text-[#f5f1e8] text-xs font-medium px-4 py-2 rounded-full tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="px-8 py-4 bg-[#c9b896] text-[#2d3e2e] rounded-full font-semibold text-base hover:scale-110 transition-all duration-300 flex items-center space-x-3 shadow-xl">
                      <span>View Case Study</span>
                      <span className="text-xl">→</span>
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#2d3e2e] group-hover:text-[#556b47] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-[#5a5a5a] mb-6 leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-[#c9b896]/30">
                    <p className="text-sm font-semibold text-[#556b47] mb-3 tracking-wide uppercase">
                      Key Results
                    </p>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <span className="text-[#6b7d5c] text-xl">✓</span>
                        <span className="text-[#5a5a5a] font-light">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d3e2e] to-[#1a2419] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <p className="text-sm font-bold text-[#c9b896] mb-4 tracking-[0.3em] uppercase">
              Our Process
            </p>
            <h2 className="text-6xl font-bold mb-6 tracking-tight">
              HOW WE{" "}
              <span className="font-light italic text-[#c9b896]">Deliver</span>
            </h2>
            <p className="text-xl text-[#e8e4dc] max-w-3xl mx-auto font-light">
              A proven methodology that turns strategy into measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="relative animate-slideInLeft group">
              <div className="absolute -top-4 -left-4 text-[10rem] font-light text-[#556b47]/20 leading-none group-hover:text-[#c9b896]/30 transition-colors duration-500">
                01
              </div>
              <div className="relative z-10 pt-16">
                <h3 className="text-2xl font-semibold mb-4 text-[#c9b896]">
                  Discover
                </h3>
                <p className="text-[#e8e4dc] leading-relaxed font-light">
                  Deep dive into your business, audience, and goals to
                  understand what success looks like.
                </p>
              </div>
            </div>

            <div
              className="relative animate-slideInLeft group"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute -top-4 -left-4 text-[10rem] font-light text-[#556b47]/20 leading-none group-hover:text-[#c9b896]/30 transition-colors duration-500">
                02
              </div>
              <div className="relative z-10 pt-16">
                <h3 className="text-2xl font-semibold mb-4 text-[#c9b896]">
                  Strategize
                </h3>
                <p className="text-[#e8e4dc] leading-relaxed font-light">
                  Build a custom roadmap with clear KPIs, timelines, and
                  tactical execution plans.
                </p>
              </div>
            </div>

            <div
              className="relative animate-slideInLeft group"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="absolute -top-4 -left-4 text-[10rem] font-light text-[#556b47]/20 leading-none group-hover:text-[#c9b896]/30 transition-colors duration-500">
                03
              </div>
              <div className="relative z-10 pt-16">
                <h3 className="text-2xl font-semibold mb-4 text-[#c9b896]">
                  Execute
                </h3>
                <p className="text-[#e8e4dc] leading-relaxed font-light">
                  Launch campaigns with precision, leveraging best-in-class
                  tools and proven tactics.
                </p>
              </div>
            </div>

            <div
              className="relative animate-slideInLeft group"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="absolute -top-4 -left-4 text-[10rem] font-light text-[#556b47]/20 leading-none group-hover:text-[#c9b896]/30 transition-colors duration-500">
                04
              </div>
              <div className="relative z-10 pt-16">
                <h3 className="text-2xl font-semibold mb-4 text-[#c9b896]">
                  Optimize
                </h3>
                <p className="text-[#e8e4dc] leading-relaxed font-light">
                  Continuously refine and improve based on data, ensuring
                  maximum ROI and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-gradient-to-br from-[#3d4f3e] via-[#2d3e2e] to-[#1a2419] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slideInLeft">
                <p className="text-sm font-bold text-[#c9b896] mb-4 tracking-[0.3em] uppercase">
                  Featured Case Study
                </p>
                <h2 className="text-5xl font-bold mb-6 tracking-tight">
                  From Zero to
                  <br />
                  <span className="text-[#c9b896] font-light italic">
                    Market Leader
                  </span>
                </h2>
                <p className="text-xl text-[#e8e4dc] mb-8 leading-relaxed font-light">
                  How we transformed a startup wellness brand into a
                  multi-million dollar success story through strategic retail
                  media and social campaigns.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#c9b896]/20 hover:border-[#c9b896]/50 transition-all duration-300">
                    <div className="text-3xl font-light text-[#c9b896] mb-1">
                      350%
                    </div>
                    <div className="text-xs text-[#e8e4dc] font-light tracking-wide">
                      Revenue Growth
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#c9b896]/20 hover:border-[#c9b896]/50 transition-all duration-300">
                    <div className="text-3xl font-light text-[#c9b896] mb-1">
                      4.8x
                    </div>
                    <div className="text-xs text-[#e8e4dc] font-light tracking-wide">
                      ROAS
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-[#c9b896]/20 hover:border-[#c9b896]/50 transition-all duration-300">
                    <div className="text-3xl font-light text-[#c9b896] mb-1">
                      12
                    </div>
                    <div className="text-xs text-[#e8e4dc] font-light tracking-wide">
                      Months
                    </div>
                  </div>
                </div>

                <button className="px-10 py-4 bg-[#c9b896] text-[#2d3e2e] rounded-full font-semibold text-base hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center space-x-3 group">
                  <span>Read Full Case Study</span>
                  <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>

              <div className="animate-slideInRight">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                    alt="Case Study"
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-[#c9b896] text-[#2d3e2e] p-6 rounded-2xl shadow-2xl">
                    <p className="text-4xl font-light mb-1">$5.2M</p>
                    <p className="text-sm font-medium tracking-wide">
                      Total Revenue Generated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-gradient-to-br from-[#f5f1e8] to-[#e8e4dc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <p className="text-sm font-bold text-[#556b47] mb-4 tracking-[0.3em] uppercase">
              Client Testimonials
            </p>
            <h2 className="text-6xl font-bold mb-6 text-[#2d3e2e] tracking-tight">
              They{" "}
              <span className="font-light italic text-[#556b47]">Trusted</span>{" "}
              Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-white rounded-2xl border border-[#c9b896]/30 hover:border-[#6b7d5c] hover:shadow-xl transition-all duration-500 animate-scaleIn">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-lg text-[#5a5a5a] mb-6 leading-relaxed italic font-light">
                "SFB transformed our Amazon presence. Their retail media
                expertise drove a 45% increase in sales within 90 days."
              </p>
              <div className="border-t border-[#c9b896]/30 pt-4">
                <p className="font-semibold text-lg text-[#2d3e2e]">
                  Sarah Mitchell
                </p>
                <p className="text-[#6b7d5c] text-sm font-light">
                  VP Marketing, Beauty Co
                </p>
              </div>
            </div>

            <div
              className="p-8 bg-gradient-to-br from-[#6b7d5c] to-[#556b47] text-white rounded-2xl border border-[#c9b896] hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-scaleIn"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-1 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-lg mb-6 leading-relaxed italic font-light">
                "The best investment we made. Their data-driven approach and
                transparent reporting gave us confidence at every step."
              </p>
              <div className="border-t border-white/30 pt-4">
                <p className="font-semibold text-lg">James Rodriguez</p>
                <p className="text-[#e8e4dc] text-sm font-light">
                  CEO, TechStart Inc
                </p>
              </div>
            </div>

            <div
              className="p-8 bg-white rounded-2xl border border-[#c9b896]/30 hover:border-[#6b7d5c] hover:shadow-xl transition-all duration-500 animate-scaleIn"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-1 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-lg text-[#5a5a5a] mb-6 leading-relaxed italic font-light">
                "From strategy to execution, SFB delivered exceptional results.
                Our social media engagement increased 280% in 6 months."
              </p>
              <div className="border-t border-[#c9b896]/30 pt-4">
                <p className="font-semibold text-lg text-[#2d3e2e]">
                  Emily Chen
                </p>
                <p className="text-[#6b7d5c] text-sm font-light">
                  Brand Director, Lifestyle Brand
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#2d3e2e] via-[#3d4f3e] to-[#1a2419] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9b896] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fadeInUp">
            <h2 className="text-7xl font-bold mb-8 tracking-tight leading-tight">
              READY TO BE OUR
              <br />
              <span className="text-[#c9b896] font-light italic">
                Next Success Story?
              </span>
            </h2>
            <p className="text-2xl mb-12 text-[#e8e4dc] leading-relaxed font-light max-w-2xl mx-auto">
              Let's create something remarkable together. Your growth story
              starts with a conversation.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <button className="px-12 py-5 bg-[#c9b896] text-[#2d3e2e] rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 group">
                <span>Start Your Project</span>
                <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </button>
              <button className="px-12 py-5 border-2 border-[#c9b896] text-[#c9b896] rounded-full font-semibold text-lg hover:bg-[#c9b896] hover:text-[#2d3e2e] transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
