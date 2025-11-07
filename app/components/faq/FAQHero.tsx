'use client';

export default function FAQHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-cyan-500/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full py-20 text-center">
        <div className="inline-block mb-6">
          <span className="text-sm font-bold text-purple-400 uppercase tracking-wider">FAQ</span>
        </div>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter mb-6">
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Frequently Asked
          </span>
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
            Questions
          </span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
          Find answers to common questions about our services and processes
        </p>
      </div>
    </section>
  );
}

