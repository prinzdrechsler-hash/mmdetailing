import Link from "next/link";
import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-[#00ADB5] to-[#009098] p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Bereit für ein strahlendes Fahrzeug?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">
            Jetzt Termin anfragen — wir melden uns schnell zurück und kommen direkt zu dir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/termin-buchen"
              className="bg-white text-[#00897e] hover:bg-slate-50 font-semibold px-10 py-4 rounded-lg transition-colors"
            >
              Termin Buchen
            </Link>
            <a
              href="mailto:info@mmdetailing.de"
              className="border-2 border-white/40 hover:border-white text-white font-semibold px-10 py-4 rounded-lg transition-colors flex items-center gap-2 justify-center"
            >
              <Mail size={18} />
              info@mmdetailing.de
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
            <span>✓ Kein Aufpreis für Hausbesuch</span>
            <span>✓ Schnelle Rückmeldung</span>
            <span>✓ 100% Zufriedenheitsgarantie</span>
          </div>
        </div>
      </div>
    </section>
  );
}
