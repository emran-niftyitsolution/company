"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Contact", href: "/#contact" },
    { label: "Solutions", href: "/solutions" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Team", href: "/team" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            <Link href="#home" className="relative group z-50">
              <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ShunnoGroup
              </span>
              <span className="absolute inset-0 text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 xl:px-6 py-2 xl:py-3 text-xs xl:text-sm font-semibold text-white/80 hover:text-white transition-all group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-3/4 transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-50 p-2.5 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <CloseIcon size={20} className="sm:w-6 sm:h-6" />
              ) : (
                <MenuIcon size={20} className="sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Page Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${
            mobileMenuOpen ? "opacity-95" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full blur-3xl transition-all duration-700 ${
              mobileMenuOpen
                ? "translate-x-0 translate-y-0 opacity-100"
                : "-translate-x-1/2 -translate-y-1/2 opacity-0"
            }`}
          ></div>
          <div
            className={`absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-500/30 to-transparent rounded-full blur-3xl transition-all duration-700 delay-100 ${
              mobileMenuOpen
                ? "translate-x-0 translate-y-0 opacity-100"
                : "translate-x-1/2 translate-y-1/2 opacity-0"
            }`}
          ></div>
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl transition-all duration-700 delay-200 ${
              mobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          ></div>
        </div>

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col justify-center items-center px-6 sm:px-8 transition-all duration-500 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <nav className="w-full max-w-md space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`group relative block px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden ${
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative flex items-center justify-between">
                  <span className="text-white font-bold text-lg sm:text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {item.label}
                  </span>
                  <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-8 transition-all duration-300"></div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </Link>
            ))}
          </nav>

          {/* Footer Info */}
          <div
            className={`mt-12 text-center space-y-4 transition-all duration-500 delay-300 ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ShunnoGroup
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:hello@shunnogroup.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
              >
                hello@shunnogroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
