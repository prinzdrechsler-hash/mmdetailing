import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – M&M Detailing",
};

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-bold mb-10">Datenschutzerklärung</h1>

        <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              2. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-medium text-white mb-2">Wer ist verantwortlich?</h3>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <h3 className="font-medium text-white mb-2">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen —
              zum Beispiel durch das Ausfüllen des Kontaktformulars. Andere Daten werden
              automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z.B.
              Browser, Betriebssystem, Uhrzeit).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Kontakt</h2>
            <p>
              Bei Fragen zum Datenschutz wenden Sie sich an:{" "}
              <a href="mailto:info@mmdetailing.de" className="text-[#C9A84C] hover:underline">
                info@mmdetailing.de
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
