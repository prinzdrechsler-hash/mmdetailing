import Link from "next/link";

const leistungen = [
  { label: "Innenraumaufbereitung", href: "/leistungen/innenraumaufbereitung" },
  { label: "Außenaufbereitung", href: "/leistungen/aussenaufbereitung" },
  { label: "Komplettpaket", href: "/leistungen/komplettpaket" },
  { label: "Häufige Fragen", href: "/faq" },
];

const extras = [
  { label: "Geruchsentfernung", href: "/leistungen/extras#geruch" },
  { label: "Lackversiegelung", href: "/leistungen/extras#lack" },
  { label: "Lederpflege", href: "/leistungen/extras#leder" },
  { label: "Motorraumreinigung", href: "/leistungen/extras#motor" },
  { label: "Polsterreinigung", href: "/leistungen/extras#polster" },
  { label: "Tierhaarentfernung", href: "/leistungen/extras#tierhaare" },
];

const einzugsgebiete = [
  { label: "Autoaufbereitung Bielefeld", href: "/" },
  { label: "Autoaufbereitung Gütersloh", href: "/" },
];

const rechtliches = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Cookie-Richtlinie", href: "/cookie-richtlinie" },
];

function Col({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4 text-sm">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-slate-400 hover:text-[#00ADB5] text-sm transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/logo.webp" alt="M&M Detailing" className="h-9 w-auto" />
              <span className="text-white font-extrabold leading-tight">
                <span className="text-[#00ADB5]">M&M</span> Detailing
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-1">Mobiles Detailing</p>
            <p className="text-slate-400 text-sm mb-4">Bielefeld & Umgebung</p>
            <ul className="space-y-2.5">
              {leistungen.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-slate-400 hover:text-[#00ADB5] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Kontakt</h3>
            <a href="mailto:info@mmdetailing.de" className="block text-slate-400 hover:text-[#00ADB5] text-sm transition-colors mb-2">
              info@mmdetailing.de
            </a>
            <p className="text-slate-400 text-sm mb-3">Persönlich. Transparent. Sauber.</p>
            <a
              href="https://share.google/ToPGlWR1fEEmKhbBN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ADB5] hover:underline text-sm font-medium"
            >
              Google Bewertungen ansehen
            </a>
          </div>

          <Col title="Extras & Spezialleistungen" links={extras} />
          <Col title="Einzugsgebiete" links={einzugsgebiete} />
          <Col title="Rechtliches" links={rechtliches} />
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} M&M Detailing – Autoaufbereitung Bielefeld. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
