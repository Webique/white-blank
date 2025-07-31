import React from 'react';

interface HeroSectionProps {
  language: 'en' | 'ar';
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, onContactClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="w-full h-screen">
        <img
          src={language === 'en' 
            ? '/lovable-uploads/45c4ac48-561b-465b-a955-8ac9b6238e88.png'
            : '/lovable-uploads/6ad52912-39e0-4c53-be4a-372ccfcf8743.png'
          }
          alt={language === 'en' ? 'From Spark to Spotlight' : 'من أول شرارة إلى آخر ضوء'}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;