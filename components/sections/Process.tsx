import { CalendarCheck, MapPin, Sun, Key } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: CalendarCheck,
    title: "Anfrage & Termin",
    text: "Einfache Online-Anfrage mit schneller Rückmeldung. Wir finden zeitnah den passenden Termin für deine Fahrzeugpflege in Bielefeld.",
  },
  {
    number: "02",
    Icon: MapPin,
    title: "Vor Ort bei dir",
    text: "Wir kommen zu dir. Alles was wir vor Ort benötigen, ist ein Strom- und Wasseranschluss. Den Rest bringen wir mit.",
  },
  {
    number: "03",
    Icon: Sun,
    title: "Währenddessen",
    text: "Ob Innenreinigung, Motorwäsche oder Lackversiegelung – wir arbeiten mit Präzision, während du dich entspannst.",
  },
  {
    number: "04",
    Icon: Key,
    title: "Übergabe",
    text: "Dein Fahrzeug glänzt wie neu. Gemeinsame Abnahme, Schlüsselübergabe und ein Ergebnis, das begeistert.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8" id="ablauf">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-center text-[32px] font-bold text-slate-900 mb-2.5 leading-tight">
          In 4 einfachen Schritten zum perfekten Auto
        </h2>
        <p className="text-center text-gray-500 text-[15px] mb-12">
          Transparenz und Qualität stehen bei uns an erster Stelle.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => {
            const Icon = step.Icon;
            return (
              <div
                key={step.number}
                className="relative bg-white border border-gray-200 rounded-[18px] p-7 overflow-hidden"
                style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.06)" }}
              >
                <span className="absolute -top-2.5 right-3 text-[90px] font-extrabold text-slate-200 leading-none select-none pointer-events-none">
                  {step.number}
                </span>
                <div className="relative w-[52px] h-[52px] rounded-[14px] bg-[#E6F9FA] flex items-center justify-center mb-5 text-slate-700">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <div className="relative">
                  <p className="text-base font-bold text-slate-900 mb-2">{step.title}</p>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
