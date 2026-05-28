"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Menu, X } from "lucide-react";
import { contact } from "@/lib/data";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/team", label: "Team" },
  { href: "/open-source", label: "Open Source" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-base/70 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt="Hwang's Research"
            width={32}
            height={32}
            className="rounded-md ring-1 ring-white/10 group-hover:ring-accent/40 transition"
          />
          <span className="font-display font-semibold text-sm tracking-tight">
            Hwang&apos;s Research
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 text-sm text-text-secondary hover:border-accent/40 hover:text-accent transition-all"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-text-secondary"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/[0.06] bg-bg-base/95 backdrop-blur-xl">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-text-secondary hover:text-text-primary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 py-2 text-sm text-text-secondary hover:text-accent"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
