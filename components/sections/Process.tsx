const steps = [
  {
    number: "01",
    title: "Anfrage & Buchung",
    description:
      "Einfache Online-Anfrage mit schneller Rückmeldung. Wir finden zeitnah den passenden Termin für deine Fahrzeugpflege in Bielefeld.",
  },
  {
    number: "02",
    title: "Wir kommen zu dir",
    description:
      "Wir kommen zu dir. Alles was wir vor Ort benötigen, ist ein Strom- und Wasseranschluss. Den Rest bringen wir mit.",
  },
  {
    number: "03",
    title: "Wir arbeiten, du entspannst",
    description:
      "Ob Innenreinigung, Motorwäsche oder Lackversiegelung — wir arbeiten mit Präzision, während du dich entspannst.",
  },
  {
    number: "04",
    title: "Übergabe & Ergebnis",
    description:
      "Dein Fahrzeug glänzt wie neu. Gemeinsame Abnahme, Schlüsselübergabe und ein Ergebnis, das begeistert.",
  },
];

export default function Process() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]" id="ablauf">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            So läuft es ab
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Einfach, unkompliziert und direkt bei dir vor Ort — in vier Schritten zum perfekten Fahrzeug.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00ADB5]/10 flex items-center justify-center text-lg font-extrabold text-[#00ADB5] mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
