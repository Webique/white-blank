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
              : '/lovable-uploads/e11cbd87-b7cb-4245-a89f-88c6d8ba2510.png'
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