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
          image: "/lovable-uploads/90dcb97f-d831-4457-8f40-f073cea3b3d6.png"
        },
        {
          title: "Dehleez Ceramics",
          category: "Visual Identity",
          image: "/lovable-uploads/9ccedeb7-a51d-406f-9c13-25024c770845.png"
        },
        {
          title: "Shokz",
          category: "Marketing Campaign",
          image: "/lovable-uploads/db7d6e9c-3fac-4434-9b35-a2fbb95a9d5e.png"
        },
        {
          title: "MOG",
          category: "Social Media",
          image: "/lovable-uploads/81a3f9c9-3542-469a-abc5-a3f403200229.png"
        },
        {
          title: "UBC (Urban Build Concepts)",
          category: "Digital Strategy",
          image: "/lovable-uploads/ea04adbe-f6ad-4c95-bad5-1bcacc078a08.png"
        },
        {
          title: "Sava Hotel",
          category: "Complete Branding",
          image: "/lovable-uploads/bb938bc9-a614-4958-b82f-40b05bb3b0e0.png"
        },
        {
          title: "FLIP",
          category: "Creative Content",
          image: "/lovable-uploads/1c0e7cda-fde9-4d5c-af76-1bbeb5a7e4b1.png"
        },
        {
          title: "Shokz Social Media",
          category: "Social Media Content",
          image: "/lovable-uploads/ee1e4de3-b5da-421b-8443-0542b03b3d20.png"
        },
        {
          title: "Be You Coffee Roasters",
          category: "Product Design",
          image: "/lovable-uploads/844e20ba-5e68-44ac-a9cd-5caed9b7de8a.png"
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
          image: "/lovable-uploads/90dcb97f-d831-4457-8f40-f073cea3b3d6.png"
        },
        {
          title: "دهليز للسيراميك",
          category: "الهوية البصرية",
          image: "/lovable-uploads/9ccedeb7-a51d-406f-9c13-25024c770845.png"
        },
        {
          title: "شوكز",
          category: "الحملة التسويقية",
          image: "/lovable-uploads/db7d6e9c-3fac-4434-9b35-a2fbb95a9d5e.png"
        },
        {
          title: "موج",
          category: "وسائل التواصل الاجتماعي",
          image: "/lovable-uploads/81a3f9c9-3542-469a-abc5-a3f403200229.png"
        },
        {
          title: "يو بي سي (مفاهيم البناء الحضري)",
          category: "الاستراتيجية الرقمية",
          image: "/lovable-uploads/ea04adbe-f6ad-4c95-bad5-1bcacc078a08.png"
        },
        {
          title: "فندق سافا",
          category: "العلامة التجارية الكاملة",
          image: "/lovable-uploads/bb938bc9-a614-4958-b82f-40b05bb3b0e0.png"
        },
        {
          title: "فليب",
          category: "المحتوى الإبداعي",
          image: "/lovable-uploads/1c0e7cda-fde9-4d5c-af76-1bbeb5a7e4b1.png"
        },
        {
          title: "شوكز - وسائل التواصل",
          category: "محتوى وسائل التواصل الاجتماعي",
          image: "/lovable-uploads/ee1e4de3-b5da-421b-8443-0542b03b3d20.png"
        },
        {
          title: "محمصة بي يو للقهوة",
          category: "تصميم المنتجات",
          image: "/lovable-uploads/844e20ba-5e68-44ac-a9cd-5caed9b7de8a.png"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 animate-slide-up text-center">
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