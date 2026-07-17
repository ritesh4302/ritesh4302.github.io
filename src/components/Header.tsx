"use client";

import { useState } from "react";
import { hospital } from "@/lib/hospital";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-brand-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:bg-brand-700 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <a href="#main" className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className="grid place-items-center size-10 rounded-2xl bg-brand-600 text-white text-xl font-extrabold shrink-0"
          >
            K
          </span>
          <span className="leading-tight min-w-0">
            <span className="block font-extrabold text-brand-900 truncate">
              Kaanav Children Hospital
            </span>
            <span className="block text-xs text-brand-700">
              SuperSpeciality &middot; Vesu, Surat
            </span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-semibold text-brand-800 hover:text-brand-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href={hospital.phoneHref}
            className="rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold px-5 py-2.5"
          >
            Call {hospital.phone}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={hospital.phoneHref}
            className="rounded-full bg-brand-600 text-white font-bold px-4 py-2 text-sm"
          >
            Call now
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-2 rounded-lg text-brand-800 hover:bg-brand-50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-brand-100 bg-white px-4 py-3 flex flex-col gap-1"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 font-semibold text-brand-800 hover:bg-brand-50"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
