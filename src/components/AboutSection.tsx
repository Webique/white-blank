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
    <section id="about" className="relative w-full overflow-hidden">
      <div className="w-full">
        <img
          src={language === 'en' 
            ? '/lovable-uploads/70432765-ba56-435b-8a69-ef0ce6c38132.png'
            : window.innerWidth < 768 
              ? '/lovable-uploads/df682a1b-0bc3-4ccb-8a40-b946f6efef16.png'
              : '/lovable-uploads/679c25ff-b407-4d59-a40f-77e25a0537f8.png'
          }
          alt={language === 'en' ? 'Who Are We - White Blank Marketing' : 'من نحن - وايت بلانك للتسويق'}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default AboutSection;