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
    bg: 'bg-[#FFF9F0]',
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
    bg: 'bg-[#F0FAFF]',
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
    bg: 'bg-[#F0FFF4]',
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
    bg: 'bg-[#FFF0F5]',
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
    <section id="work" className="bg-[#0D0D0D] py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col">
        <span className="reveal text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30] mb-3 block">
          OUR WORK
        </span>
        <h2 className="reveal text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-10">
          Innovation, engineered<br />
          <span className="text-[#D85A30]">by Crodlin</span>
        </h2>

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
                className={`absolute top-0 w-full max-w-sm md:max-w-md lg:max-w-lg h-[450px] md:h-[550px] rounded-[2rem] p-8 md:p-10 flex flex-col transition-all duration-700 ease-in-out cursor-pointer ${project.bg}`}
                style={{ 
                  zIndex, 
                  transform, 
                  opacity,
                  pointerEvents: position === 'center' ? 'auto' : 'none'
                }}
                onClick={() => {
                  if (position === 'left') handlePrev();
                  if (position === 'right') handleNext();
                }}
              >
                {/* Card Content */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-[#0D0D0D]">{project.company.substring(0,2)}</span>
                  </div>
                  <span className="font-bold text-[#0D0D0D]">{project.company}</span>
                </div>

                <p className="text-[#333] text-sm md:text-base leading-relaxed mb-8">
                  {project.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-auto">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-1">{stat.value}</div>
                      <div className="text-xs text-[#666] leading-snug">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Decorative bottom mockup */}
                <div className="w-full h-40 md:h-48 bg-black/5 rounded-t-2xl border-t border-x border-black/10 mt-8 relative overflow-hidden flex items-end justify-center">
                  <div className="w-3/4 h-5/6 bg-white rounded-t-xl shadow-lg border border-black/5 flex flex-col">
                     {/* Fake UI */}
                     <div className="h-6 border-b border-gray-100 flex items-center px-3 gap-1">
                       <div className="w-2 h-2 rounded-full bg-red-400"></div>
                       <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                       <div className="w-2 h-2 rounded-full bg-green-400"></div>
                     </div>
                     <div className="p-4 flex flex-col gap-2">
                       <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                       <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                       <div className="h-2 w-full bg-gray-100 rounded"></div>
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
