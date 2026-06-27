import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#1F2937] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block border border-[#00ADB5]/50 text-[#00ADB5] text-xs font-semibold tracking-[1.44px] uppercase px-3.5 py-1.5 rounded-full mb-8">
          Bielefeld · Gütersloh
        </div>

        <h2 className="text-4xl md:text-[44px] font-extrabold text-white mb-6">
          Dein Fahrzeug verdient das <span className="text-[#00ADB5]">Beste.</span>
        </h2>

        <div className="w-16 h-px bg-[#00ADB5]/40 mx-auto mb-6" />

        <p className="text-[#F8F9FA]/60 text-base mb-10 max-w-xl mx-auto">
          Lass uns gemeinsam dein Auto zum Strahlen bringen – professionell, mobil und mit
          Liebe zum Detail.
        </p>

        <Link
          href="/termin-buchen"
          className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl transition-opacity hover:opacity-90"
          style={{ backgroundImage: "linear-gradient(135deg, #00B4B4, #0099CC)" }}
        >
          Termin vereinbaren
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
