import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-2/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">Ebaad Akram</p>
          <p className="mt-1 max-w-sm text-sm text-ink-soft">Software Engineering student</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <a className="text-ink-soft transition-colors hover:text-accent-deep" href={`mailto:${site.email}`}>
                Email
              </a>
            </li>
            <li>
              <a
                className="text-ink-soft transition-colors hover:text-accent-deep"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="text-ink-soft transition-colors hover:text-accent-deep"
                href={site.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="text-ink-soft transition-colors hover:text-accent-deep"
                href={site.devPortfolio}
                target="_blank"
                rel="noreferrer"
              >
                Dev portfolio
              </a>
            </li>
            <li>
              <Link className="text-ink-soft transition-colors hover:text-accent-deep" href="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
