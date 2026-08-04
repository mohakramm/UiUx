import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import { CaseHero, CaseNav, CaseSection, DecisionCard, NextCase, TakeawayList } from "@/components/case/CaseShell";
import PhoneFrame from "@/components/case/PhoneFrame";
import { ArtifactFrame } from "@/components/ui";
import Reveal from "@/components/Reveal";

const study = caseStudies.find((c) => c.slug === "venn")!;

export const metadata: Metadata = {
  title: "Venn — Proximity Social Discovery",
  description:
    "A self-initiated product design case study: making nearby social discovery feel safe, opt-in, and low-pressure. Privacy as the core product feature.",
};

const navItems = [
  { href: "#summary", label: "Summary" },
  { href: "#problem", label: "Problem" },
  { href: "#users", label: "Users" },
  { href: "#constraints", label: "Constraints" },
  { href: "#flows", label: "Flows" },
  { href: "#decisions", label: "Decisions" },
  { href: "#designs", label: "Final designs" },
  { href: "#edges", label: "Edge cases" },
  { href: "#outcome", label: "Outcome" },
];

const decisions = [
  {
    title: "Visibility is a session, not a setting",
    decision:
      "You're invisible by default. Going visible is a deliberate act with a timer — 45 minutes, then it expires on its own.",
    why:
      "A setting you turned on last month is a setting you forgot. A session you started ten minutes ago is a choice you remember making. It reframes discovery from surveillance to intention.",
    tradeoff:
      "Fewer people are discoverable at any moment, which shrinks the pool. I chose trust over liquidity — a smaller radar you believe beats a big one you don't.",
  },
  {
    title: "Distance bands, never a map pin",
    decision:
      "People appear as 'within 100 m' or 'within 250 m' on an abstract radar — no map, no pin, no direction arrow.",
    why:
      "An exact location is a safety hazard the moment one user has bad intent. Bands give enough signal to say 'they're at this event' without enabling anyone to find a specific person.",
    tradeoff:
      "You can't navigate to someone, which makes meeting slightly harder. That friction is the feature: contact happens through mutual agreement, not tracking.",
  },
  {
    title: "Double opt-in, with a silent decline",
    decision:
      "A 'hello' request opens chat only if accepted. Declining is silent — the sender never sees a rejection, the request just fades after a while.",
    why:
      "The core emotional risk isn't distance, it's rejection in a shared physical space. If declining felt loud, nobody nearby would dare decline — or dare send.",
    tradeoff:
      "Senders lose certainty ('did they see it?'). Ambiguity is gentler than a read receipt on rejection from someone standing twenty metres away.",
  },
  {
    title: "Notifications written for a phone lying on a table",
    decision:
      "Push copy never names the app's purpose or the other person: 'Someone said hi 👋' instead of 'Maya (150 m away) wants to meet you.'",
    why:
      "Discovery apps get opened in public. The lock screen is a UI surface other people can read; discretion there is a privacy feature, same as encryption.",
    tradeoff:
      "Vaguer notifications get fewer taps. Acceptable — the tap this app needs is a considered one, not a reflexive one.",
  },
  {
    title: "Check-ins instead of open-ended chat",
    decision:
      "Chat nudges toward a structured next step: a 'check-in' card proposing a public spot and a short window ('Coffee counter, 15 min?').",
    why:
      "The app's whole job is converting digital hello into low-pressure real-world contact. Public place + short duration + explicit consent lowers the stakes for both people.",
    tradeoff:
      "It's opinionated — some users just want to chat. But an app that optimizes for endless chat becomes the detached experience Venn exists to replace.",
  },
];

