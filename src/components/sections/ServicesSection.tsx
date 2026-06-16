'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Software Development',
    description: 'Custom web apps, SaaS platforms, and dashboards engineered to scale with your business.',
    imagePath: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    number: '02',
    title: 'IT Consultancy',
    description: 'Strategic tech roadmaps, architecture reviews, and expert guidance for your digital transformation.',
    imagePath: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    number: '03',
    title: 'AI Solutions',
    description: 'LLM pipelines, intelligent automation, and data extraction systems that drive real outcomes.',
    imagePath: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    number: '04',
    title: 'Mobile Apps',
    description: 'Cross-platform iOS and Android apps that feel truly native and perform flawlessly.',
    imagePath: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    number: '05',
    title: 'Cloud & DevOps',
    description: 'Infrastructure that scales effortlessly — CI/CD pipelines, containerisation, and 99.9% uptime.',
    imagePath: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    number: '06',
    title: 'UI / UX Design',
    description: 'Beautiful, conversion-focused interfaces built for real users — not just for screenshots.',
    imagePath: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop',
  },
];

const helvetica: React.CSSProperties = {
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="py-16 lg:py-24"
      style={{ background: '#0A0A0A', ...helvetica }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-start">
          <div>
            <span
              className="text-[11px] uppercase tracking-[0.25em] font-semibold mb-3 block"
              style={{ color: '#D85A30', ...helvetica }}
            >
              WHAT WE DO
            </span>
            <h2
              className="text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight"
              style={helvetica}
            >
              Services built for<br />
              <span style={{ color: '#D85A30' }}>real outcomes</span>
            </h2>
          </div>
          <p
            className="max-w-md text-sm leading-relaxed md:text-base lg:text-lg"
            style={{ color: 'rgba(255,255,255,0.45)', ...helvetica }}
          >
            We partner with ambitious teams to design, build, and ship
            digital products that scale. No fluff — just engineering that works.
          </p>
        </div>

        {/* Desktop accordion */}
        <div className="hidden h-[520px] gap-2 lg:flex">
          {services.map((svc, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={svc.id}
                className="relative cursor-pointer overflow-hidden rounded-2xl"
                animate={{ flex: isActive ? 2.5 : 1.2 }}
                transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
                onHoverStart={() => setActiveIndex(index)}
                style={{
                  border: isActive ? '1px solid rgba(216,90,48,0.45)' : '1px solid rgba(255,255,255,0.05)',
                  minWidth: 0,
                }}
              >
                <Image
                  src={svc.imagePath}
                  alt={svc.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: isActive
                      ? 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.25) 55%, transparent 100%)'
                      : 'rgba(10,10,10,0.82)',
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Active content */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span
                    className="text-7xl font-bold"
                    style={{ color: 'rgba(216,90,48,0.25)', ...helvetica }}
                  >
                    {svc.number}
                  </span>
                  <h3
                    className="mt-2 text-2xl font-bold text-white"
                    style={helvetica}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="mt-2 max-w-xs text-sm"
                    style={{ color: 'rgba(255,255,255,0.7)', ...helvetica }}
                  >
                    {svc.description}
                  </p>
                  <div className="mt-4">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: '#D85A30' }}
                    >
                      Learn more →
                    </span>
                  </div>
                </motion.div>

                {/* Collapsed label */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="flex flex-col items-center gap-4"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    <span
                      className="font-bold"
                      style={{ fontSize: '2.2rem', color: 'rgba(216,90,48,0.55)', letterSpacing: '-0.02em', ...helvetica }}
                    >
                      {svc.number}
                    </span>
                    <span
                      className="font-semibold tracking-wide text-white/80"
                      style={{ fontSize: '0.9rem', ...helvetica }}
                    >
                      {svc.title}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile accordion */}
        <div className="flex flex-col gap-3 lg:hidden">
          {services.map((svc, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={svc.id}
                className="relative overflow-hidden rounded-2xl"
                animate={{ height: isActive ? 320 : 72 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                onClick={() => setActiveIndex(index)}
                style={{
                  border: isActive ? '1px solid rgba(216,90,48,0.5)' : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <Image src={svc.imagePath} alt={svc.title} fill className="object-cover" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ background: isActive ? 'rgba(10,10,10,0.75)' : 'rgba(10,10,10,0.8)' }}
                />
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  animate={{ opacity: isActive ? 1 : 0 }}
                >
                  <span className="text-4xl font-bold" style={{ color: 'rgba(216,90,48,0.25)', ...helvetica }}>{svc.number}</span>
                  <h3 className="text-xl font-bold text-white mt-1" style={helvetica}>{svc.title}</h3>
                  <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.65)', ...helvetica }}>{svc.description}</p>
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center px-6 gap-4"
                  animate={{ opacity: isActive ? 0 : 1 }}
                >
                  <span className="text-2xl font-bold" style={{ color: 'rgba(216,90,48,0.4)', ...helvetica }}>{svc.number}</span>
                  <span className="text-base font-semibold text-white" style={helvetica}>{svc.title}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
