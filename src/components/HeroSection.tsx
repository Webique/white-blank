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
    <section id="hero" className="relative w-full overflow-hidden">
      {/* Hero Image */}
      <div className="w-full relative">
        <img
          src={language === 'en' 
            ? window.innerWidth < 768 
              ? '/lovable-uploads/68eb0488-137d-4f93-ab0d-22f312e6b3a5.png'
              : '/lovable-uploads/76a4bcc6-74e1-4913-b4fa-a24a44c23d81.png'
            : window.innerWidth < 768 
              ? '/lovable-uploads/d016e041-3890-4298-9499-c395998dd4bc.png'
              : '/lovable-uploads/4b17590d-1450-4832-8527-f0d4e43171c6.png'
          }
          alt={language === 'en' ? 'From Spark to Spotlight' : 'من أول شرارة إلى آخر ضوء'}
          className="w-full h-auto"
        />
        {/* Clickable area - full side on mobile, positioned button on desktop */}
        <button
          onClick={handleWhatsAppClick}
          className={`absolute transition-colors duration-300 cursor-pointer hover:bg-white/10 ${
            window.innerWidth < 768
              ? 'top-0 left-0 w-1/2 h-full'  // Both languages: entire left side on mobile
              : language === 'en' 
                ? 'bottom-[20%] right-[8%] w-[25%] h-[20%] rounded-[2rem]'  // English positioning on desktop
                : 'bottom-[20%] left-[8%] w-[25%] h-[20%] rounded-[2rem]'   // Arabic positioning on desktop
          }`}
          aria-label={language === 'en' ? 'Contact us on WhatsApp' : 'تواصل معنا عبر الواتساب'}
        />
      </div>
    </section>
  );
};

export default HeroSection;