'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO, ARES Energetics',
    company: 'ARES',
    quote: 'They delivered the MVP in 4 weeks, and it was flawless. The team understood our complex requirements from day one.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Rahul Desai',
    role: 'Founder, RetailPro',
    company: 'RetailPro',
    quote: 'Our conversion rates doubled after the revamp. Crodlin rebuilt our entire frontend and optimised the checkout funnel beautifully.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Emily Chen',
    role: 'Director of Engineering, TechFlow',
    company: 'TechFlow',
    quote: 'The cleanest code we\'ve ever received from an agency. Their architecture has scaled effortlessly to 50k users.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Anita Kumar',
    role: 'VP Engineering, HealthSync',
    company: 'HealthSync',
    quote: 'Scale was an issue until Crodlin stepped in. They migrated our monolith to microservices with zero downtime.',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
  },
];

const clients = ['ARES Energetics', 'RetailPro', 'TechFlow', 'HealthSync', 'Orbix Labs', 'NovaMed', 'Stackr', 'Loopify'];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0D0D0D] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#D85A30] mb-3 block">
            CLIENT VOICES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Trusted by ambitious<br />
            <span className="text-[#D85A30]">teams worldwide</span>
          </h2>
          <p className="text-[#555] text-sm md:text-base mt-4 max-w-md mx-auto leading-relaxed">
            From startups to scaling enterprises — here's what our clients say.
          </p>
        </div>

        {/* Grid — big left + stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4">

          {/* LEFT — featured big card */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ minHeight: '520px' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
              style={{ backgroundImage: `url(${testimonials[0].img})` }}
            />
            {/* Dark gradient over image */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.5) 55%, rgba(10,10,10,0.2) 100%)' }}
            />

            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
              <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-8" style={{ maxWidth: '520px' }}>
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-center border-2 shrink-0"
                  style={{ backgroundImage: `url(${testimonials[0].img})`, borderColor: '#D85A30' }}
                />
                <div>
                  <div className="text-white font-semibold text-sm">{testimonials[0].name}</div>
                  <div className="text-[#888] text-xs">{testimonials[0].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — stacked cards */}
          <div className="flex flex-col gap-4">
            {testimonials.slice(1).map((t, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden flex-1"
                style={{ minHeight: '155px', background: '#111', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {/* Faint bg image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${t.img})` }}
                />
                <div className="absolute inset-0 bg-[#111]/60" />

                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <p className="text-white/80 text-sm leading-relaxed">
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
      <div className="mt-16 border-t border-[#1A1A1A] pt-0 overflow-hidden">
        <div className="flex items-center gap-0 border-b border-[#1A1A1A]">
          {/* Label */}
          <div className="shrink-0 px-8 py-5 border-r border-[#1A1A1A]">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#444] font-semibold whitespace-nowrap">Trusted by</span>
          </div>
          {/* Scrolling names */}
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
