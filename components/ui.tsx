import Link from "next/link";
import type { ReactNode } from "react";

/* Small shared presentational pieces used across pages. */

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow text-gold ${className}`}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  id?: string;
}) {
  return (
    <div className="max-w-2xl" id={id}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-paper sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-paper-dim">{intro}</p>}
    </div>
  );
}

export function Tag({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "gold" | "outline" }) {
  const styles = {
    default: "bg-ink-3 text-paper-dim",
    gold: "bg-gold/10 text-gold",
    outline: "border border-line-strong text-paper-dim",
  }[tone];
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles}`}>{children}</span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all";
  const styles = {
    primary: "bg-gold text-ink hover:bg-gold-bright hover:-translate-y-0.5",
    secondary: "border border-line-strong text-paper hover:border-gold hover:text-gold",
    ghost: "text-paper-dim hover:text-gold",
  }[variant];

  if (external || download) {
    return (
      <a
        href={href}
        className={`${base} ${styles}`}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

/** Labelled placeholder wrapper so concept visuals are never mistaken for shipped product. */
export function ArtifactFrame({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-line bg-ink-2 ${className}`}>
      <div className="p-5 sm:p-8">{children}</div>
      <figcaption className="border-t border-line px-5 py-3 text-xs uppercase tracking-[0.15em] text-muted">
        {label}
      </figcaption>
    </figure>
  );
}
