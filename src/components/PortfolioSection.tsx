import React from 'react';

interface PortfolioSectionProps {
  language: 'en' | 'ar';
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ language }) => {
  return (
    <section id="portfolio" className="relative w-full overflow-hidden">
      <div className="w-full">
        <img
          src={language === 'en' 
            ? window.innerWidth < 768 
              ? '/lovable-uploads/c8e5542a-de06-4996-acbc-182ff560c1e3.png'
              : '/lovable-uploads/50498c80-8bf4-49cc-9bde-1ed0656ae000.png'
            : window.innerWidth < 768 
              ? '/lovable-uploads/f6fba9bc-bc6f-4e54-a71d-ab45f415025e.png'
              : '/lovable-uploads/4609cba4-1e69-4ab6-9c39-f7370d3ce6ff.png'
          }
          alt={language === 'en' ? 'Portfolio - White Blank Marketing' : 'هويتنا - وايت بلانك للتسويق'}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default PortfolioSection;