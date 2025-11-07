'use client';

import { TeamIcon, TrophyIcon, GlobalIcon, CheckCircleIcon } from '../icons';

const benefits = [
  {
    icon: <TeamIcon className="text-white" size={40} />,
    title: 'Remote First',
    description: 'Work from anywhere in the world. We believe in flexibility and work-life balance.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: <TrophyIcon className="text-white" size={40} />,
    title: 'Competitive Salary',
    description: 'We offer competitive compensation packages that reflect your skills and experience.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: <GlobalIcon className="text-white" size={40} />,
    title: 'Learning Budget',
    description: 'Annual budget for courses, conferences, books, and professional development.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: <CheckCircleIcon className="text-white" size={40} />,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs for you and your family.',
    gradient: 'from-cyan-500 to-teal-600',
  },
  {
    icon: <TeamIcon className="text-white" size={40} />,
    title: 'Flexible Hours',
    description: 'Choose your own working hours that fit your lifestyle and productivity peaks.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: <TrophyIcon className="text-white" size={40} />,
    title: 'Stock Options',
    description: 'Equity participation so you can share in the company&apos;s success and growth.',
    gradient: 'from-pink-500 to-purple-600',
  },
];

export default function Benefits() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold text-cyan-400 uppercase tracking-wider">Benefits & Perks</span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Join Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            We offer more than just a job. We offer a career with growth opportunities and amazing benefits.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

