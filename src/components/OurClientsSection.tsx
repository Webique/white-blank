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
              ? '/lovable-uploads/65b0303f-62df-4d23-8825-49acc9c04a11.png'
              : '/lovable-uploads/e11cbd87-b7cb-4245-a89f-88c6d8ba2510.png'
            : window.innerWidth < 768 
              ? '/lovable-uploads/bb059c47-0f2e-4b7c-930c-ef25df5ba657.png'
              : '/lovable-uploads/c5e6f543-9a47-4bfd-811d-fd1d7769b615.png'
          }
          alt={language === 'en' ? 'Our Clients - White Blank Marketing' : 'عملاؤنا - وايت بلانك للتسويق'}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default OurClientsSection;