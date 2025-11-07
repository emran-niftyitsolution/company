'use client';

import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon } from '../icons';

const plans = [
  {
    name: 'Starter',
    price: '$5,000',
    period: 'per month',
    description: 'Perfect for small projects and startups',
    gradient: 'from-cyan-500 to-blue-600',
    features: [
      'Up to 2 developers',
      'Basic support',
      'Monthly progress reports',
      'Code repository access',
      'Deployment assistance',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$15,000',
    period: 'per month',
    description: 'Ideal for growing businesses',
    gradient: 'from-purple-500 to-pink-600',
    features: [
      'Up to 5 developers',
      'Priority support',
      'Weekly progress reports',
      'Dedicated project manager',
      'Code repository access',
      'CI/CD pipeline setup',
      'Performance monitoring',
      'Security audits',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large-scale projects and enterprises',
    gradient: 'from-pink-500 to-rose-600',
    features: [
      'Unlimited developers',
      '24/7 dedicated support',
      'Daily progress reports',
      'Dedicated team',
      'Full code ownership',
      'Custom CI/CD pipelines',
      'Advanced monitoring',
      'Security compliance',
      'Custom integrations',
      'On-site support available',
    ],
    popular: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border-2 ${
                plan.popular ? 'border-purple-500/50' : 'border-white/10'
              } hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-3xl font-black text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircleIcon className="text-cyan-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl bg-gradient-to-r ${plan.gradient} text-white font-bold hover:scale-105 hover:shadow-xl transition-all flex items-center justify-center gap-2`}>
                Get Started <ArrowRightIcon size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10">
            <h3 className="text-3xl font-black text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Contact us to discuss your specific requirements and get a tailored quote.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 transition-all"
            >
              Contact Sales <ArrowRightIcon size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

