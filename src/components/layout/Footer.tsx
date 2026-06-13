import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Terminal, MessageCircle, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] overflow-hidden">

      {/* ── Main footer content ───────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group w-max">
              <Image
                src="/logo_without_name-removebg-preview.png"
                alt="Crodlin Logo"
                width={28}
                height={28}
                className="object-contain brightness-0 invert group-hover:scale-105 transition-transform"
              />
              <span className="text-lg md:text-xl font-bold text-white tracking-tight">Crodlin</span>
            </Link>
            <p className="text-[#666] text-sm">Software that scales.</p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="text-[#666] hover:text-[#D85A30] hover:-translate-y-0.5 transition-all duration-200">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#666] hover:text-[#D85A30] hover:-translate-y-0.5 transition-all duration-200">
                <Terminal className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#666] hover:text-[#D85A30] hover:-translate-y-0.5 transition-all duration-200">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm mb-2">Services</h4>
            <Link href="#" className="text-[#666] hover:text-[#D85A30] text-sm transition-colors">Software Development</Link>
            <Link href="#" className="text-[#666] hover:text-[#D85A30] text-sm transition-colors">IT Consultancy</Link>
            <Link href="#" className="text-[#666] hover:text-[#D85A30] text-sm transition-colors">AI Solutions</Link>
            <Link href="#" className="text-[#666] hover:text-[#D85A30] text-sm transition-colors">Mobile Apps</Link>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm mb-2">Company</h4>
            <Link href="#work"    className="text-[#666] hover:text-[#D85A30] text-sm transition-colors">Work</Link>
            <Link href="#blog"    className="text-[#666] hover:text-[#D85A30] text-sm transition-colors">Blog</Link>
            <Link href="#about"   className="text-[#666] hover:text-[#D85A30] text-sm transition-colors">About</Link>
            <Link href="#contact" className="text-[#666] hover:text-[#D85A30] text-sm transition-colors">Contact</Link>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm mb-2">Contact</h4>
            <a href="mailto:hello@crodlin.com" className="text-[#666] hover:text-[#D85A30] text-sm transition-colors">
              hello@crodlin.com
            </a>
            <p className="text-[#666] text-sm">India 🇮🇳</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-[#666]">Currently accepting projects</span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1A1A1A] mt-12" />
      </div>

      {/* ── Large logo stamp ──────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(120px, 18vw, 280px)' }}>
        <Image
          src="/footer.png"
          alt="Crodlin"
          fill
          className="object-contain object-center"
          style={{ opacity: 0.6 }}
          priority={false}
        />
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#0D0D0D] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none" />
      </div>

      {/* ── Bottom bar — below the image ──────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#444]">© 2026 Crodlin Technology. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="text-xs text-[#444] hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-xs text-[#444] hover:text-white transition-colors">Terms</Link>
        </div>
      </div>

    </footer>
  );
}
