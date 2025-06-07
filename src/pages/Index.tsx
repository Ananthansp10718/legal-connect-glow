
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SearchSection from '@/components/SearchSection';
import FeaturesSection from '@/components/FeaturesSection';
import FeaturedLawyers from '@/components/FeaturedLawyers';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <FeaturesSection />
      <FeaturedLawyers />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
