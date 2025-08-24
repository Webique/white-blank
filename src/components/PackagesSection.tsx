import React from 'react';

interface PackagesSectionProps {
  language: 'en' | 'ar';
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "Our Packages",
      subtitle: "Choose the perfect package for your business growth",
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
      title: "باقاتنا",
      subtitle: "اختر الباقة المثالية لنمو عملك",
      packages: [
        {
          image: "/lovable-uploads/58c1b187-7299-49ac-9575-a30bb0732f2e.png",
          alt: "باقة البداية - 3,200 جنيه"
        },
        {
          image: "/lovable-uploads/7d1bfda0-d7cd-4f0e-b48e-b875b1a6f13b.png",
          alt: "باقة النمو - 7,200 جنيه"
        },
        {
          image: "/lovable-uploads/9218205e-1b8f-4219-bc13-a7dea828a01a.png",
          alt: "باقة التأثير - 15,500 جنيه"
        }
      ]
    }
  };

  const currentContent = content[language];
  const isRTL = language === 'ar';

  return (
    <section 
      id="packages" 
      className="py-20 bg-gradient-to-br from-background to-muted/50"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

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