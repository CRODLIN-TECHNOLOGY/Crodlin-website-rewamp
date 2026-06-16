import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] overflow-hidden">

      {/* ── Top row: logo+tagline + newsletter ─────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-10">

        {/* Left: Logo + tagline */}
        <div className="flex flex-col gap-4 max-w-xs">
          <Link href="/" className="flex items-center gap-2 group w-max">
            <Image
              src="/logo_without_name-removebg-preview.png"
              alt="Crodlin Logo"
              width={24}
              height={24}
              className="object-contain brightness-0 invert group-hover:scale-105 transition-transform"
            />
            <span className="text-base font-bold text-white tracking-tight">CRODLIN</span>
          </Link>
          <p className="text-[#888] text-sm leading-relaxed">
            Building software that scales —<br />
            from startups to enterprise.
          </p>
        </div>

        {/* Right: Newsletter */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-sm font-medium">Subscribe to our newsletter</p>
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5 flex-1 min-w-[260px]"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <svg className="w-4 h-4 text-[#666] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-sm text-white placeholder-[#555] outline-none flex-1"
              />
            </div>
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="text-[#444] text-[10px] uppercase tracking-widest">By subscribing you agree to our terms.</p>
        </div>
      </div>

      {/* ── Link columns ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#555] mb-1">Links</h4>
          <Link href="/"        className="text-[#888] hover:text-white text-sm transition-colors">Home</Link>
          <Link href="#services" className="text-[#888] hover:text-white text-sm transition-colors">Services</Link>
          <Link href="#work"    className="text-[#888] hover:text-white text-sm transition-colors">Work</Link>
          <Link href="#about"   className="text-[#888] hover:text-white text-sm transition-colors">About</Link>
          <Link href="#contact" className="text-[#888] hover:text-white text-sm transition-colors">Contact us</Link>
        </div>

        {/* Solutions */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#555] mb-1">Solutions</h4>
          <Link href="#" className="text-[#888] hover:text-white text-sm transition-colors">Software Development</Link>
          <Link href="#" className="text-[#888] hover:text-white text-sm transition-colors">AI & Automation</Link>
          <Link href="#" className="text-[#888] hover:text-white text-sm transition-colors">Mobile Apps</Link>
          <Link href="#" className="text-[#888] hover:text-white text-sm transition-colors">IT Consultancy</Link>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#555] mb-1">Resources</h4>
          <Link href="#blog"    className="text-[#888] hover:text-white text-sm transition-colors">Blog & Insights</Link>
          <Link href="#"        className="text-[#888] hover:text-white text-sm transition-colors">Case Studies</Link>
          <Link href="#"        className="text-[#888] hover:text-white text-sm transition-colors">Tech Stack</Link>
          <Link href="#"        className="text-[#888] hover:text-white text-sm transition-colors">FAQ</Link>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#555] mb-1">Socials</h4>
          <a href="#" className="text-[#888] hover:text-white text-sm transition-colors">LinkedIn</a>
          <a href="#" className="text-[#888] hover:text-white text-sm transition-colors">X (Formerly Twitter)</a>
          <a href="#" className="text-[#888] hover:text-white text-sm transition-colors">GitHub</a>
          <a href="mailto:hello@crodlin.com" className="text-[#888] hover:text-white text-sm transition-colors">hello@crodlin.com</a>
        </div>

      </div>

      {/* ── Bottom bar ─────────────────────────────── */}
      <div className="border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] uppercase tracking-widest text-[#444]">© Copyright 2026 Crodlin Technology</p>
          <div className="flex gap-6">
            <Link href="#" className="text-[10px] uppercase tracking-widest text-[#444] hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-[10px] uppercase tracking-widest text-[#444] hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* ── Large background wordmark ───────────────── */}
      <div className="overflow-hidden select-none pointer-events-none" aria-hidden>
        <p
          className="text-center font-black leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(80px, 18vw, 220px)',
            letterSpacing: '-0.02em',
            marginBottom: '-0.15em',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(216,90,48,0.12) 50%, rgba(255,255,255,0.03) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          CRODLIN
        </p>
      </div>

    </footer>
  );
}
