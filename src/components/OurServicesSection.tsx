import React from 'react';

interface OurServicesSectionProps {
  language: 'en' | 'ar';
}

const OurServicesSection: React.FC<OurServicesSectionProps> = ({ language }) => {
  return (
    <section id="services" className="relative w-full overflow-hidden">
      <div className="w-full">
        {language === 'en' ? (
          <img
            src="/lovable-uploads/0fbb4fc9-e752-4774-8c56-ee2b6a3989f0.png"
            alt="Our Services - White Blank Marketing"
            className="w-full h-auto"
          />
        ) : window.innerWidth < 768 ? (
          <div className="w-full">
            <img
              src="/lovable-uploads/4028b916-bc76-459e-81f2-0589888564c2.png"
              alt="خدماتنا - وايت بلانك للتسويق"
              className="w-full h-auto"
            />
            <img
              src="/lovable-uploads/73eeb1a3-da34-4cbe-aeb0-426989da0bfe.png"
              alt="خدماتنا - وايت بلانك للتسويق"
              className="w-full h-auto"
            />
            <img
              src="/lovable-uploads/95a0af43-a523-4f39-8270-134c48381aa7.png"
              alt="خدماتنا - وايت بلانك للتسويق"
              className="w-full h-auto"
            />
          </div>
        ) : (
          <img
            src="/lovable-uploads/847892d4-13be-48df-ab76-e0e7db96199a.png"
            alt="خدماتنا - وايت بلانك للتسويق"
            className="w-full h-auto"
          />
        )}
      </div>
    </section>
  );
};

export default OurServicesSection;