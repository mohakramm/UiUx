import type { Metadata } from "next";
import { site } from "@/data/site";
import { ButtonLink, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resume",
  description: "Ebaad Akram's resume — software engineering, data analysis, and interface design.",
};

export default function ResumePage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Eyebrow>One page, no filler</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Resume</h1>
        <p className="prose-measure mt-5 text-base leading-relaxed text-ink-soft">
          Software engineering foundation, analyst instincts, design-leaning work: UX coursework, a shipped
          product feature with a measurable outcome, and internship time on both the building and the
          understanding sides of software.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href={site.resumePath} download>
            Download PDF
          </ButtonLink>
          <ButtonLink href={site.resumePath} variant="secondary" external>
            Open in new tab
          </ButtonLink>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-card">
          <object
            data={`${site.resumePath}#view=FitH`}
            type="application/pdf"
            className="h-[75vh] w-full"
            aria-label="Embedded PDF of Ebaad Akram's resume"
          >
            <p className="p-8 text-center text-sm text-ink-soft">
              Your browser can&apos;t display the PDF inline —{" "}
              <a className="font-semibold text-accent-deep underline" href={site.resumePath}>
                download it instead
              </a>
              .
            </p>
          </object>
        </div>
      </div>
    </div>
  );
}
