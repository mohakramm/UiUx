import type { Metadata } from "next";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, SectionHeading, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ebaad Akram — software engineering student at Western University and product-minded designer. Systems by training, stories by choice.",
};

const designSkills = [
  "User flows & journey mapping",
  "Wireframing & prototyping",
  "Interaction design",
  "Information architecture",
  "Usability & user acceptance testing",
  "UX writing",
  "Accessibility (WCAG-minded)",
  "Design-to-dev handoff",
];

const engineeringSkills = [
  "React / Next.js",
  "TypeScript & JavaScript",
  "Python",
  "Java",
  "Node.js & REST APIs",
  "SQL & Supabase",
  "AWS",
  "Flutter",
  "Git & agile teams",
];

const coursework = ["UX Design", "Software Design Interfaces", "Database Management", "Web Technologies", "Data Structures & Algorithms"];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Intro */}
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-start">
          <Reveal>
            <Eyebrow>About · Ontario, Canada</Eyebrow>
            <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Systems by training, stories by choice.
            </h1>
            <div className="prose-measure mt-6 space-y-4 text-base leading-relaxed text-paper-dim">
              <p>
                I&apos;m Ebaad — a software engineering student at Western University who keeps ending up in the
                design half of every project, and finally stopped pretending that&apos;s an accident.
              </p>
              <p>
                I&apos;ve always been drawn to how people behave: the decisions they make, the awkward moments they
                avoid, the tiny interactions that change everything. That&apos;s probably why I love sitcoms,
                romcoms, and product design in roughly equal measure — they&apos;re all about timing, context, and
                understanding people. A well-placed confirmation dialog and a well-placed cutaway joke are the
                same skill: knowing exactly when your audience needs a beat.
              </p>
              <p>
                The engineering background isn&apos;t a past life I&apos;m escaping; it&apos;s the thing that makes my
                design work practical. I&apos;ve built kernel schedulers, REST APIs, embedded systems, and
                production React features, so when I design a screen I can also tell you what it costs, where
                it will break, and what the API underneath should look like. I design with implementation, edge
                cases, and constraints in mind — and I can sit on either side of the handoff meeting.
              </p>
              <p>
                What I&apos;m looking for: UI/UX and product design internships and early roles — especially
                products where trust, clarity, and a bit of storytelling matter. I care about the moments where
                product design becomes human behavior: the first tap, the hesitation before a request, the
                relief of an undo.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-2xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ebaad.jpg"
                alt="Portrait of Ebaad Akram"
                width={600}
                height={450}
                className="w-full object-cover"
              />
            </figure>
            <div className="mt-6 rounded-2xl border border-line bg-ink-2 p-6 text-sm leading-relaxed text-paper-dim">
              <p className="eyebrow text-gold">Off duty</p>
              <p className="mt-3">
                Comfort rewatches, ensemble sitcoms with great timing, romcoms where the leads are competent
                adults, and the occasional anime arc that goes harder than it needs to. Strong opinions about
                bottle episodes, held loosely.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Experience snapshot */}
        <section className="mt-20" aria-labelledby="exp-title">
          <Reveal>
            <SectionHeading
              eyebrow="Previously on"
              title="Experience, briefly"
              intro="The full version is on the resume — this is the shape of it."
              id="exp-title"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                org: "Resume Inc. — Software Engineering Intern",
                when: "Summer 2024 · Toronto",
                what: "Built interactive UI for a resume builder in React; designed and shipped the version history feature that cut related support tickets by 40%.",
              },
              {
                org: "MNN Nexus — Data Analyst Intern",
                when: "Summer 2025 · Mississauga",
                what: "Turned 10,000+ rows of messy user data into behavioral segments used for targeted outreach — my crash course in what users actually do versus what we assume.",
              },
              {
                org: "Western Engineering Bots — Software Subteam Lead",
                when: "2024 – present · London, ON",
                what: "Lead an 8-person software team building a humanoid robot for national competition — equal parts systems integration and keeping humans aligned.",
              },
            ].map((e, i) => (
              <Reveal key={e.org} delay={i * 80} className="rounded-2xl border border-line bg-ink-2 p-6">
                <h3 className="font-display text-lg font-semibold">{e.org}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">{e.when}</p>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">{e.what}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-20" aria-labelledby="skills-title">
          <Reveal>
            <SectionHeading eyebrow="The toolkit" title="Skills & tools" id="skills-title" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal className="rounded-2xl border border-line bg-ink-2 p-6">
              <h3 className="font-display text-lg font-semibold text-gold">Design</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {designSkills.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="rounded-2xl border border-line bg-ink-2 p-6">
              <h3 className="font-display text-lg font-semibold text-gold">Engineering</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {engineeringSkills.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160} className="rounded-2xl border border-line bg-ink-2 p-6">
              <h3 className="font-display text-lg font-semibold text-gold">Relevant coursework</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {coursework.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                B.E.Sc. Software Engineering, Western University — expected 2027.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <Reveal className="mt-20 rounded-2xl border border-line bg-ink-2 p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The rest is better in conversation.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-paper-dim">
            Happy to walk through any case study in detail — the decisions, the trade-offs, and the parts I&apos;d
            do differently.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <ButtonLink href={`mailto:${site.email}`} external>
              Email me
            </ButtonLink>
            <ButtonLink href={site.resumePath} variant="secondary" download>
              Download resume
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
