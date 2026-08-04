import type { ReactNode } from "react";

/**
 * A minimal phone chrome for presenting interface studies built in code.
 * The `label` names the screen; captions elsewhere state these are
 * concept studies, not shipped product screenshots.
 */
export default function PhoneFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="w-full max-w-[260px] overflow-hidden rounded-[2rem] border border-line-strong bg-card shadow-[0_18px_40px_-18px_rgba(54,44,56,0.35)]">
        <div className="flex justify-center pt-2 pb-1">
          <div className="h-1 w-16 rounded-full bg-line-strong" />
        </div>
        <div className="aspect-[9/17] overflow-hidden">{children}</div>
      </div>
      <p className="text-xs uppercase tracking-[0.15em] text-muted">{label}</p>
    </div>
  );
}
