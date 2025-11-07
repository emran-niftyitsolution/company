'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from './icons';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:pt-24 sm:pb-16 sm:px-6 lg:px-12 overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-gradient-to-tl from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[1000px] sm:h-[1000px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px sm:50px 50px'
      }}></div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full py-12 sm:py-20 lg:py-32">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Content - Mobile first, then takes 7 columns on desktop */}
          <div className="w-full lg:col-span-7 space-y-6 sm:space-y-8 text-white text-center lg:text-left">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 text-white text-xs sm:text-sm font-semibold">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-cyan-400"></span>
              </span>
              From Concept to Deployment
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[0.9] tracking-tighter">
              <span className="block bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                Complete
              </span>
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Software
              </span>
              <span className="block mt-1 sm:mt-2 text-white">
                Solutions
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              We transform your ideas into powerful, scalable software solutions. 
              From development to deployment, we handle every aspect of your digital journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link
                href="#contact"
                className="group relative px-6 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-base sm:text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 sm:gap-3 min-h-[48px]"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  Get Started <ArrowRightIcon size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
              <Link
                href="#services"
                className="px-6 py-4 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/30 transition-all font-semibold text-base sm:text-lg flex items-center justify-center min-h-[48px]"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 pt-8 sm:pt-12">
              <div className="group text-center lg:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">500+</div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium mt-1">Projects Delivered</div>
              </div>
              <div className="group text-center lg:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">100+</div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium mt-1">Happy Clients</div>
              </div>
              <div className="group text-center lg:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">10+</div>
                <div className="text-gray-400 text-xs sm:text-sm font-medium mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Visual - Mobile first, then takes 5 columns on desktop */}
          <div className="w-full lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Main Image with Creative Border */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white/10 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/0 p-1 sm:p-2">
                <div className="relative rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                    alt="iMac with dashboard"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Cards - Hidden on mobile, shown on tablet+ */}
              <div className="hidden sm:block absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-500/80 to-cyan-600/80 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center p-2 sm:p-4 animate-float">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-white">100%</div>
                  <div className="text-[10px] sm:text-xs text-white/80 font-medium">Satisfaction</div>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-28 h-28 sm:w-40 sm:h-40 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500/80 to-pink-500/80 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center p-3 sm:p-6 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-white">24/7</div>
                  <div className="text-[10px] sm:text-xs text-white/80 font-medium">Support</div>
                </div>
              </div>

              {/* Decorative Elements - Smaller on mobile */}
              <div className="absolute top-1/4 -left-6 sm:-left-12 w-12 h-12 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 blur-2xl animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-6 sm:-right-12 w-16 h-16 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
