import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Impressum = () => {
  const { i18n } = useTranslation();
  const isGerman = i18n.language === "de";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            {isGerman ? "Zurück zur Startseite" : "Back to Home"}
          </Button>
        </Link>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 lg:px-8 pb-24"
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 neon-text">
            {isGerman ? "Impressum" : "Legal Notice"}
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            {isGerman ? (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Firmeninformationen</h2>
                  <p className="text-muted-foreground">
                    NEUROQUANT LLC<br />
                    1209 Mountain Road PL NE STE N<br />
                    Albuquerque, NM 87110<br />
                    United States
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Geschäftsform</h2>
                  <p className="text-muted-foreground">
                    Limited Liability Company (LLC)<br />
                    Registriert in New Mexico, USA
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Kontakt</h2>
                  <p className="text-muted-foreground">
                    E-Mail: info@neuroquant.io
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">EU-Datenschutz (DSGVO)</h2>
                  <p className="text-muted-foreground">
                    Obwohl NEUROQUANT LLC ein US-amerikanisches Unternehmen ist, verpflichten wir uns zur Einhaltung der Europäischen Datenschutz-Grundverordnung (DSGVO) für alle Nutzer aus der Europäischen Union. Wir verarbeiten personenbezogene Daten nur auf Grundlage rechtmäßiger Zwecke und gewährleisten die Rechte der betroffenen Personen gemäß DSGVO, einschließlich:
                  </p>
                  <ul className="text-muted-foreground mt-4 space-y-2">
                    <li>• Recht auf Auskunft (Art. 15 DSGVO)</li>
                    <li>• Recht auf Berichtigung (Art. 16 DSGVO)</li>
                    <li>• Recht auf Löschung (Art. 17 DSGVO)</li>
                    <li>• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>• Widerspruchsrecht (Art. 21 DSGVO)</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Für Datenschutzanfragen kontaktieren Sie uns bitte unter:{" "}
                    <a href="mailto:info@neuroquant.io" className="text-neon-cyan hover:underline">
                      info@neuroquant.io
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">EU-Streitschlichtung</h2>
                  <p className="text-muted-foreground">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                      https://ec.europa.eu/consumers/odr/
                    </a>
                    <br /><br />
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Verbraucherstreitbeilegung</h2>
                  <p className="text-muted-foreground">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Haftung für Inhalte</h2>
                  <p className="text-muted-foreground">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                    <br /><br />
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Haftung für Links</h2>
                  <p className="text-muted-foreground">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    <br /><br />
                    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Urheberrecht</h2>
                  <p className="text-muted-foreground">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    <br /><br />
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Company Information</h2>
                  <p className="text-muted-foreground">
                    NEUROQUANT LLC<br />
                    1209 Mountain Road PL NE STE N<br />
                    Albuquerque, NM 87110<br />
                    United States
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Business Structure</h2>
                  <p className="text-muted-foreground">
                    Limited Liability Company (LLC)<br />
                    Registered in New Mexico, USA
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
                  <p className="text-muted-foreground">
                    Email: info@neuroquant.io
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">EU Data Protection (GDPR)</h2>
                  <p className="text-muted-foreground">
                    Although NEUROQUANT LLC is a US-based company, we are committed to compliance with the European General Data Protection Regulation (GDPR) for all users from the European Union. We process personal data only for legitimate purposes and ensure the rights of data subjects under GDPR, including:
                  </p>
                  <ul className="text-muted-foreground mt-4 space-y-2">
                    <li>• Right to access (Art. 15 GDPR)</li>
                    <li>• Right to rectification (Art. 16 GDPR)</li>
                    <li>• Right to erasure (Art. 17 GDPR)</li>
                    <li>• Right to data portability (Art. 20 GDPR)</li>
                    <li>• Right to object (Art. 21 GDPR)</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    For data protection inquiries, please contact us at:{" "}
                    <a href="mailto:info@neuroquant.io" className="text-neon-cyan hover:underline">
                      info@neuroquant.io
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">EU Dispute Resolution</h2>
                  <p className="text-muted-foreground">
                    The European Commission provides a platform for online dispute resolution (OS):{" "}
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                      https://ec.europa.eu/consumers/odr/
                    </a>
                    <br /><br />
                    You can find our email address above in the legal notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Consumer Dispute Resolution</h2>
                  <p className="text-muted-foreground">
                    We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Liability for Content</h2>
                  <p className="text-muted-foreground">
                    The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general laws.
                    <br /><br />
                    Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete legal violation becomes known. If we become aware of any such legal violations, we will remove this content immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Liability for Links</h2>
                  <p className="text-muted-foreground">
                    Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
                    <br /><br />
                    The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a legal violation. If we become aware of any legal violations, we will remove such links immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Copyright</h2>
                  <p className="text-muted-foreground">
                    The content and works created by the site operators on these pages are subject to copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.
                    <br /><br />
                    Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Impressum;
