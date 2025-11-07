'use client';

import { ArrowRightIcon, CodeIcon, ChartIcon, SecurityIcon, CloudIcon } from '../icons';

const resources = [
  {
    title: 'API Documentation',
    description: 'Complete API reference with examples, authentication guides, and integration tutorials.',
    icon: <CodeIcon className="text-white" size={32} />,
    gradient: 'from-cyan-500 to-blue-600',
    type: 'Documentation',
  },
  {
    title: 'Developer Guides',
    description: 'Step-by-step guides for integrating our services and building custom solutions.',
    icon: <CodeIcon className="text-white" size={32} />,
    gradient: 'from-purple-500 to-pink-600',
    type: 'Guide',
  },
  {
    title: 'Best Practices',
    description: 'Learn industry best practices for security, performance, and scalability.',
    icon: <SecurityIcon className="text-white" size={32} />,
    gradient: 'from-pink-500 to-rose-600',
    type: 'Guide',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Access your project analytics, performance metrics, and usage statistics.',
    icon: <ChartIcon className="text-white" size={32} />,
    gradient: 'from-cyan-500 to-teal-600',
    type: 'Tool',
  },
  {
    title: 'Cloud Migration Guide',
    description: 'Comprehensive guide for migrating your infrastructure to the cloud.',
    icon: <CloudIcon className="text-white" size={32} />,
    gradient: 'from-purple-500 to-indigo-600',
    type: 'Guide',
  },
  {
    title: 'SDK Downloads',
    description: 'Download our SDKs and libraries for popular programming languages.',
    icon: <CodeIcon className="text-white" size={32} />,
    gradient: 'from-pink-500 to-purple-600',
    type: 'Download',
  },
];

export default function ResourcesList() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${resource.gradient} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                {resource.icon}
              </div>
              <div className="mb-2">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-cyan-400 border border-white/20">
                  {resource.type}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {resource.description}
              </p>
              <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all group/btn">
                Access Resource <ArrowRightIcon size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

