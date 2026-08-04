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
      "A scrap of paper that gets a stressed person through an airport in three glances. Most dashboards should be jealous.",
    paragraphs: [
      "Think about the state you're in when you read a boarding pass. You're late, you're holding a bag in one hand and a passport in the other, and you just need to know where to go. The pass is built for exactly that person. First glance gives you the gate. Second glance, once you're at the gate, gives you your seat and boarding group. Third glance, in the jet bridge, is your seat number again, printed bigger than almost anything else.",
      "The clever part isn't the typography, it's the ordering. The information is arranged by when you'll need it, not by how important it is to the airline. The fare class code that the airline cares deeply about is tiny. The gate you desperately care about is huge. Compare that to the average app dashboard, where whatever the loudest team owns usually goes on top.",
    ],
    lesson: "Order information by the reader's moment, not the organization's priorities.",
  },
  {
    slug: "skip-intro",
    title: "“Skip Intro” respects your time, and that's the whole trick",
    kicker: "Interaction design",
    teaser:
      "One button, visible for a few seconds, that quietly admits what viewers actually do. It might be the most honest UI of the decade.",
    paragraphs: [
      "By episode nine of a rewatch, nobody is savoring the opening credits. Streaming services could see this in their own data for years. People were scrubbing past intros manually, usually badly, overshooting into the first scene. “Skip Intro” is the interface admitting the truth: we know what you're doing, so here's a cleaner way to do it.",
      "Notice everything it doesn't do. It doesn't autoplay past the intro, because some people love the theme song and timing is personal. It doesn't ask for a setting. It doesn't nag. It shows up exactly when it's relevant, waits a few seconds, and leaves. It's a feature that sides with the viewer, even though the intro is technically the product's own content.",
    ],
    lesson: "The best features admit what users actually do, then make that thing effortless without forcing it.",
  },
  {
    slug: "cold-opens",
    title: "What sitcom cold opens know about onboarding",
    kicker: "First impressions",
    teaser:
      "A cold open never explains the show. It drops you into a moment good enough to make you want the rest. Most app onboarding does the opposite.",
    paragraphs: [
      "A great cold open hands you a tiny, complete story in ninety seconds. There are no character bios, no premise recap, no instructions on how to watch the show. You're trusted to catch up, and catching up is half the fun. By the title card, you're in.",
      "Now count the screens in a typical app's onboarding: a welcome slide, a feature slide, another feature slide, a permissions wall, an account wall. It's a recap nobody asked for, standing between the user and the moment that would actually win them over. The apps that get it right do what the cold open does. They put you in the middle of the real thing right away and explain only what the moment requires.",
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
      "During my software engineering internship at a resume builder company, the support queue kept collecting versions of the same plea: it looked better before, please get it back. Nothing was crashing. People were losing good versions of their resumes to their own edits, and once it happened to them, they started editing timidly or not at all. Fear had become a usability problem.",
      "I built the version history feature that became the safety net, and tickets about lost edits dropped by about 40%. But the thing I still think about is quieter than the number. People don't need to use a safety net very often. They just need to know it's there. A guaranteed way back changes how bravely someone works, the same way a spotter changes how much weight a lifter will try.",
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
      "I've spent internship time on the data side, cleaning up what forms collect, so I've seen where bad questions go to die. Free-text fields full of “N/A”. Dates in four formats. A “How did you hear about us?” that nobody answers honestly. A form that asks badly produces data that analyzes badly, and that isn't the user's fault. It's a design choice made upstream.",
      "Good forms behave like a considerate interviewer. They ask one thing at a time. They never ask what they could figure out on their own. They explain why they're asking when a question feels personal. And they react to your answers, hiding what no longer applies and remembering what you already said. People forgive being asked questions. They resent being processed.",
    ],
    lesson: "Ask like you'll have to analyze the answers, because someone will.",
  },
];
