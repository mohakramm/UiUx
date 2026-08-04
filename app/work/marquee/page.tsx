import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import { CaseHero, CaseNav, CaseSection, DecisionCard, NextCase, TakeawayList } from "@/components/case/CaseShell";
import PhoneFrame from "@/components/case/PhoneFrame";
import Reveal from "@/components/Reveal";

const study = caseStudies.find((c) => c.slug === "marquee")!;

export const metadata: Metadata = {
  title: "Marquee — A Better Movie Night",
  description:
    "A self-initiated concept case study: replacing the endless streaming scroll with mood-first curation — turning 'what should we watch?' into the best part of the night.",
};

const navItems = [
  { href: "#summary", label: "Summary" },
  { href: "#problem", label: "Problem" },
  { href: "#ia", label: "Architecture" },
  { href: "#decisions", label: "Decisions" },
  { href: "#designs", label: "Final designs" },
  { href: "#outcome", label: "Reflection" },
];

const decisions = [
  {
    title: "Ask about the night, not the genre",
    decision:
      "The entry point is three quick questions about right now — energy, company, time before sleep — never 'pick a genre' or an infinite grid.",
    why:
      "Nobody's actual state is 'Action & Adventure.' It's 'fried from work, two hours, want to feel something easy.' Mood is the real query; genre is a database column wearing a trench coat.",
    tradeoff:
      "An opinionated intake filters the catalog hard, and sometimes it will guess wrong. A confident wrong suggestion you can veto beats a neutral wall of ten thousand tiles.",
  },
  {
    title: "Lineups are starting points, not verdicts",
    decision:
      "Marquee proposes a complete evening — a feature, a backup, maybe a short in front — as one editable card. Swap any slot; the lineup adjusts around it.",
    why:
      "A single recommendation puts all the pressure on one film ('this better be good'). A plan you can tweak turns the algorithm into a first draft and the user into the director — commitment through co-authorship.",
    tradeoff:
      "Composing an evening is a heavier promise than ranking titles. The design keeps it light: every lineup works untouched; editing is invited, never required.",
  },
  {
    title: "The couch compromise is a first-class flow",
    decision:
      "Two people answer the same three questions on their own phones; Marquee builds one lineup from the overlap and says what it optimized for — 'funny enough for you, low-stakes enough for Sam.'",
    why:
      "'What should we watch?' is rarely a solo problem — it's a negotiation, and tonight's designated picker absorbs all the blame. Making the blend explicit moves the negotiation into the interface and takes the blame off either person.",
    tradeoff:
      "Blending is where the magic claim can outrun reality, so the design shows its reasoning in plain words rather than pretending to read minds.",
  },
  {
    title: "Curtain time is a commitment device",
    decision:
      "Once a lineup is accepted, browsing ends: the screen becomes a title card with a start time and a 'rolling in 5:00' countdown you can pause — but not scroll past.",
    why:
      "The failure mode isn't picking badly; it's never picking. Every streaming interface optimizes for more browsing. Marquee optimizes for the moment browsing should stop.",
    tradeoff:
      "A hard stop is paternalistic by design. It's softened by consent — you accepted this lineup — and by how easy vetoing was ten seconds earlier.",
  },
  {
    title: "The comfort shelf is guilt-free by design",
    decision:
      "Rewatches live on their own shelf — 'the usual suspects' — one tap from the intake, with no recommendation logic attached and no 'because you watched' framing.",
    why:
      "Half of real watching is the third rerun of a show you love, chosen precisely because it demands nothing. Pretending users are always discovering is dishonest IA; comfort is a mood, not a failure of taste.",
    tradeoff:
      "A prominent comfort shelf cannibalizes discovery. Good — the app should win the night, not the metric.",
  },
];

/* Marquee's screens use a warm, editorial light palette on purpose —
   showing range beyond the site's own dark system. */
const m = {
  bg: "#faf5ea",
  ink: "#3a2f3c",
  sub: "#8a7a6f",
  accent: "#c2472e",
  card: "#ffffff",
  line: "#e6dcc9",
};

