import Link from "next/link";

const team = [
  { name: "Max", role: "Co-Founder", initial: "M" },
  { name: "Mo", role: "Co-Founder", initial: "M" },
  { name: "Robin", role: "Co-Founder", initial: "R" },
];

const values = [
  { title: "Ehrlichkeit", text: "Wir hören zu, wir verstehen, wir liefern." },
  { title: "Zuverlässigkeit", text: "Jedes Fahrzeug behandeln wir wie unser eigenes." },
  { title: "Nachhaltigkeit", text: "Wir setzen auf umweltbewusste Reinigungslösungen." },
];

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]" id="ueber-uns">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#00ADB5] text-sm font-bold tracking-widest uppercase mb-3">
            Über uns
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Eure Experten für Autoaufbereitung in Bielefeld
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            M&M Detailing sind drei Freunde aus Bielefeld — Mo, Max und Robin. Was als
            Experiment begann (die Aufbereitung eines befreundeten Golf 4), entwickelte sich
            schnell zur professionellen Mission.
          </p>

          <div className="space-y-4 mb-8">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="w-1 rounded-full bg-[#00ADB5] shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 mb-0.5">{v.title}</div>
                  <div className="text-slate-600 text-sm">{v.text}</div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/ueber-uns"
            className="inline-block border-2 border-slate-200 hover:border-[#00ADB5] text-slate-700 hover:text-[#00ADB5] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Mehr über uns
          </Link>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-[#00ADB5]/10 flex items-center justify-center text-2xl font-extrabold text-[#00ADB5] mx-auto mb-4">
                  {member.initial}
                </div>
                <div className="font-bold text-slate-900">{member.name}</div>
                <div className="text-xs text-slate-500 mt-1">{member.role}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <blockquote className="text-slate-700 leading-relaxed italic">
              &ldquo;Wir behandeln jedes Fahrzeug so, als wäre es unser eigenes.
              Das ist kein Marketingspruch — das ist unser täglicher Anspruch.&rdquo;
            </blockquote>
            <div className="mt-4 text-sm text-slate-500">— Das M&M Detailing Team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
