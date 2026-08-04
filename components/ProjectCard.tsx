import Link from "next/link";
import type { CaseStudyMeta } from "@/data/caseStudies";
import CardArt from "@/components/CardArt";
import { Tag } from "@/components/ui";

const accentText: Record<CaseStudyMeta["accent"], string> = {
  gold: "text-gold",
  rose: "text-rose",
  sage: "text-sage",
  blue: "text-blue",
};

export default function ProjectCard({ study }: { study: CaseStudyMeta }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong">
      <div className="aspect-[16/9] overflow-hidden border-b border-line">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
          <CardArt slug={study.slug} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <p className={`eyebrow ${accentText[study.accent]}`}>{study.episode}</p>
          <Tag tone={study.kind === "real" ? "gold" : "outline"}>{study.status}</Tag>
        </div>
        <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight">
          <Link href={`/work/${study.slug}`} className="focus-visible:outline-none">
            {/* Stretched link covers the card */}
            <span className="absolute inset-0" aria-hidden="true" />
            {study.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-paper-dim">{study.logline}</p>
        <dl className="mt-4 space-y-1 text-xs text-muted">
          <div className="flex gap-2">
            <dt className="font-semibold uppercase tracking-wider">Role</dt>
            <dd>{study.role}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold uppercase tracking-wider">When</dt>
            <dd>{study.timeline}</dd>
          </div>
        </dl>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {study.skills.slice(0, 4).map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
        <p className="mt-5 text-sm font-semibold text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Read the case study →
        </p>
      </div>
    </article>
  );
}
