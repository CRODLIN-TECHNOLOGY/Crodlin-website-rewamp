'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ConsultingSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#CC5500' }}>

      <div className="flex flex-col md:flex-row md:items-stretch">

        {/* Left — image flush, fills full section height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="shrink-0 w-[220px] md:w-[280px] lg:w-[340px] self-stretch"
        >
          <Image
            src="/consultancy.png"
            alt="Consultancy"
            width={340}
            height={600}
            className="w-full h-full object-cover object-top block"
          />
        </motion.div>

        {/* Right — text right-aligned, vertically centered */}
        <div className="flex flex-col justify-center items-start text-left flex-1 px-6 py-10 md:px-10 md:py-14">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-black leading-[0.9] tracking-tight uppercase text-black mb-5"
          >
            WE DON&apos;T<br />
            <em className="not-italic" style={{ WebkitTextStroke: '2px black', color: 'transparent' }}>
              JUST
            </em>{' '}
            BUILD.<br />
            <span className="text-white">WE CONSULT.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-black/60 text-base md:text-xl max-w-sm leading-relaxed mb-10"
          >
            Strategy before code. We sit down, map the right move, then build it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start gap-3"
          >
            <p className="text-black/55 text-sm md:text-base">
              Not sure where to start? Book a free 30-min call.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 shrink-0"
            >
              Book a consultation ↗
            </a>
          </motion.div>

        </div>

        {/* Right — image flush, fills full section height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="shrink-0 w-[240px] md:w-[320px] lg:w-[380px] self-stretch"
        >
          <Image
            src="/right-consultancy.png"
            alt="Consultancy right"
            width={340}
            height={600}
            className="w-full h-full object-cover object-top block"
          />
        </motion.div>

      </div>
    </section>
  );
}
