'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#0D0D0D] overflow-hidden"
      style={{ height: '100dvh', minHeight: '640px', maxHeight: '1000px' }}
    >
      {/* Two-column layout — push content below fixed navbar with padding-top */}
      <div className="h-full flex flex-col lg:flex-row" style={{ paddingTop: '72px' }}>

        {/* LEFT — text */}
        <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 py-8 lg:w-[55%] shrink-0">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 border border-[#D85A30]/40 text-[#D85A30] bg-[#D85A30]/5 text-[10px] uppercase tracking-[0.2em] font-semibold px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D85A30] animate-pulse" />
              SOFTWARE · AI · MOBILE
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading font-black leading-[0.92] tracking-[-0.03em] text-white"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5.5rem)' }}
          >
            We build<br />
            software that{' '}
            <em className="not-italic text-[#D85A30]">scales</em>
            <br />
            your business.
          </h1>

          {/* Sub */}
          <p className="text-[#888] max-w-sm mt-5 leading-relaxed font-light text-sm md:text-base">
            From MVPs to enterprise systems — we design, build, and ship
            software that moves fast and lasts long.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-7">
            <Link
              href="#contact"
              className="bg-[#D85A30] hover:bg-[#BF4D25] text-white px-7 py-3 rounded-full font-semibold transition-colors text-sm tracking-wide"
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

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-6 max-w-sm pt-7 border-t border-white/[0.08]">
            {[
              { value: '50+', label: 'Projects shipped' },
              { value: '4 wk', label: 'Avg. MVP delivery' },
              { value: '100%', label: 'On-time rate' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading text-xl md:text-2xl font-black text-white tracking-tight">{s.value}</div>
                <div className="text-[#555] text-[10px] uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — video */}
        <div className="relative lg:flex-1 h-40 lg:h-full overflow-hidden">
          {/* Fade left edge into dark bg */}
          <div
            className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0D0D0D, transparent)' }}
          />
          {/* Fade top on mobile */}
          <div
            className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none lg:hidden"
            style={{ background: 'linear-gradient(to bottom, #0D0D0D, transparent)' }}
          />

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.85 }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Dark tint */}
          <div className="absolute inset-0 bg-[#0D0D0D]/30" />
        </div>

      </div>

    </section>
  );
}
