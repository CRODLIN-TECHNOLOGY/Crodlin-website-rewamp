'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const projects = [
  {
    id: 'ares',
    company: 'ARES Energetics',
    title: 'ARES Hotel Lock System',
    desc: 'Engineered a real-time smart lock and PMS integration system for hospitality.',
    stats: [
      { value: '30%', label: 'faster check-in' },
      { value: '500+', label: 'rooms synced' },
    ],
  },
  {
    id: 'ai',
    company: 'EdTech Research',
    title: 'AI Data Pipeline',
    desc: 'Re-engineered the data extraction process with LLM structured outputs.',
    stats: [
      { value: '10x', label: 'faster extraction' },
      { value: '99%', label: 'accuracy' },
    ],
  },
  {
    id: 'crodlin',
    company: 'Crodlin SaaS',
    title: 'Crodlin Core',
    desc: 'Built a multi-tenant platform for seamless internal operations and client portals.',
    stats: [
      { value: '6wks', label: 'to ship MVP' },
      { value: '100%', label: 'adoption' },
    ],
  },
  {
    id: 'retail',
    company: 'RetailPro',
    title: 'Retail Analytics',
    desc: 'Real-time dashboard and inventory management for retail chains.',
    stats: [
      { value: '40%', label: 'less stockouts' },
      { value: '2M+', label: 'events/day' },
    ],
  }
];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="work" className="pt-2 pb-24 md:pt-4 md:pb-32 overflow-hidden relative" style={{ background: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="reveal text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30] mb-3 block">
              OUR WORK
            </span>
            <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Innovation, engineered<br />
              <span className="text-[#D85A30]">by Crodlin</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm md:text-base lg:text-lg leading-relaxed md:text-right" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Real products, real results — built by engineers who care about outcomes, not just output.
          </p>
        </div>

        {/* Tabs */}
        <div className="reveal reveal-delay-1 flex flex-wrap items-center gap-3 mb-16 max-w-4xl">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#2A2A2A] flex items-center justify-center text-white transition-colors border border-[#333]"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeIndex === idx 
                  ? 'bg-white text-[#0D0D0D]' 
                  : 'bg-[#1A1A1A] text-[#999] hover:text-white border border-[#333]'
              }`}
            >
              {p.company}
            </button>
          ))}

          <button 
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#1A1A1A] hover:bg-[#2A2A2A] flex items-center justify-center text-white transition-colors border border-[#333]"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Carousel Cards */}
        <div className="relative w-full max-w-[1000px] mx-auto h-[500px] md:h-[600px] flex justify-center perspective-1000">
          {projects.map((project, idx) => {
            // Determine relative position
            let position = 'hidden'; // far away
            let zIndex = 0;
            let transform = '';
            let opacity = 0;

            if (idx === activeIndex) {
              position = 'center';
              zIndex = 30;
              transform = 'translateX(0) scale(1) rotate(0deg)';
              opacity = 1;
            } else if (idx === (activeIndex - 1 + projects.length) % projects.length) {
              position = 'left';
              zIndex = 20;
              transform = 'translateX(-60%) scale(0.85) rotate(-6deg)';
              opacity = 0.5;
            } else if (idx === (activeIndex + 1) % projects.length) {
              position = 'right';
              zIndex = 20;
              transform = 'translateX(60%) scale(0.85) rotate(6deg)';
              opacity = 0.5;
            }

            return (
              <div
                key={project.id}
                className="absolute top-0 w-full max-w-sm md:max-w-md lg:max-w-lg h-[450px] md:h-[550px] rounded-[2rem] p-8 md:p-10 flex flex-col transition-all duration-700 ease-in-out cursor-pointer"
                style={{
                  zIndex,
                  transform,
                  opacity,
                  pointerEvents: position === 'center' ? 'auto' : 'none',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
                onClick={() => {
                  if (position === 'left') handlePrev();
                  if (position === 'right') handleNext();
                }}
              >
                {/* Card Content */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded bg-white/10 border border-white/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{project.company.substring(0,2)}</span>
                  </div>
                  <span className="font-bold text-white">{project.company}</span>
                </div>

                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                  {project.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-auto">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-white/40 leading-snug">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Decorative bottom mockup */}
                <div className="w-full h-40 md:h-48 rounded-t-2xl border-t border-x border-white/10 mt-8 relative overflow-hidden flex items-end justify-center"
                  style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="w-3/4 h-5/6 rounded-t-xl border border-white/10 flex flex-col"
                    style={{ background: 'rgba(255,255,255,0.06)' }}>
                     <div className="h-6 border-b border-white/10 flex items-center px-3 gap-1">
                       <div className="w-2 h-2 rounded-full bg-red-400/70"></div>
                       <div className="w-2 h-2 rounded-full bg-yellow-400/70"></div>
                       <div className="w-2 h-2 rounded-full bg-green-400/70"></div>
                     </div>
                     <div className="p-4 flex flex-col gap-2">
                       <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                       <div className="h-2 w-3/4 bg-white/[0.06] rounded"></div>
                       <div className="h-2 w-full bg-white/[0.06] rounded"></div>
                     </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
