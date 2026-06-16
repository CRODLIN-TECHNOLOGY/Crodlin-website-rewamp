'use client';

import { useState } from 'react';
import { DynamicFrameLayout } from '@/components/ui/dynamic-frame-layout';

const frames = [
  {
    id: 1,
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "", edgeHorizontal: "", edgeVertical: "",
    mediaSize: 1, borderThickness: 0, borderSize: 100, isHovered: false,
  },
  {
    id: 2,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "", edgeHorizontal: "", edgeVertical: "",
    mediaSize: 1, borderThickness: 0, borderSize: 100, isHovered: false,
  },
  {
    id: 3,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "", edgeHorizontal: "", edgeVertical: "",
    mediaSize: 1, borderThickness: 0, borderSize: 100, isHovered: false,
  },
  {
    id: 4,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "", edgeHorizontal: "", edgeVertical: "",
    mediaSize: 1, borderThickness: 0, borderSize: 100, isHovered: false,
  },
  {
    id: 5,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "", edgeHorizontal: "", edgeVertical: "",
    mediaSize: 1, borderThickness: 0, borderSize: 100, isHovered: false,
  },
  {
    id: 6,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "", edgeHorizontal: "", edgeVertical: "",
    mediaSize: 1, borderThickness: 0, borderSize: 100, isHovered: false,
  },
  {
    id: 7,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "", edgeHorizontal: "", edgeVertical: "",
    mediaSize: 1, borderThickness: 0, borderSize: 100, isHovered: false,
  },
  {
    id: 8,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "", edgeHorizontal: "", edgeVertical: "",
    mediaSize: 1, borderThickness: 0, borderSize: 100, isHovered: false,
  },
  {
    id: 9,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "", edgeHorizontal: "", edgeVertical: "",
    mediaSize: 1, borderThickness: 0, borderSize: 100, isHovered: false,
  },
];

const cellText = [
  { label: 'Ship Fast',        sub: 'MVP in 4 weeks, not 4 months.' },
  { label: 'Build Right',      sub: 'Clean architecture that scales.' },
  { label: 'Think Big',        sub: 'Strategy before a single line of code.' },
  { label: 'Own It',           sub: 'We treat your product like ours.' },
  { label: 'No Middlemen',     sub: 'Direct access to senior engineers.' },
  { label: 'Stay Lean',        sub: 'Zero fluff. Maximum output.' },
  { label: 'AI-Native',        sub: 'LLMs and automation built-in by default.' },
  { label: 'Always Iterating', sub: 'We ship, learn, and improve fast.' },
  { label: 'Full-Stack',       sub: 'Design → backend → deployment.' },
];

function CellLabel({ label, sub }: { label: string; sub: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative flex flex-col justify-end p-4 pointer-events-auto cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0.7, transform: hovered ? 'translateY(0)' : 'translateY(4px)' }}
      >
        <p className="text-white font-bold text-sm md:text-base leading-tight">{label}</p>
        <p
          className="text-[#D85A30] text-xs mt-1 leading-snug transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0, maxHeight: hovered ? '40px' : '0', overflow: 'hidden' }}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}

export default function WhyUsSection() {
  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0A0A0A 0%, #3D1508 50%, #0A0A0A 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30] mb-3 block">
            THE CRODLIN DIFFERENCE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Not your average <br className="hidden md:block" />
            <span className="text-[#555]">development agency.</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm md:text-base lg:text-lg leading-relaxed md:text-right" style={{ color: 'rgba(255,255,255,0.45)' }}>
          We partner with ambitious teams to design, build, and ship digital products that scale. No fluff — just engineering that works.
        </p>
      </div>

      {/* Dynamic video grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative" style={{ height: '600px' }}>
          <DynamicFrameLayout
            frames={frames}
            className="rounded-2xl overflow-hidden"
            showFrames={false}
            hoverSize={6}
            gapSize={3}
          />
          {/* Text overlay grid — same 3×3, pointer-events-none so hover still works on videos */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr 1fr',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '3px',
            }}
          >
            {cellText.map((cell, i) => (
              <CellLabel key={i} {...cell} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
