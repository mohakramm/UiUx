import type { Metadata } from "next";
import { site } from "@/data/site";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, SectionHeading, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ebaad Akram is a software engineering student at Western University working at the overlap of analysis, engineering, and interface design.",
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
                I&apos;m Ebaad, a software engineering student at Western University. Here&apos;s the honest
                version of how I got here.
              </p>
              <p>
                I got into software because of my family. Growing up, I was the person everyone handed
                their phone to. I taught my parents, aunts, uncles, and grandparents how to send photos,
                join video calls, and undo whatever setting had mysteriously changed overnight. I liked
                being the one who could help, but I also noticed something that stuck with me. These were
                smart, capable people, and their own devices kept making them feel the opposite. Somewhere
                in all those kitchen-table tech support sessions, I decided I wanted to understand how this
                stuff works, and maybe help make it less frustrating. That&apos;s what took me to software
                engineering.
              </p>
              <p>
                School taught me the systems side: kernels, REST APIs, databases, embedded programming. My
                internships taught me the other half. At one, I cleaned and analyzed over ten thousand rows
                of user data and learned what people actually do, which is rarely what we assume. At
                another, I built React features for a resume builder used by real people under real stress.
              </p>
              <p>
                The feature I&apos;m proudest of from that internship wasn&apos;t a technical achievement. It
                was a version history panel. Its whole job was to make people feel safe editing their own
                resumes, and after it shipped, support tickets about lost edits dropped by about 40
                percent. That project changed how I think about software. The interface is the product, and
                the question I kept asking as an analyst, &quot;why do people do that?&quot;, turns out to be the
                same question a designer asks.
              </p>
              <p>
                So that&apos;s where I am right now. I&apos;m not going to claim years of design experience,
                because I don&apos;t have them. What I do have is an engineering degree in progress, real
                analysis work, UX coursework, one shipped feature I can talk about for an hour, and a
                genuine interest in doing more of this kind of work. This site is part of that effort, and
                I built every page of it myself.
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
                hi, that&apos;s me
              </figcaption>
            </figure>
            <div className="mt-6 rounded-2xl border border-line bg-card p-6 text-sm leading-relaxed text-ink-soft">
              <p>
                In my free time I love watching movies and TV shows. My favourite genre is comedy and I
                love a good sitcom. I&apos;d have to say my favourite is How I Met Your Mother. Best show of
                all time.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Skills */}
        <section className="mt-20" aria-labelledby="skills-title">
          <Reveal>
            <SectionHeading
              title="Three overlapping skill sets"
              intro="The overlap is the point. I can follow the requirements meeting, the design review, and the sprint planning conversation without needing a translator."
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
                Relevant coursework: {coursework.join(" · ")}. B.E.Sc. Software Engineering at Western
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
            Happy to talk through anything here, whether it&apos;s the field notes, the interface studies, or
            the honest version of any line on my resume.
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
