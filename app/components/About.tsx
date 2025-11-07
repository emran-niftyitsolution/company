'use client';

import Image from 'next/image';
import { CheckCircleIcon, TeamIcon, TrophyIcon, GlobalIcon } from './icons';

const values = [
  {
    icon: <CheckCircleIcon className="text-cyan-400" size={32} />,
    title: 'Quality First',
    description: 'We never compromise on quality. Every line of code is written with precision and care.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: <TeamIcon className="text-purple-400" size={32} />,
    title: 'Client-Centric',
    description: 'Your success is our success. We work closely with you to understand your vision.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: <TrophyIcon className="text-pink-400" size={32} />,
    title: 'Innovation',
    description: 'We stay ahead of the curve with the latest technologies and best practices.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: <GlobalIcon className="text-cyan-400" size={32} />,
    title: 'Scalability',
    description: 'We build solutions that grow with your business, from startup to enterprise.',
    gradient: 'from-cyan-500 to-teal-600',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[350px] h-[350px] sm:w-[700px] sm:h-[700px] bg-gradient-to-l from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="w-full lg:col-span-7 space-y-6 sm:space-y-8 text-white text-center lg:text-left">
            <div>
              <span className="text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ShunnoGroup
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              ShunnoGroup is a leading software development company specializing in end-to-end 
              software solutions. We bridge the gap between your vision and reality, delivering 
              robust, scalable, and innovative software products.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From initial concept and development to deployment and maintenance, we handle every 
              aspect of your software journey. Our team of experienced developers, designers, and 
              DevOps engineers work together to deliver exceptional results.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${value.gradient} mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Creative Layout */}
          <div className="w-full lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative">
              {/* Main Stats Card */}
              <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-600/80 to-pink-600/80 backdrop-blur-xl border border-white/20 shadow-2xl mb-4 sm:mb-6">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-2">500+</div>
                <div className="text-white/90 text-base sm:text-lg font-semibold">Projects Completed</div>
                <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full blur-2xl"></div>
              </div>

              {/* Image Card */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white/10 mb-4 sm:mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern office workspace"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-cyan-600/80 to-blue-600/80 backdrop-blur-xl border border-white/20 shadow-xl">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">10+</div>
                  <div className="text-white/90 text-xs sm:text-sm font-medium">Years Experience</div>
                </div>
                <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-600/80 to-purple-600/80 backdrop-blur-xl border border-white/20 shadow-xl">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1">100+</div>
                  <div className="text-white/90 text-xs sm:text-sm font-medium">Happy Clients</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
