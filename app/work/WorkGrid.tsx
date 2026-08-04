"use client";

import { useState } from "react";
import { caseStudies, workCategories } from "@/data/caseStudies";
import ProjectCard from "@/components/ProjectCard";

export default function WorkGrid() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? caseStudies : caseStudies.filter((c) => c.categories.includes(active));

  return (
    <>
      <div role="group" aria-label="Filter case studies" className="mt-10 flex flex-wrap gap-2">
        {workCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "border-gold bg-gold/10 text-gold"
                : "border-line text-paper-dim hover:border-line-strong hover:text-paper"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {visible.length} case {visible.length === 1 ? "study" : "studies"}
        {active !== "All" ? ` · ${active}` : ""}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {visible.map((study) => (
          <ProjectCard key={study.slug} study={study} />
        ))}
      </div>
    </>
  );
}
