'use client';

import Image from 'next/image';

const testimonials = [
  {
    quote: 'ShunnoGroup transformed our entire e-commerce platform. The results exceeded our expectations, and the team was professional throughout.',
    author: 'John Smith',
    position: 'CEO, RetailTech Inc.',
    company: 'RetailTech Inc.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-cyan-500 to-blue-600',
    rating: 5,
  },
  {
    quote: 'Working with ShunnoGroup was a game-changer. They delivered a mobile app that our users love, and the development process was smooth.',
    author: 'Maria Garcia',
    position: 'Product Director, FinanceFirst',
    company: 'FinanceFirst Bank',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-purple-500 to-pink-600',
    rating: 5,
  },
  {
    quote: 'The healthcare management system they built has revolutionized how we handle patient records. Highly recommend their services.',
    author: 'Dr. Robert Lee',
    position: 'CTO, MedCare Solutions',
    company: 'MedCare Solutions',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-pink-500 to-rose-600',
    rating: 5,
  },
  {
    quote: 'Outstanding work on our analytics platform. The team&apos;s expertise in cloud technologies is impressive, and they delivered on time.',
    author: 'Jennifer Brown',
    position: 'VP Engineering, DataInsight',
    company: 'DataInsight Corp',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-cyan-500 to-teal-600',
    rating: 5,
  },
  {
    quote: 'Professional, reliable, and innovative. ShunnoGroup helped us scale our infrastructure and improve our deployment process significantly.',
    author: 'Alex Thompson',
    position: 'DevOps Lead, TechStart',
    company: 'TechStart Solutions',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-purple-500 to-indigo-600',
    rating: 5,
  },
  {
    quote: 'The best software development partner we&apos;ve worked with. They understand our business needs and deliver exceptional solutions.',
    author: 'Sophie Anderson',
    position: 'Founder, StartupHub',
    company: 'StartupHub',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2076&auto=format&fit=crop',
    gradient: 'from-pink-500 to-purple-600',
    rating: 5,
  },
];

export default function TestimonialsList() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl font-medium text-white mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

