'use client';

import Image from 'next/image';
import { ArrowRightIcon, CodeIcon, MobileIcon, CloudIcon } from './icons';

const projects = [
  {
    title: 'Enterprise E-Commerce Platform',
    description: 'Scalable e-commerce solution with real-time inventory, payment processing, and analytics dashboard.',
    category: 'Web Application',
    icon: <CodeIcon className="text-white" size={28} />,
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    featured: true,
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform with patient records, appointment scheduling, and telemedicine features.',
    category: 'Enterprise Solution',
    icon: <CloudIcon className="text-white" size={28} />,
    tech: ['Next.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
    gradient: 'from-purple-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transaction processing.',
    category: 'Mobile App',
    icon: <MobileIcon className="text-white" size={28} />,
    tech: ['React Native', 'Firebase', 'Stripe', 'AWS'],
    gradient: 'from-green-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    title: 'SaaS Analytics Platform',
    description: 'Business intelligence platform with advanced analytics, custom dashboards, and data visualization.',
    category: 'SaaS',
    icon: <CodeIcon className="text-white" size={28} />,
    tech: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
    gradient: 'from-orange-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    title: 'IoT Fleet Management',
    description: 'Real-time fleet tracking and management system with GPS integration and predictive maintenance.',
    category: 'IoT Solution',
    icon: <CloudIcon className="text-white" size={28} />,
    tech: ['React', 'Node.js', 'MongoDB', 'MQTT'],
    gradient: 'from-indigo-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
  {
    title: 'EdTech Learning Platform',
    description: 'Interactive learning management system with video streaming, assessments, and progress tracking.',
    category: 'Education',
    icon: <CodeIcon className="text-white" size={28} />,
    tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS S3'],
    gradient: 'from-yellow-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2070&auto=format&fit=crop',
    featured: false,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] sm:w-[700px] sm:h-[700px] bg-gradient-to-r from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-l from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-bold text-purple-400 uppercase tracking-wider">Our Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light px-4">
            Showcasing our expertise through successful projects across various industries
          </p>
        </div>

        {/* Creative Grid Layout - Mobile first: 1 column, then 2, then 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => {
            const isFeatured = project.featured;
            const colSpan = isFeatured ? 'md:col-span-2 lg:col-span-2' : '';
            const rowSpan = isFeatured ? 'md:row-span-2 lg:row-span-2' : '';
            const height = isFeatured ? 'h-[500px] sm:h-[600px]' : 'h-[350px] sm:h-[400px]';
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${colSpan} ${rowSpan} ${height} border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    quality={85}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-85 group-hover:opacity-70 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8">
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.gradient} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                        {project.icon}
                      </div>
                      <span className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-bold text-white border border-white/30">
                        {project.category}
                      </span>
                    </div>
                    <h3 className={`${isFeatured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'} font-black text-white mb-3 sm:mb-4 leading-tight`}>
                      {project.title}
                    </h3>
                    <p className={`${isFeatured ? 'text-sm sm:text-base lg:text-lg' : 'text-xs sm:text-sm'} text-gray-200 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6">
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-semibold text-white border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all group/btn text-sm sm:text-base min-h-[44px]">
                      View Project <ArrowRightIcon size={18} className="sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
