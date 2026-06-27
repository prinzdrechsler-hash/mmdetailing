import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";

interface PriceRow {
  size: string;
  example: string;
  price: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  prices: PriceRow[];
  duration: string;
  features: string[];
  addons?: string[];
  note?: string;
}

export default function ServicePage({
  badge,
  title,
  subtitle,
  description,
  prices,
  duration,
  features,
  addons,
  note,
}: ServicePageProps) {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="relative bg-[#111111] border-b border-white/10 py-20 px-4 sm:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C9A84C] text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Alle Leistungen
          </Link>
          <div className="inline-block bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            {badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-400 mb-2">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Was ist dabei?</h2>
            <p className="text-gray-400 leading-relaxed mb-8">{description}</p>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-[#C9A84C]" />
                  </div>
                  <span className="text-gray-300 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            {addons && addons.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Zusatzleistungen</h3>
                <div className="flex flex-wrap gap-2">
                  {addons.map((a) => (
                    <span
                      key={a}
                      className="bg-[#1A1A1A] border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-full"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right – Pricing */}
          <div>
            <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-1">Preise</h2>
              <p className="text-gray-500 text-sm mb-6">⏱ {duration}</p>

              <div className="space-y-4 mb-6">
                {prices.map((p) => (
                  <div
                    key={p.size}
                    className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium">{p.size}</div>
                      <div className="text-xs text-gray-500">{p.example}</div>
                    </div>
                    <div className="text-[#C9A84C] font-bold whitespace-nowrap">{p.price}</div>
                  </div>
                ))}
              </div>

              {note && (
                <p className="text-xs text-gray-500 mb-6">{note}</p>
              )}

              <Link
                href="/termin-buchen"
                className="block text-center bg-[#C9A84C] hover:bg-[#E2C97E] text-black font-semibold py-3 rounded-lg transition-colors"
              >
                Jetzt Termin anfragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
