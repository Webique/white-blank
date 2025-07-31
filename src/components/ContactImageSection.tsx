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
            : '/lovable-uploads/dcb8cec9-cd47-494a-b2f5-9a1a8df65c44.png'
          }
          alt={language === 'en' ? 'Contact Us - White Blank Marketing' : 'تواصل معنا - وايت بلانك للتسويق'}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default ContactImageSection;