import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cookies = () => {
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
            {isGerman ? "Cookie-Einstellungen" : "Cookie Settings"}
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            {isGerman ? (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Was sind Cookies?</h2>
                  <p className="text-muted-foreground">
                    Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie ermöglichen es der Website, Ihre Aktionen und Präferenzen (wie Login, Sprache, Schriftgröße und andere Anzeigeeinstellungen) über einen bestimmten Zeitraum zu speichern, sodass Sie diese nicht bei jedem Besuch der Website oder beim Navigieren zwischen Seiten erneut eingeben müssen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Welche Cookies verwenden wir?</h2>
                  
                  <div className="space-y-6">
                    <div className="glass rounded-lg p-6">
                      <h3 className="text-xl font-medium text-foreground mb-2">Notwendige Cookies</h3>
                      <p className="text-muted-foreground mb-4">
                        Diese Cookies sind für das Funktionieren der Website unerlässlich und können in unseren Systemen nicht abgeschaltet werden.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 text-foreground">Cookie</th>
                              <th className="text-left py-2 text-foreground">Zweck</th>
                              <th className="text-left py-2 text-foreground">Dauer</th>
                            </tr>
                          </thead>
                          <tbody className="text-muted-foreground">
                            <tr className="border-b border-border/50">
                              <td className="py-2">i18nextLng</td>
                              <td className="py-2">Spracheinstellung</td>
                              <td className="py-2">1 Jahr</td>
                            </tr>
                            <tr className="border-b border-border/50">
                              <td className="py-2">sb-*-auth-token</td>
                              <td className="py-2">Authentifizierung</td>
                              <td className="py-2">Session</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="glass rounded-lg p-6">
                      <h3 className="text-xl font-medium text-foreground mb-2">Funktionale Cookies</h3>
                      <p className="text-muted-foreground">
                        Diese Cookies ermöglichen erweiterte Funktionalität und Personalisierung. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten nutzen.
                      </p>
                    </div>

                    <div className="glass rounded-lg p-6">
                      <h3 className="text-xl font-medium text-foreground mb-2">Drittanbieter-Cookies</h3>
                      <p className="text-muted-foreground mb-4">
                        Wenn Sie unsere Terminbuchungsfunktion nutzen, werden Cookies von Calendly gesetzt:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground">
                        <li>Calendly-Cookies zur Verwaltung von Terminen</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">
                        Weitere Informationen finden Sie in der{" "}
                        <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                          Calendly-Datenschutzerklärung
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Wie können Sie Cookies verwalten?</h2>
                  <p className="text-muted-foreground mb-4">
                    Sie können Cookies über Ihre Browsereinstellungen verwalten. Die meisten Browser ermöglichen Ihnen:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Alle Cookies zu blockieren</li>
                    <li>Nur bestimmte Cookies zu akzeptieren</li>
                    <li>Cookies zu löschen, wenn Sie den Browser schließen</li>
                    <li>Im privaten/Inkognito-Modus zu surfen</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Bitte beachten Sie, dass das Blockieren aller Cookies die Funktionalität dieser Website beeinträchtigen kann.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Browser-spezifische Anleitungen</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                        Safari
                      </a>
                    </li>
                    <li>
                      <a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                        Microsoft Edge
                      </a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Ihre Einwilligung</h2>
                  <p className="text-muted-foreground">
                    Durch die weitere Nutzung unserer Website stimmen Sie der Verwendung der oben beschriebenen notwendigen Cookies zu. Für nicht-essenzielle Cookies holen wir Ihre ausdrückliche Einwilligung ein.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Kontakt</h2>
                  <p className="text-muted-foreground">
                    Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns bitte unter:{" "}
                    <a href="mailto:info@neuroquant.io" className="text-neon-cyan hover:underline">
                      info@neuroquant.io
                    </a>
                  </p>
                  <p className="text-muted-foreground mt-4">
                    Stand: {new Date().toLocaleDateString('de-DE')}
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">What are Cookies?</h2>
                  <p className="text-muted-foreground">
                    Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to remember your actions and preferences (such as login, language, font size, and other display settings) over a period of time, so you don't have to re-enter them each time you visit the site or navigate between pages.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">What Cookies Do We Use?</h2>
                  
                  <div className="space-y-6">
                    <div className="glass rounded-lg p-6">
                      <h3 className="text-xl font-medium text-foreground mb-2">Necessary Cookies</h3>
                      <p className="text-muted-foreground mb-4">
                        These cookies are essential for the website to function and cannot be switched off in our systems.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2 text-foreground">Cookie</th>
                              <th className="text-left py-2 text-foreground">Purpose</th>
                              <th className="text-left py-2 text-foreground">Duration</th>
                            </tr>
                          </thead>
                          <tbody className="text-muted-foreground">
                            <tr className="border-b border-border/50">
                              <td className="py-2">i18nextLng</td>
                              <td className="py-2">Language preference</td>
                              <td className="py-2">1 Year</td>
                            </tr>
                            <tr className="border-b border-border/50">
                              <td className="py-2">sb-*-auth-token</td>
                              <td className="py-2">Authentication</td>
                              <td className="py-2">Session</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="glass rounded-lg p-6">
                      <h3 className="text-xl font-medium text-foreground mb-2">Functional Cookies</h3>
                      <p className="text-muted-foreground">
                        These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we use on our pages.
                      </p>
                    </div>

                    <div className="glass rounded-lg p-6">
                      <h3 className="text-xl font-medium text-foreground mb-2">Third-Party Cookies</h3>
                      <p className="text-muted-foreground mb-4">
                        When you use our appointment booking feature, cookies from Calendly are set:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground">
                        <li>Calendly cookies for managing appointments</li>
                      </ul>
                      <p className="text-muted-foreground mt-4">
                        For more information, see the{" "}
                        <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                          Calendly Privacy Policy
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">How Can You Manage Cookies?</h2>
                  <p className="text-muted-foreground mb-4">
                    You can manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    <li>Block all cookies</li>
                    <li>Accept only certain cookies</li>
                    <li>Delete cookies when you close the browser</li>
                    <li>Browse in private/incognito mode</li>
                  </ul>
                  <p className="text-muted-foreground">
                    Please note that blocking all cookies may affect the functionality of this website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Browser-Specific Instructions</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                        Safari
                      </a>
                    </li>
                    <li>
                      <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                        Microsoft Edge
                      </a>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Your Consent</h2>
                  <p className="text-muted-foreground">
                    By continuing to use our website, you consent to the use of the necessary cookies described above. For non-essential cookies, we will obtain your explicit consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
                  <p className="text-muted-foreground">
                    If you have questions about our cookie policy, please contact us at:{" "}
                    <a href="mailto:info@neuroquant.io" className="text-neon-cyan hover:underline">
                      info@neuroquant.io
                    </a>
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

export default Cookies;
