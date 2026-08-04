import Link from "next/link";
import type { ReactNode } from "react";
import type { CaseStudyMeta } from "@/data/caseStudies";
import { caseStudies } from "@/data/caseStudies";
import { Eyebrow, Tag } from "@/components/ui";
import Reveal from "@/components/Reveal";

/* Shared layout pieces for every case study page. */

export function CaseHero({ study, children }: { study: CaseStudyMeta; children?: ReactNode }) {
  return (
    <header className="spotlight border-b border-line pt-32 pb-14 sm:pt-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Eyebrow>
          {study.episode} · {study.status}
        </Eyebrow>
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{study.name}</h1>
        <p className="prose-measure mt-5 text-lg leading-relaxed text-paper-dim">{study.logline}</p>

        <dl className="mt-10 grid gap-6 border-t border-line pt-8 text-sm sm:grid-cols-3">
          <div>
            <dt className="eyebrow text-muted">My role</dt>
            <dd className="mt-2 text-paper-dim">{study.role}</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted">Timeline</dt>
            <dd className="mt-2 text-paper-dim">{study.timeline}</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted">Skills</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {study.skills.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </dd>
          </div>
        </dl>
        {children}
      </div>
    </header>
  );
}

export function CaseNav({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-16 z-40 border-b border-line bg-ink/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-2 sm:px-8">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-ink-2 hover:text-gold"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function CaseSection({
  id,
  kicker,
  title,
  children,
  wide = false,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-b border-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-muted">{kicker}</p>
          <h2 id={`${id}-title`} className="font-display mt-3 text-3xl font-semibold tracking-tight">
            {title}
          </h2>
        </Reveal>
        <div className={`mt-8 ${wide ? "" : "prose-measure"} text-base leading-relaxed text-paper-dim`}>{children}</div>
      </div>
    </section>
  );
}

export function DecisionCard({
  index,
  title,
  decision,
  why,
  tradeoff,
}: {
  index: number;
  title: string;
  decision: string;
  why: string;
  tradeoff: string;
}) {
  return (
    <Reveal as="li" delay={index * 80} className="rounded-2xl border border-line bg-ink-2 p-6">
      <p className="eyebrow text-gold">Decision {String(index + 1).padStart(2, "0")}</p>
      <h3 className="font-display mt-2 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-paper-dim">{decision}</p>
      <p className="mt-3 text-sm leading-relaxed text-paper-dim">
        <span className="font-semibold text-paper">Why it matters: </span>
        {why}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        <span className="font-semibold">Trade-off: </span>
        {tradeoff}
      </p>
    </Reveal>
  );
}

export function TakeawayList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NextCase({ current }: { current: string }) {
  const idx = caseStudies.findIndex((c) => c.slug === current);
  const next = caseStudies[(idx + 1) % caseStudies.length];
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="eyebrow text-muted">Next episode</p>
      <Link
        href={`/work/${next.slug}`}
        className="group mt-3 inline-flex items-baseline gap-3 font-display text-3xl font-semibold tracking-tight text-paper transition-colors hover:text-gold"
      >
        {next.episode} · {next.title}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
