import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import OurServicesSection from '@/components/OurServicesSection';
import WhyUsImageSection from '@/components/WhyUsImageSection';
import OurClientsSection from '@/components/OurClientsSection';
import ContactImageSection from '@/components/ContactImageSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');

  // Add smooth scrolling to the html element
  useEffect(() => {
    document.documentElement.classList.add('smooth-scroll');
    
    // Set direction based on language
    document.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, [language]);

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
  };


  return (
    <div className="min-h-screen bg-background">
      <Navigation language={language} onLanguageChange={handleLanguageChange} />
      
      <main>
        <HeroSection language={language} onContactClick={() => {}} />
        <AboutSection language={language} />
        <PortfolioSection language={language} />
        <OurServicesSection language={language} />
        <WhyUsImageSection language={language} />
        <OurClientsSection language={language} />
        <ContactImageSection language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
