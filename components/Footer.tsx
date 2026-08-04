import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">Ebaad Akram</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            Software engineering student & product-minded designer. Ontario, Canada.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
            Designed and coded by me — this site is part of the portfolio.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <a className="text-paper-dim transition-colors hover:text-gold" href={`mailto:${site.email}`}>
                Email
              </a>
            </li>
            <li>
              <a
                className="text-paper-dim transition-colors hover:text-gold"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="text-paper-dim transition-colors hover:text-gold"
                href={site.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="text-paper-dim transition-colors hover:text-gold"
                href={site.devPortfolio}
                target="_blank"
                rel="noreferrer"
              >
                Dev portfolio
              </a>
            </li>
            <li>
              <Link className="text-paper-dim transition-colors hover:text-gold" href="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
