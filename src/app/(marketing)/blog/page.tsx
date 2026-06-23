'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const articles = [
  { id: '1', slug: '#', category: 'Engineering', tags: ['Engineering', 'React Native'], title: 'How We Built a Real-Time Hotel Lock System with MQTT', date: 'Oct 12, 2025', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop' },
  { id: '2', slug: '#', category: 'AI / LLM',    tags: ['AI / LLM', 'OpenAI'],          title: 'Why Most AI Integrations Fail (And How We Fix That)',  date: 'Sep 28, 2025', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop' },
  { id: '3', slug: '#', category: 'Business',    tags: ['Business', 'Strategy'],         title: 'The Hidden Cost of Cheap Software Development',         date: 'Aug 15, 2025', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop' },
  { id: '4', slug: '#', category: 'DevOps',      tags: ['DevOps', 'Infrastructure'],     title: 'Scaling to 10k Users Without Rewriting Everything',     date: 'Jul 4, 2025',  img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop' },
];

export default function BlogPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full h-screen flex items-end overflow-hidden">
        {/* bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/hero-image.jpg')` }}
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* content — bottom, text right / asset left */}
        <div className="relative w-full max-w-screen-2xl mx-auto px-4 md:px-10 pb-20 flex items-center justify-between gap-8">

          {/* 3D asset — bottom left */}
          <motion.img
            src="/blog-asset.png"
            alt=""
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block w-[330px] lg:w-[410px] xl:w-[490px] object-contain select-none pointer-events-none"
            style={{ marginLeft: '60px', marginBottom: '0px', transform: 'rotate(-8deg)' }}
          />

          {/* text — right side */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-8 md:max-w-3xl">
            <motion.h1
              variants={fadeUp}
              className="font-bold tracking-tight text-white leading-none"
              style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
            >
              The Crodlin <br/><span className="text-[#D85A30]">Journal.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.35rem)' }}>
              Engineering deep-dives, product decisions, and startup lessons from people building every day.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-2">
              <a
                href="#articles"
                className="px-7 py-3 border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-200"
              >
                Read Articles →
              </a>
              <span className="text-white/30 text-sm">24 posts</span>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── Curved divider ── */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 Q360 0 720 30 Q1080 60 1440 20" stroke="url(#orangeGrad)" strokeWidth="1.5" fill="none" />
          <defs>
            <linearGradient id="orangeGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D85A30" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D85A30" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D85A30" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Articles grid ── */}
      <section className="py-24 max-w-screen-2xl mx-auto px-4 md:px-10">
        <div className="flex flex-col gap-3 mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">All articles</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Latest thoughts &amp; ideas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">Let's build</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Got a project in mind?
            </h2>
            <p className="text-white/40 text-base md:text-lg max-w-md">We'd love to hear what you're building.</p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm"
          >
            Get a free consultation →
          </Link>
        </div>
      </section>

    </div>
  );
}

function ArticleCard({ article }: { article: typeof articles[number] }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 relative"
      style={{
        minHeight: '400px',
        border: hovered ? '1px solid rgba(216,90,48,0.6)' : '1px solid rgba(255,255,255,0.07)',
        background: '#111',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* blog-card.jpg bg — fades in on hover */}
      <div
        className="absolute inset-0 rounded-2xl bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: `url('/blog-card.jpg')`, opacity: hovered ? 1 : 0 }}
      />
      {/* dark overlay */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%)', opacity: hovered ? 1 : 0 }}
      />

      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '220px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${article.img})`,
            filter: hovered ? 'grayscale(0)' : 'grayscale(1)',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-3 p-6 flex-1">
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all duration-300"
              style={{
                background: hovered ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.05)',
                color:      hovered ? '#fff' : '#888',
                border:     hovered ? '1px solid rgba(216,90,48,0.6)' : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-heading font-bold text-lg leading-snug transition-colors duration-300" style={{ color: 'rgba(255,255,255,0.85)' }}>
          {article.title}
        </h3>

        <span className="text-xs mt-auto" style={{ color: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)' }}>{article.date}</span>

        <div
          className="flex items-center gap-2 text-white text-sm font-semibold transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(8px)' }}
        >
          Read More →
        </div>
      </div>
    </Link>
  );
}
