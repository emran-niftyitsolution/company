'use client';

import { useState } from 'react';
import { MailIcon, PhoneIcon, LocationIcon, SendIcon } from './icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setLoading(false);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MailIcon size={28} />,
      label: 'Email',
      value: 'hello@shunnogroup.com',
      link: 'mailto:hello@shunnogroup.com',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <PhoneIcon size={28} />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <LocationIcon size={28} />,
      label: 'Location',
      value: 'Global - Remote First',
      link: '#',
      gradient: 'from-pink-500 to-rose-600',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold text-pink-400 uppercase tracking-wider">Contact Us</span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Ready to start your project? Let&apos;s discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-3xl font-black text-white mb-4">
                Let&apos;s Build Something Amazing Together
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                Whether you have a project in mind or just want to explore possibilities, 
                we&apos;re here to help. Reach out and let&apos;s start a conversation about your 
                software needs.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group relative flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                >
                  <div className={`relative p-4 rounded-xl bg-gradient-to-br ${info.gradient} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1 font-semibold uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-white font-bold text-lg">
                      {info.value}
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-7">
            <div className="p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 shadow-2xl">
              {showSuccess && (
                <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-md">
                  <p className="text-green-300 font-semibold">Thank you! We&apos;ll get back to you soon.</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full h-14 px-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full h-14 px-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full h-14 px-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none transition-all"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-black text-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <SendIcon size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
