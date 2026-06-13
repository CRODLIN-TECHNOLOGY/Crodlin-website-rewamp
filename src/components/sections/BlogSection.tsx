import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';

const articles = [
  {
    category: 'Engineering',
    title: 'How We Built a Real-Time Hotel Lock System with MQTT and React Native',
    readTime: '8 min read',
    date: 'Oct 12, 2025',
    excerpt: 'A deep dive into the architecture behind ARES Energetics lock system, handling real-time states and offline fallback for 500+ rooms.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
  },
  {
    category: 'AI / LLM',
    title: 'Why Most AI Integrations Fail (And How We Fix That)',
    readTime: '5 min read',
    date: 'Sep 28, 2025',
    excerpt: "Throwing a wrapper around OpenAI isn't a product. We explore why structured outputs and rigorous prompt engineering are the only way to build reliable AI.",
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop',
  },
  {
    category: 'Business',
    title: 'The Hidden Cost of Cheap Software Development',
    readTime: '4 min read',
    date: 'Aug 15, 2025',
    excerpt: 'Why saving 30% upfront often costs 300% in rewrites a year later. A look at technical debt, architecture choices, and building for scale.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="reveal">
          <SectionHeader eyebrow="INSIGHTS" headline="We think out loud" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${idx + 1} group rounded-2xl overflow-hidden border border-[#E5E5E5] hover:border-[#D85A30] hover:shadow-[0_12px_40px_rgba(216,90,48,0.08)] transition-all duration-500 flex flex-col cursor-pointer hover:-translate-y-1`}
            >
              <div className="overflow-hidden h-48 w-full">
                <div
                  className="h-full w-full bg-cover bg-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  style={{
                    backgroundImage: `url(${article.img})`,
                    transform: 'scale(1)',
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow relative overflow-hidden">
                <span className="text-xs text-[#D85A30] font-semibold uppercase tracking-wide mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-[#0D0D0D] leading-snug group-hover:text-[#D85A30] transition-colors duration-300 mb-2">
                  {article.title}
                </h3>
                <span className="text-xs text-[#999] mb-4">
                  {article.readTime} · {article.date}
                </span>
                <p className="text-sm text-[#5A5A5A] line-clamp-3 mb-8 flex-grow">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-[#D85A30] font-semibold text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-6">
                  Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <Link
            href="#blog"
            className="text-[#D85A30] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-200"
          >
            Read all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
