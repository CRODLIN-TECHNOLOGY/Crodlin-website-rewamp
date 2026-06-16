'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const articles = [
  {
    tags: ['Engineering', 'React Native'],
    title: 'How We Built a Real-Time Hotel Lock System with MQTT',
    date: 'Oct 12, 2025',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
  },
  {
    tags: ['AI / LLM', 'OpenAI'],
    title: 'Why Most AI Integrations Fail (And How We Fix That)',
    date: 'Sep 28, 2025',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
  },
  {
    tags: ['Business', 'Strategy'],
    title: 'The Hidden Cost of Cheap Software Development',
    date: 'Aug 15, 2025',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
  {
    tags: ['DevOps', 'Infrastructure'],
    title: 'Scaling to 10k Users Without Rewriting Everything',
    date: 'Jul 4, 2025',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
  },
];

// Triple the articles so we can loop seamlessly
const looped = [...articles, ...articles, ...articles];

export default function BlogSection() {
  const scrollRef  = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const CARD_W     = 300 + 20; // card width + gap (approx)

  // On mount, jump to the middle set so both directions have room
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = CARD_W * articles.length;
  }, [CARD_W]);

  // After each scroll snap, silently reset to the middle copy
  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const mid   = CARD_W * articles.length;
    const total = CARD_W * articles.length * 2;
    if (el.scrollLeft <= 0) {
      el.scrollLeft = mid;
    } else if (el.scrollLeft >= total) {
      el.scrollLeft = mid;
    }
  }, [CARD_W]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'right' ? CARD_W : -CARD_W, behavior: 'smooth' });
    setActive(prev => (prev + (dir === 'right' ? 1 : -1) + articles.length) % articles.length);
  };

  return (
    <section id="blog" className="bg-[#0D0D0D] py-24 overflow-hidden">
      <div className="flex items-stretch">

        {/* Side-by-side: heading left, cards right */}
        <div className="flex gap-0 items-stretch w-full">

          {/* LEFT — heading */}
          <div className="hidden md:flex flex-col justify-between shrink-0 py-2 pl-6 md:pl-12 pr-6"
            style={{ width: '380px' }}
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30] mb-3 block">
                INSIGHTS
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                The Crodlin<br />
                <span className="text-[#D85A30]">Journal</span>
              </h2>
              <p className="text-[#555] text-sm mt-4 leading-relaxed">
                Discover our latest thoughts, ideas and innovations.
              </p>
            </div>

            {/* Arrow buttons at bottom left */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#D85A30] hover:text-[#D85A30] transition-all duration-200"
              >
                ←
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full bg-[#D85A30] flex items-center justify-center text-white hover:bg-[#c04d26] transition-all duration-200"
              >
                →
              </button>
            </div>
          </div>

          {/* RIGHT — scrollable cards */}
          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-5 overflow-x-auto pb-2 no-scrollbar flex-1"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {looped.map((article, i) => (
              <BlogCard key={i} article={article} index={i % articles.length} activeIndex={active} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function BlogCard({
  article,
  index,
  activeIndex,
}: {
  article: typeof articles[number];
  index: number;
  activeIndex: number;
}) {
  const [hovered, setHovered] = useState(false);
  const isActive = index === activeIndex;

  return (
    <Link
      href="#blog"
      className="group shrink-0 rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-all duration-500"
      style={{
        width:           'clamp(260px, calc((100vw - 420px) / 2.4), 340px)',
        height:          '460px',
        scrollSnapAlign: 'start',
        border:     hovered ? '1px solid rgba(216,90,48,0.6)' : '1px solid rgba(255,255,255,0.07)',
        background: hovered
          ? 'linear-gradient(180deg, #1a1a1a 0%, #3d1200 100%)'
          : '#111',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* TOP — tags, title, date */}
      <div className="flex flex-col p-5 gap-3" style={{ flex: '0 0 auto' }}>
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-full transition-all duration-300"
              style={{
                background: hovered ? 'rgba(216,90,48,0.15)' : 'rgba(255,255,255,0.05)',
                color:      hovered ? '#D85A30' : '#888',
                border:     hovered ? '1px solid rgba(216,90,48,0.3)' : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="font-heading font-bold leading-snug transition-colors duration-300"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: hovered ? '#fff' : 'rgba(255,255,255,0.85)' }}
        >
          {article.title}
        </h3>

        <span className="text-xs text-[#444]">{article.date}</span>
      </div>

      {/* BOTTOM — image fills remaining space */}
      <div className="relative flex-1 overflow-hidden mx-4 mb-4 rounded-xl">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: `url(${article.img})`,
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
        {/* Read More overlay on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-2 text-[#D85A30] text-sm font-semibold transition-all duration-300"
          style={{
            opacity:          hovered ? 1 : 0,
            transform:        hovered ? 'translateY(0)' : 'translateY(8px)',
            background:       'linear-gradient(to top, rgba(17,17,17,0.95) 0%, transparent 100%)',
          }}
        >
          Read More <span style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
        </div>
      </div>
    </Link>
  );
}
