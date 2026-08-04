import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import { CaseHero, CaseNav, CaseSection, DecisionCard, NextCase, TakeawayList } from "@/components/case/CaseShell";
import { ArtifactFrame } from "@/components/ui";
import Reveal from "@/components/Reveal";

const study = caseStudies.find((c) => c.slug === "version-history")!;

export const metadata: Metadata = {
  title: "Version History at Resume Inc.",
  description:
    "A shipped-product case study: designing and building a version history feature for a resume builder as a software engineering intern — support tickets about lost edits dropped 40%.",
};

const navItems = [
  { href: "#summary", label: "Summary" },
  { href: "#problem", label: "Problem" },
  { href: "#decisions", label: "Decisions" },
  { href: "#design", label: "The design" },
  { href: "#outcome", label: "Outcome" },
];

const decisions = [
  {
    title: "Restore never overwrites",
    decision:
      "Restoring an old version creates a new version at the top of the timeline instead of rolling the document back destructively.",
    why:
      "The whole feature exists to remove fear. A restore that could itself destroy work would rebuild the fear one level up. Making every action additive means there is no wrong button anywhere in the panel.",
    tradeoff:
      "The timeline grows longer and slightly less tidy. A longer list you trust beats a shorter one you're scared of.",
  },
  {
    title: "Preview before you commit",
    decision:
      "Clicking a version shows a read-only preview first; 'Restore' is a second, separate step from inside that preview.",
    why:
      "Users hunting for 'the version before I broke it' are browsing, not deciding. Splitting look from leap lets them scan freely — and matches how people actually recover: recognize first, then act.",
    tradeoff:
      "One more click on the recovery path. Worth it: the expensive error here is restoring the wrong version confidently.",
  },
  {
    title: "Timestamps that sound like memory",
    decision:
      "Versions are labelled the way people remember time — 'Yesterday, 9:12 PM', 'Tuesday afternoon' — with exact timestamps available on hover, plus context like which section changed.",
    why:
      "Nobody thinks 'I need the 2024-06-18T21:12:07Z version.' They think 'it was fine last night.' The interface should speak the language the memory is stored in.",
    tradeoff:
      "Relative labels are ambiguous at the edges (time zones, 'last week'). The hover detail keeps precision one gesture away instead of in your face.",
  },
  {
    title: "Snapshots at meaningful moments",
    decision:
      "Versions are captured automatically around meaningful events — big edits, section deletions, downloads — rather than on a fixed timer alone.",
    why:
      "A pure interval produces dozens of near-identical entries and buries the one that matters ('right before I deleted my work history'). Event-based snapshots make the timeline a story of the document, not a log.",
    tradeoff:
      "Heuristics for 'meaningful' are never perfect, so a timer still runs underneath as a safety net. Belt and suspenders — invisible ones.",
  },
];

function VersionPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
      <div className="rounded-xl border border-line bg-ink p-4">
        <p className="text-[0.6rem] uppercase tracking-widest text-muted">Preview · Yesterday, 9:12 PM</p>
        <div className="mt-3 space-y-2 rounded-lg border border-line bg-ink-2 p-4">
          <div className="h-3 w-32 rounded bg-paper-dim/70" />
          <div className="h-2 w-44 rounded bg-muted/50" />
          <div className="mt-3 h-2 w-full rounded bg-muted/30" />
          <div className="h-2 w-5/6 rounded bg-muted/30" />
          <div className="h-2 w-4/6 rounded bg-muted/30" />
          <div className="mt-3 h-2.5 w-24 rounded bg-blue/50" />
          <div className="h-2 w-full rounded bg-muted/30" />
          <div className="h-2 w-3/4 rounded bg-muted/30" />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-[0.62rem] text-muted">Read-only — nothing changes until you choose</p>
          <span className="rounded-full bg-blue/20 px-3 py-1 text-[0.6rem] font-semibold text-blue">
            Restore this version
          </span>
        </div>
      </div>
      <div className="rounded-xl border border-line bg-ink p-4">
        <p className="text-[0.6rem] uppercase tracking-widest text-muted">Version history</p>
        <ul className="mt-3 space-y-2">
          {[
            { when: "Today, 4:20 PM", what: "Current version", active: false },
            { when: "Today, 1:05 PM", what: "Edited Skills", active: false },
            { when: "Yesterday, 9:12 PM", what: "Before Work History deleted", active: true },
            { when: "Tuesday afternoon", what: "Downloaded as PDF", active: false },
          ].map((v) => (
            <li
              key={v.when}
              className={`rounded-lg border p-3 ${v.active ? "border-blue/60 bg-blue/10" : "border-line"}`}
            >
              <p className={`text-xs font-semibold ${v.active ? "text-blue" : "text-paper"}`}>{v.when}</p>
              <p className="mt-0.5 text-[0.62rem] text-muted">{v.what}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function VersionHistoryPage() {
  return (
    <article>
      <CaseHero study={study} />
      <CaseNav items={navItems} />

      <CaseSection id="summary" kicker="Cold open" title="The 60-second version" wide>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "The context",
              text: "Summer 2024, software engineering intern at Resume Inc., a Toronto company whose product helps people build resumes — documents with unusually high emotional stakes per kilobyte.",
            },
            {
              label: "The problem",
              text: "Support kept hearing versions of the same story: 'I changed something, now it's worse, and I can't get back.' People were editing their own resumes timidly, afraid of breaking the thing their job search depended on.",
            },
            {
              label: "What I did",
              text: "Designed and built the version history feature in React — the snapshot model, the timeline panel, the preview-then-restore flow, and the copy that made it feel safe.",
            },
            {
              label: "The result",
              text: "Support tickets about restoring previous edits dropped by 40% after launch. The quieter win: an editor you can experiment in is an editor people actually use.",
            },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 70} className="rounded-2xl border border-line bg-ink-2 p-5">
              <p className="eyebrow text-blue">{b.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="problem" kicker="Setup" title="Fear is a usability problem">
        <p>
          A resume is a strange document: small, plain, and carrying someone&apos;s next year on its back. Users
          weren&apos;t losing data to crashes — the product saved fine. They were losing <em>good states</em> to
          their own edits, discovering an hour later that the &quot;quick improvement&quot; had made things worse and
          there was no way back.
        </p>
        <p>
          The evidence was sitting in the support queue: a steady stream of tickets asking an agent to somehow
          recover how a resume used to look. Each one was a person mid-job-search, stressed, blocked, and — from
          the product&apos;s perspective — telling us exactly which safety net was missing.
        </p>
        <p>
          I was the intern on the interface team. The assignment was engineering; the interesting part was that
          the engineering problem (snapshots, storage, retrieval) was inseparable from the design problem
          (when do people need a version, how do they find it, what makes restoring feel safe rather than scary).
        </p>
      </CaseSection>

      <CaseSection id="decisions" kicker="Key design decisions" title="Four decisions that made it feel safe" wide>
        <ul className="grid gap-4 md:grid-cols-2">
          {decisions.map((d, i) => (
            <DecisionCard key={d.title} index={i} {...d} />
          ))}
        </ul>
      </CaseSection>

      <CaseSection id="design" kicker="The design" title="A timeline you browse, not an archive you fear" wide>
        <p className="prose-measure">
          The panel lives beside the document: versions as a scannable rail on the right, a full read-only
          preview on the left, restore always one deliberate step further. The mockup below is an
          <strong> illustrative recreation built for this case study</strong> — it shows the interaction model
          I built, not the company&apos;s actual product UI.
        </p>
        <div className="mt-8">
          <ArtifactFrame label="Illustrative recreation — interaction model of the shipped feature, not actual product UI">
            <VersionPanel />
          </ArtifactFrame>
        </div>
      </CaseSection>

      <CaseSection id="outcome" kicker="Resolution" title="Outcome and what it taught me">
        <TakeawayList
          items={[
            "Shipped to production, in React, integrated with the existing editor and backend APIs.",
            "Support tickets about restoring previous resume edits fell 40% — the support queue was both the research method and the success metric.",
            "Lesson: undo isn't a command, it's a feeling. People don't need to use version history often; they need to know it's there to edit bravely.",
            "Lesson: as the person building the feature, I could make design promises — 'restore never overwrites' — because I knew exactly what the system could guarantee. That's the engineer-designer overlap I want to keep working in.",
            "What I'd do next: named checkpoints ('Sent to Google application') and a visual diff between versions — the two requests I'd expect from heavy users.",
          ]}
        />
      </CaseSection>

      <NextCase current="version-history" />
    </article>
  );
}
