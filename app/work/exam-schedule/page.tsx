import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import { CaseHero, CaseNav, CaseSection, DecisionCard, NextCase, TakeawayList } from "@/components/case/CaseShell";
import { ArtifactFrame } from "@/components/ui";
import Reveal from "@/components/Reveal";

const study = caseStudies.find((c) => c.slug === "exam-schedule")!;

export const metadata: Metadata = {
  title: "From PDF to Plan — Western Exam Schedule Tool",
  description:
    "A real, user-tested workflow project: turning Western University's exam schedule PDFs into structured, calendar-ready plans — and the UX thinking behind the next iteration.",
};

const navItems = [
  { href: "#summary", label: "Summary" },
  { href: "#problem", label: "Problem" },
  { href: "#built", label: "What I built" },
  { href: "#testing", label: "Testing" },
  { href: "#concept", label: "Next iteration" },
  { href: "#decisions", label: "Decisions" },
  { href: "#outcome", label: "Outcome" },
];

const decisions = [
  {
    title: "Review before export, always",
    decision:
      "The redesigned flow makes a verification step mandatory: you see every parsed exam next to the source text before anything reaches your calendar.",
    why:
      "A wrong exam time isn't a bug, it's a missed exam. For high-stakes data, error prevention beats error recovery — the cost of one extra confirmation screen is seconds; the cost of silent wrongness is a semester.",
    tradeoff:
      "It adds a step to a flow whose whole pitch is speed. I kept it by making review scannable: confident rows collapse, only doubts demand attention.",
  },
  {
    title: "Show uncertainty instead of hiding it",
    decision:
      "Rows the parser isn't sure about are flagged — 'this line was ambiguous, check the room' — rather than silently guessed.",
    why:
      "Institutional PDFs are inconsistent, so a parser that always looks confident is lying some of the time. Users forgive a tool that says 'I'm not sure here'; they abandon one that burned them once.",
    tradeoff:
      "Flags admit imperfection and add visual noise. But trust compounds: honest flags on 2 rows buy belief in the other 20.",
  },
  {
    title: "Meet students in their calendar",
    decision:
      "Output lands as .ics (plus CSV) — files their existing calendar opens — rather than inside yet another app with its own schedule view.",
    why:
      "The job-to-be-done is 'my exams, where my life already is.' The best interface for viewing a schedule is the calendar they check every day; the tool should end there, not compete with it.",
    tradeoff:
      "Handing off to the calendar means giving up the ongoing relationship (reminders, updates). Right call for a utility — it earns a bookmark, not a login.",
  },
  {
    title: "Design for the messy PDF, not the ideal one",
    decision:
      "The parser treats format drift as normal: multi-line rows, merged cells, section codes that wrap. The UX assumes input will be imperfect and plans the recovery path.",
    why:
      "The university changes its PDF layout without notice. A tool that only handles the happy path works for exactly one semester.",
    tradeoff:
      "Resilient parsing is slower to build than a rigid template. The alternative is a tool that breaks precisely when students need it most — exam season.",
  },
];

