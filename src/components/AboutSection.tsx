import React from 'react';

interface AboutSectionProps {
  language: 'en' | 'ar';
}

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "Who We Are",
      text: "We blend smart strategy, creative design, and powerful content to turn ideas into real results."
    },
    ar: {
      title: "من نحن",
      text: "نمزج بين الاستراتيجية الذكية والتصميم الإبداعي والمحتوى القوي لتحويل الأفكار إلى نتائج حقيقية."
    }
  };

  const currentContent = content[language];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${language === 'ar' ? 'lg:order-2 text-right' : ''}`}>
            <div className="animate-slide-up">
              <h2
                className={`font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 ${
                  language === 'ar' ? 'text-center' : ''
                }`}
              >
                {currentContent.title}
              </h2>
              <p className="font-body text-lg sm:text-xl text-muted-foreground leading-relaxed">
                {currentContent.text}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className={`animate-slide-up ${language === 'ar' ? 'lg:order-1' : ''}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=600&fit=crop&crop=center"
                alt="About White Blank Marketing"
                className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-premium hover-lift"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-30 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;