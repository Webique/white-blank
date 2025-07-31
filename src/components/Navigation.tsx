import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationProps {
  language: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

const Navigation: React.FC<NavigationProps> = ({ language, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = {
    en: [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'Who We Are' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'services', label: 'Our Services' },
      { id: 'why-us', label: 'Why Us' },
      { id: 'clients', label: 'Our Clients' },
      { id: 'contact', label: 'Contact' },
    ],
    ar: [
      { id: 'hero', label: 'الرئيسية' },
      { id: 'about', label: 'من نحن' },
      { id: 'portfolio', label: 'أعمالنا' },
      { id: 'services', label: 'خدماتنا' },
      { id: 'why-us', label: 'لماذا نحن' },
      { id: 'clients', label: 'عملاؤنا' },
      { id: 'contact', label: 'تواصل معنا' },
    ]
  };

  // Determine direction and spacing for nav links
  const isRTL = language === 'ar';

  // Helper for RTL spacing: add extra margin between portfolio/contact
  const getNavButtonStyle = (idx: number, arrLen: number, isRTL: boolean) => {
    if (!isRTL) {
      // LTR: default spacing
      return { marginRight: idx !== arrLen - 1 ? '2rem' : 0, marginLeft: 0 };
    } else {
      // RTL: uniform spacing for all except last
      return { marginLeft: idx !== arrLen - 1 ? '2rem' : 0, marginRight: 0 };
    }
  };

  // For mobile menu, similar logic but smaller margin
  const getMobileNavButtonStyle = (idx: number, arrLen: number, isRTL: boolean) => {
    if (!isRTL) {
      return { marginRight: idx !== arrLen - 1 ? '0.5rem' : 0, marginLeft: 0 };
    } else {
      return { marginLeft: idx !== arrLen - 1 ? '0.5rem' : 0, marginRight: 0 };
    }
  };
  

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo removed */}
          <div className="flex-shrink-0">
            {/* Logo removed as requested */}
          </div>

          {/* Desktop Navigation */}
          <div
  className={`hidden lg:flex items-center ${
    isRTL ? 'flex-row-reverse' : 'flex-row'
  } gap-8`}
  dir={isRTL ? 'rtl' : 'ltr'}
>

            {navItems[language].map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-body text-foreground hover:text-accent transition-colors duration-300 relative group"
                style={getNavButtonStyle(idx, navItems[language].length, isRTL)}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 bg-secondary rounded-full p-1">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded-full text-sm font-body transition-all duration-300 ${
                  language === 'en' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-3 py-1 rounded-full text-sm font-body transition-all duration-300 ${
                  language === 'ar' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                AR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div
              className={`px-2 pt-2 pb-3 space-y-1`}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {navItems[language].map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 font-body text-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-colors duration-300"
                  style={getMobileNavButtonStyle(idx, navItems[language].length, isRTL)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;