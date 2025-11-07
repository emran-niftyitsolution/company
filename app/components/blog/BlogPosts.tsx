'use client';

import Image from 'next/image';
import { ArrowRightIcon } from '../icons';

const blogPosts = [
  {
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Exploring the latest technologies and frameworks that are shaping the future of web development.',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    gradient: 'from-cyan-500 to-blue-600',
    readTime: '5 min read',
  },
  {
    title: 'Building Scalable Mobile Apps: Best Practices',
    excerpt: 'Learn how to build mobile applications that can scale with your business growth.',
    author: 'Michael Chen',
    date: 'March 10, 2024',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-purple-500 to-pink-600',
    readTime: '7 min read',
  },
  {
    title: 'DevOps Automation: Streamlining Your Workflow',
    excerpt: 'Discover how automation can transform your DevOps pipeline and improve deployment speed.',
    author: 'Emily Rodriguez',
    date: 'March 5, 2024',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    gradient: 'from-pink-500 to-rose-600',
    readTime: '6 min read',
  },
  {
    title: 'Security Best Practices for Modern Applications',
    excerpt: 'Essential security practices every developer should know to protect applications from threats.',
    author: 'David Kim',
    date: 'February 28, 2024',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    gradient: 'from-cyan-500 to-teal-600',
    readTime: '8 min read',
  },
  {
    title: 'Cloud Migration Strategies: A Complete Guide',
    excerpt: 'Step-by-step guide to migrating your infrastructure to the cloud successfully.',
    author: 'Lisa Wang',
    date: 'February 20, 2024',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    gradient: 'from-purple-500 to-indigo-600',
    readTime: '10 min read',
  },
  {
    title: 'AI Integration in Software Development',
    excerpt: 'How artificial intelligence is revolutionizing the way we build and deploy software.',
    author: 'James Taylor',
    date: 'February 15, 2024',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    gradient: 'from-pink-500 to-purple-600',
    readTime: '9 min read',
  },
];

export default function BlogPosts() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={85}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-70 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/30">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 font-medium">{post.author}</span>
                  <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all group/btn">
                    Read More <ArrowRightIcon size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

