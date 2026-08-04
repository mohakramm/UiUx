/*
  Hand-drawn SVG vignettes used as case-study thumbnails.
  Kept in code (no image files) so they stay crisp, themeable, and fast.
*/

export default function CardArt({ slug }: { slug: string }) {
  switch (slug) {
    case "venn":
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Radar-style discovery screen sketch for Venn" className="h-full w-full">
          <rect width="320" height="180" fill="var(--ink-3)" />
          {[70, 50, 30].map((r) => (
            <circle key={r} cx="160" cy="92" r={r} fill="none" stroke="var(--line-strong)" strokeWidth="1" />
          ))}
          <circle cx="160" cy="92" r="70" fill="none" stroke="var(--gold)" strokeWidth="1" strokeDasharray="3 6" opacity="0.5" />
          <circle cx="160" cy="92" r="7" fill="var(--gold)" />
          <circle cx="205" cy="60" r="5" fill="var(--rose)" opacity="0.9" />
          <circle cx="118" cy="120" r="5" fill="var(--paper-dim)" opacity="0.8" />
          <circle cx="130" cy="55" r="5" fill="var(--paper-dim)" opacity="0.5" />
          <rect x="88" y="146" width="144" height="18" rx="9" fill="var(--ink)" stroke="var(--line-strong)" />
          <circle cx="100" cy="155" r="4" fill="var(--sage)" />
          <text x="112" y="158" fill="var(--paper-dim)" fontSize="9" fontFamily="var(--font-inter)">
            Visible for 45 min
          </text>
        </svg>
      );
    case "exam-schedule":
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="A messy PDF turning into a clean exam schedule" className="h-full w-full">
          <rect width="320" height="180" fill="var(--ink-3)" />
          <rect x="26" y="30" width="100" height="122" rx="6" fill="var(--ink)" stroke="var(--line-strong)" />
          {[46, 58, 70, 82, 94, 106, 118, 130].map((y, i) => (
            <rect key={y} x="36" y={y} width={i % 3 === 0 ? 80 : 62 + (i % 4) * 5} height="4" rx="2" fill="var(--muted)" opacity="0.5" />
          ))}
          <text x="40" y="26" fill="var(--muted)" fontSize="9" fontFamily="var(--font-inter)">exams.pdf</text>
          <path d="M140 91h34m0 0-8-8m8 8-8 8" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {[38, 78, 118].map((y, i) => (
            <g key={y}>
              <rect x="192" y={y} width="102" height="30" rx="6" fill="var(--ink)" stroke={i === 0 ? "var(--sage)" : "var(--line-strong)"} />
              <rect x="200" y={y + 9} width="6" height="12" rx="2" fill="var(--sage)" opacity={1 - i * 0.28} />
              <rect x="214" y={y + 8} width="52" height="4" rx="2" fill="var(--paper-dim)" />
              <rect x="214" y={y + 18} width="34" height="4" rx="2" fill="var(--muted)" />
            </g>
          ))}
        </svg>
      );
    case "version-history":
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="A version history timeline with restore points" className="h-full w-full">
          <rect width="320" height="180" fill="var(--ink-3)" />
          <line x1="60" y1="34" x2="60" y2="150" stroke="var(--line-strong)" strokeWidth="1.5" />
          {[
            { y: 44, label: "Today, 4:20 PM", active: true },
            { y: 84, label: "Today, 1:05 PM", active: false },
            { y: 124, label: "Yesterday, 9:12 PM", active: false },
          ].map((v) => (
            <g key={v.y}>
              <circle cx="60" cy={v.y} r="6" fill={v.active ? "var(--blue)" : "var(--ink)"} stroke="var(--blue)" strokeWidth="1.5" />
              <rect x="80" y={v.y - 14} width="186" height="30" rx="6" fill="var(--ink)" stroke={v.active ? "var(--blue)" : "var(--line-strong)"} />
              <text x="90" y={v.y - 1} fill="var(--paper-dim)" fontSize="9" fontFamily="var(--font-inter)">{v.label}</text>
              <text x="90" y={v.y + 10} fill="var(--muted)" fontSize="8" fontFamily="var(--font-inter)">
                {v.active ? "Current version" : "Preview · Restore"}
              </text>
            </g>
          ))}
        </svg>
      );
    case "marquee":
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="A warm movie-night title card for Marquee" className="h-full w-full">
          <rect width="320" height="180" fill="#f4ecdd" />
          <rect x="24" y="24" width="272" height="132" rx="10" fill="none" stroke="#3a2f3c" strokeWidth="1.5" />
          {Array.from({ length: 12 }).map((_, i) => (
            <circle key={i} cx={40 + i * 22} cy="34" r="2.5" fill="#c2472e" opacity={i % 2 ? 0.9 : 0.45} />
          ))}
          <text x="160" y="82" textAnchor="middle" fill="#3a2f3c" fontSize="26" fontFamily="var(--font-fraunces)" fontWeight="600">
            Tonight
          </text>
          <text x="160" y="104" textAnchor="middle" fill="#8a6f52" fontSize="10" fontFamily="var(--font-inter)" letterSpacing="2">
            COZY · FUNNY · UNDER 2H
          </text>
          <rect x="106" y="120" width="108" height="20" rx="10" fill="#c2472e" />
          <text x="160" y="133" textAnchor="middle" fill="#f4ecdd" fontSize="9" fontFamily="var(--font-inter)" fontWeight="600">
            Build our lineup
          </text>
        </svg>
      );
    default:
      return null;
  }
}
