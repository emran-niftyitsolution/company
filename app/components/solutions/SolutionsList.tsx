'use client';

import Image from 'next/image';
import { ArrowRightIcon, BankIcon, ShoppingIcon, CodeIcon } from '../icons';

const solutions = [
  {
    title: 'Healthcare Solutions',
    description: 'Comprehensive healthcare management systems, EHR platforms, telemedicine solutions, and patient management systems.',
    icon: <CodeIcon className="text-white" size={40} />,
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    features: ['EHR Systems', 'Telemedicine', 'Patient Portals', 'HIPAA Compliance'],
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Scalable e-commerce platforms, marketplace solutions, inventory management, and payment integrations.',
    icon: <ShoppingIcon className="text-white" size={40} />,
    gradient: 'from-purple-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    features: ['Online Stores', 'Marketplaces', 'Payment Gateways', 'Inventory Management'],
  },
  {
    title: 'FinTech Solutions',
    description: 'Secure banking applications, payment processing systems, financial analytics, and compliance solutions.',
    icon: <BankIcon className="text-white" size={40} />,
    gradient: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    features: ['Mobile Banking', 'Payment Systems', 'Financial Analytics', 'Security Compliance'],
  },
  {
    title: 'EdTech Solutions',
    description: 'Learning management systems, online course platforms, student portals, and educational analytics.',
    icon: <CodeIcon className="text-white" size={40} />,
    gradient: 'from-cyan-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2070&auto=format&fit=crop',
    features: ['LMS Platforms', 'Online Courses', 'Student Portals', 'Progress Tracking'],
  },
  {
    title: 'SaaS Solutions',
    description: 'Custom SaaS applications, multi-tenant platforms, subscription management, and analytics dashboards.',
    icon: <CodeIcon className="text-white" size={40} />,
    gradient: 'from-purple-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    features: ['Multi-Tenant Architecture', 'Subscription Management', 'Analytics', 'API Integration'],
  },
  {
    title: 'Enterprise Solutions',
    description: 'Large-scale enterprise systems, ERP integration, workflow automation, and business intelligence.',
    icon: <CodeIcon className="text-white" size={40} />,
    gradient: 'from-pink-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    features: ['ERP Integration', 'Workflow Automation', 'Business Intelligence', 'Enterprise Security'],
  },
];

export default function SolutionsList() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={85}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-500`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${solution.gradient} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                    {solution.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-cyan-400 mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all group/btn">
                  Learn More <ArrowRightIcon size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

