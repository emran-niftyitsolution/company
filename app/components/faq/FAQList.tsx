'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What technologies do you use?',
    answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Azure, Docker, Kubernetes, and more. We choose the best technology stack based on your project requirements.',
    category: 'Technology',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during the initial consultation.',
    category: 'Project',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature additions. We have flexible support plans to suit your needs.',
    category: 'Support',
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Absolutely! We offer team augmentation services where our developers integrate seamlessly with your existing team. We can also provide dedicated teams for specific projects.',
    category: 'Team',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile development methodology with regular sprints, daily standups, and continuous delivery. We involve clients throughout the process with regular demos and feedback sessions.',
    category: 'Process',
  },
  {
    question: 'How do you ensure code quality?',
    answer: 'We maintain high code quality through code reviews, automated testing, continuous integration, and following industry best practices. All code goes through rigorous testing before deployment.',
    category: 'Quality',
  },
  {
    question: 'Do you offer cloud migration services?',
    answer: 'Yes, we specialize in cloud migration to AWS, Azure, and GCP. We help you migrate your infrastructure, applications, and data securely with minimal downtime.',
    category: 'Cloud',
  },
  {
    question: 'What are your payment terms?',
    answer: 'We offer flexible payment terms. Typically, we work with milestone-based payments or monthly retainer models. We can discuss payment options that work best for your business.',
    category: 'Payment',
  },
  {
    question: 'Can you help with mobile app development?',
    answer: 'Yes, we develop native iOS, Android, and cross-platform mobile applications using React Native, Flutter, and native technologies. We handle everything from design to App Store deployment.',
    category: 'Mobile',
  },
  {
    question: 'Do you provide UI/UX design services?',
    answer: 'Yes, we have a dedicated design team that creates beautiful, user-friendly interfaces. We follow modern design principles and create designs that are both aesthetically pleasing and highly functional.',
    category: 'Design',
  },
];

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-12 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-cyan-400 border border-white/20">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white">
                    {faq.question}
                  </h3>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <span className="text-white font-bold">+</span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

