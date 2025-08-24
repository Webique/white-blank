import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  const location = useLocation();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = {
    en: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'Who We Are' },
      { path: '/portfolio', label: 'Portfolio' },
      { path: '/services', label: 'Our Services' },
      { path: '/clients', label: 'Our Clients' },
      { path: '/contact', label: 'Contact' },
    ],
    ar: [
      { path: '/', label: 'الرئيسية' },
      { path: '/about', label: 'من نحن' },
      { path: '/portfolio', label: 'أعمالنا' },
      { path: '/services', label: 'خدماتنا' },
      { path: '/clients', label: 'عملاؤنا' },
      { path: '/contact', label: 'تواصل معنا' },
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
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-background'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/lovable-uploads/white-blank-logo.png" 
              alt="White Blank Marketing" 
              className="
                h-12 
                md:h-16 
                lg:h-20 
                xl:h-24 
                w-auto
                transition-all
                duration-300
              "
              style={{
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div
  className={`hidden lg:flex items-center ${
    isRTL ? 'flex-row-reverse' : 'flex-row'
  } gap-8`}
  dir={isRTL ? 'rtl' : 'ltr'}
>

            {navItems[language].map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm font-bold transition-colors duration-300 relative group ${
                  location.pathname === item.path ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
                style={getNavButtonStyle(idx, navItems[language].length, isRTL)}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
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
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`block w-full text-left px-3 py-2 font-body text-sm font-bold rounded-lg transition-colors duration-300 ${
                    location.pathname === item.path 
                      ? 'text-accent bg-accent/10' 
                      : 'text-foreground hover:text-accent hover:bg-accent/10'
                  }`}
                  style={getMobileNavButtonStyle(idx, navItems[language].length, isRTL)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;