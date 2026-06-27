import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";

export const metadata: Metadata = {
  title: "Leasingrückgabe Aufbereitung Bielefeld – M&M Detailing",
  description:
    "Leasingrückgabe-Aufbereitung in Bielefeld: Gründliche Innen- und Außenreinigung zur optischen Aufwertung vor der Rückgabe – Nachzahlungen vermeiden.",
};

export default function Page() {
  return (
    <ServiceDetail
      hero={{
        title: "Leasingrückgabe Aufbereitung Bielefeld – Fahrzeug stressfrei zurückgeben",
        subline:
          "Professionelle Leasingrückgabe-Aufbereitung in Bielefeld: Gründliche Innen- und Außenreinigung zur optischen Aufwertung vor der Fahrzeugrückgabe. Ziel ist es, Gebrauchsspuren zu minimieren und unnötige Nachzahlungen zu vermeiden.",
        bgImage: "/images/gallery/g12.jpg",
      }}
      features={[
        { icon: "💧", title: "Vorwäsche & Lackreinigung", text: "Gründliche Vorwäsche zur Entfernung von Straßenschmutz und Rückständen – wichtige Basis für eine optisch saubere Leasingrückgabe-Aufbereitung in Bielefeld." },
        { icon: "🛞", title: "Felgenreinigung", text: "Intensive Reinigung der Felgen mit Entfernung von Bremsstaub und Ablagerungen – für ein gepflegtes Gesamtbild bei der Fahrzeugrückgabe." },
        { icon: "🧼", title: "Schonende Handwäsche", text: "Materialschonende Handwäsche zur Aufwertung des äußeren Erscheinungsbildes – ideal zur Vorbereitung auf die Begutachtung." },
        { icon: "🪟", title: "Glasreinigung innen & außen", text: "Streifenfreie Reinigung aller Glasflächen für eine gepflegte und professionelle Übergabe des Leasingfahrzeugs.", highlight: true },
        { icon: "🚗", title: "Innenraum-Grundreinigung", text: "Gründliche Reinigung von Sitzen, Teppichen, Kunststoffteilen, Cockpit und Türverkleidungen – zur Minimierung sichtbarer Gebrauchsspuren bei der Leasingrückgabe." },
        { icon: "✨", title: "Detailreinigung innen", text: "Reinigung von Lüftungsschlitzen, Fugen, Schaltern und Ablagefächern – für einen sauberen Gesamteindruck bei der Fahrzeugbegutachtung." },
        { icon: "🚿", title: "Trocknung & Finish", text: "Sorgfältige Trocknung zur Vermeidung von Wasserflecken und für ein einheitliches Erscheinungsbild bei der Rückgabe." },
      ]}
      extras={{
        title: "Optional bei Leasingrückgabe sinnvoll",
        subtitle:
          "Je nach Zustand des Fahrzeugs empfehlen sich ergänzende Maßnahmen, um mögliche Nachzahlungen bei der Leasingrückgabe zu vermeiden.",
        cards: [
          { tag: "Innenraum", title: "Polsterreinigung", text: "Entfernung von Flecken und Gebrauchsspuren – sinnvoll bei sichtbarer Verschmutzung vor der Fahrzeugbewertung.", href: "/leistungen/extras#polster", image: "/images/gallery/g10.webp" },
          { tag: "Innenraum", title: "Lederreinigung & Pflege", text: "Aufbereitung von Ledersitzen bei sichtbaren Gebrauchsspuren für ein gepflegtes Erscheinungsbild bei der Begutachtung.", href: "/leistungen/extras#leder", image: "/images/gallery/g11.webp" },
          { tag: "Innenraum", title: "Tierhaarentfernung", text: "Gründliche Entfernung von Tierhaaren aus Sitzen und Teppichen – besonders relevant bei Fahrzeugen mit Haustiertransport.", href: "/leistungen/extras#tierhaare", image: "/images/gallery/g08.webp" },
          { tag: "Innenraum", title: "Geruchsentfernung", text: "Neutralisierung von Rauch- oder Tiergeruch – wichtig für eine problemlose Rückgabe.", href: "/leistungen/extras#geruch", image: "/images/gallery/g02.webp" },
          { tag: "Außenbereich", title: "Motorraumreinigung", text: "Optische Aufwertung des Motorraums für einen gepflegten Gesamteindruck bei der Begutachtung.", href: "/leistungen/extras#motor", image: "/images/gallery/g05.webp" },
          { tag: "Schutz", title: "Lackversiegelung", text: "Verbessert den optischen Eindruck des Lacks und sorgt für ein gleichmäßiges Erscheinungsbild bei der Rückgabe.", href: "/leistungen/extras#lack", image: "/images/gallery/g03.webp" },
        ],
      }}
      cta={{
        badge: "Leasing-Rückläufer",
        words: ["Rückgabe.", "Ohne Stress."],
        paragraph:
          "Kratzer, Flecken, Gebrauchsspuren – wir bereiten dein Fahrzeug so auf, dass die Rückgabe reibungslos läuft.",
      }}
    />
  );
}
