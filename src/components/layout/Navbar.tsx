'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center"
      style={{ padding: scrolled ? '12px 48px' : '18px 0px' }}
    >
      <div
        className="w-full transition-all duration-500"
        style={{
          maxWidth: scrolled ? '820px' : '1300px',
          background: scrolled ? 'rgba(13, 13, 13, 0.72)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          border: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          borderRadius: scrolled ? '20px' : '0px',
          padding: scrolled ? '10px 28px' : '0',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/logo_without_name-removebg-preview.png"
              alt="Crodlin Logo"
              width={28}
              height={28}
              className="object-contain group-hover:scale-105 transition-transform brightness-0 invert"
            />
            <span className="text-lg font-bold tracking-tight text-white">Crodlin</span>
          </Link>

          {/* Desktop Nav — links absolutely centered */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-5">
            {['Services', 'Work', 'Blog', 'About'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* CTA — right side */}
          <div className="hidden md:block shrink-0">
            <Link
              href="#contact"
              className="border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1"
            >
              Book a call <span>↗</span>
            </Link>
          </div>

          {/* Mobile */}
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
                  className="border border-[#D85A30] text-[#D85A30] hover:bg-[#D85A30] hover:text-white px-5 py-3 rounded-full text-center text-sm font-semibold mx-auto w-full max-w-[200px] transition-all duration-300"
                >
                  Book a call ↗
                </Link>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
