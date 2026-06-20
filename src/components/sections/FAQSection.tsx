'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer: "Most MVPs ship in 4–6 weeks. Larger platforms typically run 8–16 weeks depending on scope. We give you a fixed timeline before we start — no moving goalposts.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Yes. We work with founders from idea to launch. We help scope your MVP, validate assumptions, and build a version that is lean but production-ready.",
  },
  {
    question: "Can you take over an existing codebase?",
    answer: "Yes. We have inherited messy codebases before. We start with an audit, give you an honest assessment, then move forward with a clear plan.",
  },
  {
    question: "What does the process look like after we agree?",
    answer: "Discovery → Architecture → Build → Review → Ship. You are involved at every stage. Weekly updates, a shared workspace, and direct Slack access to your team.",
  },
  {
    question: "What technologies do you work with?",
    answer: "React, Next.js, React Native, Node.js, Python, PostgreSQL, Redis, AWS, and more. We pick the right stack for your problem — not the fashionable one.",
  },
  {
    question: "How does pricing work?",
    answer: "We offer fixed-scope project pricing and monthly retainers for ongoing work. You get a detailed quote after a free discovery call — no vague estimates.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="w-full bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Centered header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16 px-6">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Questions we get <span className="text-[#D85A30]">a lot</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-stretch md:-ml-16">

          {/* Left: accordion */}
          <div className="w-full md:w-[78%]">
            <div className="flex flex-col">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b border-white/[0.08]">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between py-[26px] text-left bg-transparent border-none cursor-pointer"
                    aria-expanded={openIndex === i}
                  >
                    <span className={`text-[22px] md:text-[26px] font-bold uppercase leading-normal transition-colors duration-300 pr-8 ${openIndex === i ? 'text-white' : 'text-white/30'}`}>
                      {faq.question}
                    </span>
                    {openIndex === i
                      ? <Minus className="text-white/40 shrink-0 w-7 h-7" />
                      : <Plus className="text-white/30 shrink-0 w-7 h-7" />
                    }
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === i && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/50 text-[16px] font-normal leading-[1.8] pb-[28px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sticky image */}
          <div className="hidden md:block md:w-[50%] ml-auto" style={{ alignSelf: 'stretch' }}>
            <div className="sticky top-20 translate-x-12 -mt-20">
              <Image
                src="/faqs.png"
                alt="FAQs"
                width={0}
                height={0}
                sizes="55vw"
                className="w-[230%] h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
