import React from 'react';

interface WhyUsImageSectionProps {
  language: 'en' | 'ar';
}

const WhyUsImageSection: React.FC<WhyUsImageSectionProps> = ({ language }) => {
  return (
    <section id="why-us" className="relative w-full overflow-hidden">
      <div className="w-full">
        <img
          src={language === 'en' 
            ? '/lovable-uploads/bfaab9bc-9826-4a7b-97e6-0b4ef57ab7ec.png'
            : '/lovable-uploads/c1c7e657-7e80-479a-a52d-c08bd4e28d0a.png'
          }
          alt={language === 'en' ? 'Why Us - White Blank Marketing' : 'لماذا نحن - وايت بلانك للتسويق'}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default WhyUsImageSection;