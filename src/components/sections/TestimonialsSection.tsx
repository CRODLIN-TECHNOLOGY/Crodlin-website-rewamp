'use client';

import React, { useState } from 'react';
import { MicOff, Users, Maximize2, UserCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO, ARES Energetics',
    company: 'ARES',
    tag: 'Hotel Lock System',
    quote: 'They delivered the MVP in 4 weeks — flawless. Crodlin understood our complex requirements from day one.',
    why: 'Speed & reliability',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    muted: false,
  },
  {
    name: 'Rahul Desai',
    role: 'Founder, RetailPro',
    company: 'RetailPro',
    tag: 'Retail Analytics',
    quote: 'Our conversion rates doubled after the revamp. They rebuilt our entire frontend and optimised the checkout funnel beautifully.',
    why: 'Business impact',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
    muted: true,
  },
  {
    name: 'Emily Chen',
    role: 'Director of Eng, TechFlow',
    company: 'TechFlow',
    tag: 'AI Data Pipeline',
    quote: "The cleanest code we've ever received from an agency. Their architecture scaled effortlessly to 50k users.",
    why: 'Code quality',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    muted: false,
  },
  {
    name: 'Anita Kumar',
    role: 'VP Engineering, HealthSync',
    company: 'HealthSync',
    tag: 'Platform Migration',
    quote: 'Crodlin migrated our monolith to microservices with zero downtime. Incredible execution.',
    why: 'Zero-downtime delivery',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
    muted: true,
  },
];

const clients = ['ARES Energetics', 'RetailPro', 'TechFlow', 'HealthSync', 'Orbix Labs', 'NovaMed', 'Stackr', 'Loopify'];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];
  const sidebar = testimonials.filter((_, i) => i !== activeIndex);

  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0A0A0A 0%, #1A1A1A 45%, #0A0A0A 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30] mb-3 block">
              CLIENT VOICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Trusted by ambitious<br />
              <span className="text-[#D85A30]">teams worldwide</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm md:text-base lg:text-lg leading-relaxed md:text-right" style={{ color: 'rgba(255,255,255,0.45)' }}>
            From startups to scaling enterprises — here's what our clients say about working with Crodlin.
          </p>
        </div>

        {/* Video call UI */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)' }}
          >
            <div>
              <p className="text-white text-sm font-semibold">Why Crodlin — Client Stories</p>
              <p className="text-[#555] text-xs">crodlin.com · 5+ clients</p>
            </div>
            <div className="flex items-center gap-3">
              <Maximize2 className="w-4 h-4 text-[#555]" />
              <Users className="w-4 h-4 text-[#555]" />
            </div>
          </div>

          {/* Main layout */}
          <div className="flex flex-col lg:flex-row" style={{ minHeight: '520px' }}>

            {/* Featured video */}
            <div className="relative flex-1 overflow-hidden" style={{ minHeight: '400px' }}>
              {/* BG photo */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{ backgroundImage: `url(${active.img})`, filter: 'brightness(0.55)' }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.96) 0%, transparent 60%)' }} />

              {/* Top-left: name pill */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <UserCircle className="w-4 h-4 text-[#D85A30] shrink-0" />
                <span className="text-white text-xs font-medium">{active.name}</span>
                <span className="text-[#666] text-[10px]">· {active.role}</span>
              </div>

              {/* Top-right: why tag */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold text-[#D85A30]" style={{ background: 'rgba(216,90,48,0.12)', border: '1px solid rgba(216,90,48,0.3)' }}>
                {active.why}
              </div>

              {/* Quote */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-4" style={{ maxWidth: '540px' }}>
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-cover bg-center border-2 border-[#D85A30] shrink-0" style={{ backgroundImage: `url(${active.img})` }} />
                  <div>
                    <p className="text-white text-sm font-semibold">{active.name}</p>
                    <p className="text-[#888] text-xs">{active.role}</p>
                  </div>
                  <span className="ml-auto text-[10px] uppercase tracking-widest text-[#555] border border-[#2A2A2A] px-3 py-1 rounded-full">{active.tag}</span>
                </div>
              </div>

            </div>

            {/* Right sidebar — participants */}
            <div
              className="flex flex-row lg:flex-col w-full lg:w-[280px] shrink-0"
              style={{ borderLeft: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Sidebar header */}
              <div className="hidden lg:flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <span className="text-[10px] uppercase tracking-widest text-[#444] font-semibold">Clients</span>
                <span className="text-[10px] text-[#444]">{testimonials.length}</span>
              </div>

              {/* Stacked participants */}
              <div className="flex flex-row lg:flex-col flex-1 overflow-auto">
                {sidebar.map((t) => {
                  const idx = testimonials.findIndex(x => x.name === t.name);
                  return (
                    <div
                      key={t.name}
                      onClick={() => setActiveIndex(idx)}
                      className="relative flex-1 lg:flex-none cursor-pointer group overflow-hidden"
                      style={{ height: '150px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      {/* Photo */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:brightness-75"
                        style={{ backgroundImage: `url(${t.img})`, filter: 'brightness(0.45)' }}
                      />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)' }} />

                      {/* Hover: ember border */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ boxShadow: 'inset 0 0 0 1.5px rgba(216,90,48,0.6)' }} />

                      {/* Muted badge */}
                      {t.muted && (
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 flex items-center justify-center">
                          <MicOff className="w-3 h-3 text-[#666]" />
                        </div>
                      )}

                      {/* Name */}
                      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
                        <p className="text-white text-xs font-semibold truncate">{t.name}</p>
                        <p className="text-[#666] text-[10px] truncate">{t.company}</p>
                      </div>

                      {/* Why tag */}
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] uppercase tracking-widest font-semibold text-[#D85A30]" style={{ background: 'rgba(216,90,48,0.15)' }}>
                        {t.why}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 overflow-hidden">
        <div className="flex items-center">
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
    </section>
  );
}
