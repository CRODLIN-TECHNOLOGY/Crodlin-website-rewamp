'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Code, Lightbulb, Bot, Smartphone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const ICON_MAP = {
  Code: Code,
  Lightbulb: Lightbulb,
  Bot: Bot,
  Smartphone: Smartphone,
};

export default function ServicesPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full h-screen flex items-end overflow-hidden">
        {/* bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/hero-image.jpg')` }}
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* content — asset left / text right */}
        <div className="relative w-full max-w-screen-2xl mx-auto px-4 md:px-10 pb-20 flex items-center justify-between gap-8">

          {/* services asset — left */}
          <motion.img
            src="/services-asset.png"
            alt=""
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block w-[300px] lg:w-[380px] xl:w-[460px] object-contain select-none pointer-events-none"
            style={{ marginLeft: '60px' }}
          />

          {/* text — right */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-8 md:max-w-3xl">
            <motion.h1
              variants={fadeUp}
              className="font-bold tracking-tight text-white leading-none"
              style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
            >
              What We <br /><span className="text-[#D85A30]">Build.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.35rem)' }}>
              Full-spectrum engineering capabilities from scoping and design to deployment and optimization.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-2">
              <a
                href="#services"
                className="px-7 py-3 border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-200"
              >
                Explore Services →
              </a>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── Curved divider ── */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 Q360 0 720 30 Q1080 60 1440 20" stroke="url(#orangeGradSvc)" strokeWidth="1.5" fill="none" />
          <defs>
            <linearGradient id="orangeGradSvc" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D85A30" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D85A30" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D85A30" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Services grid ── */}
      <section id="services" className="py-24 max-w-screen-2xl mx-auto px-4 md:px-10">
        <div className="flex flex-col gap-3 mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">What we do</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Code;
            return (
              <Card
                key={service.slug}
                className="border-white/10 bg-white/5 flex flex-col justify-between border p-8"
              >
                <CardHeader className="p-0">
                  <div className="bg-[#D85A30]/10 text-[#D85A30] mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="mb-4 text-2xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-white/50 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

    </div>
  );
}
