import type { Metadata } from "next";
import { fieldNotes } from "@/data/notes";
import Reveal from "@/components/Reveal";
import { Eyebrow, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "Short observations about design in the wild — boarding passes, skip buttons, sitcom cold opens, undo, and forms. How Ebaad Akram thinks about interfaces.",
};

export default function NotesPage() {
  return (
    <div className="spotlight pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Eyebrow>Field notes</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Design in the wild, noticed on purpose
        </h1>
        <p className="prose-measure mt-5 text-lg leading-relaxed text-ink-soft">
          I don&apos;t have a decade of design war stories, so here&apos;s something more honest: proof that I
          pay attention. Short notes on interfaces — and one or two non-interfaces — that taught me
          something about how good design behaves.
        </p>

        <div className="mt-14 space-y-10">
          {fieldNotes.map((note, i) => (
            <Reveal key={note.slug} delay={Math.min(i, 2) * 60}>
              <article
                id={note.slug}
                aria-labelledby={`${note.slug}-title`}
                className="scroll-mt-24 rounded-2xl border border-line bg-card p-7 sm:p-10"
              >
                <Tag tone="accent">{note.kicker}</Tag>
                <h2 id={`${note.slug}-title`} className="font-display mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {note.title}
                </h2>
                <div className="prose-measure mt-5 space-y-4 leading-relaxed text-ink-soft">
                  {note.paragraphs.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <p className="mt-6 border-l-2 border-accent pl-4 font-medium text-ink">
                  <span className="eyebrow mr-2 text-accent-deep">The takeaway</span>
                  {note.lesson}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="font-hand mt-12 text-center text-2xl text-ink-soft">more notes as I collect them…</p>
      </div>
    </div>
  );
}
