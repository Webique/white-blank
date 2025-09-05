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
            ? window.innerWidth < 768 
              ? '/lovable-uploads/a1691f55-d838-44fb-a467-27b8990a44ea.png'
              : '/lovable-uploads/6aff575c-dda8-4a42-9c03-8dc2bd117d31.png'
            : window.innerWidth < 768 
              ? '/lovable-uploads/60fc95cf-0232-4989-bd32-a81883ea83d4.png'
              : '/lovable-uploads/cda50842-5586-4a10-a6bd-1b02ff6cf4e3.png'
          }
          alt={language === 'en' ? 'Contact Us - White Blank Marketing' : 'تواصل معنا - وايت بلانك للتسويق'}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default ContactImageSection;