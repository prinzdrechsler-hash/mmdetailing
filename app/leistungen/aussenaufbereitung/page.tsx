import type { Metadata } from "next";
import ServiceDetail from "@/components/ui/ServiceDetail";

export const metadata: Metadata = {
  title: "Außenaufbereitung Bielefeld – M&M Detailing",
  description:
    "Professionelle Außenwäsche, Felgenreinigung & Versiegelung – mobil direkt bei dir in Bielefeld & Gütersloh.",
};

export default function Page() {
  return (
    <ServiceDetail
      hero={{
        title: "Autoaufbereitung Außen in Bielefeld",
        subline:
          "Professionelle Außenwäsche, Felgenreinigung & Versiegelung – mobil direkt bei dir.",
        bgImage: "/images/hero.webp",
      }}
      features={[
        {
          icon: "💧",
          title: "Vorwäsche & Schaumbad",
          text: "Intensives Schaumbad und Vorwäsche lösen Schmutz, Insektenreste und Straßendreck schonend vom Lack – die perfekte Basis für eine sichere Autoaufbereitung außen in Bielefeld ohne Mikrokratzer.",
        },
        {
          icon: "🛞",
          title: "Felgen- & Radkastenreinigung",
          text: "Gezielte Reinigung von Felgen, Radkästen und Reifen – Bremsstaub, Flugrost und Straßenschmutz werden gründlich entfernt für ein sauberes Fahrzeugbild von unten bis oben.",
        },
        {
          icon: "🧼",
          title: "Sanfte Handwäsche",
          text: "Zwei-Eimer-Handwäsche mit lackschonenden Shampoos und weichen Waschhandschuhen – deutlich schonender als jede Waschanlage und ideal für professionelle Fahrzeugpflege in Bielefeld.",
        },
        {
          icon: "🪟",
          title: "Glasreinigung außen",
          text: "Streifenfreie Reinigung aller Außenscheiben für klare Sicht und ein gepflegtes Erscheinungsbild – Teil unserer umfassenden Autoreinigung in Bielefeld.",
          highlight: true,
        },
        {
          icon: "✨",
          title: "Detailarbeit außen",
          text: "Feinarbeit an Emblemen, Kanten, Grill und schwer erreichbaren Stellen für ein echtes Detailing-Ergebnis – weil bei unserem Detailing in Bielefeld kein Detail übersehen wird.",
        },
        {
          icon: "🚿",
          title: "Trocknung & Finish",
          text: "Schonende Trocknung mit weichen Tüchern und Druckluft verhindert Wasserflecken und Mikrokratzer – dein Fahrzeug verlässt uns mit einem sauberen Finish.",
        },
      ]}
      extras={{
        title: "Zusatzleistungen für die Außenaufbereitung",
        subtitle:
          "Ergänzend buchbare Leistungen für zusätzlichen Schutz und eine optische Aufwertung des Fahrzeugs.",
        cards: [
          {
            tag: "Außenbereich",
            title: "Motorraumreinigung",
            text: "Gründliche Reinigung des Motorraums zur optischen Aufwertung – sinnvoll vor Verkauf oder Rückgabe.",
            href: "/leistungen/extras#motor",
            image: "/images/gallery/g05.webp",
          },
          {
            tag: "Schutz",
            title: "Lackversiegelung",
            text: "Schutzversiegelung für den Lack zur Verbesserung der Widerstandsfähigkeit und leichteren Reinigung.",
            href: "/leistungen/extras#lack",
            image: "/images/gallery/g03.webp",
          },
        ],
      }}
      cta={{
        badge: "Außenaufbereitung",
        words: ["Glanz.", "Schutz.", "Ergebnis."],
        paragraph:
          "Von der Handwäsche bis zur Versiegelung – wir bringen deinen Lack zum Strahlen und schützen ihn langfristig.",
      }}
    />
  );
}
