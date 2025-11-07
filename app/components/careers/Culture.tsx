'use client';

import Image from 'next/image';

const cultureValues = [
  {
    title: 'Innovation First',
    description: 'We encourage experimentation and embrace new technologies to solve complex problems.',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication across all levels.',
  },
  {
    title: 'Growth Mindset',
    description: 'Continuous learning and personal development are at the core of our culture.',
  },
  {
    title: 'Work-Life Balance',
    description: 'We respect your time and encourage a healthy balance between work and personal life.',
  },
];

export default function Culture() {
  return (
    <section id="culture" className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-l from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 text-white">
            <div>
              <span className="text-sm font-bold text-pink-400 uppercase tracking-wider">Our Culture</span>
            </div>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Work Environment
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
              At ShunnoGroup, we foster a culture of innovation, collaboration, and continuous growth. 
              We believe that great products come from great teams.
            </p>

            {/* Culture Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              {cultureValues.map((value, index) => (
                <div 
                  key={index} 
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-black text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration"
                width={600}
                height={800}
                className="w-full h-auto"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

