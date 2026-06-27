import Link from "next/link";

export interface ServiceFeature {
  icon: string;
  title: string;
  text: string;
  highlight?: boolean;
}

export interface ExtraCard {
  tag: string;
  title: string;
  text: string;
  href: string;
  image: string;
}

export interface ServiceDetailProps {
  hero: { title: string; subline: string; bgImage: string };
  features: ServiceFeature[];
  extras: { title: string; subtitle: string; cards: ExtraCard[] };
  cta: { badge: string; words: string[]; paragraph: string };
}

export default function ServiceDetail({ hero, features, extras, cta }: ServiceDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] lg:min-h-[695px] flex items-center justify-center text-center pt-20">
        <img src={hero.bgImage} alt={hero.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/55 to-slate-900/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">{hero.title}</h1>
          <p className="text-lg text-slate-100/90 mb-8">{hero.subline}</p>
          <Link
            href="/termin-buchen"
            className="inline-block bg-[#00ADB5] hover:bg-[#009098] text-white font-semibold px-8 py-3.5 rounded-[10px] transition-colors"
          >
            Jetzt Termin anfragen
          </Link>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`bg-white rounded-[18px] p-8 text-center border ${
                f.highlight ? "border-[#00ADB5] ring-1 ring-[#00ADB5]/30" : "border-gray-200"
              }`}
            >
              <div className="text-[26px] mb-4">{f.icon}</div>
              <h3 className="text-[17px] font-semibold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extras hub */}
      <section className="bg-white pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[34px] font-extrabold text-slate-900 mb-3">
              {extras.title}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">{extras.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extras.cards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group bg-[#F9FAFB] border border-[#F1F1F1] rounded-[22px] overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#00ADB5] text-xs font-bold uppercase tracking-wide">{c.tag}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-[#1F2937] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block border border-[#00ADB5]/50 text-[#00ADB5] text-xs font-semibold tracking-[1.44px] uppercase px-3.5 py-1.5 rounded-full mb-8">
            {cta.badge}
          </div>
          <h2 className="text-4xl md:text-[44px] font-extrabold text-white mb-6 leading-tight">
            {cta.words.map((w, i) => (
              <span key={i} className={i === cta.words.length - 1 ? "text-[#00ADB5]" : ""}>
                {w}
                {i < cta.words.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <div className="w-16 h-px bg-[#00ADB5]/40 mx-auto mb-6" />
          <p className="text-[#F8F9FA]/60 text-base mb-10 max-w-xl mx-auto">{cta.paragraph}</p>
          <Link
            href="/termin-buchen"
            className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl transition-opacity hover:opacity-90"
            style={{ backgroundImage: "linear-gradient(135deg, #00B4B4, #0099CC)" }}
          >
            Jetzt Termin sichern
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
