import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";

export const metadata: Metadata = {
  title: "Verkaufsaufbereitung Bielefeld – M&M Detailing",
  description:
    "Verkaufsaufbereitung in Bielefeld: Auto besser & schneller verkaufen. Professionelle Vorbereitung für mehr Vertrauen und höheren Verkaufspreis.",
};

export default function Page() {
  return (
    <ServiceDetail
      hero={{
        title: "Verkaufsaufbereitung in Bielefeld – Auto besser & schneller verkaufen",
        subline:
          "Ein gepflegtes Fahrzeug erzielt mehr Vertrauen, bessere Fotos und oft einen höheren Verkaufspreis. Wir bereiten Ihr Auto professionell für den Verkauf vor – gründlich, strukturiert und detailorientiert.",
        bgImage: "/images/gallery/g04.webp",
      }}
      features={[
        { icon: "🚗", title: "Außenaufbereitung", text: "Gründliche Handwäsche, Felgenreinigung und Lackpflege für einen überzeugenden Glanz." },
        { icon: "🧼", title: "Innenraumreinigung", text: "Reinigung von Sitzen, Teppichen und Kunststoffflächen für ein gepflegtes Gesamtbild." },
        { icon: "✨", title: "Detailarbeiten", text: "Reinigung von Türfalzen, Einstiegen und sichtbaren Details für einen professionellen Eindruck." },
      ]}
      extras={{
        title: "Optionale Zusatzleistungen für den Fahrzeugverkauf",
        subtitle:
          "Ergänzende Maßnahmen zur optischen Aufwertung und zur Steigerung des wahrgenommenen Fahrzeugwerts vor dem Verkauf.",
        cards: [
          { tag: "Verkauf", title: "Auto-Inseratbilder", text: "Professionelle Fahrzeugfotos für mobile.de, AutoScout24 oder Kleinanzeigen – für einen überzeugenden ersten Eindruck im Verkaufsinserat.", href: "/termin-buchen", image: "/images/gallery/g06.webp" },
          { tag: "Wertsteigerung", title: "Lackversiegelung", text: "Tiefenglanz und Abperl-Effekt sorgen für einen hochwertigen Eindruck bei Fotos und Besichtigungen.", href: "/leistungen/extras#lack", image: "/images/gallery/g03.webp" },
          { tag: "Optik", title: "Motorraumreinigung", text: "Sauberer Motorraum schafft Vertrauen und unterstreicht die Pflege des Fahrzeugs.", href: "/leistungen/extras#motor", image: "/images/gallery/g05.webp" },
          { tag: "Innenraum", title: "Polsterreinigung", text: "Entfernung von Flecken und Gebrauchsspuren für einen gepflegten Gesamteindruck bei der Besichtigung.", href: "/leistungen/extras#polster", image: "/images/gallery/g10.webp" },
          { tag: "Premium", title: "Lederreinigung & Pflege", text: "Aufwertung von Ledersitzen für einen hochwertigen und gepflegten Innenraum.", href: "/leistungen/extras#leder", image: "/images/gallery/g11.webp" },
          { tag: "Innenraum", title: "Tierhaarentfernung", text: "Gründliche Entfernung von Tierhaaren für einen neutralen und gepflegten Innenraumeindruck.", href: "/leistungen/extras#tierhaare", image: "/images/gallery/g08.webp" },
          { tag: "Frische", title: "Geruchsentfernung", text: "Neutralisierung unangenehmer Gerüche für einen positiven ersten Eindruck bei Interessenten.", href: "/leistungen/extras#geruch", image: "/images/gallery/g02.webp" },
        ],
      }}
      cta={{
        badge: "Verkaufsaufbereitung",
        words: ["Mehr Wert.", "Schneller verkauft."],
        paragraph:
          "Ein gepflegtes Auto verkauft sich besser – und zu einem höheren Preis. Wir machen es bereit für den nächsten Besitzer.",
      }}
    />
  );
}
