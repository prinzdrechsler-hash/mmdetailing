import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – M&M Detailing",
};

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-bold mb-10">Impressum</h1>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-400">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              M&M Detailing<br />
              Bielefeld<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@mmdetailing.de" className="text-[#C9A84C] hover:underline">
                info@mmdetailing.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>M&M Detailing, Bielefeld</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Haftungsausschluss</h2>
            <h3 className="text-base font-medium text-white mb-2">Haftung für Inhalte</h3>
            <p className="text-sm leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
              keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
              für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
