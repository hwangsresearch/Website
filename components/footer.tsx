import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.png"
                alt="Hwang's Research"
                width={32}
                height={32}
                className="rounded-md ring-1 ring-white/10"
              />
              <span className="font-display font-semibold text-sm">
                Hwang&apos;s Research
              </span>
            </Link>
            <p className="text-sm text-text-muted">Research Beyond Boundaries</p>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted mb-3">
              Sitemap
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-accent transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-accent transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted mb-3">
              Connect
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-wrap justify-between gap-4 text-xs text-text-muted">
          <div>© {new Date().getFullYear()} Hwang&apos;s Research. All rights reserved.</div>
          <div>Built with Next.js · Deployed on Vercel</div>
        </div>
      </div>
    </footer>
  );
}
