import type { Metadata } from "next";
import ServicePage from "@/components/ui/ServicePage";

export const metadata: Metadata = {
  title: "Leasingrückgabe Aufbereitung Bielefeld – M&M Detailing",
  description:
    "Leasingrückgabe-Aufbereitung mobil in Bielefeld. Kein Stress bei der Fahrzeuginspektion. Professionelle Vorbereitung.",
};

export default function Page() {
  return (
    <ServicePage
      badge="Leasingrückgabe"
      title="Leasingrückgabe Aufbereitung"
      subtitle="Stressfrei durch die Fahrzeuginspektion beim Leasinggeber"
      description="Leasingrückgabe steht an? Wir bereiten dein Fahrzeug optimal auf die Inspektion vor und minimieren das Risiko von Nachforderungen. Innen und außen top aufbereitet, damit du beim Rückgabetermin keine böse Überraschung erlebst."
      prices={[
        { size: "Kleinwagen", example: "VW Polo, Ford Fiesta", price: "Auf Anfrage" },
        { size: "Mittelklasse", example: "VW Passat, BMW 3er", price: "Auf Anfrage" },
        { size: "Großwagen/SUV/Van", example: "BMW X5, Mercedes V-Klasse", price: "Auf Anfrage" },
      ]}
      duration="je nach Umfang"
      features={[
        "Gründliche Außenreinigung",
        "Innenraumaufbereitung",
        "Felgen- und Radkastenreinigung",
        "Glasreinigung innen & außen",
        "Beseitigung von Gerüchen",
        "Detailarbeit für beste Präsentation",
        "Abstimmung auf Leasingbedingungen",
      ]}
      addons={[
        "Lackversiegelung",
        "Polsterreinigung",
        "Geruchsbeseitigung",
        "Tierhaare entfernen",
      ]}
      note="* Wir besprechen vorab, welche Bereiche für deine Leasingrückgabe besonders relevant sind."
    />
  );
}
