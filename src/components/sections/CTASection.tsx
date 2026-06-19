'use client';

import React from 'react';

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  padding: '10px 14px',
  color: '#fff',
  fontSize: '14px',
  outline: 'none',
  width: '100%',
};

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{ background: '#030303' }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D85A30]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="px-6 relative z-10">

        {/* Heading */}
        <div className="mb-14 flex flex-col items-center text-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D85A30]">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Contact our team
          </h2>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-12 items-start max-w-5xl mx-auto">

          {/* Left: Form */}
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-white/40 uppercase tracking-wider">First name</label>
                <input type="text" placeholder="First name" style={inputStyle} className="placeholder-white/20 focus:border-[#D85A30]/50 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-white/40 uppercase tracking-wider">Last name</label>
                <input type="text" placeholder="Last name" style={inputStyle} className="placeholder-white/20 focus:border-[#D85A30]/50 transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className="text-xs font-medium text-white/40 uppercase tracking-wider">Email</label>
              <input type="email" placeholder="you@company.com" style={inputStyle} className="placeholder-white/20 focus:border-[#D85A30]/50 transition-colors" />
            </div>

            <div className="flex flex-col gap-2 mb-5">
              <label className="text-xs font-medium text-white/40 uppercase tracking-wider">Phone number</label>
              <div className="flex gap-2">
                <select
                  style={{ ...inputStyle, width: 'auto', paddingRight: '28px' }}
                  className="shrink-0"
                >
                  <option value="IN">IN</option>
                  <option value="US">US</option>
                  <option value="UK">UK</option>
                  <option value="AE">AE</option>
                </select>
                <input type="tel" placeholder="+91 00000 00000" style={inputStyle} className="placeholder-white/20 focus:border-[#D85A30]/50 transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label className="text-xs font-medium text-white/40 uppercase tracking-wider">Message</label>
              <textarea
                placeholder="Leave us a message..."
                rows={4}
                style={{ ...inputStyle, resize: 'none' }}
                className="placeholder-white/20 focus:border-[#D85A30]/50 transition-colors"
              />
            </div>

            {/* Services checkboxes */}
            <div className="mb-8">
              <label className="text-xs font-medium text-white/40 uppercase tracking-wider block mb-3">Services</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Software Development', 'AI & Automation', 'Mobile Apps', 'IT Consultancy', 'UI/UX Design', 'Other'].map((s) => (
                  <label key={s} className="flex items-center gap-2 cursor-pointer group">
                    <div
                      className="w-4 h-4 rounded border shrink-0 flex items-center justify-center transition-colors group-hover:border-[#D85A30]/60"
                      style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.03)' }}
                    />
                    <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="w-full py-3.5 rounded-full font-semibold text-[#D85A30] text-sm transition-all duration-300 hover:bg-[#D85A30] hover:text-white border border-[#D85A30]"
            >
              Send message ↗
            </button>
          </div>

          {/* Right: Contact info */}
          <div className="flex flex-col gap-6">

            {/* Chat */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-white font-semibold text-sm mb-1">Chat with us</p>
              <p className="text-white/40 text-xs mb-4 leading-relaxed">Speak to our friendly team via live chat.</p>
              <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#D85A30] transition-colors">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start a live chat
                </a>
                <a href="mailto:hello@crodlin.com" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#D85A30] transition-colors">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Shoot us an email
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#D85A30] transition-colors">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Message us on X
                </a>
              </div>
            </div>

            {/* Call */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-white font-semibold text-sm mb-1">Call us</p>
              <p className="text-white/40 text-xs mb-4 leading-relaxed">Mon–Fri from 9am to 6pm IST.</p>
              <a href="tel:+910000000000" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#D85A30] transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 (000) 000-0000
              </a>
            </div>

            {/* Visit */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-white font-semibold text-sm mb-1">Visit us</p>
              <p className="text-white/40 text-xs mb-4 leading-relaxed">Chat with us in person at our office.</p>
              <a href="#" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#D85A30] transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Mumbai, Maharashtra, India
              </a>
            </div>

            {/* Status pill */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="text-xs text-white/50">Currently accepting new projects</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
