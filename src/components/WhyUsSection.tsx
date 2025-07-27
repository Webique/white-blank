import React from 'react';
import { Sparkles, Star, Zap } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface WhyUsSectionProps {
  language: 'en' | 'ar';
}

const WhyUsSection: React.FC<WhyUsSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "Why Clients Choose Us",
      text: "Clients choose us because we turn ideas into impact. With creative strategy and sharp execution, we add an unforgettable spark."
    },
    ar: {
      title: "لماذا يختارنا العملاء",
      text: "يختارنا العملاء لأننا نحول الأفكار إلى تأثير. مع الاستراتيجية الإبداعية والتنفيذ الحاد، نضيف شرارة لا تُنسى."
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h2
              className={`font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 ${
                language === 'ar' ? 'text-center' : ''
              }`}
            >
              {currentContent.title}
            </h2>
            <p
                className="font-body text-lg sm:text-xl text-muted-foreground mb-16 leading-relaxed text-center"
              >


              {currentContent.text}
            </p>
          </div>


          {/* Animated Icons */}
          <div
            className="flex justify-center items-center gap-8 lg:gap-16"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="animate-float">
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-accent rounded-full flex items-center justify-center shadow-premium">
                <Star className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
            </div>

            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-accent rounded-full flex items-center justify-center shadow-premium animate-glow">
                <Sparkles className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
              </div>
            </div>

            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-accent rounded-full flex items-center justify-center shadow-premium">
                <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;