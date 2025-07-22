import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  language: 'en' | 'ar';
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const content = {
    en: {
      title: "Collab With Us!",
      subtitle: "Shoot us a line and let's see where it goes.",
      form: {
        name: "Name",
        email: "Email",
        service: "Service",
        servicePlaceholder: "Select a service",
        message: "Message",
        messagePlaceholder: "Tell us about your project...",
        submit: "Let's Create Together"
      },
      services: [
        "Marketing Campaigns",
        "Creative Content",
        "Branding & Design",
        "Social Media",
        "SEO",
        "Other"
      ],
      contact: {
        phone: "0533696905",
        email: "whiteblankmkt@gmail.com",
        location: "ABHA – ALHEZAM STREET"
      }
    },
    ar: {
      title: "تعاون معنا!",
      subtitle: "راسلنا ولنرى إلى أين يمكن أن نصل.",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        service: "الخدمة",
        servicePlaceholder: "اختر خدمة",
        message: "الرسالة",
        messagePlaceholder: "أخبرنا عن مشروعك...",
        submit: "لنبدع معاً"
      },
      services: [
        "الحملات التسويقية",
        "المحتوى الإبداعي",
        "العلامة التجارية والتصميم",
        "وسائل التواصل الاجتماعي",
        "تحسين محركات البحث",
        "أخرى"
      ],
      contact: {
        phone: "0533696905",
        email: "whiteblankmkt@gmail.com",
        location: "أبها – شارع الحزام"
      }
    }
  };

  const currentContent = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: language === 'en' ? "Error" : "خطأ",
        description: language === 'en' ? "Please fill in all required fields." : "يرجى ملء جميع الحقول المطلوبة.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: language === 'en' ? "Message Sent!" : "تم إرسال الرسالة!",
      description: language === 'en' ? "We'll get back to you soon." : "سنتواصل معك قريباً.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-slide-up ${
            language === 'ar' ? 'text-right' : ''
          }`}>
            {currentContent.title}
          </h2>
          <p className={`font-body text-lg text-muted-foreground animate-slide-up ${
            language === 'ar' ? 'text-right' : ''
          }`}>
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className={`space-y-8 ${language === 'ar' ? 'lg:order-2' : ''}`}>
            <div className="animate-slide-up">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-body text-muted-foreground text-sm">Phone</p>
                    <p className="font-subheading text-foreground">{currentContent.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-body text-muted-foreground text-sm">Email</p>
                    <p className="font-subheading text-foreground">{currentContent.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-body text-muted-foreground text-sm">Location</p>
                    <p className="font-subheading text-foreground">{currentContent.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-64 bg-muted rounded-xl overflow-hidden animate-slide-up">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-accent" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${language === 'ar' ? 'lg:order-1' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
              <div>
                <Input
                  placeholder={currentContent.form.name}
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="h-12 font-body"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder={currentContent.form.email}
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-12 font-body"
                  required
                />
              </div>

              <div>
                <Select onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="h-12 font-body">
                    <SelectValue placeholder={currentContent.form.servicePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {currentContent.services.map((service, index) => (
                      <SelectItem key={index} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  placeholder={currentContent.form.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="min-h-32 font-body resize-none"
                  required
                />
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full group">
                {currentContent.form.submit}
                <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;