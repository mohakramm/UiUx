import type { Metadata } from "next";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, SectionHeading, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ebaad Akram — software engineering student at Western University working at the overlap of analysis, engineering, and interface design.",
};

const analysisSkills = [
  "Requirements & workflow mapping",
  "Data cleaning & segmentation",
  "User behavior analysis",
  "Python & Excel for analysis",
  "SQL",
  "Stakeholder communication",
  "Documentation people can read",
];

const designSkills = [
  "User flows & journey mapping",
  "Wireframing & prototyping",
  "Interaction design",
  "Information architecture",
  "UX writing",
  "Usability & user acceptance testing",
  "Accessibility (WCAG-minded)",
];

const engineeringSkills = [
  "React / Next.js",
  "TypeScript & JavaScript",
  "Python",
  "Java",
  "Node.js & REST APIs",
  "AWS",
  "Git & agile teams",
];

const coursework = ["UX Design", "Software Design Interfaces", "Database Management", "Web Technologies", "Applied Probability & Statistics"];

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
            <div className="prose-measure mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                I&apos;m Ebaad — a software engineering student at Western University, and I&apos;ll tell you the
                honest version of how I got here, because it&apos;s more interesting than the polished one.
              </p>
              <p>
                I didn&apos;t grow up sketching app screens. I got into software because I like understanding
                systems — how they work, where they break, what they cost. That took me through kernels and
                REST APIs at school, then into internships where the work was analytical: cleaning ten
                thousand rows of user data, mapping how people actually moved through a product, figuring
                out which assumptions the data politely disagreed with.
              </p>
              <p>
                Design entered sideways. At my software internship, the feature I&apos;m proudest of wasn&apos;t
                impressive engineering — it was a version history panel whose entire job was emotional:
                making people brave enough to edit their own resumes. Watching support tickets drop taught
                me something no lecture had: the interface <em>is</em> the product, and the analyst&apos;s
                question — <em>why do people do that?</em> — is also the designer&apos;s question.
              </p>
              <p>
                So that&apos;s what I am right now, honestly labelled: an engineer-analyst with real product
                instincts, UX coursework, one shipped feature I can talk about for an hour, and a growing,
                deliberate design practice — this site included. Not a decade of craft. A direction, chosen
                on purpose, with evidence.
              </p>
              <p>
                The other thing you should know: I love sitcoms, romcoms, and television generally, and I
                genuinely believe they&apos;re design education. Timing, context, knowing your audience,
                knowing when a beat needs to land and when to cut away — that&apos;s interface work with
                better lighting.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative">
              <div className="overflow-hidden rounded-2xl border border-line bg-card p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.photoPath}
                  alt="Portrait of Ebaad Akram"
                  width={600}
                  height={450}
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <figcaption className="font-hand mt-3 text-center text-xl text-ink-soft">
                somewhere between the spreadsheet and the screen
              </figcaption>
            </figure>
            <div className="mt-6 rounded-2xl border border-line bg-card p-6 text-sm leading-relaxed text-ink-soft">
              <p className="eyebrow text-accent-deep">Off duty</p>
              <p className="mt-3">
                Comfort rewatches, ensemble sitcoms with great timing, romcoms where the leads are competent
                adults, and the occasional anime arc that goes harder than it needs to. Strong opinions
                about bottle episodes, held loosely.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Skills */}
        <section className="mt-20" aria-labelledby="skills-title">
          <Reveal>
            <SectionHeading
              eyebrow="The toolkit"
              title="Three overlapping skill sets"
              intro="The overlap is the point — I can sit in the requirements meeting, the design review, and the sprint planning without changing costumes."
              id="skills-title"
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-accent-deep">Analysis</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {analysisSkills.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-accent-deep">Design</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {designSkills.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-accent-deep">Engineering</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {engineeringSkills.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Relevant coursework: {coursework.join(" · ")} — B.E.Sc. Software Engineering, Western
                University, expected 2027.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <Reveal className="mt-20 rounded-2xl border border-line bg-card p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The rest is better in conversation.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">
            Happy to walk through anything here — the field notes, the interface studies, or the honest
            version of any line on the resume.
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
