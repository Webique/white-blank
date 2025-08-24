import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ContactImageSection from '@/components/ContactImageSection';
import Footer from '@/components/Footer';

const Contact = () => {
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
        <ContactImageSection language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Contact;