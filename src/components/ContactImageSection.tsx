import React from 'react';

interface ContactImageSectionProps {
  language: 'en' | 'ar';
}

const ContactImageSection: React.FC<ContactImageSectionProps> = ({ language }) => {
  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <div className="w-full">
        <img
          src={language === 'en' 
            ? '/lovable-uploads/f2e60b26-b356-4998-8de7-41a15b7a9c80.png'
            : '/lovable-uploads/f2e60b26-b356-4998-8de7-41a15b7a9c80.png'
          }
          alt={language === 'en' ? 'Contact Us - White Blank Marketing' : 'اتصل بنا - وايت بلانك للتسويق'}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default ContactImageSection;