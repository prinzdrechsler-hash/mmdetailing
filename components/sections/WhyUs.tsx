import { Star, Clock, Calendar, Check } from "lucide-react";

const reasons = [
  {
    Icon: Star,
    title: "Hochwertige Produkte",
    text: "Professionelle Markenprodukte für nachhaltigen Glanz und langfristigen Lackschutz.",
  },
  {
    Icon: Clock,
    title: "Individuelle Beratung",
    text: "Keine Massenabfertigung. Jede Fahrzeugaufbereitung wird individuell abgestimmt.",
  },
  {
    Icon: Calendar,
    title: "Schnelle Termine",
    text: "Flexible Terminvergabe und mobile Fahrzeugpflege direkt bei dir vor Ort.",
  },
  {
    Icon: Check,
    title: "100% Zufriedenheitsgarantie",
    text: "Nicht zufrieden? Wir kommen zurück und machen es richtig – ohne Diskussion und ohne zusätzliche Kosten.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-center text-[28px] md:text-[38px] font-bold text-[#1E2A33] mb-3 max-w-3xl mx-auto leading-tight">
          Warum M&M Detailing die richtige Wahl für deine Fahrzeugpflege in Bielefeld ist
        </h2>
        <p className="text-center text-gray-500 text-[15px] mb-14 max-w-2xl mx-auto">
          Vertrauen Sie auf Expertise, Leidenschaft und präzise Fahrzeugaufbereitung in Bielefeld.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {reasons.map((r) => {
            const Icon = r.Icon;
            return (
              <div
                key={r.title}
                className="bg-white rounded-3xl p-10 px-8 text-center"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="flex justify-center mb-5">
                  <Icon size={40} strokeWidth={1.7} className="text-[#00ADB5]" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E2A33] mb-3">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
