'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

// Animated count-up for stat numbers. Parses a leading number out of strings
// like "50+", "4 wk", "100%" and animates it, re-appending the suffix.
function StatValue({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState('0' + suffix);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 0.3,
      delay: 0.9,
      ease: 'easeOut',
    });
    const unsubscribe = rounded.on('change', (v) => setDisplay(`${v}${suffix}`));
    return () => {
      controls.stop();
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!match) return <>{value}</>;
  return <>{display}</>;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section
      className="relative bg-[#0D0D0D] overflow-hidden"
      style={{ height: '100dvh', minHeight: '700px', maxHeight: '1000px' }}
    >
      {/* Two-column layout — push content below fixed navbar with padding-top */}
      <div className="h-full flex flex-col lg:flex-row" style={{ paddingTop: '72px' }}>

        {/* LEFT — text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col justify-center px-6 py-6 lg:w-[55%] shrink-0"
        >

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-rifton leading-[0.95] tracking-[-0.02em] text-white max-w-xl"
            style={{ fontSize: 'clamp(2.2rem, 4.2vw, 4.25rem)', fontWeight: 400 }}
          >
            We build software that{' '}
            <em className="italic text-[#D85A30]">scales</em>{' '}
            your business.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-[#888] max-w-sm mt-4 leading-relaxed font-light text-sm md:text-base"
          >
            From MVPs to enterprise systems — we design, build, and ship
            software that moves fast and lasts long.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6"
          >
            <Link href="#contact">
              <motion.span
                whileHover={{ scale: 1.04, backgroundColor: '#D85A30', color: '#fff' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="inline-block border border-[#D85A30] text-[#D85A30] px-7 py-3 rounded-full font-semibold text-sm tracking-wide cursor-pointer"
              >
                Get a free consultation
              </motion.span>
            </Link>
            <Link
              href="#work"
              className="text-white/70 hover:text-white group flex items-center gap-2 font-medium transition-colors text-sm"
            >
              See our work
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-7 grid grid-cols-3 gap-6 max-w-sm pt-6 border-t border-white/[0.08]"
          >
            {[
              { value: '50+', label: 'Projects shipped' },
              { value: '4 wk', label: 'Avg. MVP delivery' },
              { value: '100%', label: 'On-time rate' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-rifton text-xl md:text-2xl text-white tracking-tight"
                  style={{ fontWeight: 400 }}
                >
                  <StatValue value={s.value} />
                </div>
                <div className="text-[#555] text-[10px] uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — video, shifted slightly left with a straight slanted left edge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative lg:flex-1 h-40 lg:h-full overflow-hidden"
          style={{
            marginLeft: '-380px',
            clipPath: 'polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        >
          {/* Fade top on mobile */}
          <div
            className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none lg:hidden"
            style={{ background: 'linear-gradient(to bottom, #0D0D0D, transparent)' }}
          />

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

      </div>

    </section>
  );
}