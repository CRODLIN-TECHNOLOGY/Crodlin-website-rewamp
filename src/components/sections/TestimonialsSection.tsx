'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO, ARES Energetics',
    company: 'ARES',
    quote: 'They delivered the MVP in 4 weeks, and it was flawless. The team understood our complex requirements from day one.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    videoSrc: null, // replace with actual video URL e.g. '/videos/sarah.mp4'
  },
  {
    name: 'Rahul Desai',
    role: 'Founder, RetailPro',
    company: 'RetailPro',
    quote: 'Our conversion rates doubled after the revamp. Crodlin rebuilt our entire frontend and optimised the checkout funnel beautifully.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    videoSrc: null,
  },
  {
    name: 'Emily Chen',
    role: 'Director of Engineering, TechFlow',
    company: 'TechFlow',
    quote: "The cleanest code we've ever received from an agency. Their architecture has scaled effortlessly to 50k users.",
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    videoSrc: null,
  },
  {
    name: 'Anita Kumar',
    role: 'VP Engineering, HealthSync',
    company: 'HealthSync',
    quote: 'Scale was an issue until Crodlin stepped in. They migrated our monolith to microservices with zero downtime.',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
    videoSrc: null,
  },
];

const clients = ['ARES Energetics', 'RetailPro', 'TechFlow', 'HealthSync', 'Orbix Labs', 'NovaMed', 'Stackr', 'Loopify'];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const active = testimonials[activeIndex];
  const rest = testimonials.filter((_, i) => i !== activeIndex);

  return (
    <section className="bg-[#0D0D0D] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30] mb-3 block">
            CLIENT VOICES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Trusted by ambitious<br />
            <span className="text-[#D85A30]">teams worldwide</span>
          </h2>
          <p className="text-[#555] text-sm md:text-base mt-4 max-w-md leading-relaxed">
            From startups to scaling enterprises — here's what our clients say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">

          {/* LEFT — featured spotlight card */}
          <div
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            style={{ minHeight: '520px' }}
            onClick={() => setVideoOpen(true)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${active.img})` }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.15) 100%)' }}
            />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#D85A30] flex items-center justify-center shadow-2xl shadow-[#D85A30]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
              <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-8" style={{ maxWidth: '520px' }}>
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-cover bg-center border-2 shrink-0"
                    style={{ backgroundImage: `url(${active.img})`, borderColor: '#D85A30' }}
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">{active.name}</div>
                    <div className="text-[#888] text-xs">{active.role}</div>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#D85A30] border border-[#D85A30]/30 px-3 py-1 rounded-full">
                  ▶ Play video
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — stacked clickable cards */}
          <div className="flex flex-col gap-4">
            {rest.map((t, i) => (
              <div
                key={t.name}
                onClick={() => {
                  const idx = testimonials.findIndex(x => x.name === t.name);
                  setActiveIndex(idx);
                }}
                className="relative rounded-2xl overflow-hidden flex-1 cursor-pointer group"
                style={{
                  minHeight: '155px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(216,90,48,0.45)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                {/* Faint bg image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-25 transition-opacity duration-300 group-hover:opacity-40"
                  style={{ backgroundImage: `url(${t.img})` }}
                />
                <div className="absolute inset-0 bg-[#0f0f0f]/70" />

                {/* Play icon on hover */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#D85A30] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 scale-75 group-hover:scale-100">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>

                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <p className="text-white/75 text-sm leading-relaxed line-clamp-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div
                      className="w-8 h-8 rounded-full bg-cover bg-center shrink-0 border"
                      style={{ backgroundImage: `url(${t.img})`, borderColor: 'rgba(216,90,48,0.4)' }}
                    />
                    <div>
                      <div className="text-white font-semibold text-xs">{t.name}</div>
                      <div className="text-[#666] text-[10px]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee — client names */}
      <div className="mt-16 border-t border-[#1A1A1A] overflow-hidden">
        <div className="flex items-center border-b border-[#1A1A1A]">
          <div className="shrink-0 px-8 py-5 border-r border-[#1A1A1A]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#444] font-semibold whitespace-nowrap">Trusted by</span>
          </div>
          <div className="overflow-hidden flex-1">
            <div className="whitespace-nowrap flex animate-marquee">
              {[...clients, ...clients, ...clients].map((c, i) => (
                <span
                  key={i}
                  className="inline-block px-8 py-5 text-sm font-semibold border-r border-[#1A1A1A]"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl mx-4 rounded-2xl overflow-hidden bg-[#111]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {active.videoSrc ? (
              <video
                src={active.videoSrc}
                controls
                autoPlay
                className="w-full aspect-video"
              />
            ) : (
              <div className="w-full aspect-video flex flex-col items-center justify-center gap-4">
                <div
                  className="w-20 h-20 rounded-full bg-cover bg-center border-2 border-[#D85A30]"
                  style={{ backgroundImage: `url(${active.img})` }}
                />
                <p className="text-white font-semibold">{active.name}</p>
                <p className="text-[#555] text-sm">Video coming soon</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
