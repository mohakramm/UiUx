// Base path when deployed to GitHub Pages project pages (e.g. "/UiUx").
// Set NEXT_PUBLIC_BASE_PATH in the deploy workflow; empty for local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public-asset path with the deploy base path. */
export const withBase = (path: string) => `${basePath}${path}`;

export const site = {
  name: "Ebaad Akram",
  role: "Software Engineering student",
  tagline: "I make complicated systems make sense.",
  location: "Ontario, Canada (Toronto / London)",
  email: "ebaadakram3@gmail.com",
  linkedin: "https://www.linkedin.com/in/meakram/",
  github: "https://github.com/mohakramm",
  devPortfolio: "https://eakram.dev",
  resumePath: withBase("/resume.pdf"),
  photoPath: withBase("/ebaad.jpg"),
  // Canonical URL of the deployed site (GitHub Pages).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mohakramm.github.io/UiUx",
};
