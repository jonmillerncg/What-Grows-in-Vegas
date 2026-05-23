// Inline SVG desert sunset illustration — used in the About section
export default function DesertSunset() {
  return (
    <svg
      viewBox="0 0 420 380"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md mx-auto"
      role="img"
      aria-label="Desert sunset illustration with saguaro cactus and layered mesas"
    >
      <defs>
        <linearGradient id="sunsetSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B3A2D" />
          <stop offset="35%" stopColor="#2D1F0A" />
          <stop offset="65%" stopColor="#A84B2F" />
          <stop offset="85%" stopColor="#C4892A" />
          <stop offset="100%" stopColor="#E8B040" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="52%" cy="72%" r="30%">
          <stop offset="0%" stopColor="#FFF0B0" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#E8B040" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#A84B2F" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mesa1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A1A08" />
          <stop offset="100%" stopColor="#1A0C04" />
        </linearGradient>
        <linearGradient id="mesa2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A2510" />
          <stop offset="100%" stopColor="#2A1208" />
        </linearGradient>
        <linearGradient id="cactusGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1B3A2D" />
          <stop offset="50%" stopColor="#244535" />
          <stop offset="100%" stopColor="#1A3028" />
        </linearGradient>
        <clipPath id="sunsetFrame">
          <rect width="420" height="380" rx="16" />
        </clipPath>
      </defs>

      <g clipPath="url(#sunsetFrame)">
        {/* Sky gradient */}
        <rect width="420" height="380" fill="url(#sunsetSky)" />

        {/* Sun glow */}
        <ellipse cx="218" cy="272" rx="120" ry="100" fill="url(#sunGlow)" />

        {/* Sun disc */}
        <circle cx="218" cy="275" r="38" fill="#F5C040" opacity="0.92" />
        <circle cx="218" cy="275" r="32" fill="#FFDA70" opacity="0.8" />

        {/* Distant mesa — far back */}
        <path
          d="M0,240 L0,380 L420,380 L420,240 Q380,220 340,235 Q300,250 260,228 Q220,208 180,222 Q140,236 100,215 Q60,195 20,218 Z"
          fill="url(#mesa1)"
        />

        {/* Mid mesa */}
        <path
          d="M0,290 L0,380 L420,380 L420,295 Q390,278 360,290 Q325,302 290,282 Q255,262 225,278 Q195,292 165,275 Q132,258 100,272 Q65,286 30,270 Q12,262 0,275 Z"
          fill="url(#mesa2)"
        />

        {/* Foreground ground */}
        <path
          d="M0,340 Q105,328 210,336 Q315,344 420,332 L420,380 L0,380 Z"
          fill="#1A0E05"
        />

        {/* Main tall saguaro — center */}
        <g fill="url(#cactusGrad)">
          {/* Trunk */}
          <rect x="200" y="175" width="20" height="175" rx="10" />
          {/* Left arm horizontal */}
          <rect x="158" y="238" width="52" height="14" rx="7" />
          {/* Left arm vertical */}
          <rect x="158" y="200" width="14" height="52" rx="7" />
          {/* Right arm horizontal */}
          <rect x="210" y="252" width="50" height="14" rx="7" />
          {/* Right arm vertical */}
          <rect x="246" y="218" width="14" height="48" rx="7" />
        </g>

        {/* Smaller saguaro — left */}
        <g fill="#1D3828">
          <rect x="60" y="268" width="13" height="100" rx="6.5" />
          <rect x="30" y="298" width="40" height="10" rx="5" />
          <rect x="30" y="275" width="10" height="33" rx="5" />
          <rect x="63" y="306" width="36" height="10" rx="5" />
          <rect x="89" y="288" width="10" height="28" rx="5" />
        </g>

        {/* Small prickly pear / rocks foreground */}
        <ellipse cx="340" cy="352" rx="28" ry="12" fill="#150A03" />
        <ellipse cx="80" cy="358" rx="22" ry="9" fill="#150A03" />
        <ellipse cx="175" cy="362" rx="18" ry="7" fill="#150A03" />

        {/* A few stars in the upper sky */}
        {[
          [40, 28], [90, 18], [145, 38], [300, 22], [355, 14], [390, 35], [18, 55],
        ].map(([sx, sy], i) => (
          <circle key={i} cx={sx} cy={sy} r="1.5" fill="#FAF6EE" opacity="0.7" />
        ))}

      </g>

      {/* Frame border */}
      <rect
        width="420"
        height="380"
        rx="16"
        fill="none"
        stroke="#4A7C59"
        strokeWidth="3"
        opacity="0.6"
      />
    </svg>
  )
}
