import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioSectionProps {
  language: 'en' | 'ar';
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ language }) => {
  const content = {
    en: {
      title: "Our Work",
      intro: "We rely on dialogue and collaboration to create effective marketing solutions — from advertising campaigns to content management and everything in between. Our goal is to turn your ideas into inspiring stories that stay in your audience's memory. With us, your brand will shine and stand out in the midst of competition.",
      projects: [
        {
          title: "Lake View",
          category: "Branding & Content",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop&crop=center"
        },
        {
          title: "Dehleez Ceramics",
          category: "Visual Identity",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=400&fit=crop&crop=center"
        },
        {
          title: "Shokz",
          category: "Marketing Campaign",
          image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=400&fit=crop&crop=center"
        },
        {
          title: "MOG",
          category: "Social Media",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop&crop=center"
        },
        {
          title: "UBC (Urban Build Concepts)",
          category: "Digital Strategy",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop&crop=center"
        },
        {
          title: "Sava Hotel",
          category: "Complete Branding",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop&crop=center"
        }
      ]
    },
    ar: {
      title: "أعمالنا",
      intro: "نعتمد على الحوار والتعاون لإنشاء حلول تسويقية فعالة - من الحملات الإعلانية إلى إدارة المحتوى وكل ما بينهما. هدفنا هو تحويل أفكارك إلى قصص ملهمة تبقى في ذاكرة جمهورك. معنا، ستتألق علامتك التجارية وتبرز وسط المنافسة.",
      projects: [
        {
          title: "ليك فيو",
          category: "العلامة التجارية والمحتوى",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop&crop=center"
        },
        {
          title: "دهليز للسيراميك",
          category: "الهوية البصرية",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=400&fit=crop&crop=center"
        },
        {
          title: "شوكز",
          category: "الحملة التسويقية",
          image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=400&fit=crop&crop=center"
        },
        {
          title: "موج",
          category: "وسائل التواصل الاجتماعي",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop&crop=center"
        },
        {
          title: "يو بي سي (مفاهيم البناء الحضري)",
          category: "الاستراتيجية الرقمية",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop&crop=center"
        },
        {
          title: "فندق سافا",
          category: "العلامة التجارية الكاملة",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop&crop=center"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 animate-slide-up ${
            language === 'ar' ? 'text-right' : ''
          }`}>
            {currentContent.title}
          </h2>
          <p className={`font-body text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-slide-up ${
            language === 'ar' ? 'text-right' : ''
          }`}>
            {currentContent.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.projects.map((project, index) => (
            <div
              key={index}
              className="card-premium overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-glow">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`font-subheading text-xl text-foreground mb-2 ${language === 'ar' ? 'text-right' : ''}`}>
                  {project.title}
                </h3>
                <p className={`font-body text-muted-foreground ${language === 'ar' ? 'text-right' : ''}`}>
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;