import type { Metadata } from "next";
import { Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Termin Buchen – M&M Detailing Bielefeld",
  description: "Jetzt Termin für deine Fahrzeugaufbereitung anfragen. Mobil in Bielefeld & Gütersloh.",
};

const inputClass =
  "w-full bg-white border border-slate-300 focus:border-[#00ADB5] focus:ring-2 focus:ring-[#00ADB5]/20 text-slate-900 rounded-lg px-4 py-3 text-sm outline-none transition-colors";

export default function Page() {
  return (
    <div className="pt-20">
      <div className="bg-[#F8FAFC] border-b border-slate-200 py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00ADB5] text-sm font-bold tracking-widest uppercase mb-4">
            Termin anfragen
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Jetzt Termin buchen</h1>
          <p className="text-slate-600 text-lg">
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">Vorname *</label>
                  <input type="text" required className={inputClass} placeholder="Max" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nachname *</label>
                  <input type="text" required className={inputClass} placeholder="Mustermann" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">E-Mail *</label>
                <input type="email" required className={inputClass} placeholder="max@example.de" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
                <input type="tel" className={inputClass} placeholder="+49 151 234567" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Gewünschte Leistung *</label>
                <select required className={inputClass}>
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
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Fahrzeug (Marke, Modell, Größe)
                </label>
                <input type="text" className={inputClass} placeholder="z.B. VW Golf, Mittelklasse" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Wunschtermin / Anmerkungen
                </label>
                <textarea
                  rows={4}
                  className={inputClass + " resize-none"}
                  placeholder="Wann passt es dir? Gibt es besondere Wünsche oder Hinweise?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00ADB5] hover:bg-[#009098] text-white font-semibold py-4 rounded-lg transition-colors text-base"
              >
                Anfrage absenden
              </button>

              <p className="text-xs text-slate-500 text-center">
                * Pflichtfelder. Wir melden uns innerhalb von 24 Stunden bei dir.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-[#00ADB5] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-slate-900 mb-1">E-Mail</div>
                  <a href="mailto:info@mmdetailing.de" className="text-slate-600 hover:text-[#00ADB5] text-sm transition-colors">
                    info@mmdetailing.de
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-[#00ADB5] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-slate-900 mb-1">Rückmeldung</div>
                  <p className="text-slate-600 text-sm">Innerhalb von 24 Stunden</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#00ADB5] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-slate-900 mb-2">Einzugsgebiet</div>
                  <p className="text-slate-600 text-sm">Bielefeld & Gütersloh</p>
                  <p className="text-slate-500 text-xs mt-1">Kein Aufpreis für den Hausbesuch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
