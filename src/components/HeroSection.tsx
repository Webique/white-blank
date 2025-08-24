import React from 'react';

interface HeroSectionProps {
  language: 'en' | 'ar';
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, onContactClick }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+966533696905";
    const message = language === 'en' 
      ? "Hello! I'm ready to get started with White Blank Marketing." 
      : "مرحباً! أنا مستعد للبدء مع وايت بلانك للتسويق.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden pt-16 lg:pt-20">
      {/* Hero Image */}
      <div className="w-full relative">
        <img
          src={language === 'en' 
            ? '/lovable-uploads/45c4ac48-561b-465b-a955-8ac9b6238e88.png'
            : window.innerWidth < 768 
              ? '/lovable-uploads/d016e041-3890-4298-9499-c395998dd4bc.png'
              : '/lovable-uploads/6ad52912-39e0-4c53-be4a-372ccfcf8743.png'
          }
          alt={language === 'en' ? 'From Spark to Spotlight' : 'من أول شرارة إلى آخر ضوء'}
          className="w-full h-auto"
        />
        {/* Clickable area positioned over the "Ready/مستعد" text */}
        <button
          onClick={handleWhatsAppClick}
          className={`absolute transition-colors duration-300 rounded-xl cursor-pointer hover:bg-white/10 ${
            language === 'en' 
              ? 'bottom-[20%] right-[8%] w-[25%] h-[20%]'  // English positioning
              : 'bottom-[20%] left-[8%] w-[25%] h-[20%]'   // Arabic positioning (left side)
          }`}
          aria-label={language === 'en' ? 'Contact us on WhatsApp' : 'تواصل معنا عبر الواتساب'}
        />
      </div>
    </section>
  );
};

export default HeroSection;