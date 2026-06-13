'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/[0.06] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/logo_without_name-removebg-preview.png" 
            alt="Crodlin Logo" 
            width={32} 
            height={32} 
            className="object-contain group-hover:scale-105 transition-transform brightness-0 invert"
          />
          <span className="text-lg md:text-xl font-bold tracking-tight text-white">Crodlin</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {['Services', 'Work', 'Blog', 'About'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors text-white/70 hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1"
          >
            Book a call <span>↗</span>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white p-2">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#0D0D0D] flex flex-col gap-8 pt-16 border-l border-white/[0.06]">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex flex-col gap-6 text-center">
                {['Services', 'Work', 'Blog', 'About'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-xl font-semibold text-white hover:text-[#D85A30] transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <Link
                href="#contact"
                className="border border-[#D85A30] bg-[#D85A30] text-white px-5 py-3 rounded-full text-center text-sm font-semibold mx-auto w-full max-w-[200px]"
              >
                Book a call ↗
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
