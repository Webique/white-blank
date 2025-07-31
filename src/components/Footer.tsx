import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      quickLinks: "Quick Links",
      contact: "Contact",
      followUs: "Follow Us",
      copyright: "© 2024 White Blank Marketing. All rights reserved.",
      links: [
        { name: "Home", href: "#hero" },
        { name: "Who We Are", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Our Services", href: "#services" },
        { name: "Why Us", href: "#why-us" },
        { name: "Our Clients", href: "#clients" },
        { name: "Contact", href: "#contact" }
      ]
    },
    ar: {
      quickLinks: "روابط سريعة",
      contact: "تواصل معنا",
      followUs: "تابعنا",
      copyright: "© 2024 وايت بلانك للتسويق. جميع الحقوق محفوظة.",
      links: [
        { name: "الرئيسية", href: "#hero" },
        { name: "من نحن", href: "#about" },
        { name: "أعمالنا", href: "#portfolio" },
        { name: "خدماتنا", href: "#services" },
        { name: "لماذا نحن", href: "#why-us" },
        { name: "عملاؤنا", href: "#clients" },
        { name: "تواصل معنا", href: "#contact" }
      ]
    }
  };

  const currentContent = content[language];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/white-blank-logo.png" 
              alt="White Blank Marketing" 
              className="h-20 md:h-28 lg:h-32 mb-4 brightness-0 invert"
            />
            <p className={`font-body text-primary-foreground/80 text-sm leading-relaxed ${
              language === 'ar' ? 'text-right' : ''
            }`}>
              {language === 'en' 
                ? "Turning sparks into spotlights with creative marketing solutions."
                : "نحول الشرارات إلى أضواء كاشفة بحلول تسويقية إبداعية."
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-subheading text-lg mb-4 ${language === 'ar' ? 'text-right' : ''}`}>
              {currentContent.quickLinks}
            </h4>
            <ul className="space-y-2">
              {currentContent.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`font-body text-primary-foreground/80 hover:text-accent transition-colors duration-300 ${
                      language === 'ar' ? 'text-right w-full' : ''
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-subheading text-lg mb-4 ${language === 'ar' ? 'text-right' : ''}`}>
              {currentContent.contact}
            </h4>
            <div className="space-y-3">
            <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <Phone className="w-4 h-4 text-accent" />
                <span className="font-body text-primary-foreground/80 text-sm">0533696905</span>
              </div>
              <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <Mail className="w-4 h-4 text-accent" />
                <span className="font-body text-primary-foreground/80 text-sm">whiteblankmkt@gmail.com</span>
              </div>
              <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-body text-primary-foreground/80 text-sm">
                  {language === 'en' ? "ABHA – ALHEZAM STREET" : "أبها – شارع الحزام"}
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className={`font-subheading text-lg mb-4 ${language === 'ar' ? 'text-right' : ''}`}>
              {currentContent.followUs}
            </h4>
            <div className={`flex ${language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <a 
                href="https://instagram.com/whiteblank.mkt" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className={`font-body text-primary-foreground/60 text-sm text-center ${
            language === 'ar' ? 'text-right' : ''
          }`}>
            {currentContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;