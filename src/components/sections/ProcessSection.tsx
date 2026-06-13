'use client';

import React, { useRef, useEffect, useState } from 'react';

// SVG viewBox: 1200 × 680
const PATH_D =
  'M -10,560 C 60,520 110,470 182,400 C 260,320 350,248 435,228 C 580,198 700,192 838,188 C 960,186 1030,310 1098,468 C 1140,570 1165,630 1210,690';

const STEPS = [
  {
    num: '01',
    title: 'Fill the form',
    desc: ['Tell us about your project', '— takes 2 minutes.'],
    cx: 182, cy: 400,
    labelX: 42,  labelY: 345,
    descX:  28,  descY:  460,
    side: 'left',
  },
  {
    num: '02',
    title: 'Discovery call',
    desc: ['We align on scope, timeline,', 'and realistic budget.'],
    cx: 435, cy: 228,
    labelX: 308, labelY: 165,
    descX:  296, descY:  122,
    side: 'left',
  },
  {
    num: '03',
    title: 'Proposal sent',
    desc: ['A detailed plan with fixed', 'pricing. No surprises.'],
    cx: 838, cy: 188,
    labelX: 858, labelY: 132,
    descX:  858, descY:   90,
    side: 'right',
  },
  {
    num: '04',
    title: 'We build',
    desc: ['Weekly demos, Slack updates,', "and you're always in the loop."],
    cx: 1098, cy: 468,
    labelX: 900, labelY: 558,
    descX:  888, descY:  602,
    side: 'right',
  },
];

// Each node's approximate progress along the path (0 → 1)
const NODE_THRESHOLDS = [0.18, 0.38, 0.62, 0.84];

// Logo size in SVG units
const LOGO_SIZE = 30;

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef    = useRef<SVGPathElement>(null);
  const [pathLen,      setPathLen]      = useState(0);
  const [drawProgress, setDrawProgress] = useState(0);

  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
  }, []);

  useEffect(() => {
    if (!pathLen) return;
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect    = section.getBoundingClientRect();
      const windowH = window.innerHeight;
      const start   = windowH;
      const end     = -rect.height * 0.3;
      const raw     = (start - rect.top) / (start - end);
      setDrawProgress(Math.min(1, Math.max(0, raw)));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathLen]);

  const dashOffset = pathLen * (1 - drawProgress);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0A0A0A] relative overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Section header */}
      <div className="relative z-10 pt-20 pb-4 px-6 max-w-7xl mx-auto w-full">
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30] mb-3 block">
          HOW IT WORKS
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Simple process,{' '}
          <span className="text-[#D85A30]">serious results</span>
        </h2>
      </div>

      {/* SVG canvas */}
      <div className="relative w-full" style={{ height: 'min(680px, 72vw)' }}>
        <svg
          viewBox="0 0 1200 680"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full"
          aria-hidden
        >
          <defs>
            <filter id="ember-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Sphere gradients */}
            <radialGradient id="sphere-grad" cx="38%" cy="35%" r="65%">
              <stop offset="0%"   stopColor="#D85A30" stopOpacity="0.9" />
              <stop offset="45%"  stopColor="#8B2010" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0A0A0A" stopOpacity="1"   />
            </radialGradient>
            <radialGradient id="sphere-rim" cx="50%" cy="50%" r="50%">
              <stop offset="70%"  stopColor="transparent" />
              <stop offset="100%" stopColor="#D85A30" stopOpacity="0.15" />
            </radialGradient>

            {/* Logo clip circles for each step */}
            {STEPS.map((s) => (
              <clipPath key={`clip-${s.num}`} id={`logo-clip-${s.num}`}>
                <circle cx={s.cx} cy={s.cy} r={LOGO_SIZE / 2} />
              </clipPath>
            ))}
          </defs>

          {/* Central glowing sphere */}
          <circle cx="616" cy="500" r="168" fill="url(#sphere-grad)" opacity="0.88" />
          <circle cx="616" cy="500" r="168" fill="url(#sphere-rim)" />
          <circle cx="616" cy="500" r="224" fill="none" stroke="#D85A30" strokeWidth="0.6" opacity="0.1" />
          <circle cx="616" cy="500" r="270" fill="none" stroke="#D85A30" strokeWidth="0.3" opacity="0.06" />

          {/* Ghost track */}
          <path d={PATH_D} fill="none" stroke="#2A2A2A" strokeWidth="1.5" />

          {/* Animated ember line */}
          <path
            ref={pathRef}
            d={PATH_D}
            fill="none"
            stroke="#D85A30"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#ember-glow)"
            style={{
              strokeDasharray:  pathLen || 9999,
              strokeDashoffset: dashOffset,
              transition: 'stroke-dashoffset 0.04s linear',
            }}
          />

          {/* Step nodes */}
          {STEPS.map((step, idx) => {
            const visible  = drawProgress >= NODE_THRESHOLDS[idx];
            const isRight  = step.side === 'right';
            const halfLogo = LOGO_SIZE / 2;

            return (
              <g
                key={step.num}
                style={{
                  opacity:    visible ? 1 : 0,
                  transform:  visible ? 'scale(1)' : 'scale(0.6)',
                  transformOrigin: `${step.cx}px ${step.cy}px`,
                  transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
                }}
              >
                {/* Outer ember ring */}
                <circle
                  cx={step.cx} cy={step.cy} r={halfLogo + 8}
                  fill="none"
                  stroke="#D85A30"
                  strokeWidth="1"
                  opacity="0.4"
                  filter="url(#ember-glow)"
                />
                {/* Dark backing circle */}
                <circle
                  cx={step.cx} cy={step.cy} r={halfLogo + 2}
                  fill="#0A0A0A"
                  stroke="#D85A30"
                  strokeWidth="1.2"
                />
                {/* Crodlin logo via SVG <image> */}
                <image
                  href="/logo_without_name-removebg-preview.png"
                  x={step.cx - halfLogo}
                  y={step.cy - halfLogo}
                  width={LOGO_SIZE}
                  height={LOGO_SIZE}
                  preserveAspectRatio="xMidYMid meet"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  clipPath={`url(#logo-clip-${step.num})`}
                />

                {/* Step number */}
                <text
                  x={step.cx + (isRight ? halfLogo + 12 : -(halfLogo + 12))}
                  y={step.cy + 5}
                  fontFamily="var(--font-caveat, Caveat, cursive)"
                  fontSize="15"
                  fontWeight="700"
                  fill="#D85A30"
                  textAnchor={isRight ? 'start' : 'end'}
                  opacity="0.7"
                >
                  {step.num}
                </text>

                {/* Handwritten title */}
                <text
                  x={step.labelX}
                  y={step.labelY}
                  fontFamily="var(--font-caveat, Caveat, cursive)"
                  fontSize="27"
                  fontWeight="600"
                  fill="#D85A30"
                  textAnchor="start"
                >
                  {step.title}
                </text>

                {/* Description */}
                {step.desc.map((line, li) => (
                  <text
                    key={li}
                    x={step.descX}
                    y={step.descY + li * 18}
                    fontFamily="var(--font-geist-sans, sans-serif)"
                    fontSize="13"
                    fill="#777"
                    textAnchor="start"
                  >
                    {line}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Footer note */}
      <div className="relative z-10 text-center pb-16">
        <p className="text-[#D85A30] text-sm font-medium">
          Most projects start within 7 days of signing.
        </p>
      </div>
    </section>
  );
}
