"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { InstagramIcon, YoutubeIcon, FacebookIcon, TikTokIcon } from "@/components/ui/SocialIcons";

const navItems = [
  { label: "Startseite", href: "/" },
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { label: "Innenraumaufbereitung", href: "/leistungen/innenraumaufbereitung" },
      { label: "Außenaufbereitung", href: "/leistungen/aussenaufbereitung" },
      { label: "Komplettpaket", href: "/leistungen/komplettpaket" },
      { label: "Verkaufsaufbereitung", href: "/leistungen/verkaufsaufbereitung" },
      { label: "Leasingrückgabe", href: "/leistungen/leasingrueckgabe" },
      { label: "Extras & Spezialleistungen", href: "/leistungen/extras" },
    ],
  },
  { label: "Galerie", href: "/galerie" },
  { label: "Über Uns", href: "/ueber-uns" },
  { label: "Für Unternehmen", href: "/fuer-unternehmen" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo.webp" alt="M&M Detailing Logo" className="h-10 w-auto" />
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight">
                <span className="text-[#00ADB5]">M&M</span>{" "}
                <span className="text-slate-900">Detailing</span>
              </span>
              <span className="block text-[11px] text-slate-500 -mt-0.5">
                Autoaufbereitung Bielefeld
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="text-sm font-medium text-slate-700 hover:text-[#00ADB5] transition-colors flex items-center gap-1">
                    {item.label}
                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:text-[#00ADB5] hover:bg-slate-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-700 hover:text-[#00ADB5] transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Social + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00ADB5] transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00ADB5] transition-colors">
                <TikTokIcon size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00ADB5] transition-colors">
                <YoutubeIcon size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00ADB5] transition-colors">
                <FacebookIcon size={18} />
              </a>
            </div>
            <Link
              href="/termin-buchen"
              className="bg-[#00ADB5] hover:bg-[#009098] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Termin Buchen
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-slate-700 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="text-slate-700 font-medium w-full text-left flex items-center justify-between"
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-sm text-slate-500 hover:text-[#00ADB5] py-1"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-[#00ADB5] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/termin-buchen"
              className="mt-2 bg-[#00ADB5] hover:bg-[#009098] text-white font-semibold px-5 py-3 rounded-lg text-center transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Termin Buchen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
