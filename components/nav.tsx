"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Every page opens on a dark band, so the bar is light-on-dark until scrolled.
  const solid = scrolled && !open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        solid ? "bg-ivory/95 backdrop-blur text-ink border-b border-ink/10" : "text-ivory"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-serif text-2xl tracking-tight">Hwang&apos;s Research</span>
          <span className={`caps hidden sm:inline ${solid ? "text-brass-deep" : "text-brass"}`}>
            Est. 2025
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`caps link-line pb-1 transition-opacity ${
                pathname.startsWith(l.href) ? "opacity-100" : "opacity-70 hover:opacity-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`caps px-5 py-2.5 border transition-colors ${
              solid
                ? "border-ink/30 hover:bg-ink hover:text-ivory"
                : "border-ivory/40 hover:bg-ivory hover:text-ink"
            }`}
          >
            Contact
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="caps lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-20 bg-ink text-ivory">
          <nav className="px-6 pt-10 flex flex-col gap-6">
            {[...navLinks, { href: "/contact", label: "Contact" }].map((l) => (
              <Link key={l.href} href={l.href} className="font-serif text-4xl font-light">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