function DiscoverScreen() {
  return (
    <div className="flex h-full flex-col bg-ink px-4 py-4 text-paper">
      <div className="flex items-center justify-between">
        <span className="font-display text-lg font-semibold">Venn</span>
        <span className="flex items-center gap-1.5 rounded-full border border-sage/40 bg-sage/10 px-2.5 py-1 text-[0.6rem] font-semibold text-sage">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" /> Visible · 43 min
        </span>
      </div>
      <div className="relative mx-auto mt-5 aspect-square w-full max-w-[190px]">
        {[100, 72, 44].map((size) => (
          <div
            key={size}
            className="absolute rounded-full border border-line"
            style={{ inset: `${(100 - size) / 2}%` }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_18px_rgba(214,171,99,0.6)]" />
        <div className="absolute left-[68%] top-[26%] h-2.5 w-2.5 rounded-full bg-rose" />
        <div className="absolute left-[30%] top-[62%] h-2.5 w-2.5 rounded-full bg-paper-dim" />
        <div className="absolute left-[44%] top-[20%] h-2.5 w-2.5 rounded-full bg-paper-dim opacity-50" />
      </div>
      <p className="mt-2 text-center text-[0.6rem] text-muted">3 people visible near you</p>
      <div className="mt-3 rounded-xl border border-line bg-ink-2 p-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold">Maya</p>
          <p className="text-[0.6rem] text-muted">within 150 m</p>
        </div>
        <p className="mt-1 text-[0.62rem] text-paper-dim">2 shared interests · at this event</p>
        <div className="mt-2 flex gap-1.5">
          <span className="rounded-full bg-ink-3 px-2 py-0.5 text-[0.55rem] text-paper-dim">Film</span>
          <span className="rounded-full bg-ink-3 px-2 py-0.5 text-[0.55rem] text-paper-dim">Design</span>
        </div>
      </div>
      <div className="mt-auto flex justify-around border-t border-line pt-3 text-[0.55rem] text-muted">
        <span className="text-gold">Discover</span>
        <span>Requests</span>
        <span>Chats</span>
        <span>You</span>
      </div>
    </div>
  );
}

function RequestScreen() {
  return (
    <div className="flex h-full flex-col bg-ink px-4 py-4 text-paper">
      <p className="text-[0.6rem] text-muted">‹ Back to Discover</p>
      <div className="mt-4 rounded-2xl border border-line bg-ink-2 p-4">
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-rose/70 to-gold/60" />
        <p className="mt-3 font-display text-base font-semibold">Maya</p>
        <p className="text-[0.62rem] text-muted">within 150 m · visible for 20 more min</p>
        <p className="mt-2 text-[0.65rem] leading-relaxed text-paper-dim">
          “Here for the film society mixer. Will absolutely rank every Nora Ephron movie if asked.”
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Romcoms", "UI design", "Coffee"].map((t) => (
            <span key={t} className="rounded-full bg-ink-3 px-2 py-0.5 text-[0.55rem] text-paper-dim">
              {t}
            </span>
          ))}
        </div>
      </div>
      <button className="mt-4 rounded-full bg-gold py-2.5 text-xs font-semibold text-ink">Say hello 👋</button>
      <p className="mt-3 text-center text-[0.58rem] leading-relaxed text-muted">
        Maya can accept or quietly pass. You&apos;ll only hear back if it&apos;s a yes.
      </p>
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="flex h-full flex-col bg-ink px-4 py-4 text-paper">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-rose/70 to-gold/60" />
        <div>
          <p className="text-xs font-semibold">Maya</p>
          <p className="text-[0.55rem] text-sage">Connected · both visible</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-ink-3 px-3 py-2 text-[0.65rem] text-paper-dim">
          okay ranking: You&apos;ve Got Mail, then When Harry Met Sally
        </div>
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-gold/20 px-3 py-2 text-[0.65rem]">
          bold. respectfully wrong, but bold
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-gold/40 bg-gold/10 p-3">
        <p className="text-[0.6rem] font-semibold text-gold">Check-in suggestion</p>
        <p className="mt-1 text-[0.62rem] text-paper-dim">Coffee counter by the entrance · next 15 min</p>
        <div className="mt-2 flex gap-2">
          <span className="rounded-full bg-gold px-3 py-1 text-[0.55rem] font-semibold text-ink">I&apos;m in</span>
          <span className="rounded-full border border-line px-3 py-1 text-[0.55rem] text-paper-dim">Not now</span>
        </div>
      </div>
      <p className="mt-auto text-center text-[0.55rem] text-muted">Meet in public spaces. Report & block anytime.</p>
    </div>
  );
}

const flowSteps = [
  { label: "Onboard", note: "interests + boundaries, no photos required yet" },
  { label: "Go visible", note: "explicit, timed session" },
  { label: "Discover", note: "radar with distance bands" },
  { label: "View profile", note: "human context, not stats" },
  { label: "Say hello", note: "one request, no follow-ups" },
  { label: "Accept", note: "double opt-in opens chat" },
  { label: "Check in", note: "structured, public, short" },
];

