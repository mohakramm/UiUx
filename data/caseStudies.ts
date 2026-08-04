export type CaseStudyMeta = {
  slug: string;
  episode: string;
  title: string;
  name: string;
  logline: string;
  role: string;
  timeline: string;
  status: "Self-initiated concept" | "Shipped project" | "Real project + user testing" | "Concept case study";
  kind: "real" | "concept";
  categories: string[];
  skills: string[];
  accent: "gold" | "rose" | "sage" | "blue";
};

export const caseStudies: CaseStudyMeta[] = [
  {
    slug: "venn",
    episode: "EP. 01",
    title: "Venn",
    name: "Venn — Proximity Social Discovery",
    logline:
      "Meeting someone nearby shouldn't feel like a risk. Designing a social discovery app where privacy is the feature, not the fine print.",
    role: "Product design, UX flows, UI direction, systems thinking",
    timeline: "2025 – present · in progress",
    status: "Self-initiated concept",
    kind: "concept",
    categories: ["Mobile App", "Product Strategy", "UX Research"],
    skills: ["User flows", "Privacy-first UX", "UI system", "Interaction design", "Supabase architecture"],
    accent: "gold",
  },
  {
    slug: "exam-schedule",
    episode: "EP. 02",
    title: "Exam Schedule Tool",
    name: "From PDF to Plan — Western Exam Schedule Tool",
    logline:
      "Every term, students hand-copy exam times out of a giant PDF and hope they got it right. I built the tool that does it in one upload — then user-tested it.",
    role: "Design + build (solo): workflow design, parser, user acceptance testing",
    timeline: "2024 · shipped CLI tool + next-iteration UI concept",
    status: "Real project + user testing",
    kind: "real",
    categories: ["Web App", "UX Research", "Technical Product"],
    skills: ["Workflow design", "Error prevention", "User testing", "Python", "Information design"],
    accent: "sage",
  },
  {
    slug: "version-history",
    episode: "EP. 03",
    title: "Version History",
    name: "Version History at Resume Inc.",
    logline:
      "People were afraid of breaking their own resumes. As a software engineering intern, I built the safety net — and support tickets about lost edits dropped 40%.",
    role: "Software engineering intern: built the feature, shaped its UX",
    timeline: "Summer 2024 · shipped to production",
    status: "Shipped project",
    kind: "real",
    categories: ["Web App", "UI Design", "Technical Product"],
    skills: ["Interaction design", "React", "Undo/safety patterns", "UX writing", "Working with support data"],
    accent: "blue",
  },
  {
    slug: "marquee",
    episode: "EP. 04",
    title: "Marquee",
    name: "Marquee — A Better Movie Night",
    logline:
      "“What should we watch?” is a 40-minute argument with no winner. A concept app that turns picking a movie into the best part of the night.",
    role: "Concept, research framing, IA, UI design",
    timeline: "2025 · self-initiated concept",
    status: "Concept case study",
    kind: "concept",
    categories: ["Mobile App", "UI Design", "Product Strategy"],
    skills: ["Preference capture", "Recommendation UX", "Editorial art direction", "IA", "UX writing"],
    accent: "rose",
  },
];

export const workCategories = [
  "All",
  "Mobile App",
  "Web App",
  "UX Research",
  "UI Design",
  "Product Strategy",
  "Technical Product",
];
