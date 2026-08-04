import type { Metadata } from "next";
import { site } from "@/data/site";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ebaad Akram about product, analysis, and interface design roles.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Best for anything real. I reply fast.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/meakram",
    href: site.linkedin,
    note: "For the professional paper trail.",
  },
  {
    label: "GitHub",
    value: "github.com/mohakramm",
    href: site.github,
    note: "Where the engineering side lives.",
  },
  {
    label: "Dev portfolio",
    value: "eakram.dev",
    href: site.devPortfolio,
    note: "My software engineering projects, written up in detail.",
  },
];

export default function ContactPage() {
  return (
    <div className="spotlight pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Eyebrow>Next stop</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s build something people actually want to use.
        </h1>
        <p className="prose-measure mt-5 text-lg leading-relaxed text-ink-soft">
          I&apos;m open to product, business analysis, and UX-adjacent roles. If the job involves turning
          messy real-world needs into something clear on a screen, I&apos;m interested. And if you&apos;ve read
          one of my field notes and want to argue with it, even better.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group block h-full rounded-2xl border border-line bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/60"
              >
                <p className="eyebrow text-muted group-hover:text-accent-deep">{c.label}</p>
                <p className="mt-2 font-display text-lg font-semibold text-ink">{c.value}</p>
                <p className="mt-2 text-sm text-ink-soft">{c.note}</p>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href={`mailto:${site.email}?subject=Let's talk`} external>
            Start the conversation
          </ButtonLink>
          <ButtonLink href={site.resumePath} variant="secondary" download>
            Download resume
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
