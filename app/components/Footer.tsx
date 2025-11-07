'use client';

import Link from 'next/link';
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from './icons';

const footerLinks = {
  services: [
    { label: 'Web Development', href: '/#services' },
    { label: 'Mobile Development', href: '/#services' },
    { label: 'Cloud & DevOps', href: '/#services' },
    { label: 'Solutions', href: '/solutions' },
  ],
  company: [
    { label: 'About Us', href: '/#about' },
    { label: 'Team', href: '/team' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/#contact' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Resources', href: '/resources' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Partners', href: '/partners' },
  ],
};

const socialLinks = [
  { icon: <GithubIcon size={24} />, href: '#', label: 'GitHub', gradient: 'from-gray-600 to-gray-800' },
  { icon: <LinkedinIcon size={24} />, href: '#', label: 'LinkedIn', gradient: 'from-blue-600 to-blue-800' },
  { icon: <TwitterIcon size={24} />, href: '#', label: 'Twitter', gradient: 'from-cyan-500 to-blue-600' },
  { icon: <FacebookIcon size={24} />, href: '#', label: 'Facebook', gradient: 'from-blue-600 to-indigo-600' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="#home" className="relative inline-block mb-6 group">
              <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ShunnoGroup
              </span>
              <span className="absolute inset-0 text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              Complete software solutions from development to deployment. 
              Transforming ideas into powerful, scalable applications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`group relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${social.gradient} hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  aria-label={social.label}
                >
                  <div className="text-white group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-black mb-6 text-lg uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors font-medium group flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black mb-6 text-lg uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors font-medium group flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black mb-6 text-lg uppercase tracking-wider">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors font-medium group flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-500 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} ShunnoGroup. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
