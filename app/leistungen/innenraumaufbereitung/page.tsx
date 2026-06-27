import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";

export const metadata: Metadata = {
  title: "Innenraumaufbereitung Bielefeld – M&M Detailing",
  description:
    "Professionelle Autoinnenreinigung in Bielefeld – saubere, gepflegte und hygienische Fahrzeuginnenräume, mobil direkt bei dir.",
};

export default function Page() {
  return (
    <ServiceDetail
      hero={{
        title: "Autoaufbereitung Bielefeld – professionelle Innenraumaufbereitung",
        subline:
          "Dein Spezialist für Autoinnenreinigung in Bielefeld. Professionelle Fahrzeugaufbereitung für saubere, gepflegte und hygienische Fahrzeuginnenräume – mobil direkt bei dir.",
        bgImage: "/images/gallery/g07.webp",
      }}
      features={[
        { icon: "🧹", title: "Tiefenreinigung & Aussaugen", text: "Gründliche Autoinnenreinigung – kompletter Innenraum, Sitze, Teppiche, Kofferraum und Zwischenräume." },
        { icon: "🧼", title: "Oberflächenreinigung & Cockpit", text: "Schonende Reinigung von Armaturen, Mittelkonsole, Türen und Ablagen – für ein gepflegtes Erscheinungsbild." },
        { icon: "🪟", title: "Glasreinigung innen", text: "Streifenfreie Reinigung aller Scheiben – für klare Sicht bei jeder Autoaufbereitung in Bielefeld.", highlight: true },
        { icon: "🧽", title: "Lüftung & Detailarbeit", text: "Reinigung von Lüftungsschlitzen, Schaltern und schwer erreichbaren Stellen – echtes Detailing Bielefeld." },
        { icon: "🛡️", title: "Kunststoffpflege & Auffrischung", text: "Auffrischung aller Kunststoffoberflächen im Fahrzeuginnenraum für ein einheitliches, sauberes Gesamtbild." },
        { icon: "📦", title: "Kofferraumreinigung", text: "Gründliche Reinigung von Teppich, Seitenverkleidungen und Mulden – Teil jeder vollständigen Innenaufbereitung." },
      ]}
      extras={{
        title: "Zusatzleistungen für die Innenaufbereitung",
        subtitle:
          "Ergänzend buchbare Leistungen für eine intensivere Innenraumreinigung und spezielle Anforderungen.",
        cards: [
          { tag: "Innenraum", title: "Tierhaarentfernung im Auto", text: "Effektive Entfernung von Tierhaaren aus Sitzen, Teppichen und Kofferraum – ideal bei starker Verschmutzung.", href: "/leistungen/extras#tierhaare", image: "/images/gallery/g08.webp" },
          { tag: "Innenraum", title: "Polsterreinigung", text: "Tiefenreinigung von Stoffpolstern zur Entfernung von Flecken und hartnäckigen Rückständen.", href: "/leistungen/extras#polster", image: "/images/gallery/g10.webp" },
          { tag: "Premium Pflege", title: "Lederreinigung & Pflege", text: "Schonende Reinigung und Pflege von Ledersitzen für ein gepflegtes Erscheinungsbild und Werterhalt.", href: "/leistungen/extras#leder", image: "/images/gallery/g11.webp" },
          { tag: "Innenraum", title: "Geruchsentfernung", text: "Gezielte Neutralisierung unangenehmer Gerüche im Fahrzeuginnenraum.", href: "/leistungen/extras#geruch", image: "/images/gallery/g02.webp" },
        ],
      }}
      cta={{
        badge: "Innenraumaufbereitung",
        words: ["Rein.", "Frisch.", "Wie neu."],
        paragraph:
          "Staub, Gerüche, eingetretener Schmutz – wir holen raus, was andere übersehen. Dein Innenraum, komplett aufbereitet.",
      }}
    />
  );
}
