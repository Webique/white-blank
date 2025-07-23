import React from 'react';
import { Megaphone, PenTool, Palette, Users, Search } from 'lucide-react';

interface ServicesSectionProps {
  language: 'en' | 'ar';
}

function ServicesSection({ language }: ServicesSectionProps) {
  // The images aren't showing because the path is "/loveable-uploads/1.png" (with an extra "e" in "loveable").
  // But in your index.html and logo usage, the folder is "/lovable-uploads/" (with no "e" after "v").
  // Fix the path below:
  const serviceImages = [
    "/lovable-uploads/1.png",
    "/lovable-uploads/2.png",
    "/lovable-uploads/3.png",
    "/lovable-uploads/4.png",
    "/lovable-uploads/5.png"
  ];

  const content = {
    en: {
      title: "Our Services",
      services: [
        {
          icon: Megaphone,
          title: "Marketing Campaigns",
          description: "Plan and execute campaigns that deliver real ROI",
        },
        {
          icon: PenTool,
          title: "Creative Content",
          description: "Craft engaging copy that connects with your audience",
        },
        {
          icon: Palette,
          title: "Branding & Design",
          description: "Create visual identities that leave a lasting impression",
        },
        {
          icon: Users,
          title: "Social Media",
          description: "Build genuine connections through strategic content",
        },
        {
          icon: Search,
          title: "SEO",
          description: "Boost your visibility on Google — no ads needed",
        }
      ]
    },
    ar: {
      title: "خدماتنا",
      services: [
        {
          icon: Megaphone,
          title: "الحملات التسويقية",
          description: "نخطط وننفذ حملات تحقق عائد استثمار حقيقي",
        },
        {
          icon: PenTool,
          title: "المحتوى الإبداعي",
          description: "نصنع محتوى جذاب يتواصل مع جمهورك",
        },
        {
          icon: Palette,
          title: "العلامة التجارية والتصميم",
          description: "نصمم هويات بصرية تترك انطباعاً دائماً",
        },
        {
          icon: Users,
          title: "وسائل التواصل الاجتماعي",
          description: "نبني علاقات حقيقية من خلال المحتوى الاستراتيجي",
        },
        {
          icon: Search,
          title: "تحسين محركات البحث",
          description: "نعزز ظهورك على جوجل - بدون إعلانات",
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-gradient-subtle"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 ${language === 'ar' ? 'text-center' : 'text-center'}`}>
          <h2
            className={`font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 animate-slide-up ${
              language === 'ar' ? 'text-center' : ''
            }`}
          >
            {currentContent.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.services.map((service, index) => {
            const IconComponent = service.icon;
            // For RTL, reverse the flex direction and adjust spacing
            const isRTL = language === 'ar';
            return (
              <div
                key={index}
                className="card-premium p-8 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105 bg-white"
                    style={{ backgroundColor: "#fff" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div
                  className={`flex items-center mb-4 ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center group-hover:animate-glow transition-all duration-300 ${
                      isRTL ? 'ml-4 mr-0' : 'mr-4 ml-0'
                    }`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    className={`font-subheading text-xl text-foreground ${
                      isRTL ? 'text-right w-full' : ''
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                <p
                  className={`font-body text-muted-foreground leading-relaxed ${
                    isRTL ? 'text-right' : ''
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;