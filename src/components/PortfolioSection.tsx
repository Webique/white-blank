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
            ? '/lovable-uploads/7cf22ef5-7085-4598-8797-933dcbcf514f.png'
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