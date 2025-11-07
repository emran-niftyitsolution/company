'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from './icons';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Takes 7 columns */}
          <div className="lg:col-span-7 space-y-8 text-white">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 text-white text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              From Concept to Deployment
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter">
              <span className="block bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                Complete
              </span>
              <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Software
              </span>
              <span className="block mt-2 text-white">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
              We transform your ideas into powerful, scalable software solutions. 
              From development to deployment, we handle every aspect of your digital journey.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#contact"
                className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Started <ArrowRightIcon size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
              <Link
                href="#services"
                className="px-10 py-5 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/30 transition-all font-semibold text-lg"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-12 pt-12">
              <div className="group">
                <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">500+</div>
                <div className="text-gray-400 text-sm font-medium mt-1">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">100+</div>
                <div className="text-gray-400 text-sm font-medium mt-1">Happy Clients</div>
              </div>
              <div className="group">
                <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">10+</div>
                <div className="text-gray-400 text-sm font-medium mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Takes 5 columns with creative layout */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Image with Creative Border */}
              <div className="relative rounded-[3rem] overflow-hidden border-4 border-white/10 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/0 p-2">
                <div className="relative rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                    alt="Dashboard on MacBook"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl bg-gradient-to-br from-cyan-500/80 to-cyan-600/80 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center p-4 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">100%</div>
                  <div className="text-xs text-white/80 font-medium">Satisfaction</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-3xl bg-gradient-to-br from-purple-500/80 to-pink-500/80 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center p-6 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">24/7</div>
                  <div className="text-xs text-white/80 font-medium">Support</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/4 -left-12 w-24 h-24 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 blur-2xl animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
