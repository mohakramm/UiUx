import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
import WorkGrid from "./WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "UI/UX case studies by Ebaad Akram — privacy-first social discovery, workflow design with real user testing, shipped product features, and consumer concepts.",
};

export default function WorkPage() {
  return (
    <div className="spotlight pt-32 pb-24 sm:pt-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Eyebrow>Season one</Eyebrow>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Case studies</h1>
        <p className="prose-measure mt-5 text-lg leading-relaxed text-paper-dim">
          Every project here is written the same way I&apos;d pitch an episode: setup, conflict, constraints,
          decisions, resolution. Real work is marked as shipped or tested; concepts are marked as concepts.
        </p>
        <WorkGrid />
      </div>
    </div>
  );
}
