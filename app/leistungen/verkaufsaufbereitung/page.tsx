import type { Metadata } from "next";
import ServicePage from "@/components/ui/ServicePage";

export const metadata: Metadata = {
  title: "Verkaufsaufbereitung Bielefeld – M&M Detailing",
  description:
    "Professionelle Verkaufsaufbereitung für maximale Käuferattraktivität. Mobil in Bielefeld & Gütersloh.",
};

export default function Page() {
  return (
    <ServicePage
      badge="Verkaufsaufbereitung"
      title="Verkaufsaufbereitung"
      subtitle="Optische Aufwertung für maximale Käuferattraktivität"
      description="Du möchtest dein Fahrzeug verkaufen und es optimal präsentieren? Unsere Verkaufsaufbereitung sorgt dafür, dass dein Auto von seiner besten Seite glänzt — für einen höheren Verkaufspreis und einen schnelleren Verkauf. Wir bereiten Innen und Außen auf, sodass potenzielle Käufer sofort überzeugt sind."
      prices={[
        { size: "Kleinwagen", example: "VW Polo, Ford Fiesta", price: "Auf Anfrage" },
        { size: "Mittelklasse", example: "VW Passat, BMW 3er", price: "Auf Anfrage" },
        { size: "Großwagen/SUV/Van", example: "BMW X5, Mercedes V-Klasse", price: "Auf Anfrage" },
      ]}
      duration="je nach Umfang"
      features={[
        "Gründliche Außenreinigung & Lackpflege",
        "Innenraumreinigung und Auffrischung",
        "Geruchsbeseitigung bei Bedarf",
        "Detailarbeit für beste Optik",
        "Foto-optimiertes Endergebnis",
        "Individuelle Abstimmung auf dein Fahrzeug",
      ]}
      addons={[
        "Lackversiegelung",
        "Polsterreinigung",
        "Lederpflege",
        "Motorraumreinigung",
      ]}
      note="* Preis abhängig vom Fahrzeugzustand und gewünschtem Leistungsumfang. Kontaktiere uns für ein individuelles Angebot."
    />
  );
}
