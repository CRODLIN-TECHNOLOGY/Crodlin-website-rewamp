'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function AboutPage() {
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

        {/* content — bottom, asset left / text right */}
        <div className="relative w-full max-w-screen-2xl mx-auto px-4 md:px-10 pb-20 flex items-center justify-between gap-8">

          {/* text — left side */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-8 md:max-w-3xl">
            <motion.h1
              variants={fadeUp}
              className="font-bold tracking-tight text-white leading-none"
              style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
            >
              We are <br/><span className="text-[#D85A30]">Crodlin.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/50 leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.35rem)' }}>
              A software engineering studio that builds products people actually use. No noise. No bloat. Just clean code and shipped products.
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-6 pt-2">
              <a
                href="#vision"
                className="px-7 py-3 border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-200"
              >
                Our Story →
              </a>
            </motion.div>
          </motion.div>

          {/* about image — right */}
          <motion.img
            src="/about-asset.png"
            alt=""
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block w-[500px] lg:w-[660px] xl:w-[800px] object-contain select-none pointer-events-none"
            style={{ marginRight: '-100px' }}
          />

        </div>
      </section>

      {/* ── Curved divider ── */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40 Q360 0 720 30 Q1080 60 1440 20"
            stroke="url(#orangeGrad)"
            strokeWidth="1.5"
            fill="none"
          />
          <defs>
            <linearGradient id="orangeGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D85A30" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#D85A30" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D85A30" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Vision ── */}
      <section id="vision" className="pt-32 pb-0 max-w-screen-2xl mx-auto px-4 md:px-10">
        <div className="flex flex-col gap-3 items-center text-center mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">
            What drives us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            By engineers who give a <span className="text-[#D85A30]">damn.</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="md:w-1/2 flex flex-col gap-8"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">Vision</span>
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              A world where great software is the norm, <span className="text-[#D85A30]">not the exception.</span>
            </h3>
            <p className="text-white/40 text-base md:text-lg leading-[1.9]">
              Too many businesses settle for software that barely works — slow, fragile, and outdated the moment it ships. We believe every company, regardless of size, deserves products built to a standard that actually moves the needle. Our vision is to raise the bar for what software looks and feels like — one product at a time.
            </p>
            <div className="w-12 h-px bg-[#D85A30]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="w-full md:w-1/2"
          >
            <Image src="/vision-image.png" alt="Vision" width={0} height={0} sizes="50vw" className="w-full md:w-[85%] h-auto md:mx-auto block" />
          </motion.div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10 py-16">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* ── Mission ── */}
      <section className="max-w-screen-2xl mx-auto px-4 md:px-10 py-0 my-0">
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="md:w-1/2 flex flex-col gap-8 md:items-end md:text-right"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">Mission</span>
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              Partner with builders and turn ambitious ideas into <span className="text-[#D85A30]">reliable products.</span>
            </h3>
            <p className="text-white/40 text-base md:text-lg leading-[1.9]">
              We exist to close the gap between what a business needs and what it actually ships. Our mission is to be the engineering partner that founders and teams can rely on — not just to write code, but to think through problems, challenge assumptions, and deliver work that holds up long after launch.
            </p>
            <div className="w-12 h-px bg-[#D85A30]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="md:w-1/2"
          >
            <Image src="/mission-image.png" alt="Mission" width={0} height={0} sizes="50vw" className="w-full md:w-[85%] h-auto md:mx-auto block" />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">Let's build</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Got a project in mind?
            </h2>
            <p className="text-white/40 text-base md:text-lg max-w-md">We'd love to hear what you're building.</p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm"
          >
            Get a free consultation →
          </Link>
        </div>
      </section>

    </div>
  );
}
