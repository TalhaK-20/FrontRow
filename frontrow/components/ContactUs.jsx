"use client";

import { useState } from "react";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      subtitle: "Get a response within 24 hours",
      detail: "info@sfbmarketing.com",
      link: "mailto:info@sfbmarketing.com",
    },
    {
      icon: "📞",
      title: "Call Us",
      subtitle: "Mon-Fri, 9AM-6PM GMT",
      detail: "+44 7988 074798",
      link: "tel:+447988074798",
    },
    {
      icon: "💬",
      title: "Live Chat",
      subtitle: "Instant support available",
      detail: "Start a conversation",
      link: "#",
    },
    {
      icon: "📍",
      title: "Visit Us",
      subtitle: "Our office location",
      detail: "131 Cranbrook Road, Ilford",
      link: "#",
    },
  ];

  const services = [
    "Prospect-to-Placement Program",
    "Social Media Growth & Management",
    "Paid Advertising Campaigns",
    "Business Account Setup",
    "Email Marketing Campaigns",
    "Affiliate Marketing Systems",
    "Custom Solution",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not sure yet",
  ];

  const faqs = [
    {
      q: "How quickly can we get started?",
      a: "Most projects kick off within 5-7 business days after our discovery call and contract signing.",
    },
    {
      q: "What's your pricing model?",
      a: "We offer flexible pricing based on project scope, including monthly retainers, project-based fees, and performance-based models.",
    },
    {
      q: "Do you work with startups?",
      a: "Absolutely! We've helped numerous startups scale from zero to millions in revenue.",
    },
    {
      q: "What makes SFB different?",
      a: "We don't do guesswork. We build systems. Our data-driven approach and transparent reporting ensure measurable results.",
    },
  ];

  // Styling starts from here

  return (
    <div className="bg-[#F5F5DC]">
      <style jsx>{`
        @keyframes slideFromLeft {
          from {
            opacity: 0;
            transform: translateX(-120px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(120px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        @keyframes slideFromBottom {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
          }
          60% {
            transform: scale(1.1) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
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
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes rotateSlideIn {
          from {
            opacity: 0;
            transform: translateX(-80px) rotate(-8deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0);
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
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
        .slide-from-left {
          animation: slideFromLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .slide-from-right {
          animation: slideFromRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .slide-from-bottom {
          animation: slideFromBottom 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .pop-in {
          animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .fade-in-scale {
          animation: fadeInScale 0.8s ease-out forwards;
        }
        .slide-up-fade {
          animation: slideUpFade 0.8s ease-out forwards;
        }
        .rotate-slide-in {
          animation: rotateSlideIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .pulse-animation {
          animation: pulse 3s ease-in-out infinite;
        }
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        .card-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .card-3d:hover {
          transform: rotateY(5deg) rotateX(5deg) scale(1.05);
        }
        .luxury-shadow {
          box-shadow: 0 25px 70px rgba(85, 107, 47, 0.3),
            0 10px 40px rgba(0, 0, 0, 0.15);
        }
        .inner-shadow {
          box-shadow: inset 0 4px 20px rgba(85, 107, 47, 0.1);
        }
        .text-gradient {
          background: linear-gradient(135deg, #556b2f 0%, #8b7355 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .border-gradient {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
            linear-gradient(135deg, #556b2f, #8b7355) border-box;
        }
        .perspective-container {
          perspective: 1500px;
        }
        .slide-3d {
          transform-style: preserve-3d;
        }
      `}</style>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#2C3E2C] via-[#3D5740] to-[#4A5D3F] text-white pt-32 pb-20 overflow-hidden">
        {/* Professional Background */}
        <div className="absolute inset-0 opacity-[0.07]">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#8B7355]/20 rounded-full blur-3xl float-animation"></div>
          <div
            className="absolute bottom-20 right-10 w-80 h-80 bg-[#556B2F]/20 rounded-full blur-3xl float-animation"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl float-animation"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Content */}
            <div className="text-center mb-24">
              <div className="inline-block mb-8 slide-from-bottom">
                <span className="text-xs font-semibold text-[#D4AF37] tracking-[0.35em] uppercase border-2 border-[#D4AF37]/50 px-8 py-3 rounded-full backdrop-blur-sm bg-white/5">
                  Professional Consultation Services
                </span>
              </div>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light mb-10 leading-tight tracking-tight slide-from-left">
                Elevate Your Business
                <br />
                <span className="font-semibold text-gradient inline-block bg-gradient-to-r from-[#D4AF37] to-[#F5DEB3] bg-clip-text text-transparent">
                  Through Strategic Partnership
                </span>
              </h1>
              <p
                className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light slide-from-right"
                style={{ animationDelay: "0.2s" }}
              >
                Connect with our distinguished team of industry experts to
                explore bespoke solutions tailored to your unique business
                objectives and vision.
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="group relative pop-in luxury-shadow"
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#D4AF37] transition-all duration-700 cursor-pointer overflow-hidden card-3d">
                    {/* Shimmer Effect */}
                    <div className="shimmer-effect absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#8B7355]/0 to-[#556B2F]/0 group-hover:from-[#D4AF37]/10 group-hover:via-[#8B7355]/5 group-hover:to-[#556B2F]/10 transition-all duration-700"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#8B7355] flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {method.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3 font-light">
                        {method.subtitle}
                      </p>
                      <p className="text-sm text-white/90 font-medium">
                        {method.detail}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-gradient-to-br from-[#F5F5DC] via-[#E8DCC4] to-[#D4C5A8] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left Side - Form */}
              <div className="lg:col-span-3 perspective-container">
                <div className="slide-from-left slide-3d">
                  <div className="bg-white rounded-3xl luxury-shadow p-12 lg:p-14 border-2 border-[#556B2F]/10 hover:border-[#556B2F]/30 transition-all duration-700">
                    <div className="mb-12">
                      <div className="inline-block mb-6">
                        <span className="text-xs font-semibold text-[#556B2F] tracking-[0.3em] uppercase border border-[#556B2F]/30 px-6 py-2 rounded-full inner-shadow">
                          Contact Form
                        </span>
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-light mb-5 text-[#2C3E2C]">
                        Initiate Your{" "}
                        <span className="font-semibold text-[#556B2F]">
                          Transformation
                        </span>
                      </h2>
                      <p className="text-gray-600 font-light leading-relaxed text-lg">
                        Complete the form below and our dedicated team will
                        provide a comprehensive consultation proposal within 24
                        hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-7">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div
                          className="relative slide-up-fade"
                          style={{ animationDelay: "0.1s" }}
                        >
                          <label className="block text-sm font-semibold text-[#2C3E2C] mb-3 tracking-wide uppercase text-xs">
                            Full Name *
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#556B2F] text-xl">
                              👤
                            </span>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full pl-12 pr-5 py-4 rounded-xl border-2 transition-all duration-500 ${
                                focusedField === "name"
                                  ? "border-[#556B2F] shadow-xl ring-4 ring-[#556B2F]/20 scale-105"
                                  : "border-gray-300 hover:border-[#8B7355]"
                              } focus:outline-none bg-[#F5F5DC]/30 font-light`}
                              placeholder="John Anderson"
                            />
                          </div>
                        </div>

                        <div
                          className="relative slide-up-fade"
                          style={{ animationDelay: "0.15s" }}
                        >
                          <label className="block text-sm font-semibold text-[#2C3E2C] mb-3 tracking-wide uppercase text-xs">
                            Email Address *
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#556B2F] text-xl">
                              ✉️
                            </span>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full pl-12 pr-5 py-4 rounded-xl border-2 transition-all duration-500 ${
                                focusedField === "email"
                                  ? "border-[#556B2F] shadow-xl ring-4 ring-[#556B2F]/20 scale-105"
                                  : "border-gray-300 hover:border-[#8B7355]"
                              } focus:outline-none bg-[#F5F5DC]/30 font-light`}
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div
                          className="relative slide-up-fade"
                          style={{ animationDelay: "0.2s" }}
                        >
                          <label className="block text-sm font-semibold text-[#2C3E2C] mb-3 tracking-wide uppercase text-xs">
                            Phone Number
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#556B2F] text-xl">
                              📱
                            </span>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("phone")}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full pl-12 pr-5 py-4 rounded-xl border-2 transition-all duration-500 ${
                                focusedField === "phone"
                                  ? "border-[#556B2F] shadow-xl ring-4 ring-[#556B2F]/20 scale-105"
                                  : "border-gray-300 hover:border-[#8B7355]"
                              } focus:outline-none bg-[#F5F5DC]/30 font-light`}
                              placeholder="+44 7988 074798"
                            />
                          </div>
                        </div>

                        <div
                          className="relative slide-up-fade"
                          style={{ animationDelay: "0.25s" }}
                        >
                          <label className="block text-sm font-semibold text-[#2C3E2C] mb-3 tracking-wide uppercase text-xs">
                            Company Name
                          </label>
                          <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#556B2F] text-xl">
                              🏢
                            </span>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("company")}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full pl-12 pr-5 py-4 rounded-xl border-2 transition-all duration-500 ${
                                focusedField === "company"
                                  ? "border-[#556B2F] shadow-xl ring-4 ring-[#556B2F]/20 scale-105"
                                  : "border-gray-300 hover:border-[#8B7355]"
                              } focus:outline-none bg-[#F5F5DC]/30 font-light`}
                              placeholder="Your Organization"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        className="relative slide-up-fade"
                        style={{ animationDelay: "0.3s" }}
                      >
                        <label className="block text-sm font-semibold text-[#2C3E2C] mb-3 tracking-wide uppercase text-xs">
                          Service of Interest *
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#556B2F] text-xl">
                            🎯
                          </span>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("service")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-5 py-4 rounded-xl border-2 transition-all duration-500 ${
                              focusedField === "service"
                                ? "border-[#556B2F] shadow-xl ring-4 ring-[#556B2F]/20 scale-105"
                                : "border-gray-300 hover:border-[#8B7355]"
                            } focus:outline-none bg-[#F5F5DC]/30 font-light`}
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div
                        className="relative slide-up-fade"
                        style={{ animationDelay: "0.35s" }}
                      >
                        <label className="block text-sm font-semibold text-[#2C3E2C] mb-3 tracking-wide uppercase text-xs">
                          Investment Range
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#556B2F] text-xl">
                            💰
                          </span>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("budget")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full pl-12 pr-5 py-4 rounded-xl border-2 transition-all duration-500 ${
                              focusedField === "budget"
                                ? "border-[#556B2F] shadow-xl ring-4 ring-[#556B2F]/20 scale-105"
                                : "border-gray-300 hover:border-[#8B7355]"
                            } focus:outline-none bg-[#F5F5DC]/30 font-light`}
                          >
                            <option value="">Select an investment range</option>
                            {budgetRanges.map((range, index) => (
                              <option key={index} value={range}>
                                {range}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div
                        className="relative slide-up-fade"
                        style={{ animationDelay: "0.4s" }}
                      >
                        <label className="block text-sm font-semibold text-[#2C3E2C] mb-3 tracking-wide uppercase text-xs">
                          Project Details *
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-6 text-[#556B2F] text-xl">
                            📝
                          </span>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            rows={6}
                            className={`w-full pl-12 pr-5 py-4 rounded-xl border-2 transition-all duration-500 ${
                              focusedField === "message"
                                ? "border-[#556B2F] shadow-xl ring-4 ring-[#556B2F]/20 scale-105"
                                : "border-gray-300 hover:border-[#8B7355]"
                            } focus:outline-none resize-none bg-[#F5F5DC]/30 font-light`}
                            placeholder="Please describe your business objectives, current challenges, and desired outcomes in detail..."
                          ></textarea>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full px-10 py-6 bg-gradient-to-r from-[#556B2F] via-[#3D5740] to-[#2C3E2C] text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-105 flex items-center justify-center space-x-4 group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <span className="relative z-10">Submit Inquiry</span>
                        <span className="relative z-10 text-2xl group-hover:translate-x-3 transition-transform duration-500">
                          →
                        </span>
                      </button>

                      <p className="text-xs text-gray-500 text-center font-light leading-relaxed pt-2">
                        By submitting this form, you consent to our Privacy
                        Policy and agree to receive communications regarding
                        your inquiry from SFB Marketing.
                      </p>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right Side - Info Cards */}
              <div className="lg:col-span-2 space-y-8">
                {/* Professional Image */}
                <div
                  className="slide-from-right rounded-3xl overflow-hidden luxury-shadow"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                      alt="Professional consultation"
                      className="w-full h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E2C]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-2xl font-semibold mb-2">
                        Expert Consultation
                      </h3>
                      <p className="text-white/80 text-sm font-light">
                        Strategic guidance from industry leaders
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div
                  className="bg-gradient-to-br from-[#556B2F] to-[#3D5740] text-white rounded-3xl p-10 luxury-shadow slide-from-right"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-2xl">
                      ⭐
                    </div>
                    <h3 className="text-2xl font-semibold">
                      Why Choose <span className="text-[#D4AF37]">SFB</span>
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      {
                        icon: "📊",
                        title: "Performance-Driven Excellence",
                        desc: "Strategic methodologies delivering measurable ROI",
                      },
                      {
                        icon: "🎯",
                        title: "Data-Informed Strategy",
                        desc: "Evidence-based approaches with advanced analytics",
                      },
                      {
                        icon: "🔄",
                        title: "Continuous Optimization",
                        desc: "Ongoing refinement for maximum performance",
                      },
                      {
                        icon: "💎",
                        title: "Transparent Partnership",
                        desc: "Clear communication and detailed accountability",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-4 group cursor-pointer pop-in"
                        style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-base mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-gray-300 text-sm font-light leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Location */}
                <div
                  className="bg-white rounded-3xl p-10 luxury-shadow border-2 border-[#556B2F]/20 slide-from-right"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#556B2F] to-[#3D5740] flex items-center justify-center text-2xl">
                      📍
                    </div>
                    <h3 className="text-2xl font-semibold text-[#2C3E2C]">
                      London <span className="text-[#556B2F]">Office</span>
                    </h3>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-[#F5F5DC] flex items-center justify-center text-xl">
                        🏢
                      </div>
                      <div>
                        <p className="font-semibold text-base mb-1 text-[#2C3E2C]">
                          Headquarters
                        </p>
                        <span className="text-xs bg-[#D4AF37] text-white px-3 py-1 rounded-full font-medium">
                          Primary Location
                        </span>
                      </div>
                    </div>
                    <div className="pl-14">
                      <p className="text-gray-600 font-light leading-relaxed">
                        Office 5, 131 Cranbrook Road
                        <br />
                        Ilford, England, IG1 4SY
                        <br />
                        United Kingdom
                      </p>
                    </div>
                    <div className="pt-5 border-t border-gray-200">
                      <p className="text-sm text-gray-600 font-light flex items-center space-x-2">
                        <span className="text-[#556B2F] text-lg">⏰</span>
                        <span>
                          <strong className="font-semibold">Hours:</strong>{" "}
                          Mon-Fri, 9:00 AM - 6:00 PM GMT
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div
                  className="bg-gradient-to-br from-[#D4AF37] via-[#C19A6B] to-[#8B7355] rounded-3xl p-10 luxury-shadow slide-from-right"
                  style={{ animationDelay: "0.5s" }}
                >
                  <h3 className="text-2xl font-semibold mb-8 text-white flex items-center space-x-3">
                    <span className="text-3xl">📈</span>
                    <span>Performance Metrics</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "150+", label: "Completed Projects" },
                      { value: "98%", label: "Client Satisfaction" },
                      { value: "$50M+", label: "Revenue Generated" },
                      { value: "24hrs", label: "Response Time" },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        className="text-center pop-in"
                        style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
                      >
                        <div
                          className="text-5xl font-light mb-2 text-white pulse-animation"
                          style={{ animationDelay: `${idx * 0.5}s` }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs font-medium text-white/90 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-br from-[#556B2F] via-[#3D5740] to-[#2C3E2C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20 slide-from-bottom">
              <div className="inline-block mb-8">
                <span className="text-xs font-semibold text-[#D4AF37] tracking-[0.35em] uppercase border-2 border-[#D4AF37]/50 px-8 py-3 rounded-full backdrop-blur-sm bg-white/5">
                  Common Inquiries
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-light mb-6">
                Frequently Asked{" "}
                <span className="font-semibold text-[#D4AF37]">Questions</span>
              </h2>
              <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                Explore answers to common questions about our services,
                processes, and partnership models
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-10 border-2 border-white/20 hover:border-[#D4AF37] transition-all duration-700 hover:-translate-y-2 hover:scale-105 luxury-shadow cursor-pointer rotate-slide-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B7355] flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      <span className="text-2xl">❓</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                        {faq.q}
                      </h3>
                      <p className="text-gray-300 leading-relaxed font-light text-base">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 bg-gradient-to-br from-[#F5F5DC] via-[#E8DCC4] to-[#D4C5A8]">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl luxury-shadow overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left Content */}
                <div className="p-12 lg:p-16 flex flex-col justify-center slide-from-left">
                  <div className="mb-8">
                    <span className="text-xs font-semibold text-[#556B2F] tracking-[0.3em] uppercase border border-[#556B2F]/30 px-6 py-2 rounded-full inner-shadow">
                      Our Location
                    </span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-light mb-6 text-[#2C3E2C]">
                    Visit Our{" "}
                    <span className="font-semibold text-[#556B2F]">
                      London Office
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-10 font-light leading-relaxed text-lg">
                    Office 5, 131 Cranbrook Road
                    <br />
                    Ilford, England, IG1 4SY
                    <br />
                    United Kingdom
                  </p>

                  <div className="space-y-5 mb-10">
                    <div className="flex items-center space-x-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#556B2F] to-[#3D5740] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        📞
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                          Phone
                        </p>
                        <p className="font-light text-gray-700">
                          +44 7988 074798
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#8B7355] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        📧
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">
                          Email
                        </p>
                        <p className="font-light text-gray-700">
                          info@sfbmarketing.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-4 px-10 py-5 bg-gradient-to-r from-[#556B2F] to-[#3D5740] text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-105 w-fit group"
                  >
                    <span>Get Directions</span>
                    <span className="text-2xl group-hover:translate-x-2 transition-transform duration-500">
                      →
                    </span>
                  </a>
                </div>

                {/* Right Image */}
                <div className="relative h-96 lg:h-auto slide-from-right">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                    alt="Office building"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#556B2F]/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 luxury-shadow">
                      <p className="text-sm font-semibold text-[#556B2F] mb-2">
                        📍 Prime Location
                      </p>
                      <p className="text-xs text-gray-600 font-light">
                        Accessible via public transport and major motorways
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 bg-gradient-to-br from-[#2C3E2C] via-[#556B2F] to-[#3D5740] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl float-animation"></div>
          <div
            className="absolute bottom-10 left-10 w-96 h-96 bg-[#8B7355]/20 rounded-full blur-3xl float-animation"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto fade-in-scale">
            <div className="mb-10">
              <span className="text-xs font-semibold text-[#D4AF37] tracking-[0.35em] uppercase border-2 border-[#D4AF37]/50 px-8 py-3 rounded-full backdrop-blur-sm bg-white/5">
                Take The Next Step
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-light mb-10 text-white leading-tight">
              Ready to{" "}
              <span className="font-semibold text-[#D4AF37]">
                Transform
                <br />
                Your Business?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl mb-16 text-gray-300 leading-relaxed font-light max-w-4xl mx-auto">
              Schedule a complimentary consultation with our strategic advisory
              team to explore bespoke solutions that will elevate your brand and
              drive exceptional, measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group px-12 py-6 bg-gradient-to-r from-[#D4AF37] via-[#C19A6B] to-[#8B7355] text-white rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-110 flex items-center justify-center space-x-4 luxury-shadow pop-in">
                <span>Schedule Consultation</span>
                <span className="text-2xl group-hover:translate-x-3 transition-transform duration-500">
                  →
                </span>
              </button>
              <button
                className="px-12 py-6 border-2 border-white/40 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-700 backdrop-blur-sm hover:scale-105 pop-in"
                style={{ animationDelay: "0.2s" }}
              >
                View Case Studies
              </button>
            </div>

            <div
              className="pt-16 border-t border-white/20 slide-from-bottom"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 font-light text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                  <span>Trusted by Industry Leaders</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                  <span>ISO 9001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#D4AF37] text-xl">✓</span>
                  <span>Award-Winning Agency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} // end