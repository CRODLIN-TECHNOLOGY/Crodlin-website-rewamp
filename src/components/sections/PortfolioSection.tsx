'use client';

import React, { useState } from 'react';

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
    tag: 'IoT · Hospitality',
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
    tag: 'AI · LLM',
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
    tag: 'SaaS · Platform',
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
    tag: 'Analytics · Retail',
  },
  {
    id: 'healthsync',
    company: 'HealthSync',
    title: 'Platform Migration',
    desc: 'Migrated a monolith healthcare platform to microservices with zero downtime.',
    stats: [
      { value: '0',    label: 'downtime hours' },
      { value: '50k+', label: 'users migrated' },
    ],
    tag: 'Cloud · Healthcare',
  },
];

export default function PortfolioSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden relative" style={{ background: '#0A0A0A' }}>
      <div className="px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">
            OUR WORK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Innovation, engineered <span className="text-[#D85A30]">by Crodlin</span>
          </h2>
        </div>

        {/* 5-card grid: 3 top + 2 bottom centered */}
        <div className="flex flex-col gap-5">

          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.slice(0, 3).map((project) => (
              <Card key={project.id} project={project} hovered={hovered} setHovered={setHovered} />
            ))}
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:max-w-[66.66%] md:mx-auto w-full">
            {projects.slice(3).map((project) => (
              <Card key={project.id} project={project} hovered={hovered} setHovered={setHovered} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Card({
  project,
  hovered,
  setHovered,
}: {
  project: typeof projects[0];
  hovered: string | null;
  setHovered: (id: string | null) => void;
}) {
  const isHovered = hovered === project.id;
  const isDimmed  = hovered !== null && !isHovered;

  return (
    <div
      onMouseEnter={() => setHovered(project.id)}
      onMouseLeave={() => setHovered(null)}
      className="rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 cursor-default"
      style={{
        background: isHovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${isHovered ? 'rgba(216,90,48,0.35)' : 'rgba(255,255,255,0.07)'}`,
        opacity: isDimmed ? 0.45 : 1,
        boxShadow: isHovered ? '0 0 40px rgba(216,90,48,0.08)' : 'none',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
            style={{ background: 'rgba(216,90,48,0.15)', border: '1px solid rgba(216,90,48,0.25)' }}
          >
            {project.company.substring(0, 2)}
          </div>
          <span className="text-white font-semibold text-sm">{project.company}</span>
        </div>
        <span
          className="text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          {project.tag}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>

      {/* Desc */}
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {project.desc}
      </p>

      {/* Stats */}
      <div className="flex gap-6 pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        {project.stats.map((stat, i) => (
          <div key={i}>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-wider mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Decorative mockup bar */}
      <div
        className="w-full h-28 rounded-xl flex flex-col overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="h-6 flex items-center px-3 gap-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="w-2 h-2 rounded-full bg-red-400/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
          <div className="w-2 h-2 rounded-full bg-green-400/50" />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <div className="h-1.5 w-2/5 rounded-full" style={{ background: 'rgba(216,90,48,0.25)' }} />
          <div className="h-1.5 w-3/5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <div className="h-1.5 w-4/5 rounded-full" style={{ background: 'rgba(255,255,255,0.04)' }} />
        </div>
      </div>
    </div>
  );
}
