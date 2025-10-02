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
  BarChart3,
  Code,
  Brain,
  FileText,
  Package,
  Megaphone,
  LayoutDashboard,
  Wrench,
  Rocket,
  ArrowLeft,
  ArrowDown,
  Gauge,
  RefreshCcw,
  Network,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<null | {
    ok: boolean;
    message: string;
  }>(null);
  const enquiryWordLimit = 150;
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
            {[
              "About",
              "Mission & Vision",
              "Our services",
              "Core Services",
              "Contact",
            ].map((item) => (
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
            {/* <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-purple-500/25">
              Get Started
            </button> */}
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
      <section className="relative z-10 pt-52 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* <div className="mb-6 inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm">New: AI-powered analytics now live</span>
            <ChevronRight className="w-4 h-4 ml-2" />
          </div> */}

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
            Empowering businesses with end-to-end AI and digital solutions to
            scale, innovate, and stay future-ready
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-purple-500/25">
              Start Free Trial
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border border-gray-600 rounded-xl text-lg font-semibold hover:border-gray-400 hover:bg-gray-800/30 transition-all duration-300 flex items-center active:scale-95">
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div> */}

          {/* Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
          </div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive suite of services designed to meet the
              unique needs of our client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Data Analytics",
                description:
                  "End-to-end data pipelines, BI dashboards, and ML-driven insights for faster decisions.",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Web & Application Development",
                description:
                  "Modern, scalable web and mobile apps with secure, high-performance architectures.",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Salesforce & AI Solutions",
                description:
                  "CRM implementations, custom flows, and AI automation integrated with Salesforce.",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Content Management",
                description:
                  "Headless CMS setups, content workflows, and localization for multi-market teams.",
              },
              {
                icon: <Package className="w-8 h-8" />,
                title: "Product Development",
                description:
                  "From discovery to launch: roadmapping, UX, MVPs, and iterative delivery.",
              },
              {
                icon: <Megaphone className="w-8 h-8" />,
                title: "Omnichannel Marketing",
                description:
                  "Personalized campaigns across web, email, and social with real-time analytics.",
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

      {/* How We Do Section - Process Flow */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-gray-800/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How we do?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our end‑to‑end delivery loop from idea to production and beyond.
            </p>
          </div>

          {/* Top row: left ➜ right */}
          <div className="hidden md:flex items-stretch justify-between gap-6 relative">
            {[
              {
                title: "Planning",
                icon: <FileText className="w-7 h-7" />,
                desc: "Requirements, scope, roadmap",
              },
              {
                title: "Analysing",
                icon: <BarChart3 className="w-7 h-7" />,
                desc: "Feasibility, risks, success metrics",
              },
              {
                title: "Designing",
                icon: <LayoutDashboard className="w-7 h-7" />,
                desc: "UX, UI, and system design",
              },
              {
                title: "Development",
                icon: <Code className="w-7 h-7" />,
                desc: "Iterative, test‑driven builds",
              },
            ].map((step, i, arr) => (
              <div key={i} className="relative flex items-center flex-1">
                <div className="relative group flex-1 p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/60 hover:border-purple-400/60 transition-all backdrop-blur-sm shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_-12px_rgba(168,85,247,0.35)]">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gray-900 border border-purple-500/70 text-purple-300 text-xs font-bold flex items-center justify-center shadow-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="text-xl font-semibold mb-1">{step.title}</div>
                  <div className="text-gray-400 text-sm">{step.desc}</div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-purple-400/40 transition" />
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="mx-3 text-gray-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.25)]" />
                )}
                {i === arr.length - 1 && (
                  <ArrowDown className="absolute left-1/2 -translate-x-1/2 -bottom-9 w-5 h-5 text-gray-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.25)]" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile stacked version */}
          <div className="md:hidden grid grid-cols-1 gap-4">
            {[
              { title: "Planning", icon: <FileText className="w-7 h-7" /> },
              { title: "Analysing", icon: <BarChart3 className="w-7 h-7" /> },
              {
                title: "Designing",
                icon: <LayoutDashboard className="w-7 h-7" />,
              },
              { title: "Development", icon: <Code className="w-7 h-7" /> },
              { title: "Testing", icon: <Shield className="w-7 h-7" /> },
              { title: "Maintenance", icon: <Wrench className="w-7 h-7" /> },
              { title: "Deployment", icon: <Rocket className="w-7 h-7" /> },
            ].map((s, i) => (
              <div
                key={i}
                className="relative p-5 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/60 shadow-[0_10px_25px_-12px_rgba(0,0,0,0.6)]"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gray-900 border border-purple-500/70 text-purple-300 text-xs font-bold flex items-center justify-center">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    {s.icon}
                  </div>
                  <div className="font-semibold">{s.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row: right ➜ left */}
          <div className="hidden md:flex items-stretch justify-center gap-6 mt-12 relative">
            {[
              {
                title: "Testing",
                icon: <Shield className="w-7 h-7" />,
                desc: "QA, automation, performance",
              },
              {
                title: "Maintenance",
                icon: <Wrench className="w-7 h-7" />,
                desc: "Monitoring, SRE, improvements",
              },
              {
                title: "Deployment",
                icon: <Rocket className="w-7 h-7" />,
                desc: "CI/CD, rollout, observability",
              },
            ].map((step, i, arr) => (
              <div key={i} className="flex items-center flex-1">
                <div className="relative group flex-1 p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/60 hover:border-purple-400/60 transition-all backdrop-blur-sm shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_-12px_rgba(59,130,246,0.35)]">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gray-900 border border-blue-500/70 text-blue-300 text-xs font-bold flex items-center justify-center shadow-lg">
                    {String(i + 5).padStart(2, "0")}
                  </div>
                  <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="text-xl font-semibold mb-1">{step.title}</div>
                  <div className="text-gray-400 text-sm">{step.desc}</div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-blue-400/40 transition" />
                </div>
                {i < arr.length - 1 && (
                  <ArrowLeft className="mx-3 text-gray-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.25)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Amplifying Business Outcomes
              </span>
            </h2>
            {/* <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A snapshot of products and projects we’ve delivered across
              fintech, e‑commerce, and SaaS — from MVPs to enterprise-grade
              platforms.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Efficiency",
                description:
                  "Our end‑to‑end solutions boost efficiency by up to 40% through smarter automation, scalable systems, and streamlined operations.",
                icon: <Gauge className="w-7 h-7" />,
              },
              {
                title: "Transformed",
                description:
                  "Time saved through automation and unified platforms is redirected to innovation and data‑driven decision‑making—driving real transformation.",
                icon: <RefreshCcw className="w-7 h-7" />,
              },
              {
                title: "Integrated",
                description:
                  "Integrating data, applications, marketing, and content into a unified ecosystem eliminates silos and unlocks faster, smarter collaboration.",
                icon: <Network className="w-7 h-7" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
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
                Transforming Ideas into Intelligent Digital Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              We provide end-to-end AI and digital solutions to help businesses
              scale and stay future-read
            </p>
            <button
              onClick={() => setIsContactOpen(true)}
              className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Get in touch
              <ArrowRight className="inline ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 pt-16 pb-8 border-t border-gray-800 bg-gray-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/logo.png"
                  alt="Market Fox"
                  width={40}
                  height={40}
                />
                <span className="ml-2 text-2xl font-bold">Market Fox</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                The Fox Behind Your Market Moves
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>CP 67, Mohali, 140308</li>
                <li>Phone: +91 989-6884-989</li>
                <li>Email: business@mrktfox.com</li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Important Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a className="hover:text-white" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300">
                Stay updated with the latest listings, offers, and tips.
                Subscribe to our newsletter!
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm">
              © 2025 All rights reserved by{" "}
              <a className="text-blue-400 hover:text-blue-300" href="#">
                Mrktfox
              </a>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <a
                href="#"
                className="w-8 h-8 rounded-md bg-gray-800/80 flex items-center justify-center hover:bg-gray-700"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-md bg-gray-800/80 flex items-center justify-center hover:bg-gray-700"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-md bg-gray-800/80 flex items-center justify-center hover:bg-gray-700"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-md bg-gray-800/80 flex items-center justify-center hover:bg-gray-700"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsContactOpen(false)}
          />
          <div className="relative z-[101] w-full max-w-xl mx-4 rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-2xl">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-semibold">Get in touch</h3>
              <button
                onClick={() => setIsContactOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form
              className="space-y-5"
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitResult(null);
                if (!fullName.trim()) {
                  setSubmitResult({
                    ok: false,
                    message: "Full Name is required",
                  });
                  return;
                }
                const wordCount = enquiry.trim()
                  ? enquiry.trim().split(/\s+/).length
                  : 0;
                if (wordCount > enquiryWordLimit) {
                  setSubmitResult({
                    ok: false,
                    message: `Enquiry must be ≤ ${enquiryWordLimit} words`,
                  });
                  return;
                }
                if (email && !/^\S+@\S+\.\S+$/.test(email)) {
                  setSubmitResult({
                    ok: false,
                    message: "Please provide a valid email",
                  });
                  return;
                }
                setSubmitting(true);
                try {
                  const body = {
                    fullName,
                    contactNo,
                    email,
                    enquiry,
                  };
                  console.log(body);
                } catch (err) {
                  setSubmitResult({
                    ok: false,
                    message: "Network error. Please try again.",
                  });
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="fullName"
                >
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-gray-700 bg-gray-800/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="contactNo"
                >
                  Contact No
                </label>
                <input
                  id="contactNo"
                  type="tel"
                  inputMode="tel"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                  className="w-full rounded-xl border border-gray-700 bg-gray-800/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  placeholder="+1 555 123 4567"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-700 bg-gray-800/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="enquiry"
                  >
                    Enquiry
                  </label>
                  <span className="text-xs text-gray-400">
                    Word limit: {enquiryWordLimit}
                  </span>
                </div>
                <textarea
                  id="enquiry"
                  rows={5}
                  value={enquiry}
                  onChange={(e) => setEnquiry(e.target.value)}
                  className="w-full rounded-xl border border-gray-700 bg-gray-800/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 resize-y"
                  placeholder="How can we help?"
                />
                <div className="mt-1 text-xs text-gray-400">
                  {enquiry.trim() ? enquiry.trim().split(/\s+/).length : 0} /{" "}
                  {enquiryWordLimit} words
                </div>
              </div>
              {submitResult && (
                <div
                  className={`${
                    submitResult.ok ? "text-green-400" : "text-red-400"
                  } text-sm`}
                >
                  {submitResult.message}
                </div>
              )}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(false)}
                  className="px-4 py-2 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:from-purple-600 hover:to-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
