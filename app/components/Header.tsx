'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MenuIcon, CloseIcon } from './icons';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/#home' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-2xl shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <Link href="#home" className="relative group">
            <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              ShunnoGroup
            </span>
            <span className="absolute inset-0 text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-6 py-3 text-sm font-semibold text-white/80 hover:text-white transition-all group"
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
            className="md:hidden p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 pt-2">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
