import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  language: 'en' | 'ar';
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, onContactClick }) => {
  const content = {
    en: {
      headline: "FROM SPARK … TO SPOTLIGHT",
      subtext: "At White Blank, marketing isn't just advertising — it's a spark that builds everything.",
      cta: "Collab With Us"
    },
    ar: {
      headline: "من الشرارة ... إلى الأضواء",
      subtext: "في وايت بلانك، التسويق ليس مجرد إعلان - إنه الشرارة التي تبني كل شيء.",
      cta: "تعاون معنا"
    }
  };

  const currentContent = content[language];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent/25 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        
        {/* Sparkle Icons */}
        <Sparkles className="absolute top-32 left-1/4 w-8 h-8 text-accent/40 animate-pulse" />
        <Sparkles className="absolute bottom-32 right-1/4 w-6 h-6 text-accent/50 animate-pulse" style={{animationDelay: '1.5s'}} />
        <Sparkles className="absolute top-1/2 right-20 w-4 h-4 text-accent/30 animate-pulse" style={{animationDelay: '2.5s'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h1 className={`font-heading text-4xl sm:text-6xl lg:text-8xl text-white mb-6 leading-tight ${
            language === 'ar' ? 'text-right' : ''
          }`}>
            <span className="text-gradient">
              {currentContent.headline}
            </span>
          </h1>
          
          <p className={`font-body text-lg sm:text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed ${
            language === 'ar' ? 'text-right' : ''
          }`}>
            {currentContent.subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="accent" 
              size="lg"
              onClick={onContactClick}
              className="group"
            >
              {currentContent.cta}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;