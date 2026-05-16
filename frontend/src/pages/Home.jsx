import { lazy, Suspense } from 'react';
import Header from '../components/Header';
import HeroAnimatedGradient from '../components/HeroAnimatedGradient';
import ServiceGlassGrid from '../components/ServiceGlassGrid';
import PortfolioCaseStudies from '../components/PortfolioCaseStudies';
import ProcessTimeline from '../components/ProcessTimeline';
import PricingPackages from '../components/PricingPackages';
import TestimonialReviews from '../components/TestimonialReviews';
import FaqAccordion from '../components/FaqAccordion';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingWhatsappButton from '../components/FloatingWhatsappButton';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden scroll-smooth">
      <Header />
      <main id="home">
        <HeroAnimatedGradient />
        <ServiceGlassGrid />
        <PortfolioCaseStudies />
        <ProcessTimeline />
        <PricingPackages />
        <TestimonialReviews />
        <FaqAccordion />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsappButton />
    </div>
  );
}
