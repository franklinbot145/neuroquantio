import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Nutzungsbedingungen = () => {
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
            {isGerman ? "Nutzungsbedingungen" : "Terms of Service"}
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            {isGerman ? (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Geltungsbereich</h2>
                  <p className="text-muted-foreground">
                    Diese Nutzungsbedingungen gelten für die Nutzung der Website und der Dienste von Neuroquant GmbH (nachfolgend "Neuroquant", "wir" oder "uns"). Mit der Nutzung unserer Website und Dienste erklären Sie sich mit diesen Nutzungsbedingungen einverstanden.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Leistungsbeschreibung</h2>
                  <p className="text-muted-foreground">
                    Neuroquant bietet KI-basierte Lösungen und Dienstleistungen an, einschließlich:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>KI-Infrastruktur und -Integration</li>
                    <li>Sprach-KI-Bots</li>
                    <li>Chatbot-Entwicklung</li>
                    <li>KI-gestützte Webentwicklung</li>
                    <li>Content-Generierung</li>
                    <li>Performance-Marketing</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Der genaue Umfang der Leistungen wird in individuellen Verträgen mit unseren Kunden festgelegt.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Benutzerkonto</h2>
                  <p className="text-muted-foreground">
                    Für die Nutzung bestimmter Dienste ist die Erstellung eines Benutzerkontos erforderlich. Sie sind verpflichtet:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Korrekte und vollständige Informationen anzugeben</li>
                    <li>Ihre Zugangsdaten vertraulich zu behandeln</li>
                    <li>Uns unverzüglich über unbefugte Nutzung Ihres Kontos zu informieren</li>
                    <li>Die volle Verantwortung für alle Aktivitäten unter Ihrem Konto zu übernehmen</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Nutzungsrechte und -pflichten</h2>
                  <p className="text-muted-foreground mb-4">
                    Sie dürfen unsere Dienste nur für rechtmäßige Zwecke nutzen. Folgendes ist untersagt:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Verletzung von Gesetzen oder Rechten Dritter</li>
                    <li>Verbreitung von Malware oder schädlichem Code</li>
                    <li>Unbefugter Zugriff auf Systeme oder Daten</li>
                    <li>Überlastung oder Störung unserer Infrastruktur</li>
                    <li>Automatisierte Datenerfassung ohne Genehmigung</li>
                    <li>Weitergabe von Zugangsdaten an Dritte</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Geistiges Eigentum</h2>
                  <p className="text-muted-foreground">
                    Alle Inhalte, Marken, Logos und Software auf dieser Website sind Eigentum von Neuroquant oder lizenziert. Die Nutzung ist nur im Rahmen der bestimmungsgemäßen Verwendung unserer Dienste gestattet. Eine darüber hinausgehende Vervielfältigung, Verbreitung oder Bearbeitung bedarf unserer schriftlichen Zustimmung.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Haftungsbeschränkung</h2>
                  <p className="text-muted-foreground mb-4">
                    Neuroquant haftet unbeschränkt nur für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Bei leichter Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht (Kardinalpflicht) und beschränkt auf den vorhersehbaren, typischerweise eintretenden Schaden.
                  </p>
                  <p className="text-muted-foreground">
                    Eine weitergehende Haftung ist ausgeschlossen. Die vorstehenden Haftungsbeschränkungen gelten auch zugunsten unserer Erfüllungsgehilfen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Verfügbarkeit</h2>
                  <p className="text-muted-foreground">
                    Wir bemühen uns um eine hohe Verfügbarkeit unserer Dienste, können jedoch keine ununterbrochene Verfügbarkeit garantieren. Wartungsarbeiten und unvorhergesehene Störungen können zu vorübergehenden Einschränkungen führen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Kündigung</h2>
                  <p className="text-muted-foreground">
                    Sie können Ihr Benutzerkonto jederzeit kündigen. Wir behalten uns das Recht vor, Benutzerkonten bei Verstößen gegen diese Nutzungsbedingungen zu sperren oder zu löschen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Änderungen der Nutzungsbedingungen</h2>
                  <p className="text-muted-foreground">
                    Wir behalten uns vor, diese Nutzungsbedingungen jederzeit zu ändern. Über wesentliche Änderungen werden wir Sie informieren. Die fortgesetzte Nutzung unserer Dienste nach Änderungen gilt als Zustimmung zu den geänderten Bedingungen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Anwendbares Recht und Gerichtsstand</h2>
                  <p className="text-muted-foreground">
                    Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Für Streitigkeiten mit Unternehmern ist der Gerichtsstand der Sitz von Neuroquant.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. Salvatorische Klausel</h2>
                  <p className="text-muted-foreground">
                    Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Stand: {new Date().toLocaleDateString('de-DE')}
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Scope</h2>
                  <p className="text-muted-foreground">
                    These terms of service apply to the use of the website and services of Neuroquant GmbH (hereinafter "Neuroquant", "we" or "us"). By using our website and services, you agree to these terms of service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Service Description</h2>
                  <p className="text-muted-foreground">
                    Neuroquant offers AI-based solutions and services, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>AI infrastructure and integration</li>
                    <li>Voice AI bots</li>
                    <li>Chatbot development</li>
                    <li>AI-powered web development</li>
                    <li>Content generation</li>
                    <li>Performance marketing</li>
                  </ul>
                  <p className="text-muted-foreground">
                    The exact scope of services is defined in individual contracts with our customers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Account</h2>
                  <p className="text-muted-foreground">
                    Creating a user account is required for using certain services. You are obligated to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Provide correct and complete information</li>
                    <li>Keep your credentials confidential</li>
                    <li>Inform us immediately of unauthorized use of your account</li>
                    <li>Take full responsibility for all activities under your account</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Usage Rights and Obligations</h2>
                  <p className="text-muted-foreground mb-4">
                    You may only use our services for lawful purposes. The following is prohibited:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Violation of laws or third-party rights</li>
                    <li>Distribution of malware or malicious code</li>
                    <li>Unauthorized access to systems or data</li>
                    <li>Overloading or disrupting our infrastructure</li>
                    <li>Automated data collection without permission</li>
                    <li>Sharing credentials with third parties</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content, trademarks, logos, and software on this website are owned by or licensed to Neuroquant. Use is only permitted within the intended use of our services. Any reproduction, distribution, or modification beyond this requires our written consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground mb-4">
                    Neuroquant is only unlimitedly liable for intent and gross negligence as well as for damages resulting from injury to life, body, or health.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    In case of slight negligence, we are only liable for breach of a material contractual obligation (cardinal obligation) and limited to the foreseeable, typically occurring damage.
                  </p>
                  <p className="text-muted-foreground">
                    Any further liability is excluded. The above limitations of liability also apply in favor of our vicarious agents.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Availability</h2>
                  <p className="text-muted-foreground">
                    We strive for high availability of our services but cannot guarantee uninterrupted availability. Maintenance work and unforeseen disruptions may lead to temporary restrictions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Termination</h2>
                  <p className="text-muted-foreground">
                    You can terminate your user account at any time. We reserve the right to suspend or delete user accounts for violations of these terms of service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms of Service</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to change these terms of service at any time. We will inform you about significant changes. Continued use of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Applicable Law and Jurisdiction</h2>
                  <p className="text-muted-foreground">
                    The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods. For disputes with entrepreneurs, the place of jurisdiction is the registered office of Neuroquant.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. Severability Clause</h2>
                  <p className="text-muted-foreground">
                    If individual provisions of these terms of service are or become invalid, the validity of the remaining provisions remains unaffected.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Last updated: {new Date().toLocaleDateString('en-US')}
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

export default Nutzungsbedingungen;
