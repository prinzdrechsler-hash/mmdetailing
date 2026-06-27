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
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="ueber-uns">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-3">
            Über uns
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Drei Typen. Ein Standard.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            M&M Detailing sind drei Freunde aus Bielefeld — Mo, Max und Robin. Was als
            Experiment begann (die Aufbereitung eines befreundeten Golf 4), entwickelte sich
            schnell zur professionellen Mission.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            Heute steht unser Team für individuelle Beratung, hochwertige Ergebnisse und
            ehrlichen Service — direkt bei dir vor Ort, in Bielefeld und Gütersloh.
          </p>

          <div className="space-y-4 mb-8">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="w-1 rounded-full bg-[#C9A84C] shrink-0" />
                <div>
                  <div className="font-semibold text-white mb-0.5">{v.title}</div>
                  <div className="text-gray-400 text-sm">{v.text}</div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/ueber-uns"
            className="inline-block border border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Mehr über uns
          </Link>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6 text-center hover:border-[#C9A84C]/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-2xl font-bold text-[#C9A84C] mx-auto mb-4">
                  {member.initial}
                </div>
                <div className="font-semibold">{member.name}</div>
                <div className="text-xs text-gray-500 mt-1">{member.role}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-6">
            <blockquote className="text-gray-300 leading-relaxed italic">
              &ldquo;Wir behandeln jedes Fahrzeug so, als wäre es unser eigenes.
              Das ist kein Marketingspruch — das ist unser täglicher Anspruch.&rdquo;
            </blockquote>
            <div className="mt-4 text-sm text-gray-500">— Das M&M Detailing Team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
