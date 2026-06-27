import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon, TikTokIcon } from "@/components/ui/SocialIcons";

const services = [
  { label: "Innenraumaufbereitung", href: "/leistungen/innenraumaufbereitung" },
  { label: "Außenaufbereitung", href: "/leistungen/aussenaufbereitung" },
  { label: "Komplettpaket", href: "/leistungen/komplettpaket" },
  { label: "Verkaufsaufbereitung", href: "/leistungen/verkaufsaufbereitung" },
  { label: "Leasingrückgabe", href: "/leistungen/leasingrueckgabe" },
  { label: "Extras & Spezialleistungen", href: "/leistungen/extras" },
];

const specialties = [
  { label: "Geruchsbeseitigung", href: "/leistungen/extras#geruch" },
  { label: "Lackversiegelung", href: "/leistungen/extras#lack" },
  { label: "Lederpflege", href: "/leistungen/extras#leder" },
  { label: "Motorraumreinigung", href: "/leistungen/extras#motor" },
  { label: "Polsterreinigung", href: "/leistungen/extras#polster" },
  { label: "Tierhaare entfernen", href: "/leistungen/extras#tierhaare" },
];

const locations = ["Bielefeld", "Gütersloh"];

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-slate-300 mt-20">
      {/* CTA Banner */}
      <div className="border-b border-white/10 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Dein Fahrzeug verdient das{" "}
            <span className="text-[#00ADB5]">Beste</span>
          </h2>
          <p className="text-slate-400 mb-6">
            Jetzt Termin anfragen und dein Fahrzeug in neuem Glanz erstrahlen lassen.
          </p>
          <Link
            href="/termin-buchen"
            className="inline-block bg-[#00ADB5] hover:bg-[#009098] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Termin Buchen
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-xl font-extrabold mb-4">
              <span className="text-[#00ADB5]">M&M</span>{" "}
              <span className="text-white">Detailing</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professionelle, mobile Fahrzeugaufbereitung in Bielefeld & Gütersloh.
              Direkt bei dir vor Ort — ohne Aufpreis.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00ADB5] transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00ADB5] transition-colors">
                <TikTokIcon size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00ADB5] transition-colors">
                <YoutubeIcon size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00ADB5] transition-colors">
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-slate-400 hover:text-[#00ADB5] text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-white font-semibold mb-4">Spezialleistungen</h3>
            <ul className="space-y-2">
              {specialties.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-slate-400 hover:text-[#00ADB5] text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Locations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <a href="mailto:info@mmdetailing.de" className="flex items-center gap-2 text-slate-400 hover:text-[#00ADB5] text-sm transition-colors mb-6">
              <Mail size={16} />
              info@mmdetailing.de
            </a>
            <h3 className="text-white font-semibold mb-3">Einzugsgebiete</h3>
            <ul className="space-y-1">
              {locations.map((loc) => (
                <li key={loc} className="text-slate-400 text-sm">{loc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} M&M Detailing. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Datenschutz
            </Link>
            <Link href="/cookie-richtlinie" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Cookie-Richtlinie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
