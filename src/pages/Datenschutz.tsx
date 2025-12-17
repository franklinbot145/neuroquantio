import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Datenschutz = () => {
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
            {isGerman ? "Datenschutzerklärung" : "Privacy Policy"}
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            {isGerman ? (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
                  <h3 className="text-xl font-medium text-foreground mb-2">Allgemeine Hinweise</h3>
                  <p className="text-muted-foreground">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Verantwortliche Stelle</h2>
                  <p className="text-muted-foreground">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                    Neuroquant GmbH<br />
                    [IHRE STRASSE UND HAUSNUMMER]<br />
                    [IHRE PLZ UND STADT]<br />
                    Deutschland<br /><br />
                    Telefon: [IHRE TELEFONNUMMER]<br />
                    E-Mail: info@neuroquant.io
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Datenerfassung auf dieser Website</h2>
                  
                  <h3 className="text-xl font-medium text-foreground mb-2">Server-Log-Dateien</h3>
                  <p className="text-muted-foreground mb-4">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                  </p>

                  <h3 className="text-xl font-medium text-foreground mb-2 mt-6">Kontaktformular und E-Mail-Kontakt</h3>
                  <p className="text-muted-foreground">
                    Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Benutzerkonten</h2>
                  <p className="text-muted-foreground">
                    Wenn Sie ein Benutzerkonto auf unserer Website erstellen, speichern wir folgende Daten:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>E-Mail-Adresse</li>
                    <li>Verschlüsseltes Passwort</li>
                    <li>Erstellungsdatum des Kontos</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Diese Daten werden zur Bereitstellung unserer Dienste verarbeitet (Art. 6 Abs. 1 lit. b DSGVO). Sie können Ihr Konto jederzeit löschen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Drittanbieter-Dienste</h2>
                  
                  <h3 className="text-xl font-medium text-foreground mb-2">Calendly</h3>
                  <p className="text-muted-foreground">
                    Wir nutzen Calendly zur Terminbuchung. Wenn Sie einen Termin buchen, werden Ihre Daten gemäß der Datenschutzerklärung von Calendly verarbeitet. Weitere Informationen finden Sie unter:{" "}
                    <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                      https://calendly.com/privacy
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Ihre Rechte</h2>
                  <p className="text-muted-foreground mb-4">
                    Sie haben jederzeit das Recht:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</li>
                    <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
                    <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
                    <li>Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)</li>
                    <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
                    <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
                    <li>Sich bei einer Aufsichtsbehörde zu beschweren (Art. 77 DSGVO)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Speicherdauer</h2>
                  <p className="text-muted-foreground">
                    Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Zwecke, für die sie erhoben wurden, erforderlich ist oder gesetzliche Aufbewahrungsfristen dies erfordern.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. SSL/TLS-Verschlüsselung</h2>
                  <p className="text-muted-foreground">
                    Diese Seite nutzt aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Änderungen dieser Datenschutzerklärung</h2>
                  <p className="text-muted-foreground">
                    Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen des Dienstes sowie der Datenverarbeitung anzupassen.
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Stand: {new Date().toLocaleDateString('de-DE')}
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Privacy at a Glance</h2>
                  <h3 className="text-xl font-medium text-foreground mb-2">General Information</h3>
                  <p className="text-muted-foreground">
                    The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you can be personally identified.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Data Controller</h2>
                  <p className="text-muted-foreground">
                    The data controller for data processing on this website is:<br /><br />
                    Neuroquant GmbH<br />
                    [YOUR STREET AND NUMBER]<br />
                    [YOUR POSTAL CODE AND CITY]<br />
                    Germany<br /><br />
                    Phone: [YOUR PHONE NUMBER]<br />
                    Email: info@neuroquant.io
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Collection on This Website</h2>
                  
                  <h3 className="text-xl font-medium text-foreground mb-2">Server Log Files</h3>
                  <p className="text-muted-foreground mb-4">
                    The website provider automatically collects and stores information in server log files that your browser automatically transmits to us. These are:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Browser type and version</li>
                    <li>Operating system used</li>
                    <li>Referrer URL</li>
                    <li>Hostname of the accessing computer</li>
                    <li>Time of the server request</li>
                    <li>IP address</li>
                  </ul>
                  <p className="text-muted-foreground">
                    This data is not merged with other data sources. The collection of this data is based on Art. 6 para. 1 lit. f GDPR.
                  </p>

                  <h3 className="text-xl font-medium text-foreground mb-2 mt-6">Contact Form and Email Contact</h3>
                  <p className="text-muted-foreground">
                    If you send us inquiries via contact form or email, your information including the contact details you provided will be stored for the purpose of processing the inquiry and in case of follow-up questions. We do not share this data without your consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Accounts</h2>
                  <p className="text-muted-foreground">
                    When you create a user account on our website, we store the following data:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Email address</li>
                    <li>Encrypted password</li>
                    <li>Account creation date</li>
                  </ul>
                  <p className="text-muted-foreground">
                    This data is processed to provide our services (Art. 6 para. 1 lit. b GDPR). You can delete your account at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Third-Party Services</h2>
                  
                  <h3 className="text-xl font-medium text-foreground mb-2">Calendly</h3>
                  <p className="text-muted-foreground">
                    We use Calendly for appointment scheduling. When you book an appointment, your data is processed according to Calendly's privacy policy. For more information, visit:{" "}
                    <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                      https://calendly.com/privacy
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    You have the right at any time to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Request information about your stored personal data (Art. 15 GDPR)</li>
                    <li>Request correction of inaccurate data (Art. 16 GDPR)</li>
                    <li>Request deletion of your data (Art. 17 GDPR)</li>
                    <li>Request restriction of processing (Art. 18 GDPR)</li>
                    <li>Request data portability (Art. 20 GDPR)</li>
                    <li>Object to processing (Art. 21 GDPR)</li>
                    <li>Lodge a complaint with a supervisory authority (Art. 77 GDPR)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Retention</h2>
                  <p className="text-muted-foreground">
                    We store your personal data only as long as necessary for the purposes for which it was collected or as required by statutory retention periods.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. SSL/TLS Encryption</h2>
                  <p className="text-muted-foreground">
                    This site uses SSL/TLS encryption for security reasons. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to adapt this privacy policy as needed to comply with changed legal requirements or changes to the service and data processing.
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

export default Datenschutz;
