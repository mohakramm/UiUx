import type { ReactNode } from "react";

/**
 * A minimal phone chrome for presenting UI mockups built in code.
 * The `label` names the screen; captions elsewhere state these are
 * design mockups, not shipped product screenshots.
 */
export default function PhoneFrame({
  label,
  children,
  light = false,
}: {
  label: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div
        className={`w-full max-w-[260px] overflow-hidden rounded-[2rem] border shadow-2xl ${
          light ? "border-[#d8cdbb] bg-[#faf5ea]" : "border-line-strong bg-ink"
        }`}
      >
        <div className="flex justify-center pt-2 pb-1">
          <div className={`h-1 w-16 rounded-full ${light ? "bg-[#d8cdbb]" : "bg-ink-3"}`} />
        </div>
        <div className="aspect-[9/17] overflow-hidden">{children}</div>
      </div>
      <p className="text-xs uppercase tracking-[0.15em] text-muted">{label}</p>
    </div>
  );
}
