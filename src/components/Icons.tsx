type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconBook = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M12 6.2C10 4.6 7 4.3 4 5.1v13.2c3-.8 6-.5 8 1.1 2-1.6 5-1.9 8-1.1V5.1c-3-.8-6-.5-8 1.1Z" />
    <path d="M12 6.2v13.2" />
  </svg>
);

export const IconLeaf = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M5 20c4.5-1.5 10-6.5 13-15" />
    <path d="M9.5 13.5c-2.4-.3-4-1.9-4.4-4.3 2.5.2 4.1 1.8 4.4 4.3Z" />
    <path d="M13 10.2c-2.2-.5-3.5-2-3.7-4.3 2.3.4 3.6 1.9 3.7 4.3Z" />
    <path d="M12.4 11.6c.4-2.4 2-3.9 4.4-4.2-.2 2.5-1.8 4-4.4 4.2Z" />
  </svg>
);

export const IconCandle = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <rect x="9.2" y="10.5" width="5.6" height="9" rx="1" />
    <path d="M12 8.6V10" />
    <path d="M12 3.2c1.3 1.7 2.2 3 2.2 4.3a2.2 2.2 0 1 1-4.4 0c0-1.3.9-2.6 2.2-4.3Z" />
    <path d="M5.5 19.5h13" />
  </svg>
);

export const IconHouse = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="m4 10.8 8-6.8 8 6.8" />
    <path d="M6.2 9.5V19h11.6V9.5" />
    <path d="M10.2 19v-4.6h3.6V19" />
  </svg>
);

export const IconHeart = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M12 19.5S4.5 15 4.5 9.6C4.5 7 6.5 5 9 5c1.4 0 2.4.7 3 1.6C12.6 5.7 13.6 5 15 5c2.5 0 4.5 2 4.5 4.6 0 5.4-7.5 9.9-7.5 9.9Z" />
  </svg>
);

export const IconQuestion = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M9.6 9.4a2.5 2.5 0 1 1 3.5 2.4c-.8.4-1.1.9-1.1 1.8" />
    <path d="M12 16.6v.2" />
  </svg>
);

export const IconCompass = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.6 8.4-1.9 5.3-5.3 1.9 1.9-5.3 5.3-1.9Z" />
  </svg>
);

export const IconSprout = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M12 20v-7.5" />
    <path d="M12 13C12 9.2 9.2 7 5 7c0 4.2 2.8 6 7 6Z" />
    <path d="M12 11c0-3.4 2.4-5.3 6-5.3 0 3.4-2.4 5.3-6 5.3Z" />
  </svg>
);

export const IconCheck = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="m5.5 12.5 4.3 4.3L18.5 7.5" />
  </svg>
);

export const IconChevronLeft = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M14.5 5.5 8 12l6.5 6.5" />
  </svg>
);

export const IconChevronRight = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
  </svg>
);

export const IconArrowRight = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </svg>
);

export const IconArrowDown = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M12 4.5v15" />
    <path d="m6 13.5 6 6 6-6" />
  </svg>
);

export const IconX = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconList = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <path d="M9 6.5h10M9 12h10M9 17.5h10" />
    <path d="M5 6.5h.2M5 12h.2M5 17.5h.2" strokeWidth="2.4" />
  </svg>
);

export const IconClock = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconSpark = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 3.5 13.9 10 20.5 12 13.9 14 12 20.5 10.1 14 3.5 12 10.1 10 12 3.5Z" />
  </svg>
);

/** Ramo de oliveira decorativo (traço fino, uso ornamental) */
export const OliveBranch = ({ className }: IconProps) => (
  <svg viewBox="0 0 220 64" className={className} fill="none" aria-hidden="true">
    <path
      d="M10 52C70 46 150 30 210 12"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <g fill="currentColor">
      <path d="M52 44c-3-6-1-12 5-16 3 6 1 12-5 16Z" opacity=".85" />
      <path d="M60 38c3-6 9-9 15-8-3 6-9 9-15 8Z" opacity=".7" />
      <path d="M96 35c-3-6-1-12 5-16 3 6 1 12-5 16Z" opacity=".85" />
      <path d="M105 29c3-6 9-9 15-8-3 6-9 9-15 8Z" opacity=".7" />
      <path d="M140 26c-3-6-1-12 5-16 3 6 1 12-5 16Z" opacity=".85" />
      <path d="M150 20c3-6 9-9 15-8-3 6-9 9-15 8Z" opacity=".7" />
      <path d="M184 17c-2.5-5-1-10 4-13.5 2.5 5 1 10-4 13.5Z" opacity=".85" />
    </g>
  </svg>
);

/** Selo circular giratório com texto na borda */
export const RotatingBadge = ({ className }: IconProps) => (
  <div className={className}>
    <svg viewBox="0 0 120 120" className="h-full w-full anim-spin-slow">
      <defs>
        <path id="badge-circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
      </defs>
      <circle cx="60" cy="60" r="59" fill="#2C4636" />
      <circle cx="60" cy="60" r="33" fill="none" stroke="#C9A45C" strokeWidth="0.8" opacity=".7" />
      <text
        fontSize="9.6"
        letterSpacing="2.1"
        fill="#C9A45C"
        fontFamily="'Source Sans 3', sans-serif"
        fontWeight="600"
      >
        <textPath href="#badge-circ">DEVOCIONAL · 7 DIAS · PAZ EM CASA ·</textPath>
      </text>
      <text
        x="60"
        y="74"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontStyle="italic"
        fontSize="40"
        fill="#F4EDDA"
      >
        7
      </text>
    </svg>
  </div>
);
