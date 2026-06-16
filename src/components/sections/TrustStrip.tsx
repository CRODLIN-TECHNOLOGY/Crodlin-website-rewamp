'use client';

import React from 'react';
import { Hexagon, Box, Triangle, Circle, Diamond, Octagon } from 'lucide-react';

const clients = [
  { name: 'Accor Hotels',   icon: Hexagon  },
  { name: 'ARES Energetics', icon: Box     },
  { name: 'IDinsight',      icon: Triangle },
  { name: 'HealthSync',     icon: Circle   },
  { name: 'RetailPro',      icon: Diamond  },
  { name: 'TechFlow',       icon: Octagon  },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#0D0D0D] overflow-hidden">

      {/* Ruled marquee bar — full width */}
      <div className="border-t border-b border-[#1A1A1A]">
        <div className="flex items-center">

          {/* Label */}
          <div className="shrink-0 px-8 py-5 border-r border-[#1A1A1A]">
            <span className="text-sm uppercase tracking-[0.2em] text-[#444] font-semibold whitespace-nowrap">
              Trusted by businesses across India and beyond
            </span>
          </div>

          {/* Scrolling logos */}
          <div className="overflow-hidden flex-1 relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />

            <div className="whitespace-nowrap flex animate-marquee items-center">
              {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2.5 mx-10 py-4 text-[#444] hover:text-[#D85A30] transition-colors duration-300 cursor-default group"
                >
                  <client.icon className="w-5 h-5 shrink-0" />
                  <span className="text-base font-semibold tracking-wide uppercase">{client.name}</span>
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
