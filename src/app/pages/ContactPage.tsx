import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Send, CalendarCheck, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function ContactPage({ language, onLanguageChange }: ContactPageProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const t = language === 'de' ? {
    badge: 'Kostenlose Beratung',
    heading: 'Lassen Sie sich beraten',
    subheading: 'Buchen Sie jetzt Ihren kostenlosen Beratungstermin und testen Sie Gastly 3 Wochen lang — keine Kreditkarte, keine Verpflichtung.',
    perks: [
      { icon: CalendarCheck, text: '3 Wochen kostenlos testen' },
      { icon: Clock, text: 'Antwort innerhalb von 24 Stunden' },
      { icon: CheckCircle, text: 'Persönliche Einrichtung & Schulung' },
    ],
    formTitle: 'Termin anfragen',
    name: 'Vollständiger Name',
    email: 'E-Mail-Adresse',
    phone: 'Telefonnummer (optional)',
    message: 'Ihr Restaurant & Ihre Fragen',
    messagePlaceholder: 'z.B. Wie viele Tische haben Sie? Was beschäftigt Sie aktuell am meisten?',
    submit: 'Beratungsgespräch anfragen',
    successTitle: 'Anfrage gesendet!',
    successText: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen. Wir freuen uns auf das Gespräch!',
  } : {
    badge: 'Free Consultation',
    heading: 'Book Your Free Consultation',
    subheading: 'Get a free consultation and test Gastly for 3 weeks — no credit card, no commitment.',
    perks: [
      { icon: CalendarCheck, text: '3 weeks free trial' },
      { icon: Clock, text: 'Response within 24 hours' },
      { icon: CheckCircle, text: 'Personal setup & training' },
    ],
    formTitle: 'Request an Appointment',
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number (optional)',
    message: 'Your Restaurant & Questions',
    messagePlaceholder: 'e.g. How many tables do you have? What is your biggest challenge right now?',
    submit: 'Request Consultation',
    successTitle: 'Request Sent!',
    successText: 'We will get back to you within 24 hours. Looking forward to the conversation!',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const body = new FormData();
    body.append('name', formData.name);
    body.append('email', formData.email);
    body.append('phone', formData.phone);
    body.append('message', formData.message);
    try {
      const res = await fetch('/mail.php', { method: 'POST', body });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setError(language === 'de' ? 'Fehler beim Senden. Bitte versuchen Sie es erneut.' : 'Failed to send. Please try again.');
      }
    } catch {
      setError(language === 'de' ? 'Fehler beim Senden. Bitte versuchen Sie es erneut.' : 'Failed to send. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={onLanguageChange} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#03045E] to-[#0077B6] py-20 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#00B4D8]/20 border border-[#00B4D8]/40 text-[#CAF0F8] text-sm px-4 py-1.5 rounded-full mb-6">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.heading}</h1>
          <p className="text-lg text-[#90E0EF]">{t.subheading}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {t.perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={i} className="flex items-center gap-2 text-[#CAF0F8] text-sm">
                  <Icon size={16} className="text-[#00B4D8]" />
                  {perk.text}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <CheckCircle size={64} className="text-[#0077B6] mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-[#03045E] mb-3">{t.successTitle}</h2>
              <p className="text-gray-600">{t.successText}</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border-2 border-[#CAF0F8] p-8 shadow-xl shadow-[#0077B6]/5">
              <h2 className="text-2xl font-bold text-[#03045E] mb-6">{t.formTitle}</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#03045E] mb-2">{t.name} *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#CAF0F8] rounded-xl focus:outline-none focus:border-[#00B4D8] transition-colors"
                    placeholder={t.name}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#03045E] mb-2">{t.email} *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#CAF0F8] rounded-xl focus:outline-none focus:border-[#00B4D8] transition-colors"
                    placeholder={t.email}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#03045E] mb-2">{t.phone}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#CAF0F8] rounded-xl focus:outline-none focus:border-[#00B4D8] transition-colors"
                    placeholder={t.phone}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#03045E] mb-2">{t.message} *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#CAF0F8] rounded-xl focus:outline-none focus:border-[#00B4D8] transition-colors resize-none"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#03045E] hover:bg-[#0077B6] text-white py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#0077B6]/30 hover:-translate-y-0.5"
                >
                  {t.submit} <Send size={18} />
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
