import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import OurServicesSection from '@/components/OurServicesSection';
import Footer from '@/components/Footer';

const Services = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');

  useEffect(() => {
    document.documentElement.classList.add('smooth-scroll');
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
        <OurServicesSection language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Services;