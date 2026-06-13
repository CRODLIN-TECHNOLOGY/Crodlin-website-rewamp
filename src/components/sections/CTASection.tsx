'use client';

import React from 'react';

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D0D0D 0%, #1A0800 50%, #0D0D0D 100%)',
      }}
    >
      {/* Ambient ember blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D85A30]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D85A30]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating glass badges */}
      <div className="absolute top-16 left-10 md:left-24 bg-white/5 backdrop-blur-xl border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg transform -rotate-6 animate-[bounce_4s_infinite_alternate]">
        ✓ Replied in &lt; 2 hours
      </div>
      <div className="absolute bottom-20 left-10 md:left-32 bg-white/5 backdrop-blur-xl border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg transform rotate-6 animate-[bounce_5s_infinite_alternate]">
        📅 Free 30-min slot
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left: Text */}
        <div className="reveal text-left">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Ready to build<br />
            something that<br />
            <span className="text-[#D85A30]">matters?</span>
          </h2>

          <p className="text-white/60 text-lg max-w-lg leading-relaxed font-light mb-8">
            Let&apos;s discuss your project. No sales pitch — just an honest
            conversation with our technical experts.
          </p>

          <p className="text-white/50 text-sm font-medium tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Currently accepting new projects
          </p>
        </div>

        {/* Right: Glassmorphism form card */}
        <div className="reveal reveal-delay-2 relative rounded-[2rem] p-8 md:p-10 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          {/* Inner highlight edge */}
          <div
            className="absolute inset-0 rounded-[2rem] pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(216,90,48,0.08) 0%, transparent 60%)',
            }}
          />

          <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Get in touch</h3>

          <form className="flex flex-col gap-5 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="glass-input"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="glass-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="glass-input"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                Project Details
              </label>
              <textarea
                placeholder="Tell us about your goals, timeline, and budget..."
                rows={4}
                className="glass-input resize-none"
              />
            </div>

            <button
              type="button"
              className="relative mt-2 py-4 rounded-xl font-bold text-white text-base overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: 'rgba(216,90,48,0.9)',
                border: '1px solid rgba(216,90,48,0.5)',
                boxShadow: '0 8px 32px rgba(216,90,48,0.25)',
              }}
            >
              <span className="relative z-10">Send Message →</span>
              {/* hover glow sweep */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#D85A30] to-[#FF7A50] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
