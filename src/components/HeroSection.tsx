import React from 'react';

interface HeroSectionProps {
  language: 'en' | 'ar';
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, onContactClick }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+966123456789"; // Replace with actual phone number
    const message = language === 'en' 
      ? "Hello! I'm ready to get started with White Blank Marketing." 
      : "مرحباً! أنا مستعد للبدء مع وايت بلانك للتسويق.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden pt-16 lg:pt-20">
      {/* Hero Image */}
      <div className="w-full relative cursor-pointer" onClick={handleWhatsAppClick}>
        <img
          src={language === 'en' 
            ? '/lovable-uploads/45c4ac48-561b-465b-a955-8ac9b6238e88.png'
            : '/lovable-uploads/6ad52912-39e0-4c53-be4a-372ccfcf8743.png'
          }
          alt={language === 'en' ? 'From Spark to Spotlight' : 'من أول شرارة إلى آخر ضوء'}
          className="w-full h-auto"
        />
        {/* Invisible overlay for better click detection */}
        <div className="absolute inset-0 hover:bg-black/5 transition-colors duration-300" />
      </div>
    </section>
  );
};

export default HeroSection;