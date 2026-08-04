import Link from "next/link";
import type { ReactNode } from "react";

/* Small shared presentational pieces used across pages. */

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow text-accent ${className}`}>{children}</p>;
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
      <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  );
}

export function Tag({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" | "outline" }) {
  const styles = {
    default: "bg-paper-2 text-ink-soft",
    accent: "bg-accent/10 text-accent-deep",
    outline: "border border-line-strong text-ink-soft",
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
    primary: "bg-accent text-paper hover:bg-accent-deep hover:-translate-y-0.5",
    secondary: "border border-line-strong text-ink hover:border-accent hover:text-accent-deep",
    ghost: "text-ink-soft hover:text-accent-deep",
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

/** Labelled frame so concept visuals are never mistaken for shipped product. */
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
    <figure className={`overflow-hidden rounded-2xl border border-line bg-card ${className}`}>
      <div className="p-5 sm:p-8">{children}</div>
      <figcaption className="border-t border-line px-5 py-3 text-xs uppercase tracking-[0.15em] text-muted">
        {label}
      </figcaption>
    </figure>
  );
}
