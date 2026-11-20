import Link from "next/link";
import { contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="flex flex-wrap items-end justify-between gap-12">
          <div>
            <div className="font-serif text-4xl font-light tracking-tight">Hwang&apos;s Research</div>
            <div className="caps text-brass mt-3">Independent Laboratory · Est. 2025</div>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ivory/75">
            <li>
              <a href={`mailto:${contact.email}`} className="link-line hover:text-ivory">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="link-line hover:text-ivory">
                GitHub
              </a>
            </li>
            <li>
              <Link href="/contact" className="link-line hover:text-ivory">
                Collaboration
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-16 pt-6 border-t border-brass/30 text-xs text-ivory/40">
          © {new Date().getFullYear()} Hwang&apos;s Research. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
