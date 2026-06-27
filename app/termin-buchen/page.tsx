import type { Metadata } from "next";
import { Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Termin Buchen – M&M Detailing Bielefeld",
  description: "Jetzt Termin für deine Fahrzeugaufbereitung anfragen. Mobil in Bielefeld & Gütersloh.",
};

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <div className="relative bg-[#111111] border-b border-white/10 py-20 px-4 sm:px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-[#C9A84C] text-sm font-semibold tracking-widest uppercase mb-4">
            Termin anfragen
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Jetzt Termin buchen</h1>
          <p className="text-gray-400 text-lg">
            Fülle das Formular aus — wir melden uns schnell zurück und kommen direkt zu dir.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C9A84C]/50 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                    placeholder="Max"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C9A84C]/50 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                    placeholder="Mustermann"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C9A84C]/50 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  placeholder="max@example.de"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C9A84C]/50 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  placeholder="+49 151 234567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Gewünschte Leistung *
                </label>
                <select
                  required
                  className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C9A84C]/50 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                >
                  <option value="">Bitte wählen...</option>
                  <option>Außenaufbereitung</option>
                  <option>Innenraumaufbereitung</option>
                  <option>Komplettpaket</option>
                  <option>Verkaufsaufbereitung</option>
                  <option>Leasingrückgabe</option>
                  <option>Extras / Spezialleistungen</option>
                  <option>Für Unternehmen / Flotte</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Fahrzeug (Marke, Modell, Größe)
                </label>
                <input
                  type="text"
                  className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C9A84C]/50 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                  placeholder="z.B. VW Golf, Mittelklasse"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Wunschtermin / Anmerkungen
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C9A84C]/50 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
                  placeholder="Wann passt es dir? Gibt es besondere Wünsche oder Hinweise?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-semibold py-4 rounded-lg transition-colors text-base"
              >
                Anfrage absenden
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Pflichtfelder. Wir melden uns innerhalb von 24 Stunden bei dir.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium mb-1">E-Mail</div>
                  <a
                    href="mailto:info@mmdetailing.de"
                    className="text-gray-400 hover:text-[#C9A84C] text-sm transition-colors"
                  >
                    info@mmdetailing.de
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium mb-1">Rückmeldung</div>
                  <p className="text-gray-400 text-sm">Innerhalb von 24 Stunden</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#C9A84C] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium mb-2">Servicegebiet</div>
                  <p className="text-gray-400 text-sm">Bielefeld & Gütersloh</p>
                  <p className="text-gray-500 text-xs mt-1">Kein Aufschlag für den Hausbesuch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
