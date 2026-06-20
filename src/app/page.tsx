import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import TrustStrip from '@/components/sections/TrustStrip';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import FounderSection from '@/components/sections/FounderSection';
import BlogSection from '@/components/sections/BlogSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        {/* <FounderSection /> */}
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
