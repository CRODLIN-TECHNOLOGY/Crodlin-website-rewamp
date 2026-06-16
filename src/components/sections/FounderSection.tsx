import React from 'react';
import Link from 'next/link';
import { Briefcase, Terminal, Mail } from 'lucide-react';

export default function FounderSection() {
  return (
    <section id="about" className="py-24" style={{ background: 'linear-gradient(to bottom, #0A0A0A 0%, #1E0B04 50%, #0A0A0A 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Column */}
        <div className="reveal flex flex-col gap-6">
          <div className="rounded-3xl overflow-hidden relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 shadow-lg group">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            >
              <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-6 left-6 right-6 flex justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-semibold text-[#0D0D0D] shadow-sm">
                Fareed · Founder, Crodlin Technology
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full max-w-md mx-auto lg:mx-0">
            {[
              { href: '#', icon: Briefcase, color: 'text-[#0077b5]', label: 'Connect' },
              { href: '#', icon: Terminal, color: 'text-[#0D0D0D]', label: 'See code' },
              { href: 'mailto:hello@crodlin.com', icon: Mail, color: 'text-[#D85A30]', label: 'Write to me' },
            ].map(({ href, icon: Icon, color, label }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-[#5A5A5A] hover:text-[#0D0D0D] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border border-[#E5E5E5] active:translate-y-0"
              >
                <Icon className={`w-4 h-4 ${color}`} /> {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="reveal reveal-delay-2 flex flex-col items-start">
          <span className="text-xs uppercase tracking-widest font-medium text-[#D85A30] mb-6">
            FROM THE FOUNDER
          </span>

          <div className="relative">
            <span className="absolute -top-12 -left-6 md:-left-10 text-8xl leading-none text-[#D85A30] font-serif opacity-30 select-none">
              &ldquo;
            </span>
            <div className="text-xl md:text-2xl text-white leading-relaxed font-light flex flex-col gap-6 relative z-10">
              <p>
                I started Crodlin because I saw a gap — small businesses and startups needed the same quality of software that enterprises get, without the enterprise price tag or bureaucracy.
              </p>
              <p>
                Every project we take on, I&apos;m personally involved. Not just as an oversight, but in the decisions that matter. That&apos;s my promise.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col">
            <span className="font-serif italic text-3xl text-white">Fareed</span>
            <span className="text-sm text-white/50 mt-1">Founder &amp; Lead Engineer</span>
          </div>

          <Link
            href="#contact"
            className="mt-12 border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_8px_24px_rgba(216,90,48,0.25)] active:scale-95"
          >
            Let&apos;s have a conversation →
          </Link>
        </div>

      </div>
    </section>
  );
}
