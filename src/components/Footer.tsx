import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

// Custom TikTok Icon Component
const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Custom Snapchat Icon Component
const SnapchatIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
);

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
              <a 
                href="https://www.tiktok.com/@whiteblank.mkt?_t=ZS-8zO2gzuHB4M&_r=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://t.snapchat.com/7n6N75ab" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
              >
                <SnapchatIcon className="w-5 h-5" />
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