import type { Metadata } from "next";
import ServicePage from "@/components/ui/ServicePage";

export const metadata: Metadata = {
  title: "Außenaufbereitung Bielefeld – M&M Detailing",
  description:
    "Mobile Außenaufbereitung in Bielefeld & Gütersloh. Handwäsche, Felgenreinigung, Lackpflege. Ab 60€.",
};

export default function Page() {
  return (
    <ServicePage
      badge="Außenaufbereitung"
      title="Außenaufbereitung"
      subtitle="Schaumbad, Handwäsche, Felgenreinigung und streifenfreie Trocknung"
      description="Unsere Außenaufbereitung entfernt zuverlässig Schmutz, Ablagerungen, Insektenreste und Umweltverschmutzungen vom Lack — schonend und professionell. Mit der bewährten Zwei-Eimer-Methode und lackschützenden Produkten bringen wir deinen Wagen zum Strahlen."
      prices={[
        { size: "Kleinwagen", example: "VW Polo, Ford Fiesta", price: "ab 60€" },
        { size: "Mittelklasse", example: "VW Passat, BMW 3er", price: "ab 80€" },
        { size: "Großwagen/SUV/Van", example: "BMW X5, Mercedes V-Klasse", price: "ab 100€" },
      ]}
      duration="ca. 1–3 Stunden"
      features={[
        "Intensives Schaumbad & Vorwäsche",
        "Felgen- & Radkastenreinigung (Bremsstaubreinigung)",
        "Handwäsche mit Zwei-Eimer-Methode",
        "Außenglasreinigung (streifenfrei)",
        "Detailarbeit an Emblemen und schwer erreichbaren Stellen",
        "Schonende Trocknung ohne Wasserflecken",
      ]}
      addons={[
        "Motorraumreinigung",
        "Lackversiegelung",
      ]}
      note="* Bei stark verschmutzten Fahrzeugen können höhere Kosten entstehen. Der Preis wird vorab besprochen."
    />
  );
}
