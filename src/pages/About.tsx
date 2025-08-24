import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const About = () => {
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
        <AboutSection language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default About;