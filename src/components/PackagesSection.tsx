import React from 'react';

interface PackagesSectionProps {
  language: 'en' | 'ar';
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ language }) => {
  const content = {
    en: {
      packages: [
        {
          image: "/lovable-uploads/58c1b187-7299-49ac-9575-a30bb0732f2e.png",
          alt: "Startup Package - 3,200 LE"
        },
        {
          image: "/lovable-uploads/7d1bfda0-d7cd-4f0e-b48e-b875b1a6f13b.png", 
          alt: "Growth Package - 7,200 LE"
        },
        {
          image: "/lovable-uploads/9218205e-1b8f-4219-bc13-a7dea828a01a.png",
          alt: "Impact Package - 15,500 LE"
        }
      ]
    },
    ar: {
      packages: [
        {
          image: "/lovable-uploads/fbc6cbde-5e31-4840-a783-bf7afbbb22b4.png",
          alt: "باقة الانطلاقة - 3,200 جنيه"
        },
        {
          image: "/lovable-uploads/734df3d9-d490-4def-bc2d-9cd5d3e4f7c1.png",
          alt: "باقة النمو - 7,200 جنيه"
        },
        {
          image: "/lovable-uploads/6627b0b8-4a3e-4896-9484-fbaabfce1b91.png",
          alt: "باقة التأثير - 15,500 جنيه"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section 
      id="packages" 
      className="py-20 bg-gradient-to-br from-background to-muted/50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {currentContent.packages.map((pkg, index) => (
            <div 
              key={index}
              className="flex justify-center"
            >
              <img
                src={pkg.image}
                alt={pkg.alt}
                className="w-full max-w-sm h-auto object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;