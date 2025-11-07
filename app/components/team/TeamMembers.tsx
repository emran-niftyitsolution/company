'use client';

import Image from 'next/image';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../icons';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in software development',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-purple-500 to-pink-600',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    bio: 'Tech enthusiast passionate about scalable architectures',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-cyan-500 to-blue-600',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Designer',
    bio: 'Creating beautiful and intuitive user experiences',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-pink-500 to-rose-600',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'David Kim',
    role: 'Senior Developer',
    bio: 'Full-stack wizard building robust applications',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-cyan-500 to-teal-600',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Lisa Wang',
    role: 'DevOps Engineer',
    bio: 'Automating infrastructure and streamlining deployments',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2076&auto=format&fit=crop',
    gradient: 'from-purple-500 to-indigo-600',
    social: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'James Taylor',
    role: 'Product Manager',
    bio: 'Turning ideas into successful products',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-pink-500 to-purple-600',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

export default function TeamMembers() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={85}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-70 group-hover:opacity-50 transition-opacity duration-500`}></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-cyan-400 font-bold mb-3 text-sm uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all group/social"
                    >
                      <LinkedinIcon size={20} className="text-white group-hover/social:scale-110 transition-transform" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all group/social"
                    >
                      <GithubIcon size={20} className="text-white group-hover/social:scale-110 transition-transform" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all group/social"
                    >
                      <TwitterIcon size={20} className="text-white group-hover/social:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

