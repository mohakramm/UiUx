import Link from "next/link";
import { site } from "@/data/site";
import { fieldNotes } from "@/data/notes";
import Explorations from "@/components/Explorations";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, SectionHeading, Tag } from "@/components/ui";

const stops = [
  {
    stop: "Stop 01",
    title: "Systems",
    body: "Software engineering at Western University: kernels, REST APIs, embedded systems, databases. I learned how things actually work — and how they actually break.",
  },
  {
    stop: "Stop 02",
    title: "People & data",
    body: "Internships on both sides of the product: analyzing 10,000+ rows of user behavior at a nonprofit, and building React features at a resume-builder startup. The questions I kept gravitating to were the analyst's: why do people do that?",
  },
  {
    stop: "Stop 03",
    title: "Design",
    body: "UX coursework, a shipped feature whose whole point was how it felt to use, and now this site. I won't pretend design was the lifelong plan — it's where the first two stops kept pointing.",
    here: true,
  },
];

const principles = [
  {
    title: "Order things by the reader's moment",
    body: "Information arranged by when someone needs it beats information arranged by who owns it. Boarding passes get this right; most dashboards don't.",
  },
  {
    title: "The unhappy path is the real design",
    body: "Empty states, errors, delays, changes of plan. Anyone can design the demo; the product is what happens when things wobble.",
  },
  {
    title: "Trust changes behavior more than features do",
    body: "People use products bravely when there's a guaranteed way back. I've watched a safety net cut support tickets by 40% — mostly without being used.",
  },
  {
    title: "Timing is a design material",
    body: "Sitcoms taught me this before any course did: the same information lands or dies depending on when and how it arrives.",
  },
  {
    title: "If it can't be built, it isn't designed yet",
    body: "I've been on the implementing end of handoffs. Constraints, edge cases, and API realities belong in the design, not after it.",
  },
  {
    title: "Clarity beats cleverness",
    body: "The best interface copy sounds like a considerate person. If a screen needs a tooltip to explain its metaphor, the metaphor lost.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="spotlight border-b border-line pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Ebaad Akram · Software Engineering · Analysis · Interface Design</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              I make complicated systems <span className="text-accent-deep">make sense</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Software engineering student at Western University. I&apos;ve spent my degree learning how
              systems work and my internships learning how people actually use them — and the work I keep
              choosing lives in between: mapping workflows, questioning requirements, and designing
              interfaces that are clear, calm, and honest. This site is me practicing that craft in public.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/notes">Read my field notes</ButtonLink>
              <ButtonLink href={site.resumePath} variant="secondary" download>
                Download resume
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Contact me →
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The route so far */}
      <section className="border-b border-line py-20 sm:py-24" aria-labelledby="route-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The route so far"
              title="I didn't start in design. I arrived here."
              intro="Three stops, honestly told. Each one gave me something the next one needed."
              id="route-title"
            />
          </Reveal>
          <ol className="mt-12 space-y-0">
            {stops.map((s, i) => (
              <Reveal as="li" key={s.stop} delay={i * 90} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                      s.here
                        ? "border-accent bg-accent text-paper"
                        : "border-line-strong bg-card text-ink-soft"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < stops.length - 1 && <span aria-hidden="true" className="route-line w-0.5 flex-1" />}
                </div>
                <div className="max-w-2xl pb-2">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                    {s.here && (
                      <span className="font-hand text-xl text-accent-deep" aria-label="Current stop">
                        ← you are here
                      </span>
                    )}
                  </div>
                  <p className="mt-2 leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Explorations */}
      <section className="border-b border-line bg-paper-2/50 py-20 sm:py-24" aria-labelledby="explorations-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Interface studies"
              title="Small screens, practiced deliberately"
              intro="Self-initiated concept studies, designed and built in code — no clients, no invented backstories. Each one is a rep for a pattern I care about: complex plans told simply, preferences captured lightly, and bad news delivered calmly."
              id="explorations-title"
            />
          </Reveal>
          <div className="mt-12">
            <Reveal>
              <Explorations />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Field notes teaser */}
      <section className="border-b border-line py-20 sm:py-24" aria-labelledby="notes-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Field notes"
                title="Noticing is a skill. I practice it in writing."
                intro="Short observations about design in the wild — boarding passes, skip buttons, sitcom cold opens. The fastest way to see how I think."
                id="notes-title"
              />
              <Link href="/notes" className="text-sm font-semibold text-accent-deep hover:text-accent">
                All notes →
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {fieldNotes.slice(0, 2).map((note, i) => (
              <Reveal key={note.slug} delay={i * 90}>
                <Link
                  href={`/notes#${note.slug}`}
                  className="group block h-full rounded-2xl border border-line bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/50"
                >
                  <Tag tone="accent">{note.kicker}</Tag>
                  <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight group-hover:text-accent-deep">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{note.teaser}</p>
                  <p className="mt-5 text-sm font-semibold text-accent-deep opacity-0 transition-opacity group-hover:opacity-100">
                    Read the note →
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How I think */}
      <section className="border-b border-line py-20 sm:py-24" aria-labelledby="principles-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How I think"
              title="Six things I believe about good interfaces"
              intro="Opinions, held with reasons. Ask me about any of them."
              id="principles-title"
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 70} className="rounded-2xl border border-line bg-card p-6">
                <p className="eyebrow text-accent-deep">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display mt-2 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience briefly */}
      <section className="border-b border-line py-20 sm:py-24" aria-labelledby="exp-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Previously"
              title="Where the instincts come from"
              intro="The full version is on the resume — this is the shape of it."
              id="exp-title"
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                org: "Resume Inc. — Software Engineering Intern",
                when: "Summer 2024 · Toronto",
                what: "Built interactive UI for a resume builder in React, including the version history feature that cut related support tickets by 40%. My first taste of designing for how something feels, not just whether it works.",
              },
              {
                org: "MNN Nexus — Data Analyst Intern",
                when: "Summer 2025 · Mississauga",
                what: "Cleaned and segmented 10,000+ rows of user data into behavioral groups used for targeted outreach. Analysis work, and quietly the most useful design training I've had: what people do versus what we assume.",
              },
              {
                org: "Western Engineering Bots — Software Subteam Lead",
                when: "2024 – present · London, ON",
                what: "Lead an 8-person software team building a humanoid robot for national competition — systems integration plus the human work of keeping eight engineers pointed the same way.",
              },
            ].map((e, i) => (
              <Reveal key={e.org} delay={i * 80} className="rounded-2xl border border-line bg-card p-6">
                <h3 className="font-display text-lg font-semibold">{e.org}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">{e.when}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{e.what}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-b border-line py-20 sm:py-24" aria-labelledby="about-teaser-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <Reveal>
            <SectionHeading eyebrow="Off screen" title="Systems by training, stories by choice" id="about-teaser-title" />
            <p className="prose-measure mt-5 leading-relaxed text-ink-soft">
              I&apos;ve always been drawn to how people behave — the decisions they make, the awkward moments
              they avoid, the tiny interactions that change everything. It&apos;s why I love sitcoms and
              romcoms, and it&apos;s why the design side of building software keeps pulling me in: timing,
              context, and understanding people turn out to be the whole job.
            </p>
            <div className="mt-7">
              <ButtonLink href="/about" variant="secondary">
                More about me
              </ButtonLink>
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
                  height={400}
                  className="h-full w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="font-hand mt-3 text-center text-xl text-ink-soft">
                hi — that&apos;s me
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24" aria-labelledby="cta-title">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <Reveal>
            <Eyebrow className="justify-center">Next stop</Eyebrow>
            <h2 id="cta-title" className="font-display mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something people actually want to use.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-soft">
              I&apos;m at my best where analysis, engineering, and design overlap — product roles, UX-adjacent
              roles, and teams that value someone who can hold all three conversations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href={`mailto:${site.email}`} external>
                Email me
              </ButtonLink>
              <ButtonLink href={site.linkedin} variant="secondary" external>
                LinkedIn
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
