import type { Metadata } from "next";
import { site } from "@/data/site";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ebaad Akram about UI/UX, product design, and product-adjacent roles.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Best for anything real — I reply fast.",
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
    note: "Where the engineering half lives.",
  },
  {
    label: "Dev portfolio",
    value: "eakram.dev",
    href: site.devPortfolio,
    note: "The software engineering side of this same brain.",
  },
];

export default function ContactPage() {
  return (
    <div className="spotlight pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Eyebrow>Final scene</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Let&apos;s build something people actually want to use.
        </h1>
        <p className="prose-measure mt-5 text-lg leading-relaxed text-paper-dim">
          I&apos;m open to UI/UX and product design internships, product-adjacent roles, and good conversations
          about interfaces. If you&apos;ve read a case study and want the director&apos;s commentary, even better.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group block h-full rounded-2xl border border-line bg-ink-2 p-6 transition-all hover:-translate-y-0.5 hover:border-gold"
              >
                <p className="eyebrow text-muted group-hover:text-gold">{c.label}</p>
                <p className="mt-2 font-display text-lg font-semibold text-paper">{c.value}</p>
                <p className="mt-2 text-sm text-paper-dim">{c.note}</p>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href={`mailto:${site.email}?subject=Let's talk design`} external>
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
