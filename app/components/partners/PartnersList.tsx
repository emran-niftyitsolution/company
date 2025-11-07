'use client';

import Link from 'next/link';

const partners = [
  { name: 'AWS', category: 'Cloud Platform', gradient: 'from-orange-500 to-orange-600' },
  { name: 'Microsoft Azure', category: 'Cloud Platform', gradient: 'from-blue-500 to-blue-600' },
  { name: 'Google Cloud', category: 'Cloud Platform', gradient: 'from-blue-400 to-blue-500' },
  { name: 'Docker', category: 'Containerization', gradient: 'from-blue-500 to-cyan-600' },
  { name: 'Kubernetes', category: 'Orchestration', gradient: 'from-blue-500 to-blue-700' },
  { name: 'React', category: 'Framework', gradient: 'from-cyan-400 to-blue-500' },
  { name: 'Next.js', category: 'Framework', gradient: 'from-gray-800 to-black' },
  { name: 'Node.js', category: 'Runtime', gradient: 'from-green-500 to-green-600' },
  { name: 'MongoDB', category: 'Database', gradient: 'from-green-500 to-emerald-600' },
  { name: 'PostgreSQL', category: 'Database', gradient: 'from-blue-600 to-indigo-600' },
  { name: 'Stripe', category: 'Payment', gradient: 'from-purple-500 to-purple-600' },
  { name: 'GitHub', category: 'Version Control', gradient: 'from-gray-700 to-gray-900' },
];

export default function PartnersList() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl text-center"
            >
              <div className={`inline-flex w-20 h-20 rounded-xl bg-gradient-to-br ${partner.gradient} items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                <span className="text-white font-black text-xl">{partner.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-black text-white mb-2">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-400">
                {partner.category}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10">
            <h3 className="text-3xl font-black text-white mb-4">
              Become a Partner
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Interested in partnering with us? Let&apos;s explore how we can work together.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 transition-all"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

