import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface Props { language: 'de' | 'en'; onLanguageChange: (lang: 'de' | 'en') => void; }

export function AGBPage({ language, onLanguageChange }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={onLanguageChange} />
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#03045E] mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">§ 1 Geltungsbereich</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen Degi-Tech und dem Kunden über die Nutzung des Gastly-Restaurantmanagementsystems.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">§ 2 Leistungsumfang</h2>
            <p>Degi-Tech stellt dem Kunden das Gastly-System gemäß dem gebuchten Paket (Basis, Standard oder Premium) zur Verfügung. Der Leistungsumfang ergibt sich aus der jeweils aktuellen Paketbeschreibung unter <a href="/pricing" className="text-[#0077B6] underline">degi-tech.com/pricing</a>.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">§ 3 Testphase</h2>
            <p>Alle Pakete können 3 Wochen kostenlos getestet werden. Nach Ablauf der Testphase wird das Abonnement automatisch zahlungspflichtig, sofern nicht vorher gekündigt wurde.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">§ 4 Einrichtungsgebühr</h2>
            <p>Es wird eine einmalige Einrichtungsgebühr von 900€ erhoben. Diese beinhaltet 1 Tablet, 1 Bondrucker, notwendige Hardware, Schulung und Support in der Einrichtungsphase.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">§ 5 Laufzeit und Kündigung</h2>
            <p>Das Abonnement läuft monatlich und kann jederzeit zum Ende des laufenden Monats gekündigt werden. Die Kündigung erfolgt schriftlich per Kontaktformular.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">§ 6 Preise und Zahlung</h2>
            <p>Die Preise richten sich nach dem gebuchten Paket (Basis: 49€/Monat, Standard: 95€/Monat, Premium: 130€/Monat). Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">§ 7 Haftungsbeschränkung</h2>
            <p>Degi-Tech haftet nicht für Schäden, die durch höhere Gewalt, technische Störungen Dritter oder unsachgemäße Nutzung entstehen.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#03045E] mb-2">§ 8 Anwendbares Recht</h2>
            <p>Es gilt deutsches Recht. Gerichtsstand ist Bayern, Deutschland.</p>
          </div>
          <p className="text-sm text-gray-400">Stand: Mai 2026</p>
        </div>
      </section>
      <Footer language={language} />
    </div>
  );
}
