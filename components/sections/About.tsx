import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#F8F9FA] py-20 px-4 sm:px-6 lg:px-8" id="ueber-uns">
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-[485px_1fr] gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/team.webp"
            alt="Max, Mo und Robin, Gründer von M&M Detailing – mobile Autoaufbereitung in Bielefeld"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <span className="block text-[#00A8A8] text-sm font-semibold tracking-[1.5px] uppercase mb-4">
            Über uns
          </span>
          <h2 className="text-3xl md:text-[40px] leading-[1.15] font-extrabold text-slate-900 mb-6">
            Eure Experten für
            <br />
            Autoaufbereitung in Bielefeld
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Wir sind Max, Mo & Robin – drei Freunde aus der Region mit einer gemeinsamen
            Leidenschaft: Fahrzeuge durch präzises Detailing in Bielefeld auf ein neues
            Niveau zu bringen.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Was als Hobby begann, ist heute unsere Mission als mobile Autoaufbereiter. Jedes
            Fahrzeug behandeln wir bei der Innenreinigung und Lackpflege so, als wäre es
            unser eigenes.
          </p>
          <Link
            href="/ueber-uns"
            className="inline-block text-white font-semibold px-7 py-3.5 rounded-[14px] transition-opacity hover:opacity-90"
            style={{ backgroundImage: "linear-gradient(135deg, #00B4B4, #0099CC)" }}
          >
            Erfahre mehr über uns
          </Link>
        </div>
      </div>
    </section>
  );
}
