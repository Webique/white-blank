import React from 'react';

interface OurClientsSectionProps {
  language: 'en' | 'ar';
}

const OurClientsSection: React.FC<OurClientsSectionProps> = ({ language }) => {
  return (
    <section id="clients" className="relative w-full overflow-hidden">
      <div className="w-full">
        <img
          src={language === 'en' 
            ? '/lovable-uploads/f3250bc2-40f4-4b55-a621-7d3fcaf13c35.png'
            : '/lovable-uploads/f3250bc2-40f4-4b55-a621-7d3fcaf13c35.png'
          }
          alt={language === 'en' ? 'Our Clients - White Blank Marketing' : 'عملاؤنا - وايت بلانك للتسويق'}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default OurClientsSection;