import React from 'react';

interface OurServicesSectionProps {
  language: 'en' | 'ar';
}

const OurServicesSection: React.FC<OurServicesSectionProps> = ({ language }) => {
  return (
    <section id="services" className="relative w-full overflow-hidden">
      <div className="w-full">
        <img
          src={language === 'en' 
            ? '/lovable-uploads/0fbb4fc9-e752-4774-8c56-ee2b6a3989f0.png'
            : '/lovable-uploads/0fbb4fc9-e752-4774-8c56-ee2b6a3989f0.png'
          }
          alt={language === 'en' ? 'Our Services - White Blank Marketing' : 'خدماتنا - وايت بلانك للتسويق'}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default OurServicesSection;