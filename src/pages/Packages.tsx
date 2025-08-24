import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import PackagesSection from '@/components/PackagesSection';
import Footer from '@/components/Footer';

const Packages = () => {
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
        <PackagesSection language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Packages;