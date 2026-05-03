import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface Props { language: 'de' | 'en'; onLanguageChange: (lang: 'de' | 'en') => void; }

export function ImpressumPage({ language, onLanguageChange }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={onLanguageChange} />
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#03045E] mb-8">Impressum</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">Angaben gemäß § 5 TMG</h2>
            <p>Degi-Tech<br />Bayern, Deutschland</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">Kontakt</h2>
            <p>Für Anfragen nutzen Sie bitte unser <a href="/contact" className="text-[#0077B6] underline">Kontaktformular</a>.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)</h2>
            <p>Degi-Tech, Bayern, Deutschland</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">Haftungsausschluss</h2>
            <p>Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </div>
        </div>
      </section>
      <Footer language={language} />
    </div>
  );
}
