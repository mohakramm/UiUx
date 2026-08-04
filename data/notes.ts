export type FieldNote = {
  slug: string;
  title: string;
  kicker: string;
  teaser: string;
  paragraphs: string[];
  lesson: string;
};

export const fieldNotes: FieldNote[] = [
  {
    slug: "boarding-pass",
    title: "The boarding pass is quietly brilliant",
    kicker: "Information design",
    teaser:
      "A scrap of paper that gets a stressed human through an airport in three glances. Most dashboards should be jealous.",
    paragraphs: [
      "Think about the state you're in when you read a boarding pass: late, over-caffeinated, holding a bag with one hand and a passport with the other. The pass is designed for exactly that person. First glance: gate. Second glance, at the gate: seat and boarding group. Third glance, in the jet bridge: seat again, bigger than anything else around it.",
      "The genius isn't the typography — it's the ordering. The information is arranged by when you'll need it, not by how important it is to the airline. The fare class code the airline cares deeply about is tiny; the gate you care desperately about is huge. Compare that to the average app dashboard, which is usually a org chart wearing a UI: whatever the loudest team owns goes on top.",
    ],
    lesson: "Order information by the reader's moment, not the organization's priorities.",
  },
  {
    slug: "skip-intro",
    title: "“Skip Intro” respects your time — that's the whole trick",
    kicker: "Interaction design",
    teaser:
      "One button, visible for eight seconds, that quietly admits what viewers actually do. It might be the most honest UI of the decade.",
    paragraphs: [
      "By episode nine of a rewatch, nobody is savoring the opening credits. Streaming services knew this from their own data for years — people were scrubbing past intros manually, badly, overshooting into the first scene. “Skip Intro” is the interface admitting the truth: we know what you're doing, here's a cleaner way to do it.",
      "Notice everything it doesn't do. It doesn't autoplay past the intro (some people love the theme song — timing is personal). It doesn't ask for a setting. It doesn't nag. It appears exactly when it's relevant, waits a few seconds, and leaves. A feature that sides with the viewer even though the intro is, technically, the product's own content.",
    ],
    lesson: "The best features admit what users actually do, then make that thing effortless — without forcing it.",
  },
  {
    slug: "cold-opens",
    title: "What sitcom cold opens know about onboarding",
    kicker: "First impressions",
    teaser:
      "A cold open never explains the show. It drops you into a moment good enough to make you want the rest. Most app onboarding does the opposite.",
    paragraphs: [
      "A great cold open — think of any beloved sitcom — hands you a tiny, complete story in ninety seconds. No character bios, no premise recap, no “here's how to watch this show.” You're trusted to catch up, and the catching up is half the fun. By the title card, you're in.",
      "Now count the screens in a typical app's onboarding: welcome slide, feature slide, another feature slide, permissions wall, account wall. It's the recap nobody asked for, standing between the user and the moment that would actually sell them. The apps that get it right do what the cold open does: put you in the middle of the real thing immediately and explain only what the moment requires.",
    ],
    lesson: "Don't introduce the product. Get people to the good part, and let the good part introduce it.",
  },
  {
    slug: "undo-is-a-promise",
    title: "Undo is a promise, not a button",
    kicker: "From experience",
    teaser:
      "I watched support tickets teach a product team what users were afraid of. Building the fix changed how I think about every interface since.",
    paragraphs: [
      "During my software engineering internship at a resume-builder company, the support queue kept collecting versions of one plea: “it looked better before, get it back.” Nothing was crashing. People were losing good states to their own edits — and once burned, they edited timidly, or not at all. Fear had become a usability problem.",
      "I built the version history feature that became the safety net, and the tickets about lost edits dropped by about 40%. But the number I still think about is quieter: people don't need to use a safety net often. They need to know it's there. The presence of a guaranteed way back changes how bravely someone works, the same way a spotter changes how much weight a lifter will try.",
    ],
    lesson: "Safety changes behavior before it's ever used. Design the promise, not just the mechanism.",
  },
  {
    slug: "forms-are-conversations",
    title: "A good form is a good conversation",
    kicker: "The analyst's corner",
    teaser:
      "Every form is requirements-gathering with a stranger. The difference between an interrogation and a conversation is sequencing and tone.",
    paragraphs: [
      "I've spent internship time on the data side, cleaning up what forms collect, so I've seen where bad questions go to die: free-text fields full of “N/A”, dates in four formats, a “How did you hear about us?” nobody answers honestly. A form that asks badly produces data that analyzes badly. Garbage in isn't a user failure; it's a design choice upstream.",
      "Good forms behave like a considerate interviewer. They ask one thing at a time. They never ask what they could infer. They explain why they're asking when the question feels personal. And they react to answers — hiding what's now irrelevant, remembering what was already said. People forgive being asked; they resent being processed.",
    ],
    lesson: "Ask like you'll have to analyze the answers — because someone will.",
  },
];