function IntakeScreen() {
  return (
    <div className="flex h-full flex-col px-4 py-4" style={{ background: m.bg, color: m.ink }}>
      <p className="font-display text-lg font-semibold">Tonight</p>
      <p className="text-[0.62rem]" style={{ color: m.sub }}>
        Three questions. Then we roll.
      </p>
      <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-widest" style={{ color: m.sub }}>
        The mood
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {[
          { label: "Cozy", on: true },
          { label: "Big feelings", on: false },
          { label: "Can't think", on: true },
          { label: "Edge of seat", on: false },
          { label: "Background-ish", on: false },
        ].map((chip) => (
          <span
            key={chip.label}
            className="rounded-full border px-2.5 py-1 text-[0.6rem] font-medium"
            style={
              chip.on
                ? { background: m.accent, color: m.bg, borderColor: m.accent }
                : { borderColor: m.line, color: m.ink }
            }
          >
            {chip.label}
          </span>
        ))}
      </div>
      <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-widest" style={{ color: m.sub }}>
        The clock
      </p>
      <div className="mt-2 flex gap-1.5">
        {["Under 2h", "One episode", "All night"].map((t, i) => (
          <span
            key={t}
            className="rounded-full border px-2.5 py-1 text-[0.6rem] font-medium"
            style={i === 0 ? { background: m.ink, color: m.bg, borderColor: m.ink } : { borderColor: m.line }}
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-widest" style={{ color: m.sub }}>
        The company
      </p>
      <div className="mt-2 flex gap-1.5">
        {["Just me", "+1", "The group"].map((t, i) => (
          <span
            key={t}
            className="rounded-full border px-2.5 py-1 text-[0.6rem] font-medium"
            style={i === 1 ? { background: m.ink, color: m.bg, borderColor: m.ink } : { borderColor: m.line }}
          >
            {t}
          </span>
        ))}
      </div>
      <button
        className="mt-auto rounded-full py-2.5 text-xs font-semibold"
        style={{ background: m.accent, color: m.bg }}
      >
        Build our lineup
      </button>
      <p className="mt-2 text-center text-[0.58rem]" style={{ color: m.sub }}>
        or open the comfort shelf →
      </p>
    </div>
  );
}

function LineupScreen() {
  return (
    <div className="flex h-full flex-col px-4 py-4" style={{ background: m.bg, color: m.ink }}>
      <p className="text-[0.6rem] uppercase tracking-widest" style={{ color: m.sub }}>
        Your lineup · cozy, funny, under 2h
      </p>
      <p className="font-display mt-1 text-lg font-semibold">The Sunday Reset</p>
      <div className="mt-3 space-y-2">
        {[
          { slot: "The short", title: "One perfect sitcom episode", meta: "22 min · a known laugh to warm up", swap: true },
          { slot: "The feature", title: "A '90s romcom you somehow missed", meta: "96 min · charming, zero homework", swap: true },
          { slot: "The backup", title: "The reliable favourite", meta: "on deck if the feature loses the room", swap: false },
        ].map((item) => (
          <div key={item.slot} className="rounded-xl border p-3" style={{ background: m.card, borderColor: m.line }}>
            <div className="flex items-center justify-between">
              <p className="text-[0.55rem] font-semibold uppercase tracking-widest" style={{ color: m.accent }}>
                {item.slot}
              </p>
              {item.swap && (
                <span className="text-[0.55rem] font-semibold underline" style={{ color: m.sub }}>
                  swap
                </span>
              )}
            </div>
            <p className="mt-1 text-xs font-semibold">{item.title}</p>
            <p className="text-[0.6rem]" style={{ color: m.sub }}>
              {item.meta}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl border px-3 py-2" style={{ borderColor: m.line }}>
        <p className="text-[0.6rem]" style={{ color: m.sub }}>
          Total runtime
        </p>
        <p className="text-xs font-semibold">1 h 58 min · done by 11:15</p>
      </div>
      <button className="mt-auto rounded-full py-2.5 text-xs font-semibold" style={{ background: m.ink, color: m.bg }}>
        Lock it in
      </button>
    </div>
  );
}

function CurtainScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center" style={{ background: m.ink, color: m.bg }}>
      <p className="text-[0.6rem] uppercase tracking-[0.25em]" style={{ color: "#b9a48a" }}>
        Now showing
      </p>
      <div className="my-4 h-px w-16" style={{ background: "#b9a48a" }} />
      <p className="font-display text-xl font-semibold leading-snug">The Sunday Reset</p>
      <p className="mt-2 text-[0.65rem]" style={{ color: "#cbbfae" }}>
        You + Sam · funny enough for you,
        <br />
        low-stakes enough for Sam
      </p>
      <p className="mt-6 font-display text-3xl font-semibold" style={{ color: "#e8c07a" }}>
        4:37
      </p>
      <p className="mt-1 text-[0.6rem] uppercase tracking-widest" style={{ color: "#b9a48a" }}>
        until curtain
      </p>
      <p className="mt-6 text-[0.6rem] underline" style={{ color: "#cbbfae" }}>
        hold to pause the countdown
      </p>
    </div>
  );
}

export default function MarqueePage() {
  return (
    <article>
      <CaseHero study={study} />
      <CaseNav items={navItems} />

      <CaseSection id="summary" kicker="Cold open" title="The 60-second version" wide>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "The problem",
              text: "The scroll is the villain: streaming interfaces are optimized for browsing, so the night's best hour gets spent choosing instead of watching — and choosing for two people is worse than choosing for one.",
            },
            {
              label: "The idea",
              text: "Flip the entry point from catalog to mood. Ask about tonight — energy, company, time — and answer with a small, editable plan for the evening instead of an infinite grid.",
            },
            {
              label: "My role",
              text: "Self-initiated concept: framing, information architecture, flows, UX writing, and the UI direction — including an editorial visual system deliberately different from this site's.",
            },
            {
              label: "Status",
              text: "Concept case study. No user research has been run yet; the assumptions are labelled, and the validation I'd do first is listed in the reflection.",
            },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 70} className="rounded-2xl border border-line bg-ink-2 p-5">
              <p className="eyebrow text-rose">{b.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="problem" kicker="Setup" title="The forty-minute scroll to nowhere">
        <p>
          It&apos;s a scene everyone recognizes: two people, one couch, a remote changing hands. Trailers
          autoplay. Rows scroll sideways forever. Somebody says &quot;I&apos;m easy, you pick,&quot; which is never true.
          By the time a film starts — if one starts — the evening has already spent its best energy on the menu.
        </p>
        <p>
          My assumption (labelled as one, and testable): the pain isn&apos;t a lack of options or even of good
          recommendations — it&apos;s that every streaming surface treats choosing as the product. The grid has no
          concept of &quot;tonight,&quot; no concept of &quot;us,&quot; and no moment where it stops selling and lets you commit.
        </p>
        <p>
          Marquee is a concept app for the night itself: capture the mood in seconds, propose a small plan,
          negotiate fairly when there are two of you, then get out of the way.
        </p>
      </CaseSection>

      <CaseSection id="ia" kicker="Architecture" title="Mood-first, catalog-last">
        <p>
          The IA inverts the standard streaming stack. The catalog still exists, but it&apos;s the basement, not
          the lobby. Three intake questions → a generated lineup (a complete evening as one card) → a
          commitment screen. Two shelves sit beside that spine: the <em>comfort shelf</em> for guilt-free
          rewatches, one tap from the start, and <em>together mode</em>, where a second person&apos;s answers blend
          into the same lineup rather than opening a second browsing session.
        </p>
        <p>
          Search-and-browse survives as an escape hatch on every screen — an opinionated app should never be a
          locked one.
        </p>
      </CaseSection>

      <CaseSection id="decisions" kicker="Key design decisions" title="Five decisions that shape the night" wide>
        <ul className="grid gap-4 md:grid-cols-2">
          {decisions.map((d, i) => (
            <DecisionCard key={d.title} index={i} {...d} />
          ))}
        </ul>
      </CaseSection>

      <CaseSection id="designs" kicker="Final designs" title="Warm paper, one red accent, serif headlines" wide>
        <p className="prose-measure">
          Marquee&apos;s visual system is deliberately un-streaming: warm paper instead of cinematic black, an
          editorial serif, one confident vermilion accent, copy that sounds like a friend with good taste. The
          point — besides fitting an app about cozy nights — is range: a designer should be able to leave their
          own house style. These are concept mockups built in code, labelled as such.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <PhoneFrame label="Intake — three questions, no grid" light>
            <IntakeScreen />
          </PhoneFrame>
          <PhoneFrame label="Lineup — an evening as one editable card" light>
            <LineupScreen />
          </PhoneFrame>
          <PhoneFrame label="Curtain — where browsing ends" light>
            <CurtainScreen />
          </PhoneFrame>
        </div>
      </CaseSection>

      <CaseSection id="outcome" kicker="Reflection" title="What I'd test before believing any of it">
        <TakeawayList
          items={[
            "The core assumption — that people will answer three questions before seeing options — needs a prototype test against the control everyone knows: just opening a streaming app.",
            "The blend is the riskiest promise. I'd test whether 'here's why this fits both of you' reads as fair or as presumptuous, especially when one person's mood clearly lost the negotiation.",
            "Curtain time could be the feature people love or the one they uninstall over. I'd A/B soft framing ('rolling in 5:00') against none, and watch for the pause-hold being used as a silent veto.",
            "What this project is in my portfolio: proof I can design consumer experiences with personality, write interface copy with a voice, and keep an opinionated concept honest about being one.",
          ]}
        />
      </CaseSection>

      <NextCase current="marquee" />
    </article>
  );
}
