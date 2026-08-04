"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/notes", label: "Field Notes" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold tracking-tight">Ebaad Akram</span>
          <span className="hidden text-[0.7rem] uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-accent-deep sm:inline">
            Product & Design
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? "bg-accent/10 text-accent-deep"
                    : "text-ink-soft hover:bg-paper-2 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
            {open ? (
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-paper px-5 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base ${
                  isActive(link.href) ? "text-accent-deep" : "text-ink-soft hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
