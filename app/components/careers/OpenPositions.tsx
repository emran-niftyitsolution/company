'use client';

import { ArrowRightIcon, CodeIcon, CloudIcon, MobileIcon, SecurityIcon } from '../icons';

const positions = [
  {
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    icon: <CodeIcon className="text-white" size={28} />,
    gradient: 'from-cyan-500 to-blue-600',
    description: 'We are looking for an experienced full-stack developer to join our team and work on cutting-edge web applications.',
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    icon: <CloudIcon className="text-white" size={28} />,
    gradient: 'from-purple-500 to-pink-600',
    description: 'Join our DevOps team to build and maintain scalable cloud infrastructure and CI/CD pipelines.',
  },
  {
    title: 'Mobile App Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    icon: <MobileIcon className="text-white" size={28} />,
    gradient: 'from-pink-500 to-rose-600',
    description: 'Create beautiful and functional mobile applications for iOS and Android platforms.',
  },
  {
    title: 'Security Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    icon: <SecurityIcon className="text-white" size={28} />,
    gradient: 'from-cyan-500 to-teal-600',
    description: 'Help us build secure systems and protect our clients&apos; data with best-in-class security practices.',
  },
  {
    title: 'Frontend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    icon: <CodeIcon className="text-white" size={28} />,
    gradient: 'from-purple-500 to-indigo-600',
    description: 'Build stunning user interfaces and create exceptional user experiences with modern web technologies.',
  },
  {
    title: 'Backend Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    icon: <CodeIcon className="text-white" size={28} />,
    gradient: 'from-pink-500 to-purple-600',
    description: 'Design and develop robust backend systems and APIs that power our applications.',
  },
];

export default function OpenPositions() {
  return (
    <section id="positions" className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-r from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold text-purple-400 uppercase tracking-wider">Open Positions</span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Explore exciting career opportunities and find your perfect role
          </p>
        </div>

        {/* Positions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${position.gradient} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  {position.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white border border-white/20">
                  {position.type}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-3">
                {position.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {position.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
                  {position.department}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
                  {position.location}
                </span>
              </div>

              <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all group/btn">
                Apply Now <ArrowRightIcon size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <div className={`absolute inset-0 bg-gradient-to-br ${position.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10">
            <h3 className="text-3xl font-black text-white mb-4">
              Don&apos;t see a role that fits?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@shunnogroup.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 transition-all"
            >
              Send Your Resume <ArrowRightIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