function BeforeAfter() {
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_auto_1.2fr] md:items-center">
      <div className="rounded-xl border border-line bg-ink p-4">
        <p className="text-[0.6rem] uppercase tracking-widest text-muted">Before · exams.pdf, page 14 of 40</p>
        <div className="mt-3 space-y-1.5 font-mono text-[0.65rem] leading-relaxed text-paper-dim">
          <p>SE 3350B Sec 001 LEC Apr 17 0900 3HR AH-15</p>
          <p>SE 3352A Sec 002 LEC Apr 19 1400 2.5HR</p>
          <p className="pl-8">TC-203 *see note 4</p>
          <p>STATS2244 001/002 Apr 22 0900 3HR NS-1</p>
          <p className="text-muted">…hundreds more rows like this</p>
        </div>
      </div>
      <p aria-hidden="true" className="hidden text-center font-display text-2xl text-gold md:block">
        →
      </p>
      <div className="rounded-xl border border-line bg-ink p-4">
        <p className="text-[0.6rem] uppercase tracking-widest text-muted">After · your exams, structured</p>
        <div className="mt-3 space-y-2">
          {[
            { course: "SE 3350B — Software Design", when: "Apr 17 · 9:00 AM · 3h", where: "Alumni Hall 15", ok: true },
            { course: "SE 3352A — Databases", when: "Apr 19 · 2:00 PM · 2.5h", where: "Check room — source was ambiguous", ok: false },
            { course: "STATS 2244 — Statistics", when: "Apr 22 · 9:00 AM · 3h", where: "Natural Sciences 1", ok: true },
          ].map((row) => (
            <div
              key={row.course}
              className={`rounded-lg border p-3 ${row.ok ? "border-line" : "border-gold/60 bg-gold/5"}`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-semibold text-paper">{row.course}</p>
                {!row.ok && (
                  <span className="rounded-full bg-gold/15 px-2 py-0.5 text-[0.55rem] font-semibold text-gold">
                    needs a look
                  </span>
                )}
              </div>
              <p className="mt-1 text-[0.65rem] text-paper-dim">{row.when}</p>
              <p className={`text-[0.65rem] ${row.ok ? "text-muted" : "text-gold"}`}>{row.where}</p>
            </div>
          ))}
          <div className="flex gap-2 pt-1">
            <span className="rounded-full bg-sage/15 px-3 py-1 text-[0.6rem] font-semibold text-sage">
              ⬇ Export .ics
            </span>
            <span className="rounded-full border border-line px-3 py-1 text-[0.6rem] text-paper-dim">Export CSV</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExamSchedulePage() {
  return (
    <article>
      <CaseHero study={study} />
      <CaseNav items={navItems} />

      <CaseSection id="summary" kicker="Cold open" title="The 60-second version" wide>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "The problem",
              text: "Western publishes exam schedules as giant PDFs. Students find their courses by scrolling and Ctrl-F, then retype dates into their calendars by hand — tedious at best, and one typo away from showing up to the wrong room.",
            },
            {
              label: "What I did",
              text: "Built a Python tool that parses the official PDF and outputs a clean, structured schedule (CSV) ready for calendar import — then ran user acceptance testing on the prototype and refined it.",
            },
            {
              label: "What's real vs concept",
              text: "The parser and testing are real and shipped as a working tool. The polished upload-review-export web UI shown below is my design for the next iteration, and it's labelled as a concept.",
            },
            {
              label: "Why it's here",
              text: "Because it's the clearest example of how I think: find a workflow people quietly hate, remove the dangerous manual step, and design the trust needed for people to rely on the output.",
            },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 70} className="rounded-2xl border border-line bg-ink-2 p-5">
              <p className="eyebrow text-sage">{b.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="problem" kicker="Setup" title="Forty pages, one student, zero margin for error">
        <p>
          Twice a year, the same scene plays out across campus: the registrar posts the exam schedule as a
          long PDF sorted by course code, and thousands of students scroll it on their phones, screenshot
          their rows, and hand-copy times into Google Calendar between classes.
        </p>
        <p>
          The failure mode isn&apos;t hypothetical. Exam times look alike (three exams starting at 9:00), codes
          look alike (SE 3350B vs SE 3352A), and the PDF&apos;s formatting splits rows in unpredictable places.
          Manual transcription of high-stakes data is exactly the kind of work software should have taken off
          students&apos; plates years ago.
        </p>
        <p>
          The user problem, stated as a job: <em>&quot;When the exam schedule drops, I want my exams in my
          calendar, correctly, in under a minute — without becoming a data-entry clerk.&quot;</em>
        </p>
      </CaseSection>

      <CaseSection id="built" kicker="What I built — real" title="A parser that does the boring, dangerous part" wide>
        <p className="prose-measure">
          The shipped tool is a Python program: give it the official PDF, and it extracts your courses into a
          structured CSV — course, section, date, time, duration, location — ready for calendar import. No
          retyping, no squinting at page 14.
        </p>
        <div className="mt-8">
          <ArtifactFrame label="Illustration of the real transformation — styled for this case study; the shipped tool is a CLI">
            <BeforeAfter />
          </ArtifactFrame>
        </div>
      </CaseSection>

      <CaseSection id="testing" kicker="The evidence" title="Testing it on real users, honestly reported">
        <p>
          I ran user acceptance testing on the initial prototype with fellow students using their real course
          loads, and used what came out of those sessions to refine the tool. The sessions were informal and I
          didn&apos;t keep formal research notes — so you won&apos;t see participant quotes or invented task-success
          percentages here.
        </p>
        <p>
          What I can say honestly: watching people use it changed it. Testing is why the tool&apos;s output
          prioritizes being <em>checkable</em> against the source over looking clever, and why the next
          iteration below is designed around a review step rather than a magic one-click import. If I ran this
          again today, I&apos;d script the sessions, log every parse failure, and measure time-to-correct-calendar
          against the manual baseline.
        </p>
      </CaseSection>

      <CaseSection id="concept" kicker="Next iteration — concept" title="From CLI to a tool anyone's roommate could use">
        <p>
          A command-line tool filters its audience to people who are comfortable with one. The design work in
          this case study is the next iteration: a web flow — <strong>upload → review → export</strong> — that
          keeps the parser&apos;s power but earns the trust of someone who&apos;s never opened a terminal. The
          before/after above shows its review state: confident rows collapsed, ambiguous rows flagged for a
          human look, export withheld until the human has had it.
        </p>
      </CaseSection>

      <CaseSection id="decisions" kicker="Key design decisions" title="Four decisions that shaped the tool" wide>
        <ul className="grid gap-4 md:grid-cols-2">
          {decisions.map((d, i) => (
            <DecisionCard key={d.title} index={i} {...d} />
          ))}
        </ul>
      </CaseSection>

      <CaseSection id="outcome" kicker="Resolution" title="Outcome and reflection">
        <TakeawayList
          items={[
            "Shipped: a working parser that turns the official PDF into structured, calendar-ready data — used for real schedules, refined through real testing.",
            "Learned: for high-stakes utilities, trust is the interface. Every design choice that survived testing was one that made the output easier to verify.",
            "Learned: 'automate it' is only half a UX answer. The other half is designing what happens when automation is unsure — that's where this tool earns its keep.",
            "Next: build the web version, script proper usability sessions, and measure the thing that matters — correct calendars per minute, compared to doing it by hand.",
          ]}
        />
      </CaseSection>

      <NextCase current="exam-schedule" />
    </article>
  );
}
