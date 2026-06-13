'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0D0D0D]" />,
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0D0D0D] overflow-hidden flex flex-col">
      {/* Three.js background */}
      <HeroCanvas />

      {/* Radial vignette to focus centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #0d0d0d 100%)',
          opacity: 0.6,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-0 w-full">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 border border-[#D85A30]/40 text-[#D85A30] bg-[#D85A30]/5 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D85A30] animate-pulse" />
            SOFTWARE · AI · MOBILE
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-[clamp(3rem,8vw,7rem)] font-black leading-[0.95] tracking-[-0.03em] text-white max-w-4xl">
          We build<br />
          software that{' '}
          <em className="not-italic text-[#D85A30]">scales</em>
          <br />
          your business.
        </h1>

        {/* Sub */}
        <p className="text-[#888] text-base md:text-lg max-w-md mt-8 leading-relaxed font-light">
          From MVPs to enterprise systems — we design, build, and ship
          software that moves fast and lasts long.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
          <Link
            href="#contact"
            className="bg-[#D85A30] hover:bg-[#BF4D25] text-white px-8 py-4 rounded-full font-semibold transition-colors text-sm tracking-wide"
          >
            Get a free consultation
          </Link>
          <Link
            href="#work"
            className="text-white/70 hover:text-white group flex items-center gap-2 font-medium transition-colors text-sm"
          >
            See our work
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-auto pt-20 pb-12 grid grid-cols-3 gap-8 max-w-lg border-t border-white/[0.08]">
          {[
            { value: '50+', label: 'Projects shipped' },
            { value: '4 wk', label: 'Avg. MVP delivery' },
            { value: '100%', label: 'On-time rate' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-heading text-2xl md:text-3xl font-black text-white tracking-tight">
                {s.value}
              </div>
              <div className="text-[#555] text-xs uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 w-full overflow-hidden bg-[#D85A30] h-[40px] flex items-center">
        <div className="whitespace-nowrap flex font-mono text-sm text-white animate-marquee">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="mx-4">
              NEXT.JS · REACT NATIVE · DJANGO · AI/ML · POSTGRESQL · SUPABASE · TAILWIND · FIGMA · AWS ·
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
