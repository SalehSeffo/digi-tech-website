import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface Props { language: 'de' | 'en'; onLanguageChange: (lang: 'de' | 'en') => void; }

export function DatenschutzPage({ language, onLanguageChange }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={onLanguageChange} />
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#03045E] mb-8">Datenschutzerklärung</h1>
        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">1. Datenschutz auf einen Blick</h2>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">2. Datenerfassung auf dieser Website</h2>
            <h3 className="font-semibold mt-3 mb-1">Cookies</h3>
            <p>Unsere Website verwendet Cookies. Notwendige Cookies sind technisch erforderlich und werden ohne Ihre Zustimmung gesetzt. Analyse- und Marketing-Cookies werden nur mit Ihrer ausdrücklichen Zustimmung gesetzt.</p>
            <h3 className="font-semibold mt-3 mb-1">Kontaktformular</h3>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">3. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Außerdem haben Sie das Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.</p>
            <p className="mt-2">Für Anfragen zum Datenschutz nutzen Sie bitte unser <a href="/contact" className="text-[#0077B6] underline">Kontaktformular</a>.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">4. Analyse-Tools</h2>
            <p>Mit Ihrer Einwilligung können wir Analyse-Tools (z.B. Google Analytics) einsetzen, um die Nutzung unserer Website zu analysieren. Die dabei erhobenen Daten werden anonymisiert und zur Verbesserung unseres Angebots genutzt. Sie können Ihre Einwilligung jederzeit in den Cookie-Einstellungen widerrufen.</p>
          </div>
          <p className="text-sm text-gray-400">Stand: Mai 2026</p>
        </div>
      </section>
      <Footer language={language} />
    </div>
  );
}