export default function VennPage() {
  return (
    <article>
      <CaseHero study={study} />
      <CaseNav items={navItems} />

      <CaseSection id="summary" kicker="Cold open" title="The 60-second version" wide>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "The problem",
              text: "People want to meet people who are literally right there — at the same event, café, or campus — but approaching strangers is socially expensive, and existing apps are either detached (endless swiping) or invasive (live location).",
            },
            {
              label: "The bet",
              text: "If visibility is opt-in, temporary, and imprecise by design, nearby discovery stops feeling like being tracked and starts feeling like wearing a 'say hi to me' sticker — one you can take off.",
            },
            {
              label: "My role",
              text: "Everything, honestly labelled: product framing, UX flows, UI direction, and the technical architecture thinking (Supabase, presence, geohashing) that keeps the design buildable.",
            },
            {
              label: "Status",
              text: "Self-initiated concept, in progress. Flows and UI designed; validation plan written; prototype build is the next milestone. No real-user metrics yet — and none are claimed.",
            },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 70} className="rounded-2xl border border-line bg-ink-2 p-5">
              <p className="eyebrow text-gold">{b.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="problem" kicker="Setup & conflict" title="Nearby is the loneliest distance">
        <p>
          Every social app promises connection, and almost all of them route it through a feed of people
          who are somewhere else. Meanwhile the person twenty metres away — same event, same interests, same
          reason for being there — stays a stranger, because walking up to someone cold carries a social cost
          most of us won&apos;t pay.
        </p>
        <p>
          The apps that do try &quot;nearby&quot; usually fail in one of two directions. Either they&apos;re detached:
          swiping through profiles that happen to share a city with you. Or they&apos;re creepy: live location,
          map pins, &quot;last seen 40 m away.&quot; The first direction wastes proximity; the second weaponizes it.
        </p>
        <p>
          Venn is my exploration of the narrow lane between those failures: a discovery experience where being
          findable is something you <em>do</em> for a while, not something you <em>are</em>.
        </p>
      </CaseSection>

      <CaseSection id="users" kicker="Characters" title="Who this is for" wide>
        <p className="prose-measure">
          These profiles are assumption-based — drawn from my own campus and event experience, not formal
          research. The validation plan below is how I&apos;d test them.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              name: "The event-goer",
              who: "Student or young professional at a mixer, hackathon, or society night.",
              wants: "To leave having actually met someone, not just having attended.",
              fears: "Approaching a group cold and getting the polite freeze-out.",
            },
            {
              name: "The new-in-town",
              who: "Just moved for school, co-op, or work. Social graph is three coworkers deep.",
              wants: "Low-stakes ways to turn adjacent strangers into acquaintances.",
              fears: "Apps that feel like dating apps when what they want is people.",
            },
            {
              name: "The cautious optimist",
              who: "Interested in meeting people but has read every location-app horror story.",
              wants: "Real control: who sees them, when, and how precisely.",
              fears: "Any interface where their location outlives their intent.",
            },
          ].map((u, i) => (
            <Reveal key={u.name} delay={i * 80} className="rounded-2xl border border-line bg-ink-2 p-6">
              <h3 className="font-display text-lg font-semibold">{u.name}</h3>
              <p className="mt-2 text-sm text-paper-dim">{u.who}</p>
              <p className="mt-3 text-sm text-paper-dim">
                <span className="font-semibold text-sage">Wants: </span>
                {u.wants}
              </p>
              <p className="mt-2 text-sm text-paper-dim">
                <span className="font-semibold text-rose">Fears: </span>
                {u.fears}
              </p>
            </Reveal>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="constraints" kicker="The rules of the world" title="Constraints I designed inside">
        <TakeawayList
          items={[
            "Safety before growth: no exact coordinates ever leave the device — proximity is computed against coarse geohash buckets, so the server can say 'near' without knowing 'where.'",
            "Opt-in visibility with expiry as a hard rule, not a preference buried in settings.",
            "Mobile-first and glanceable: this gets used standing in a crowd, one-handed, half a bar of signal.",
            "Real-time expectations on indie infrastructure: presence, requests, and chat modelled on Supabase Realtime channels with row-level security doing the privacy enforcement — the design can't assume a big-company backend.",
            "A two-sided cold start: the radar is only interesting if others are on it, so the design leans on event and venue contexts where density already exists.",
          ]}
        />
      </CaseSection>

      <CaseSection id="flows" kicker="Storyboard" title="The core flow, beat by beat" wide>
        <ArtifactFrame label="User flow — designed artifact, not a shipped product screen">
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {flowSteps.map((step, i) => (
              <li key={step.label} className="relative rounded-xl border border-line bg-ink p-3">
                <p className="eyebrow text-gold">{i + 1}</p>
                <p className="mt-1 text-sm font-semibold text-paper">{step.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{step.note}</p>
              </li>
            ))}
          </ol>
        </ArtifactFrame>
        <p className="prose-measure mt-6">
          The flow is deliberately short on the happy path — seven beats from install to a real-world hello —
          but every beat has an exit. You can go invisible mid-session, withdraw a hello, or decline a check-in,
          and none of those exits are announced to the other person.
        </p>
      </CaseSection>

      <CaseSection id="decisions" kicker="Key design decisions" title="Five decisions that shaped Venn" wide>
        <ul className="grid gap-4 md:grid-cols-2">
          {decisions.map((d, i) => (
            <DecisionCard key={d.title} index={i} {...d} />
          ))}
        </ul>
      </CaseSection>

      <CaseSection id="designs" kicker="Final designs" title="The UI: dark, calm, unhurried" wide>
        <p className="prose-measure">
          The visual system borrows from places where strangers already feel comfortable — dim lighting, warm
          accents, nothing flashing for attention. Gold marks your own presence and actions; rose marks other
          people; sage is reserved for consent states. These are design mockups built in code for this case
          study, labelled as such.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <PhoneFrame label="Discover — radar with distance bands">
            <DiscoverScreen />
          </PhoneFrame>
          <PhoneFrame label="Profile — one hello, silent decline">
            <RequestScreen />
          </PhoneFrame>
          <PhoneFrame label="Chat — nudging toward a check-in">
            <ChatScreen />
          </PhoneFrame>
        </div>
      </CaseSection>

      <CaseSection id="edges" kicker="Deleted scenes" title="Edge cases and safety design">
        <TakeawayList
          items={[
            "Empty radar: the most common state in a young network. It never apologizes — it shows where visibility is likely to be worth it ('3 events near you this week') instead of a sad illustration.",
            "Harassment: block is instant and retroactive (deletes the conversation for the blocker), report is two taps, and a blocked person simply never sees you on the radar again — no error, no signal.",
            "Session expiry mid-conversation: chats survive visibility. Going invisible hides you from discovery, not from people you already said yes to — with a clear one-time explanation of exactly that.",
            "Location spoofing and lurking: rate-limited visibility sessions and no historical presence data; there is nothing to scrape because nothing precise is ever stored.",
            "Accessibility: distance bands are text, not just radar dots; every consent state has a written label; touch targets stay ≥44 px even inside the dense radar card.",
          ]}
        />
      </CaseSection>

      <CaseSection id="outcome" kicker="Resolution" title="Where it stands, honestly">
        <p>
          Venn is a concept in active design — there are no downloads, no users, and no metrics to report,
          so I won&apos;t invent any. What exists: the product framing, the flows, the UI direction you see here,
          and an architecture sketch that makes the privacy promises technically real rather than aspirational.
        </p>
        <p className="mt-4 font-semibold text-paper">What designing it taught me:</p>
        <TakeawayList
          items={[
            "Trust is a product feature with UI surface area — timers, bands, and silent declines are all trust made visible.",
            "Privacy constraints don't limit the design; they generate it. Almost every interesting decision above exists because of something the app refuses to know.",
            "Notification copy is interface design. The lock screen was the highest-stakes screen I worked on.",
          ]}
        />
        <p className="mt-6 font-semibold text-paper">Next steps:</p>
        <TakeawayList
          items={[
            "Build the interactive prototype and run hallway tests on the go-visible moment — does the timer read as safety or as pressure?",
            "Test the silent decline with both sender and receiver scripts; my assumption that ambiguity is kinder needs evidence.",
            "Pilot the density problem at one real event with a sign-up sheet — the two-sided cold start is the riskiest assumption in the whole concept.",
          ]}
        />
      </CaseSection>

      <NextCase current="venn" />
    </article>
  );
}
