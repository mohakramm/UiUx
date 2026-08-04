import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { site } from "@/data/site";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";

const edges = [
  {
    title: "I know how it gets built",
    body: "I'm a software engineering student, so I design with implementation, edge cases, and constraints in mind. The handoff conversation is one I can hold from both sides.",
  },
  {
    title: "I design for trust",
    body: "Privacy, safety, and clarity aren't compliance checkboxes to me — they're product features. My favorite design problems are the ones where someone has to feel safe before they'll tap.",
  },
  {
    title: "I think in stories",
    body: "Years of sitcoms and romcoms taught me that timing, context, and character are everything. A user flow is a narrative arc: setup, tension, resolution. I design the resolution.",
  },
  {
    title: "I ship, not just sketch",
    body: "The real projects here come with production code or actual user testing behind them. When something is a concept, I label it as one.",
  },
];

const process = [
  { step: "Understand", detail: "Who is this for, what are they afraid of, and what does 'better' actually mean for them?" },
  { step: "Map", detail: "Flows, states, and edge cases on paper before pixels. The unhappy paths get drawn first." },
  { step: "Prototype", detail: "Low-fi to test the idea, hi-fi to test the feeling. Sometimes straight to code — it's often faster for me." },
  { step: "Test", detail: "Put it in front of real people early. I'd rather be wrong in week one than week ten." },
  { step: "Refine", detail: "Cut what users skipped, sharpen what they hesitated on, rewrite what they misread." },
  { step: "Build-aware handoff", detail: "Specs an engineer would actually thank you for — states, constraints, and the why included." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="spotlight border-b border-line pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Ebaad Akram · Software Engineering · Product Thinking · Interface Design</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              I design interfaces that make complicated systems feel{" "}
              <span className="text-gold">human</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-dim">
              Software engineering student at Western University, designing digital experiences with the
              logic of an engineer and the instincts of a storyteller. Looking for UI/UX, product design,
              and product-adjacent roles where both halves are useful.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/work">View case studies</ButtonLink>
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

      {/* Selected work */}
      <section className="border-b border-line py-20 sm:py-24" aria-labelledby="now-showing-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Now showing"
                title="Selected work"
                intro="Four case studies — two shipped and tested for real, two self-initiated concepts, all honestly labelled. Each one is a story about a decision, not a gallery of screens."
                id="now-showing-title"
              />
              <Link href="/work" className="text-sm font-semibold text-gold hover:text-gold-bright">
                All work →
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 90}>
                <ProjectCard study={study} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why me */}
      <section className="border-b border-line py-20 sm:py-24" aria-labelledby="edge-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The difference"
              title="Why an engineer in a design role?"
              intro="Because the gap between a beautiful mockup and a product people trust is full of engineering decisions — and I live on both sides of it."
              id="edge-title"
            />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {edges.map((edge, i) => (
              <Reveal as="li" key={edge.title} delay={i * 80} className="rounded-2xl border border-line bg-ink-2 p-6">
                <h3 className="font-display text-xl font-semibold">{edge.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">{edge.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-line py-20 sm:py-24" aria-labelledby="process-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Behind the design"
              title="How I work"
              intro="Less ceremony, more evidence. The same six beats, whatever the project."
              id="process-title"
            />
          </Reveal>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 70} className="rounded-2xl border border-line bg-ink-2 p-6">
                <p className="eyebrow text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display mt-2 text-lg font-semibold">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-dim">{p.detail}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-b border-line py-20 sm:py-24" aria-labelledby="about-teaser-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Off screen"
              title="Systems by training, stories by choice"
              id="about-teaser-title"
            />
            <p className="prose-measure mt-5 leading-relaxed text-paper-dim">
              I&apos;ve always been drawn to how people behave — the decisions they make, the awkward moments
              they avoid, the tiny interactions that change everything. That&apos;s probably why I love sitcoms,
              romcoms, and product design in roughly equal measure. They&apos;re all about timing, context, and
              understanding people.
            </p>
            <div className="mt-7">
              <ButtonLink href="/about" variant="secondary">
                More about me
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-2xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ebaad.jpg"
                alt="Portrait of Ebaad Akram"
                width={600}
                height={400}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24" aria-labelledby="cta-title">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <Reveal>
            <Eyebrow className="justify-center">Roll credits</Eyebrow>
            <h2 id="cta-title" className="font-display mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something people actually want to use.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-paper-dim">
              I&apos;m open to UI/UX and product design internships and roles — especially ones where design
              and engineering sit at the same table.
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
