'use client';

import { LangProvider } from '@/lib/context';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import MachineShowcase from '@/components/MachineShowcase';
import ColorCatalog from '@/components/ColorCatalog';
import HeroBanner from '@/components/HeroBanner';
import EngineSystem from '@/components/EngineSystem';
import MachineFeatures from '@/components/MachineFeatures';
import AppShowcaseSection from '@/components/AppShowcaseSection';
import Technology from '@/components/Technology';
import CinematicBanner from '@/components/CinematicBanner';
import GermanEngineering from '@/components/GermanEngineering';
import Sustainability from '@/components/Sustainability';
import Testimonials from '@/components/Testimonials';
import BoldSeriesSection from '@/components/BoldSeriesSection';
import FashionPanels from '@/components/FashionPanels';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LangProvider>
      <div>
        <Navbar />
        <main>
          {/* ① Hook */}
          <Hero />
          <StatsBar />
          <MachineFeatures />
          <HeroBanner />
          <AppShowcaseSection />
          <CinematicBanner />
          <EngineSystem />

          {/* ② Product */}
          <MachineShowcase />
          <FashionPanels />
          <ColorCatalog />

          {/* ④ Technology & proof */}
          <BoldSeriesSection />
          <Technology />
          <GermanEngineering />
          <Sustainability />

          {/* ⑤ Social proof */}
          <Testimonials />

          {/* ⑥ Convert */}
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
