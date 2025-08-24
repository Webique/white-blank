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
            ? window.innerWidth < 768 
              ? '/lovable-uploads/e3257805-5bc2-4759-8d40-e8c23dec7319.png'
              : '/lovable-uploads/f3250bc2-40f4-4b55-a621-7d3fcaf13c35.png'
            : window.innerWidth < 768 
              ? '/lovable-uploads/a23770c4-fe2a-40e6-bdeb-392b3cbbc04d.png'
              : '/lovable-uploads/f0015b76-7769-4172-a966-a308838f1181.png'
          }
          alt={language === 'en' ? 'Our Clients - White Blank Marketing' : 'عملاؤنا - وايت بلانك للتسويق'}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default OurClientsSection;