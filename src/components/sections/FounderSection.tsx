'use client';

import Link from 'next/link';

export default function FounderSection() {
  return (
    <section id="about" className="pt-12 pb-24" style={{ background: 'linear-gradient(to bottom, #0A0A0A 0%, #1A1A1A 45%, #0A0A0A 100%)' }}>
      <div className="px-6 flex justify-center">

        {/* Card — same bg/border/radius as CTASection and TestimonialsSection cards */}
        <div
          className="w-full rounded-2xl p-8 md:p-10"
          style={{
            maxWidth: '960px',
            background: '#111',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >

          {/* 1. Label */}
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30] block mb-6">
            FROM THE FOUNDER
          </span>

          {/* 2. Pull-quote */}
          <p
            className="text-white leading-[1.55] font-medium mb-5"
            style={{
              fontSize: '21px',
              borderLeft: '2px solid #D85A30',
              paddingLeft: '18px',
              maxWidth: '640px',
            }}
          >
            I started Crodlin because I saw a gap — small businesses and startups needed the same quality of software that enterprises get, without the enterprise price tag or bureaucracy.
          </p>

          {/* 3. Second paragraph */}
          <p
            className="leading-relaxed mb-8"
            style={{
              fontSize: '14px',
              paddingLeft: '20px',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '600px',
            }}
          >
            Every project we take on, I&apos;m personally involved. Not just as oversight, but in the decisions that matter. That&apos;s my promise.
          </p>

          {/* 4. Byline row */}
          <div
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5"
            style={{ paddingLeft: '20px' }}
          >
            {/* Left: photo + name */}
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&crop=face"
                alt="Fareed"
                style={{ borderRadius: '10px', objectFit: 'cover', width: '72px', height: '72px', flexShrink: 0 }}
              />
              <div className="flex flex-col justify-center">
                <span className="text-white font-bold" style={{ fontSize: '15px' }}>Fareed</span>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Founder &amp; Lead Engineer</span>
              </div>
            </div>

            {/* Right: CTA — sm:items-start keeps it top-aligned */}
            <Link
              href="#contact"
              className="self-start border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_8px_24px_rgba(216,90,48,0.25)] active:scale-95 whitespace-nowrap text-sm"
            >
              Let&apos;s have a conversation →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
