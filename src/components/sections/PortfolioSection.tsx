'use client';

import * as React from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  company: string;
  title: string;
  desc: string;
  tag: string;
  image: string;
  stats: { value: string; label: string }[];
};

const projects: Project[] = [
  {
    id: "ares",
    company: "ARES Energetics",
    title: "ARES Hotel Lock System",
    desc: "Engineered a real-time smart lock and PMS integration system for hospitality.",
    tag: "IoT · Hospitality",
    image: "/image.jpg",
    stats: [
      { value: "30%", label: "faster check-in" },
      { value: "500+", label: "rooms synced" },
    ],
  },
  {
    id: "ai",
    company: "EdTech Research",
    title: "AI Data Pipeline",
    desc: "Re-engineered the data extraction process with LLM structured outputs.",
    tag: "AI · LLM",
    image: "/image2.jpg",
    stats: [
      { value: "10x", label: "faster extraction" },
      { value: "99%", label: "accuracy" },
    ],
  },
  {
    id: "crodlin",
    company: "Crodlin SaaS",
    title: "Crodlin Core",
    desc: "Built a multi-tenant platform for seamless internal operations and client portals.",
    tag: "SaaS · Platform",
    image: "/image3.jpg",
    stats: [
      { value: "6wks", label: "to ship MVP" },
      { value: "100%", label: "adoption" },
    ],
  },
  {
    id: "retail",
    company: "RetailPro",
    title: "Retail Analytics",
    desc: "Real-time dashboard and inventory management for retail chains.",
    tag: "Analytics · Retail",
    image: "/image4.jpg",
    stats: [
      { value: "40%", label: "less stockouts" },
      { value: "2M+", label: "events/day" },
    ],
  },
  {
    id: "healthsync",
    company: "HealthSync",
    title: "Platform Migration",
    desc: "Migrated a monolith healthcare platform to microservices with zero downtime.",
    tag: "Cloud · Healthcare",
    image: "/image5.jpg",
    stats: [
      { value: "0", label: "downtime hours" },
      { value: "50k+", label: "users migrated" },
    ],
  },
  {
    id: "fintech",
    company: "FinTech Labs",
    title: "Payment Infrastructure",
    desc: "Built a scalable payment processing layer handling millions of transactions daily.",
    tag: "FinTech · Payments",
    image: "/image6.jpg",
    stats: [
      { value: "2M+", label: "txns/day" },
      { value: "99.99%", label: "uptime" },
    ],
  },
];

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export default function PortfolioSection() {
  const [active, setActive] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const lastWheelTime = React.useRef<number>(0);

  const count = projects.length;
  const loop = true;
  const activeIndex = wrap(0, count, active);
  const activeItem = projects[activeIndex];

  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return;
    setActive((p) => p - 1);
  }, [loop, active]);

  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return;
    setActive((p) => p + 1);
  }, [loop, active, count]);

  const onWheel = React.useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime.current < 400) return;
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 20) {
        if (delta > 0) handleNext();
        else handlePrev();
        lastWheelTime.current = now;
      }
    },
    [handleNext, handlePrev]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

  const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) handleNext();
    else if (swipe > swipeConfidenceThreshold) handlePrev();
  };

  return (
    <section id="work" className="pt-16 pb-24 md:pt-20 md:pb-32" style={{ background: "#0A0A0A" }}>
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-col items-center text-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">
            OUR WORK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Innovation, engineered <span className="text-[#D85A30]">by Crodlin</span>
          </h2>
        </div>
      </div>

      <div
        className="group relative flex min-h-[600px] md:h-[600px] w-full flex-col overflow-visible md:overflow-hidden text-white outline-none select-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onWheel={onWheel}
      >
        {/* Background Ambience */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <AnimatePresence mode="sync">
            <motion.div
              key={`bg-${activeItem.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={activeItem.image}
                alt=""
                className="h-full w-full object-cover blur-3xl saturate-150"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, #0A0A0A 0%, rgba(10,10,10,0.6) 50%, transparent 100%)",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Main Stage */}
        <div className="relative z-10 flex flex-1 flex-col justify-center max-w-7xl mx-auto w-full px-6">
          <motion.div
            className="relative mx-auto flex h-[260px] md:h-[360px] w-full max-w-6xl items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ perspective: 1200 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
          >
            {projects.map((item, index) => {
              // distance from active, wrapped to the shortest path (-count/2 .. count/2)
              const rawDist = index - active;
              const dist = wrap(-count / 2, count / 2, rawDist);
              const isCenter = Math.round(dist) === 0;
              const absDist = Math.abs(dist);

              // keep DOM light, but don't unmount center-adjacent cards
              if (absDist > 2.5) return null;

              const xOffset = dist * 320;
              const zOffset = -absDist * 180;
              const scale = isCenter ? 1 : 0.85;
              const rotateY = dist * -20;
              const opacity = isCenter ? 1 : Math.max(0.1, 1 - absDist * 0.5);
              const blur = isCenter ? 0 : absDist * 6;
              const brightness = isCenter ? 1 : 0.5;

              return (
                <motion.div
                  key={item.id}
                  className="absolute aspect-[3/4] w-[260px] md:w-[300px] rounded-2xl shadow-2xl"
                  style={{
                    transformStyle: "preserve-3d",
                    border: isCenter ? "1px solid rgba(216,90,48,0.35)" : "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)",
                    boxShadow: isCenter ? "0 20px 60px rgba(216,90,48,0.15)" : "none",
                    zIndex: isCenter ? 20 : 10,
                  }}
                  animate={{
                    x: xOffset,
                    z: zOffset,
                    scale,
                    rotateY,
                    opacity,
                    filter: `blur(${blur}px) brightness(${brightness})`,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 30, mass: 1 }}
                  onClick={() => {
                    if (!isCenter) setActive(index);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full rounded-2xl object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-2xl bg-black/10 pointer-events-none mix-blend-multiply" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Info & Controls */}
          <div className="mx-auto mt-6 md:mt-12 flex w-full max-w-4xl flex-col items-center justify-between gap-6 md:flex-row pointer-events-auto pb-8 md:pb-0">
            <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left h-36 justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-2"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#D85A30" }}>
                    {activeItem.tag}
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
                    {activeItem.title}
                  </h2>
                  <p className="max-w-md text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {activeItem.desc}
                  </p>
                  <div className="flex gap-6 pt-2">
                    {activeItem.stats.map((stat, i) => (
                      <div key={i}>
                        <span className="text-lg font-bold text-white">{stat.value}</span>{" "}
                        <span className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="flex items-center gap-1 rounded-full p-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <button
                  onClick={handlePrev}
                  className="rounded-full p-3 text-white/50 transition hover:bg-white/10 hover:text-white active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="min-w-[40px] text-center text-xs font-mono text-white/40">
                  {activeIndex + 1} / {count}
                </span>
                <button
                  onClick={handleNext}
                  className="rounded-full p-3 text-white/50 transition hover:bg-white/10 hover:text-white active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <button
                className="group flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white transition-all duration-300 active:scale-95"
              >
                View Case
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}