'use client';

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Code, Lightbulb, Bot, Smartphone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';

const ServicesCanvas = dynamic(() => import('@/components/three/ServicesCanvas'), { ssr: false });

const services = [
  {
    num: '01', icon: Code, side: 'left' as const,
    title: 'Software Development',
    desc:  'Custom web apps, dashboards, and SaaS platforms built to scale.',
    tags:  ['Next.js', 'Django', 'PostgreSQL'],
    img:   'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
  },
  {
    num: '02', icon: Lightbulb, side: 'right' as const,
    title: 'IT Consultancy',
    desc:  'Tech strategy, architecture decisions, and team augmentation.',
    tags:  ['Audits', 'Roadmaps', 'DevOps'],
    img:   'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  },
  {
    num: '03', icon: Bot, side: 'left' as const,
    title: 'AI Solutions',
    desc:  'LLM pipelines, intelligent automation, data extraction systems.',
    tags:  ['Python', 'LangChain', 'OpenAI'],
    img:   'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
  },
  {
    num: '04', icon: Smartphone, side: 'right' as const,
    title: 'Mobile Apps',
    desc:  'Cross-platform apps that feel truly native on iOS and Android.',
    tags:  ['React Native', 'Expo', 'Swift'],
    img:   'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
  },
] as const;

// Scroll % at which each card pops in (0→1 through the section)
const CARD_THRESHOLDS = [0.12, 0.28, 0.45, 0.62];

export default function ServicesSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const scrollPctRef = useRef(0);
  const c0 = useRef<HTMLDivElement>(null);
  const c1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null);
  const c3 = useRef<HTMLDivElement>(null);
  const cardRefs = [c0, c1, c2, c3];
  const animated = useRef([false, false, false, false]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Cards start clipped (wipe-in from their side — no overflow needed)
    cardRefs.forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      const fromLeft = services[i].side === 'left';
      gsap.set(el, {
        clipPath: fromLeft ? 'inset(0 100% 0 0)' : 'inset(0 0% 0 100%)',
        opacity:  0,
        scale:    0.9,
      });
    });

    const fireCard = (i: number) => {
      if (animated.current[i]) return;
      animated.current[i] = true;
      const el = cardRefs[i].current;
      if (!el) return;
      gsap.to(el, {
        clipPath: 'inset(0 0% 0 0%)',
        opacity:  1,
        scale:    1,
        duration: 0.7,
        ease:     'power3.out',
      });
    };

    const onScroll = () => {
      const rect  = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = Math.min(1, Math.max(0, -rect.top / total));
      scrollPctRef.current = pct;

      CARD_THRESHOLDS.forEach((threshold, i) => {
        if (pct >= threshold) fireCard(i);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Small delay so GSAP has time to set before first paint
    const t = setTimeout(onScroll, 50);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#0A0A0A]"
      style={{ minHeight: '200vh' }}
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
          <h2 className="font-heading text-3xl md:text-4xl font-black tracking-tight text-white mb-1">
            Services built for{' '}
            <span className="text-[#D85A30]">real outcomes</span>
          </h2>
          <p className="text-[#555] text-xs max-w-xs mx-auto">
            We partner with ambitious teams to build robust digital products.
          </p>
        </div>

        {/* 3-column grid */}
        <div
          className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-[1fr_300px_1fr] lg:grid-cols-[1fr_340px_1fr] px-6 md:px-8 pb-6 gap-4 min-h-0"
        >
          {/* Left column */}
          <div className="hidden md:flex flex-col justify-center gap-5 py-4" style={{ overflow: 'visible', clipPath: 'none' }}>
            <div style={{ marginTop: '-10%' }}>
              <ServiceCard service={services[0]} ref={c0} />
            </div>
            <div style={{ marginLeft: '16px' }}>
              <ServiceCard service={services[2]} ref={c2} />
            </div>
          </div>

          {/* Centre — Three.js canvas */}
          <div className="relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <ServicesCanvas scrollRef={scrollPctRef} />
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
              <Link
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-semibold border border-[#D85A30]/50 bg-[#D85A30]/10 backdrop-blur-sm hover:bg-[#D85A30]/25 hover:border-[#D85A30] transition-all duration-200"
              >
                Start your project <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="hidden md:flex flex-col justify-center gap-5 py-4" style={{ overflow: 'visible', clipPath: 'none' }}>
            <div style={{ marginTop: '10%', marginRight: '16px' }}>
              <ServiceCard service={services[1]} ref={c1} />
            </div>
            <div>
              <ServiceCard service={services[3]} ref={c3} />
            </div>
          </div>

          {/* Mobile stacked */}
          <div className="md:hidden col-span-full flex flex-col gap-3 mt-4 overflow-visible">
            {services.map((s, i) => (
              <ServiceCard key={s.num} service={s} ref={cardRefs[i]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
const ServiceCard = React.forwardRef<
  HTMLDivElement,
  { service: typeof services[number] }
>(function ServiceCard({ service }, ref) {
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="group relative rounded-xl overflow-hidden cursor-default flex flex-col"
      style={{
        height:     '165px',
        border:     '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(255,255,255,0.03)',
      }}
    >
      {/* Hover bg image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: `url(${service.img})` }}
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/78 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-xl border border-[#D85A30]/0 group-hover:border-[#D85A30]/40 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10 p-4 flex flex-col h-full gap-2">
        <span className="absolute top-3 right-4 font-mono text-2xl font-bold text-white/[0.05] select-none">
          {service.num}
        </span>

        <div className="w-8 h-8 rounded-lg bg-[#D85A30]/10 border border-[#D85A30]/20 flex items-center justify-center shrink-0 group-hover:bg-[#D85A30]/25 transition-colors">
          <Icon className="w-3.5 h-3.5 text-[#D85A30]" />
        </div>

        <div className="mt-auto">
          <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-[#D85A30] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-[#555] group-hover:text-[#888] text-xs leading-relaxed line-clamp-2 transition-colors duration-300">
            {service.desc}
          </p>
        </div>

        <div className="flex flex-wrap gap-1 mt-auto">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] text-[#444] border border-[#1E1E1E] group-hover:border-[#D85A30]/30 group-hover:text-[#777] rounded-full px-2 py-0.5 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});
