import type { Metadata } from "next";
import ServicePage from "@/components/ui/ServicePage";

export const metadata: Metadata = {
  title: "Komplettpaket Autoaufbereitung Bielefeld – M&M Detailing",
  description:
    "Komplette Innen- und Außenaufbereitung mobil in Bielefeld. Das Rundum-sorglos-Paket ab 240€.",
};

export default function Page() {
  return (
    <ServicePage
      badge="Komplettpaket"
      title="Komplettpaket"
      subtitle="Innen & Außen — das Rundum-sorglos-Paket für ganzheitliche Ergebnisse"
      description="Das Komplettpaket kombiniert unsere Innenraum- und Außenaufbereitung zu einem durchgängigen Service. Dein Fahrzeug wird von A bis Z aufbereitet — Lack, Felgen, Innenraum, Cockpit, Glas. Alles in einem Termin, alles direkt bei dir."
      prices={[
        { size: "Kleinwagen", example: "VW Polo, Ford Fiesta", price: "ab 240€" },
        { size: "Mittelklasse", example: "VW Passat, BMW 3er", price: "ab 270€" },
        { size: "Großwagen/SUV/Van", example: "BMW X5, Mercedes V-Klasse", price: "ab 300€" },
      ]}
      duration="ca. 4–6 Stunden"
      features={[
        "Komplette Außenaufbereitung",
        "Intensives Schaumbad & Handwäsche",
        "Felgen- & Radkastenreinigung",
        "Komplette Innenraumaufbereitung",
        "Tiefenreinigung, Absaugen, Cockpitpflege",
        "Lackpflege & Versiegelung",
        "Felgenservice",
        "Innen- und Außenglasreinigung",
        "Detailarbeit inklusive",
      ]}
      addons={[
        "Tierhaare entfernen",
        "Lederpflege",
        "Geruchsbeseitigung",
        "Motorraumreinigung",
        "Polsterreinigung",
      ]}
      note="* Preise variieren je nach Verschmutzungsgrad. Wir besprechen alles transparent vorab."
    />
  );
}
