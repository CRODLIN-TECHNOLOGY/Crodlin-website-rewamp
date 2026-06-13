'use client';

import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'ARES Energetics',
    quote: 'They delivered the MVP in 4 weeks, and it was flawless. The team understood our complex hospitality tech requirements from day one.',
    work: 'Smart Lock & PMS Integration',
    result: '30% faster check-in',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Rahul Desai',
    role: 'Founder',
    company: 'RetailPro',
    quote: 'Our conversion rates doubled after the revamp. Crodlin rebuilt our entire frontend and optimized the checkout funnel beautifully.',
    work: 'E-commerce Platform Revamp',
    result: '2x conversion rate',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Emily Chen',
    role: 'Director of Engineering',
    company: 'TechFlow',
    quote: 'The cleanest code we\'ve ever received from an agency. Their Django + React architecture has scaled effortlessly to 50k users.',
    work: 'SaaS Dashboard & API Platform',
    result: '50k active users',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Anita Kumar',
    role: 'VP Engineering',
    company: 'HealthSync',
    quote: 'Scale was an issue until Crodlin stepped in. They migrated our monolith to microservices with zero downtime.',
    work: 'AI Data Pipeline & Extraction',
    result: '10x faster processing',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const active = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#0D0D0D] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium text-[#D85A30] mb-3 block">
              CLIENT VOICES
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Don&apos;t take our word for it
            </h2>
          </div>
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-[#333] hover:border-[#D85A30] bg-[#1A1A1A] hover:bg-[#D85A30]/10 flex items-center justify-center text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-[#333] hover:border-[#D85A30] bg-[#1A1A1A] hover:bg-[#D85A30]/10 flex items-center justify-center text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="reveal reveal-delay-1 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left — Video / Image */}
          <div
            className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[480px] rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => setVideoOpen(true)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${active.img})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#D85A30] flex items-center justify-center shadow-2xl shadow-[#D85A30]/30 group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 md:w-7 md:h-7 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Bottom bar on image */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-xs text-white font-medium">
                ▶ Watch testimonial
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="flex flex-col justify-center py-4 lg:py-8">
            {/* Large Quote */}
            <Quote className="w-10 h-10 text-[#D85A30] mb-6 opacity-60" />

            <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-10">
              &ldquo;{active.quote}&rdquo;
            </blockquote>

            {/* Person */}
            <div className="flex items-center gap-4 mb-10">
              <div
                className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-[#D85A30]/50"
                style={{ backgroundImage: `url(${active.img})` }}
              ></div>
              <div>
                <div className="text-white font-semibold">{active.name}</div>
                <div className="text-[#666] text-sm">{active.role}, {active.company}</div>
              </div>
            </div>

            {/* Work Done */}
            <div className="border-t border-[#222] pt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-[#555] mb-2 font-medium">Project</div>
                <div className="text-white text-sm font-medium">{active.work}</div>
              </div>
              <div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-[#555] mb-2 font-medium">Result</div>
                <div className="text-[#D85A30] text-xl md:text-2xl font-bold">{active.result}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? 'w-8 bg-[#D85A30]'
                  : 'w-3 bg-[#333] hover:bg-[#555]'
              }`}
            ></button>
          ))}
        </div>

        {/* Small Logos Strip */}
        <div className="mt-16 border-t border-[#1A1A1A] pt-10 flex flex-wrap justify-center items-center gap-8">
          {testimonials.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`text-sm font-semibold transition-all cursor-pointer ${
                idx === activeIndex
                  ? 'text-[#D85A30]'
                  : 'text-[#444] hover:text-white'
              }`}
            >
              {t.company}
            </button>
          ))}
        </div>

      </div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-[800px] bg-black p-0 border-0">
          <DialogTitle className="sr-only">Video Testimonial from {active.name}</DialogTitle>
          <div className="w-full aspect-video bg-[#1A1A1A] flex items-center justify-center rounded-lg overflow-hidden">
            <p className="text-white/50 text-sm">Video Player — coming soon</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
