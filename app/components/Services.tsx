'use client';

import Image from 'next/image';
import { CodeIcon, CloudIcon, MobileIcon, DatabaseIcon, SecurityIcon, ApiIcon, BugIcon, RocketIcon, TeamIcon, ChartIcon, ShoppingIcon, BankIcon } from './icons';

const services = [
  {
    icon: <CodeIcon className="text-white" size={40} />,
    title: 'Custom Development',
    description: 'Full-stack web applications, APIs, and backend systems tailored to your business needs.',
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    imageAlt: 'iMac with dashboard',
    size: 'large',
  },
  {
    icon: <MobileIcon className="text-white" size={32} />,
    title: 'Mobile Development',
    description: 'Native iOS, Android, and cross-platform mobile apps using React Native and Flutter.',
    gradient: 'from-purple-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'iOS app on iPhone',
    size: 'medium',
  },
  {
    icon: <CloudIcon className="text-white" size={32} />,
    title: 'Cloud & DevOps',
    description: 'AWS, Azure, GCP deployment, CI/CD pipelines, containerization, and infrastructure automation.',
    gradient: 'from-green-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    imageAlt: 'Cloud infrastructure',
    size: 'medium',
  },
  {
    icon: <DatabaseIcon className="text-white" size={32} />,
    title: 'Database Solutions',
    description: 'Database design, optimization, migration, and management for scalable applications.',
    gradient: 'from-orange-500 to-red-600',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2030&auto=format&fit=crop',
    imageAlt: 'Database visualization',
    size: 'small',
  },
  {
    icon: <SecurityIcon className="text-white" size={32} />,
    title: 'Security & Compliance',
    description: 'Security audits, penetration testing, GDPR compliance, and secure coding practices.',
    gradient: 'from-red-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Security shield',
    size: 'small',
  },
  {
    icon: <ApiIcon className="text-white" size={32} />,
    title: 'API Development',
    description: 'RESTful and GraphQL APIs, microservices architecture, and third-party integrations.',
    gradient: 'from-indigo-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    imageAlt: 'API code',
    size: 'medium',
  },
  {
    icon: <BugIcon className="text-white" size={32} />,
    title: 'QA & Testing',
    description: 'Automated testing, manual QA, performance testing, and quality assurance services.',
    gradient: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
    imageAlt: 'Testing interface',
    size: 'small',
  },
  {
    icon: <RocketIcon className="text-white" size={32} />,
    title: 'Deployment & Launch',
    description: 'Production deployment, monitoring setup, performance optimization, and go-live support.',
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    imageAlt: 'Deployment process',
    size: 'medium',
  },
  {
    icon: <TeamIcon className="text-white" size={32} />,
    title: 'Team Augmentation',
    description: 'Dedicated developers, tech leads, and engineering teams to scale your projects.',
    gradient: 'from-teal-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Team collaboration',
    size: 'large',
  },
  {
    icon: <ChartIcon className="text-white" size={32} />,
    title: 'Analytics & BI',
    description: 'Business intelligence solutions, data analytics, reporting dashboards, and insights.',
    gradient: 'from-yellow-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Analytics dashboard',
    size: 'small',
  },
  {
    icon: <ShoppingIcon className="text-white" size={32} />,
    title: 'E-Commerce Solutions',
    description: 'Online stores, payment integrations, inventory management, and marketplace platforms.',
    gradient: 'from-emerald-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'E-commerce platform',
    size: 'medium',
  },
  {
    icon: <BankIcon className="text-white" size={32} />,
    title: 'Enterprise Solutions',
    description: 'Large-scale enterprise systems, ERP integration, and complex business applications.',
    gradient: 'from-violet-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    imageAlt: 'Enterprise office',
    size: 'small',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light px-4">
            Comprehensive software solutions covering every aspect of development and deployment
          </p>
        </div>

        {/* Creative Masonry Grid - Mobile first: 1 column, then 2, then 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const colSpan = service.size === 'large' ? 'sm:col-span-2 lg:col-span-2' : '';
            const rowSpan = service.size === 'large' ? 'sm:row-span-2 lg:row-span-2' : '';
            const height = service.size === 'large' ? 'h-[400px] sm:h-[500px]' : service.size === 'medium' ? 'h-[300px] sm:h-[350px]' : 'h-[280px] sm:h-[280px]';
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${colSpan} ${rowSpan} ${height} border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
              >
                {/* Image Background */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    quality={85}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-4 sm:p-6 lg:p-8">
                  <div>
                    <div className={`inline-flex p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-white mb-2 sm:mb-3 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-200 text-xs sm:text-sm lg:text-base leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
