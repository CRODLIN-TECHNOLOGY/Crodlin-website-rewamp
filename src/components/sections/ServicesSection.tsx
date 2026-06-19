'use client';

import { useState, useEffect } from 'react';
import { Code2, Lightbulb, Cpu, Smartphone, Cloud, Palette } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Software Development',
    description: 'Custom web apps, SaaS platforms, and dashboards engineered to scale with your business from day one.',
    icon: Code2,
    audience: 'Startups',
  },
  {
    id: 2,
    title: 'IT Consultancy',
    description: 'Strategic tech roadmaps, architecture reviews, and expert guidance for your digital transformation.',
    icon: Lightbulb,
    audience: 'Enterprises',
  },
  {
    id: 3,
    title: 'AI Solutions',
    description: 'LLM pipelines, intelligent automation, and data extraction systems that drive real outcomes.',
    icon: Cpu,
    audience: 'Tech Leaders',
  },
  {
    id: 4,
    title: 'Mobile Apps',
    description: 'Cross-platform iOS and Android apps that feel truly native and perform flawlessly under load.',
    icon: Smartphone,
    audience: 'Product Teams',
  },
  {
    id: 5,
    title: 'Cloud & DevOps',
    description: 'Infrastructure that scales effortlessly — CI/CD pipelines, containerisation, and 99.9% uptime.',
    icon: Cloud,
    audience: 'Scale-ups',
  },
  {
    id: 6,
    title: 'UI / UX Design',
    description: 'Beautiful, conversion-focused interfaces built for real users — not just for screenshots.',
    icon: Palette,
    audience: 'Founders',
  },
];

const cyclingWords = [
  { word: 'Startups',     color: '#D85A30' },
  { word: 'Enterprises',  color: '#E07B55' },
  { word: 'Tech Leaders', color: '#C44820' },
  { word: 'Product Teams',color: '#D85A30' },
  { word: 'Scale-ups',    color: '#E07B55' },
  { word: 'Founders',     color: '#C44820' },
];

export default function ServicesSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible]     = useState(true);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex(i => (i + 1) % cyclingWords.length);
        setVisible(true);
      }, 350);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const activeWord  = cyclingWords[wordIndex];
  const activeColor = activeWord.color;

  return (
    <section
      id="services"
      className="py-16 lg:py-24"
      style={{ background: 'linear-gradient(to bottom, #3D1508 0%, #0A0A0A 100%)' }}
    >
      <div className="px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">
            WHAT WE DO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            Services built for{' '}
            <span
              style={{
                color: activeColor,
                display: 'inline-block',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.35s ease, transform 0.35s ease, color 0.2s ease',
              }}
            >
              {activeWord.word}
            </span>
          </h2>
        </div>

        {/* 3×2 Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {services.map((svc, idx) => {
            const Icon      = svc.icon;
            const isHovered = hoveredId === svc.id;
            const col       = idx % 3;
            const row       = Math.floor(idx / 3);

            return (
              <div
                key={svc.id}
                onMouseEnter={() => setHoveredId(svc.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative flex flex-col justify-between p-8 cursor-default transition-all duration-300"
                style={{
                  minHeight: '220px',
                  borderRight:  col < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  borderBottom: row < 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  background: isHovered ? 'rgba(255,255,255,0.03)' : 'transparent',
                }}
              >
                {/* Top: title + desc */}
                <div>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    <span
                      className="font-bold mr-1"
                      style={{
                        color: isHovered ? activeColor : 'rgba(255,255,255,0.9)',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {svc.title}.
                    </span>
                    {svc.description}
                  </p>
                </div>

                {/* Bottom: icon */}
                <div className="mt-8">
                  <Icon
                    className="w-8 h-8 transition-all duration-300"
                    style={{ color: isHovered ? activeColor : 'rgba(255,255,255,0.2)' }}
                  />
                </div>

                {/* Hover glow corner */}
                {isHovered && (
                  <div
                    className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top left, ${activeColor}18 0%, transparent 70%)`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
