import type { Metadata } from "next";
import ServicePage from "@/components/ui/ServicePage";

export const metadata: Metadata = {
  title: "Innenraumaufbereitung Bielefeld – M&M Detailing",
  description:
    "Professionelle Innenraumaufbereitung mobil in Bielefeld & Gütersloh. Tiefenreinigung, Cockpitpflege, Glasreinigung. Ab 160€.",
};

export default function Page() {
  return (
    <ServicePage
      badge="Innenraumaufbereitung"
      title="Innenraumaufbereitung"
      subtitle="Tiefenreinigung für Sitze, Teppiche, Cockpit und alle Detailbereiche"
      description="Unsere Innenraumaufbereitung sorgt für einen frischen, sauberen und gepflegten Fahrzeuginnenraum. Wir reinigen gründlich und schonend — von den Sitzen über die Teppiche bis hin zu schwer erreichbaren Stellen. Inklusive Cockpitpflege, Innenglasreinigung und abschließendem Frischeduft."
      prices={[
        { size: "Kleinwagen", example: "VW Polo, Ford Fiesta", price: "ab 160€" },
        { size: "Mittelklasse", example: "VW Passat, BMW 3er", price: "ab 180€" },
        { size: "Großwagen/SUV/Van", example: "BMW X5, Mercedes V-Klasse", price: "ab 200€" },
      ]}
      duration="ca. 2–4 Stunden"
      features={[
        "Tiefenreinigung & Absaugen des gesamten Innenraums",
        "Sitze, Teppiche und Kofferraum",
        "Cockpit- & Kunststoffflächenreinigung",
        "Innenglasreinigung (streifenfrei)",
        "Lüftungsdüsen & Detailarbeit",
        "Kunststoffpflege für gleichmäßiges Erscheinungsbild",
        "Kofferraumreinigung inkl. Seiten und Teppich",
        "Frischeduft zum Abschluss",
      ]}
      addons={[
        "Tierhaare entfernen",
        "Polsterreinigung",
        "Lederpflege & -konditionierung",
        "Geruchsbeseitigung",
      ]}
      note="* Preise können bei starker Verschmutzung, Gerüchen, Tierhaaren oder Spezialmaterialien variieren. Der finale Preis wird vorab transparent besprochen."
    />
  );
}
