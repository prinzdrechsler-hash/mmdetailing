import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";

export const metadata: Metadata = {
  title: "Komplettpaket – M&M Detailing Bielefeld",
  description:
    "Komplettpaket Innen & Außen: Rundum-Pflege mit intensiver Innenreinigung, schonender Außenaufbereitung und Detailing – mobil in Bielefeld.",
};

export default function Page() {
  return (
    <ServiceDetail
      hero={{
        title: "Autoaufbereitung Bielefeld – Komplettpaket Innen & Außen",
        subline:
          "Professionelle Autoaufbereitung in Bielefeld: Rundum-Pflege für dein Fahrzeug mit intensiver Autoinnenreinigung, schonender Außenaufbereitung und hochwertigem Detailing – direkt bei dir vor Ort.",
        bgImage: "/images/gallery/g01.jpg",
      }}
      features={[
        { icon: "💧", title: "Gründliche Vorwäsche", text: "Schonende Vorwäsche, um losen Schmutz und grobe Rückstände zu entfernen – die ideale Basis für eine kratzfreie Autoaufbereitung in Bielefeld." },
        { icon: "🛞", title: "Intensive Felgenreinigung", text: "Porentiefe Felgenreinigung mit Entfernung von Bremsstaub und Rückständen – für ein stimmiges Gesamtbild bei der Fahrzeugaufbereitung Bielefeld." },
        { icon: "🧼", title: "Sanfte Handwäsche", text: "Sanfte Handwäsche mit Zwei-Eimer-Methode für ein sauberes, schonendes Lackfinish – perfekter Start für professionelles Detailing in Bielefeld." },
        { icon: "🪟", title: "Glasreinigung innen & außen", text: "Streifenfreie Reinigung aller Scheiben für klare Sicht – ein wichtiger Bestandteil jeder Autoaufbereitung in Bielefeld.", highlight: true },
        { icon: "🚗", title: "Innenraumreinigung komplett", text: "Gründliche Autoinnenreinigung: Staubsaugen des gesamten Innenraums, Reinigung von Kunststoffteilen, Cockpit, Mittelkonsole, Türverkleidungen sowie schwer erreichbaren Bereichen wie Lüftungsschlitzen und Fugen." },
        { icon: "✨", title: "Detailarbeit innen & außen", text: "Sorgfältige Reinigung von Emblemen, Schaltern, Kanten, Fugen und schwer zugänglichen Stellen – für ein ganzheitliches Detailing-Ergebnis." },
        { icon: "🚿", title: "Trocknung & Finish", text: "Schonende Trocknung mit weichen Tüchern und Druckluft verhindert Wasserflecken und sorgt für ein sauberes, einheitliches Endergebnis." },
      ]}
      extras={{
        title: "Zusatzleistungen zum Komplettpaket",
        subtitle:
          "Ergänzend buchbare Spezialleistungen für noch intensivere Pflege, zusätzlichen Schutz oder spezielle Anforderungen.",
        cards: [
          { tag: "Innenraum", title: "Tierhaarentfernung", text: "Gründliche Entfernung von Tierhaaren aus Sitzen, Teppichen und Kofferraum.", href: "/leistungen/extras#tierhaare", image: "/images/gallery/g08.webp" },
          { tag: "Innenraum", title: "Polsterreinigung", text: "Tiefenreinigung von Stoffpolstern bei Flecken und starker Verschmutzung.", href: "/leistungen/extras#polster", image: "/images/gallery/g10.webp" },
          { tag: "Premium Pflege", title: "Lederreinigung & Pflege", text: "Schonende Reinigung und Pflege von Ledersitzen für Werterhalt und Schutz.", href: "/leistungen/extras#leder", image: "/images/gallery/g11.webp" },
          { tag: "Innenraum", title: "Geruchsentfernung", text: "Gezielte Neutralisierung unangenehmer Gerüche im Fahrzeuginnenraum.", href: "/leistungen/extras#geruch", image: "/images/gallery/g02.webp" },
          { tag: "Außenbereich", title: "Motorraumreinigung", text: "Optische Aufwertung des Motorraums – ideal vor Verkauf oder Rückgabe.", href: "/leistungen/extras#motor", image: "/images/gallery/g05.webp" },
          { tag: "Schutz", title: "Lackversiegelung", text: "Schutzversiegelung für den Lack mit Tiefenglanz und Abperl-Effekt.", href: "/leistungen/extras#lack", image: "/images/gallery/g03.webp" },
        ],
      }}
      cta={{
        badge: "Innen & Außen",
        words: ["Von Kopf", "bis Fuß."],
        paragraph:
          "Innenraum und Lack – beides in einem Termin. Wir kümmern uns um alles, du lehnst dich zurück.",
      }}
    />
  );
}
