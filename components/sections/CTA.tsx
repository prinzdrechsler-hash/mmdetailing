import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111111]">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#C9A84C]/20 via-[#1A1A1A] to-[#1A1A1A] border border-[#C9A84C]/30 p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.12)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">
              Termin anfragen
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Bereit für ein{" "}
              <span className="text-[#C9A84C]">strahlendes Fahrzeug?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Jetzt Termin anfragen — wir melden uns schnell zurück und kommen direkt zu dir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/termin-buchen"
                className="bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-semibold px-10 py-4 rounded-lg text-base transition-colors shadow-lg shadow-[#C9A84C]/20"
              >
                Termin Buchen
              </Link>
              <a
                href="mailto:info@mmdetailing.de"
                className="border border-white/20 hover:border-[#C9A84C]/50 text-white hover:text-[#C9A84C] font-semibold px-10 py-4 rounded-lg text-base transition-colors flex items-center gap-2 justify-center"
              >
                <Mail size={18} />
                info@mmdetailing.de
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                Kein Aufschlag für Hausbesuch
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                Schnelle Rückmeldung
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                100% Zufriedenheitsgarantie
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
