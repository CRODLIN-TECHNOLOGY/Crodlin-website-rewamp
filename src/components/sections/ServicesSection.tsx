'use client';

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { IconCode, IconBulb, IconRobot, IconDeviceMobile } from '@tabler/icons-react';
import Link from 'next/link';

const ServicesCanvas = dynamic(() => import('@/components/three/ServicesCanvas'), { ssr: false });

const services = [
  {
    num: '01', icon: IconCode, side: 'left' as const,
    title: 'Software Development',
    desc:  'Custom web apps, dashboards, and SaaS platforms built to scale.',
    tags:  ['Next.js', 'Django', 'PostgreSQL'],
    img:   'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
  },
  {
    num: '02', icon: IconBulb, side: 'right' as const,
    title: 'IT Consultancy',
    desc:  'Tech strategy, architecture decisions, and team augmentation.',
    tags:  ['Audits', 'Roadmaps', 'DevOps'],
    img:   'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  },
  {
    num: '03', icon: IconRobot, side: 'left' as const,
    title: 'AI Solutions',
    desc:  'LLM pipelines, intelligent automation, data extraction systems.',
    tags:  ['Python', 'LangChain', 'OpenAI'],
    img:   'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
  },
  {
    num: '04', icon: IconDeviceMobile, side: 'right' as const,
    title: 'Mobile Apps',
    desc:  'Cross-platform apps that feel truly native on iOS and Android.',
    tags:  ['React Native', 'Expo', 'Swift'],
    img:   'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
  },
] as const;

const RANGES = [
  [0.05, 0.30],
  [0.25, 0.50],
  [0.45, 0.70],
  [0.63, 0.88],
] as const;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function ServicesSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const scrollPctRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Use data-card attribute — avoids ref-conflict with mobile duplicates
    const getCards = () =>
      Array.from(section.querySelectorAll<HTMLElement>('[data-card]'))
        .sort((a, b) => Number(a.dataset.card) - Number(b.dataset.card));

    // Wait one frame for DOM to settle, then hide cards
    const initTimer = setTimeout(() => {
      getCards().forEach((el) => {
        el.style.opacity    = '0';
        el.style.transform  = 'translateY(56px)';
        el.style.transition = 'none';
      });
    }, 50);

    const update = () => {
      const rect   = section.getBoundingClientRect();
      const total  = section.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = Math.max(0, Math.min(1, -rect.top / total));
      scrollPctRef.current = pct;

      getCards().forEach((el, i) => {
        const [start, end] = RANGES[i] ?? [0, 1];
        const raw = Math.max(0, Math.min(1, (pct - start) / (end - start)));
        const p   = easeOutCubic(raw);
        el.style.opacity   = String(p);
        el.style.transform = `translateY(${(1 - p) * 56}px)`;
      });
    };

    window.addEventListener('scroll', update, { passive: true });

    return () => {
      window.removeEventListener('scroll', update);
      clearTimeout(initTimer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#0A0A0A]"
      style={{ minHeight: '220vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D85A30]/8 rounded-full blur-[130px]" />
        </div>

        {/* Header */}
        <div className="relative z-10 text-center pt-5 pb-1 px-6 shrink-0">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#D85A30] mb-2 block">
            WHAT WE DO
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-2">
            Services built for{' '}
            <span className="text-[#D85A30]">real outcomes</span>
          </h2>
          <p className="text-[#666] text-sm max-w-sm mx-auto">
            We partner with ambitious teams to build robust digital products.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-[1.4fr_220px_1.4fr] lg:grid-cols-[1.4fr_260px_1.4fr] px-3 md:px-4 pb-6 gap-3 min-h-0">

          {/* Left column — cards 01, 03 + CTA */}
          <div className="hidden md:flex flex-col justify-center py-4" style={{ gap: '40px' }}>
            <div style={{ marginTop: '-12%' }}>
              <ServiceCard service={services[0]} cardIndex={0} />
            </div>
            <div style={{ marginLeft: '14px' }}>
              <ServiceCard service={services[2]} cardIndex={2} />
            </div>
          </div>

          {/* Centre — Three.js canvas */}
          <div className="relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <ServicesCanvas scrollRef={scrollPctRef} />
            </div>
          </div>

          {/* Right column — cards 02, 04 */}
          <div className="hidden md:flex flex-col justify-center py-4" style={{ gap: '40px' }}>
            <div style={{ marginTop: '12%', marginRight: '14px' }}>
              <ServiceCard service={services[1]} cardIndex={1} />
            </div>
            <div>
              <ServiceCard service={services[3]} cardIndex={3} />
            </div>
          </div>
        </div>

        {/* Bottom CTA heading */}
        <Link
          href="#contact"
          className="relative z-10 shrink-0 w-full text-center py-4 group"
        >
          <span className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white/10 group-hover:text-[#D85A30] transition-colors duration-300 tracking-tight uppercase">
            Start your project ↗
          </span>
        </Link>
      </div>
    </section>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function ServiceCard({
  service,
  cardIndex,
}: {
  service: typeof services[number];
  cardIndex: number;
}) {
  const Icon = service.icon;

  return (
    <div
      data-card={cardIndex}
      className="group relative rounded-xl overflow-hidden cursor-default flex flex-col transition-all duration-300"
      style={{
        height:     '195px',
        background: 'transparent',
        willChange: 'transform, opacity',
        border:     '1px solid transparent',
      }}
      onMouseEnter={e => (e.currentTarget.style.border = '1px solid rgba(216,90,48,0.7)')}
      onMouseLeave={e => (e.currentTarget.style.border = '1px solid transparent')}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: `url(${service.img})` }}
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-4 flex flex-col h-full">
        {/* Number top-left */}
        <span className="font-mono text-base font-semibold text-white/30">{service.num}</span>

        {/* Big title at bottom */}
        <div className="mt-auto">
          <h3 className="font-heading font-black text-white/80 group-hover:text-white transition-colors duration-300 leading-none"
            style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)' }}
          >
            {service.title}
          </h3>
          <p className="text-[#444] group-hover:text-[#666] text-xs mt-1 leading-relaxed line-clamp-1 transition-colors duration-300">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
