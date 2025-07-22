import React from 'react';
import { Megaphone, PenTool, Palette, Users, Search } from 'lucide-react';

interface ServicesSectionProps {
  language: 'en' | 'ar';
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "Our Services",
      services: [
        {
          icon: Megaphone,
          title: "Marketing Campaigns",
          description: "Plan and execute campaigns that deliver real ROI",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center"
        },
        {
          icon: PenTool,
          title: "Creative Content",
          description: "Craft engaging copy that connects with your audience",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&crop=center"
        },
        {
          icon: Palette,
          title: "Branding & Design",
          description: "Create visual identities that leave a lasting impression",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center"
        },
        {
          icon: Users,
          title: "Social Media",
          description: "Build genuine connections through strategic content",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center"
        },
        {
          icon: Search,
          title: "SEO",
          description: "Boost your visibility on Google — no ads needed",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&crop=center"
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
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center"
        },
        {
          icon: PenTool,
          title: "المحتوى الإبداعي",
          description: "نصنع محتوى جذاب يتواصل مع جمهورك",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&crop=center"
        },
        {
          icon: Palette,
          title: "العلامة التجارية والتصميم",
          description: "نصمم هويات بصرية تترك انطباعاً دائماً",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=center"
        },
        {
          icon: Users,
          title: "وسائل التواصل الاجتماعي",
          description: "نبني علاقات حقيقية من خلال المحتوى الاستراتيجي",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center"
        },
        {
          icon: Search,
          title: "تحسين محركات البحث",
          description: "نعزز ظهورك على جوجل - بدون إعلانات",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&crop=center"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 animate-slide-up ${
            language === 'ar' ? 'text-right' : ''
          }`}>
            {currentContent.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="card-premium p-8 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4 group-hover:animate-glow transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-subheading text-xl text-foreground ${language === 'ar' ? 'text-right' : ''}`}>
                    {service.title}
                  </h3>
                </div>

                <p className={`font-body text-muted-foreground leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;