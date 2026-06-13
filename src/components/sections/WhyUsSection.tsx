'use client';

import React, { useState } from 'react';
import { Zap, Code2, Handshake } from 'lucide-react';

const reasons = [
  {
    id: '01',
    title: 'Velocity & Precision',
    subtitle: 'From idea to MVP in weeks.',
    description: 'We don\'t believe in endless planning phases. We build, ship, and iterate rapidly, giving you a working product faster without compromising quality.',
    icon: Zap,
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Engineering Excellence',
    subtitle: 'Built to scale from day one.',
    description: 'Clean architecture, robust APIs, and modern stacks. We write highly performant code that your future engineering team will love to maintain.',
    icon: Code2,
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'True Partnership',
    subtitle: 'No middlemen. Direct access.',
    description: 'You communicate directly with the senior engineers building your product. Complete transparency, daily updates, and zero bureaucratic friction.',
    icon: Handshake,
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
  }
];

export default function WhyUsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <section className="bg-[#0D0D0D] py-24 md:py-32 overflow-hidden border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <span className="reveal text-[10px] md:text-xs uppercase tracking-widest font-medium text-[#D85A30] mb-3 block">
          THE CRODLIN DIFFERENCE
        </span>
        <h2 className="reveal reveal-delay-1 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Not your average <br className="hidden md:block"/>
          <span className="text-[#555]">development agency.</span>
        </h2>
      </div>

      {/* Interactive Expanding Accordion */}
      <div className="reveal reveal-delay-2 max-w-7xl mx-auto px-6 md:px-12 h-[600px] md:h-[500px] lg:h-[600px] flex flex-col md:flex-row gap-4">
        {reasons.map((reason, idx) => {
          const isActive = hoveredIndex === idx;

          return (
            <div
              key={reason.id}
              className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end border border-[#222]
                ${isActive ? 'md:flex-[3] flex-[3] shadow-2xl shadow-[#D85A30]/10 border-[#D85A30]/50' : 'md:flex-1 flex-1 hover:border-[#444]'}
              `}
              onMouseEnter={() => setHoveredIndex(idx)}
              onClick={() => setHoveredIndex(idx)}
            >
              {/* Background Image */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 
                  ${isActive ? 'scale-105 grayscale-0 opacity-100' : 'scale-100 grayscale opacity-40'}
                `}
                style={{ backgroundImage: `url(${reason.img})` }}
              ></div>
              
              {/* Gradients for text readability */}
              <div 
                className={`absolute inset-0 transition-opacity duration-700 
                  ${isActive ? 'bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent opacity-100' : 'bg-[#0D0D0D]/80'}
                `}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 lg:p-10 h-full flex flex-col justify-between">
                
                {/* Top: Icon / Number */}
                <div className={`flex items-center justify-between transition-opacity duration-500`}>
                  <div className={`w-12 h-12 rounded-full border flex items-center justify-center backdrop-blur-md transition-colors duration-500
                    ${isActive ? 'bg-[#D85A30] border-[#D85A30]' : 'bg-white/5 border-white/10'}
                  `}>
                    <reason.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/50'}`} />
                  </div>
                  <span className={`font-mono text-xl font-bold transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/20'}`}>
                    {reason.id}
                  </span>
                </div>

                {/* Bottom: Text */}
                <div className="mt-auto">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap transition-colors duration-500
                      ${isActive ? 'text-white' : 'text-white/70'}
                    `}>
                      {reason.title}
                    </h3>
                  </div>
                  
                  {/* Detailed text, expands when active */}
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3 md:mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#D85A30] font-medium text-sm md:text-base mb-2 md:mb-3">
                        {reason.subtitle}
                      </p>
                      <p className="text-[#A0A0A0] text-xs sm:text-sm md:text-base leading-relaxed max-w-md">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
