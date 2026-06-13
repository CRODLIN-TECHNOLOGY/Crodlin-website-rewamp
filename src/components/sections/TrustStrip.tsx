'use client';

import React from 'react';
import { Hexagon, Box, Triangle, Circle, Diamond, Octagon } from 'lucide-react';

const clients = [
  { name: 'Accor Hotels', icon: Hexagon },
  { name: 'ARES Energetics', icon: Box },
  { name: 'IDinsight', icon: Triangle },
  { name: 'HealthSync', icon: Circle },
  { name: 'RetailPro', icon: Diamond },
  { name: 'TechFlow', icon: Octagon }
];

export default function TrustStrip() {
  return (
    <section className="bg-white pt-20 pb-16 border-b border-[#E5E5E5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Subtle Headline */}
        <p className="reveal text-center text-[10px] md:text-xs font-bold text-[#A0A0A0] uppercase tracking-[0.25em] mb-12">
          Trusted by businesses across India and beyond
        </p>
        
        {/* Client Logo Strip — marquee style, infinite scroll */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {[...clients, ...clients, ...clients].map((client, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 mx-8 md:mx-12 flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default group"
                >
                  <client.icon className="w-8 h-8 text-[#0D0D0D] group-hover:text-[#D85A30] transition-colors" />
                  <span className="text-xl md:text-2xl font-bold tracking-tight text-[#0D0D0D] group-hover:text-[#D85A30] transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
