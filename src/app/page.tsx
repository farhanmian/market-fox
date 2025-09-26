"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Play,
  Star,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleOnHover = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-sm bg-gray-900/90 border-b border-gray-800/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            {/* <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div> */}
            <Image src="/logo.png" alt="Market Fox" width={32} height={32} />
            <span className="text-xl font-bold">Market Fox</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Product", "Solutions", "Company", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex space-x-4">
            {/* <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-gray-800/50 rounded-lg">
              Sign In
            </button> */}
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-purple-500/25">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 px-6 py-4">
            <div className="flex flex-col space-y-4">
              {["Product", "Solutions", "Company", "Pricing"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700">
                <button className="text-left text-gray-300 hover:text-white transition-colors py-2">
                  Sign In
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 active:scale-95">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm">New: AI-powered analytics now live</span>
            <ChevronRight className="w-4 h-4 ml-2" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Harness the power of cutting-edge technology to transform your
            business. Our AI-driven platform delivers unprecedented results with
            seamless integration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-purple-500/25">
              Start Free Trial
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border border-gray-600 rounded-xl text-lg font-semibold hover:border-gray-400 hover:bg-gray-800/30 transition-all duration-300 flex items-center active:scale-95">
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10M+", label: "Active Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "500+", label: "Integrations" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to scale your business, built with precision
              and powered by AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description:
                  "Process data at unprecedented speeds with our optimized infrastructure",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                description:
                  "Bank-level security with end-to-end encryption and compliance standards",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Collaboration",
                description:
                  "Seamless collaboration tools that scale with your growing team",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-gray-800/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-30"></div>

            {[
              {
                step: "01",
                title: "Connect Your Data",
                description:
                  "Seamlessly integrate with your existing tools and databases in just a few clicks",
                icon: "🔗",
              },
              {
                step: "02",
                title: "AI Analysis",
                description:
                  "Our advanced AI algorithms analyze your data patterns and generate actionable insights",
                icon: "🧠",
              },
              {
                step: "03",
                title: "Scale & Optimize",
                description:
                  "Watch your business grow with automated optimizations and real-time recommendations",
                icon: "📈",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {/* Step circle */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center relative z-10 transform hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25">
                  <span className="text-3xl">{item.icon}</span>
                </div>

                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-purple-500 z-20">
                  <span className="text-xs font-bold text-purple-400">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mb-4 hover:text-purple-300 transition-colors cursor-default">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Done (Portfolio) Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Work Done
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A snapshot of products and projects we’ve delivered across
              fintech, e‑commerce, and SaaS — from MVPs to enterprise-grade
              platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NovaPay Mobile Wallet",
                client: "Fintech | Confidential",
                summary:
                  "Designed and built a secure mobile wallet with KYC, P2P transfers, bill payments, and card tokenization.",
                impact: "Launched to 120k users in 90 days with 99.95% uptime.",
                icon: "💳",
              },
              {
                title: "Atlas Commerce Platform",
                client: "E‑commerce | Atlas Retail",
                summary:
                  "Headless storefront with real‑time inventory, search, and personalized recommendations powered by our AI analytics.",
                impact:
                  "+38% conversion rate and 22% AOV uplift within first quarter.",
                icon: "🛒",
              },
              {
                title: "Helix Analytics Cloud",
                client: "SaaS | Helix Labs",
                summary:
                  "Multi‑tenant analytics SaaS with role-based access, custom dashboards, and automated anomaly detection.",
                impact:
                  "Reduced reporting time by 70% and replaced 5 legacy tools.",
                icon: "📊",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{project.icon}</span>
                </div>

                <h3 className="text-2xl font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <div className="text-gray-400 text-sm mb-4">
                  {project.client}
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.summary}
                </p>
                <div className="text-gray-400 text-sm">{project.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-purple-900/30 via-gray-800/30 to-blue-900/30 border border-gray-700/50 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of companies that trust Market Fox to power their
              digital transformation
            </p>
            <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-purple-500/25">
              Get Started Today
              <ArrowRight className="inline ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              {/* <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div> */}
              <Image src="/logo.png" alt="Market Fox" width={32} height={32} />
              <span className="text-xl font-bold">Market Fox</span>
            </div>
            <div className="text-gray-400 text-center md:text-left">
              © 2025 Market Fox. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
