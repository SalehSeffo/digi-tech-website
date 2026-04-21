import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function ContactPage({ language, onLanguageChange }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const t = language === 'de' ? {
    heading: 'Kontaktieren Sie uns',
    subheading: 'Haben Sie Fragen? Unser Team hilft Ihnen gerne.',
    contactInfo: [
      {
        icon: Mail,
        title: 'Email',
        content: 'kontakt@degi-tech.de',
        link: 'mailto:kontakt@degi-tech.de',
      },
      {
        icon: Phone,
        title: 'Telefon',
        content: '+49 30 1234 5678',
        link: 'tel:+493012345678',
      },
      {
        icon: MapPin,
        title: 'Adresse',
        content: 'Musterstraße 123\n10115 Berlin\nDeutschland',
      },
    ],
    form: {
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      message: 'Nachricht',
      submit: 'Nachricht senden',
      hours: 'Mo - Fr, 09:00 - 18:00 Uhr (CET)',
    },
  } : {
    heading: 'Contact Us',
    subheading: 'Have questions? Our team is here to help.',
    contactInfo: [
      {
        icon: Mail,
        title: 'Email',
        content: 'contact@degi-tech.de',
        link: 'mailto:contact@degi-tech.de',
      },
      {
        icon: Phone,
        title: 'Phone',
        content: '+49 30 1234 5678',
        link: 'tel:+493012345678',
      },
      {
        icon: MapPin,
        title: 'Address',
        content: 'Sample Street 123\n10115 Berlin\nGermany',
      },
    ],
    form: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Message',
      submit: 'Send Message',
      hours: 'Mon - Fri, 09:00 - 18:00 (CET)',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={onLanguageChange} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#FBF7F2] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3E50] mb-4">{t.heading}</h1>
          <p className="text-xl text-gray-600">{t.subheading}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#2D3E50] mb-8">
              {language === 'de' ? 'Kontaktinformationen' : 'Contact Information'}
            </h2>

            <div className="space-y-8">
              {t.contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index}>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-[#FBF7F2] p-3 rounded-lg">
                        <IconComponent size={24} className="text-[#E8762C]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#2D3E50]">{info.title}</h3>
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[#E8762C] hover:underline ml-14"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 ml-14 whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 bg-[#FBF7F2] p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>{language === 'de' ? 'Geschäftszeiten:' : 'Business Hours:'}</strong>
              </p>
              <p className="text-gray-600 mt-2">{t.form.hours}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-[#2D3E50] mb-6">
              {language === 'de' ? 'Senden Sie uns eine Nachricht' : 'Send us a message'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#2D3E50] mb-2">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#E8762C]"
                  placeholder={t.form.name}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3E50] mb-2">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#E8762C]"
                  placeholder={t.form.email}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3E50] mb-2">
                  {t.form.phone}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#E8762C]"
                  placeholder={t.form.phone}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2D3E50] mb-2">
                  {t.form.message}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#E8762C] resize-none"
                  placeholder={t.form.message}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#E8762C] hover:bg-[#d46620] text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                {t.form.submit} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="bg-[#FBF7F2] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#2D3E50] mb-8">
            {language === 'de' ? 'Häufig gesuchte Seiten' : 'Popular Pages'}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/#" className="bg-white rounded-lg p-4 hover:border-[#E8762C] border-2 border-transparent transition">
              <p className="font-semibold text-[#2D3E50]">
                {language === 'de' ? 'Restaurantmanagement' : 'Restaurant Management'}
              </p>
            </a>
            <a href="/#" className="bg-white rounded-lg p-4 hover:border-[#E8762C] border-2 border-transparent transition">
              <p className="font-semibold text-[#2D3E50]">
                {language === 'de' ? 'Preise' : 'Pricing'}
              </p>
            </a>
            <a href="/#" className="bg-white rounded-lg p-4 hover:border-[#E8762C] border-2 border-transparent transition">
              <p className="font-semibold text-[#2D3E50]">
                {language === 'de' ? 'Kostenlos testen' : 'Free Trial'}
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
