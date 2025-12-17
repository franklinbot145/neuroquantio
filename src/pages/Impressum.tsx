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
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
                  <p className="text-muted-foreground">
                    Neuroquant GmbH<br />
                    [IHRE STRASSE UND HAUSNUMMER]<br />
                    [IHRE PLZ UND STADT]<br />
                    Deutschland
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Kontakt</h2>
                  <p className="text-muted-foreground">
                    Telefon: [IHRE TELEFONNUMMER]<br />
                    E-Mail: info@neuroquant.io
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Vertretungsberechtigte Person</h2>
                  <p className="text-muted-foreground">
                    Geschäftsführer: [NAME DES GESCHÄFTSFÜHRERS]
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Registereintrag</h2>
                  <p className="text-muted-foreground">
                    Eintragung im Handelsregister<br />
                    Registergericht: [AMTSGERICHT]<br />
                    Registernummer: HRB [NUMMER]
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Umsatzsteuer-ID</h2>
                  <p className="text-muted-foreground">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    DE [IHRE UST-IDNR]
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                  <p className="text-muted-foreground">
                    [NAME DES VERANTWORTLICHEN]<br />
                    [ADRESSE]
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
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                  <p className="text-muted-foreground">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Haftung für Inhalte</h2>
                  <p className="text-muted-foreground">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    <br /><br />
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Haftung für Links</h2>
                  <p className="text-muted-foreground">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                    <br /><br />
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Urheberrecht</h2>
                  <p className="text-muted-foreground">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    <br /><br />
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Information according to § 5 TMG</h2>
                  <p className="text-muted-foreground">
                    Neuroquant GmbH<br />
                    [YOUR STREET AND NUMBER]<br />
                    [YOUR POSTAL CODE AND CITY]<br />
                    Germany
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
                  <p className="text-muted-foreground">
                    Phone: [YOUR PHONE NUMBER]<br />
                    Email: info@neuroquant.io
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Authorized Representative</h2>
                  <p className="text-muted-foreground">
                    Managing Director: [NAME OF MANAGING DIRECTOR]
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Commercial Register Entry</h2>
                  <p className="text-muted-foreground">
                    Entry in the Commercial Register<br />
                    Registry Court: [LOCAL COURT]<br />
                    Registration Number: HRB [NUMBER]
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">VAT ID</h2>
                  <p className="text-muted-foreground">
                    VAT identification number according to § 27 a of the German VAT Act:<br />
                    DE [YOUR VAT ID]
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Responsible for Content</h2>
                  <p className="text-muted-foreground">
                    [NAME OF RESPONSIBLE PERSON]<br />
                    [ADDRESS]
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
                    As a service provider, we are responsible for our own content on these pages in accordance with general laws pursuant to § 7 Para.1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                    <br /><br />
                    Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the point in time at which a concrete legal violation becomes known. If we become aware of any such legal violations, we will remove this content immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Liability for Links</h2>
                  <p className="text-muted-foreground">
                    Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
                    <br /><br />
                    However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a legal violation. If we become aware of any legal violations, we will remove such links immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Copyright</h2>
                  <p className="text-muted-foreground">
                    The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
                    <br /><br />
                    Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.
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
