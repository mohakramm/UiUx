import PhoneFrame from "@/components/case/PhoneFrame";

/*
  Small interface studies, designed in code. Each one practices a pattern
  I care about: plans told simply, preferences captured lightly, and
  calm communication when things change.
*/

function ItineraryScreen() {
  return (
    <div className="flex h-full flex-col bg-paper px-4 py-4 text-ink">
      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">Day 3 of 7</p>
      <div className="mt-0.5 flex items-baseline justify-between">
        <p className="font-display text-xl font-semibold">Lisbon</p>
        <p className="text-[0.62rem] text-muted">Tue, May 12</p>
      </div>
      <div className="mt-2 flex gap-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className={`h-1 flex-1 rounded-full ${i < 2 ? "bg-lilac" : i === 2 ? "bg-accent" : "bg-line"}`} />
        ))}
      </div>

      <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-widest text-accent-deep">Up next</p>
      <div className="mt-1.5 rounded-xl border border-accent/40 bg-card p-3 shadow-sm">
        <div className="flex items-baseline justify-between">
          <p className="text-xs font-semibold">Tram 28 & Alfama walk</p>
          <p className="text-[0.62rem] font-semibold text-accent-deep">2:00 PM</p>
        </div>
        <p className="mt-1 text-[0.62rem] leading-relaxed text-ink-soft">
          Meet Marta by the Sé Cathedral steps · comfortable shoes
        </p>
      </div>

      <div className="mt-2 space-y-1.5">
        {[
          { time: "6:30", what: "Sunset at Miradouro da Graça" },
          { time: "8:00", what: "Dinner — A Cevicheria (booked)" },
        ].map((row) => (
          <div key={row.what} className="flex items-baseline gap-2 rounded-lg border border-line bg-card px-3 py-2">
            <p className="w-8 shrink-0 text-[0.6rem] font-semibold text-muted">{row.time}</p>
            <p className="text-[0.65rem] text-ink-soft">{row.what}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-lg bg-sage/15 px-3 py-2">
        <p className="text-[0.6rem] leading-relaxed text-ink-soft">
          <span className="font-semibold text-ink">One change:</span> tomorrow&apos;s pastry class moved to 10:30.
          Nothing else shifts.
        </p>
      </div>
    </div>
  );
}

function MovieNightScreen() {
  return (
    <div className="flex h-full flex-col bg-paper px-4 py-4 text-ink">
      <p className="font-display text-xl font-semibold">Tonight</p>
      <p className="text-[0.62rem] text-muted">Two of you · done by 11:15</p>

      <p className="mt-3 text-[0.6rem] font-semibold uppercase tracking-widest text-muted">The mood</p>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {[
          { label: "Cozy", on: true },
          { label: "Big feelings", on: false },
          { label: "Can't think", on: true },
          { label: "Edge of seat", on: false },
        ].map((chip) => (
          <span
            key={chip.label}
            className={`rounded-full border px-2.5 py-1 text-[0.6rem] font-medium ${
              chip.on ? "border-accent bg-accent text-paper" : "border-line-strong text-ink-soft"
            }`}
          >
            {chip.label}
          </span>
        ))}
      </div>

      <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-widest text-accent-deep">Your lineup</p>
      <div className="mt-1.5 space-y-1.5">
        {[
          { slot: "The warm-up", what: "One perfect sitcom episode", meta: "22 min" },
          { slot: "The feature", what: "A '90s romcom you somehow missed", meta: "96 min" },
        ].map((item) => (
          <div key={item.slot} className="rounded-xl border border-line bg-card p-3">
            <div className="flex items-center justify-between">
              <p className="text-[0.55rem] font-semibold uppercase tracking-widest text-muted">{item.slot}</p>
              <p className="text-[0.58rem] text-muted">{item.meta}</p>
            </div>
            <p className="mt-1 text-xs font-semibold">{item.what}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-center text-[0.6rem] text-muted underline">swap anything</p>

      <button className="mt-auto rounded-full bg-ink py-2.5 text-xs font-semibold text-paper">Lock it in</button>
    </div>
  );
}

function PlansChangeScreen() {
  return (
    <div className="flex h-full flex-col bg-paper px-4 py-5 text-ink">
      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">Change of plans</p>
      <p className="font-display mt-2 text-lg font-semibold leading-snug">
        Your 4:10 departure
        <br />
        is now <span className="text-accent-deep">5:25</span>.
      </p>
      <p className="mt-1 text-[0.65rem] text-ink-soft">Caught it early — here&apos;s what it means for you.</p>

      <div className="mt-4 space-y-1.5">
        {[
          { ok: true, text: "Your connection still works — 1h 40m to spare" },
          { ok: true, text: "Tonight's dinner reservation still fits" },
          { ok: false, text: "Airport pickup rebooked to 5:25 — done for you" },
        ].map((row) => (
          <div key={row.text} className="flex items-start gap-2 rounded-lg border border-line bg-card px-3 py-2">
            <span
              aria-hidden="true"
              className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${row.ok ? "bg-sage" : "bg-accent"}`}
            />
            <p className="text-[0.62rem] leading-relaxed text-ink-soft">{row.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto space-y-2">
        <button className="w-full rounded-full bg-accent py-2.5 text-xs font-semibold text-paper">
          See your updated day
        </button>
        <button className="w-full rounded-full border border-line-strong py-2.5 text-xs font-semibold text-ink">
          Talk to a person
        </button>
      </div>
    </div>
  );
}

const studies = [
  {
    label: "Itinerary — a week, at a glance",
    note: "Practicing: rendering a complex, multi-day plan as one calm, glanceable story — what's next gets the emphasis, changes get a quiet footnote instead of an alarm.",
    screen: <ItineraryScreen />,
  },
  {
    label: "Movie night — choosing, solved",
    note: "Practicing: capturing preferences in three taps instead of a questionnaire, then proposing a small editable plan — because browsing is the villain of every good evening in.",
    screen: <MovieNightScreen />,
  },
  {
    label: "Status — when plans change",
    note: "Practicing: delivering disruptive news calmly — lead with what it means, list what's handled, and always leave a door open to a human.",
    screen: <PlansChangeScreen />,
  },
];

export default function Explorations() {
  return (
    <div className="grid gap-10 sm:grid-cols-3">
      {studies.map((s) => (
        <div key={s.label} className="flex flex-col gap-4">
          <PhoneFrame label={s.label}>{s.screen}</PhoneFrame>
          <p className="text-sm leading-relaxed text-ink-soft">{s.note}</p>
        </div>
      ))}
    </div>
  );
}
