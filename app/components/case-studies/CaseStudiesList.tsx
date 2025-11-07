'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '../icons';

const caseStudies = [
  {
    title: 'Enterprise E-Commerce Transformation',
    client: 'RetailTech Inc.',
    industry: 'E-Commerce',
    challenge: 'Legacy system couldn&apos;t handle peak traffic, causing frequent crashes during sales events.',
    solution: 'Built a scalable microservices architecture with auto-scaling capabilities.',
    results: [
      '300% increase in peak traffic handling',
      '99.9% uptime achieved',
      '50% reduction in server costs',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-cyan-500 to-blue-600',
    featured: true,
  },
  {
    title: 'Healthcare Management System',
    client: 'MedCare Solutions',
    industry: 'Healthcare',
    challenge: 'Manual patient record management leading to errors and inefficiencies.',
    solution: 'Developed comprehensive EHR system with AI-powered diagnostics.',
    results: [
      '80% reduction in administrative time',
      '95% accuracy in patient records',
      'Real-time collaboration enabled',
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-purple-500 to-pink-600',
    featured: false,
  },
  {
    title: 'Mobile Banking Revolution',
    client: 'FinanceFirst Bank',
    industry: 'FinTech',
    challenge: 'Outdated mobile app with poor user experience and security concerns.',
    solution: 'Complete redesign with biometric authentication and modern UX.',
    results: [
      '200% increase in mobile transactions',
      '4.8/5 app store rating',
      'Zero security incidents',
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-pink-500 to-rose-600',
    featured: false,
  },
  {
    title: 'SaaS Analytics Platform',
    client: 'DataInsight Corp',
    industry: 'SaaS',
    challenge: 'Need for real-time analytics and customizable dashboards.',
    solution: 'Built cloud-native analytics platform with advanced visualization.',
    results: [
      '10x faster data processing',
      '500+ active users in first month',
      '95% customer satisfaction',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-cyan-500 to-teal-600',
    featured: false,
  },
];

export default function CaseStudiesList() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 ${
                study.featured ? 'lg:grid lg:grid-cols-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${study.featured ? 'h-[500px]' : 'h-64'} overflow-hidden`}>
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={85}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-500`}></div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold text-white border border-white/30">
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-8 ${study.featured ? 'lg:p-12' : ''}`}>
                <div className="mb-4">
                  <span className="text-sm text-gray-400 font-medium">{study.client}</span>
                </div>
                <h3 className={`${study.featured ? 'text-4xl' : 'text-2xl'} font-black text-white mb-4 leading-tight`}>
                  {study.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-wider">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-purple-400 mb-2 uppercase tracking-wider">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-pink-400 mb-2 uppercase tracking-wider">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all group/btn">
                  Read Full Case Study <ArrowRightIcon size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

