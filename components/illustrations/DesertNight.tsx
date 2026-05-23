// Inline SVG desert night landscape — five saguaro cacti, mountain silhouette, desert floor
// Used in the Hero section

function Saguaro({
  cx, bottom, h, w = 18,
  lx = 44, lh = 52,
  rx = 40, rh = 46,
  fill = '#244735',
}: {
  cx: number; bottom: number; h: number; w?: number;
  lx?: number; lh?: number; rx?: number; rh?: number;
  fill?: string;
}) {
  const r = w / 2
  const aw = Math.round(w * 0.82)
  const ar = aw / 2
  const lArmY = bottom - Math.round(h * 0.52)
  const rArmY = bottom - Math.round(h * 0.62)

  return (
    <g fill={fill}>
      {/* Trunk */}
      <rect x={cx - r} y={bottom - h} width={w} height={h} rx={r} />
      {/* Left arm — horizontal connector */}
      <rect x={cx - r - lx} y={lArmY - ar} width={lx + ar} height={aw} rx={ar} />
      {/* Left arm — vertical */}
      <rect x={cx - r - lx - ar} y={lArmY - lh} width={aw} height={lh + ar} rx={ar} />
      {/* Right arm — horizontal connector */}
      <rect x={cx + r - ar} y={rArmY - ar} width={rx + ar} height={aw} rx={ar} />
      {/* Right arm — vertical */}
      <rect x={cx + r + rx - ar} y={rArmY - rh} width={aw} height={rh + ar} rx={ar} />
    </g>
  )
}

export default function DesertNight() {
  return (
    <svg
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B3A2D" stopOpacity="0" />
          <stop offset="100%" stopColor="#0F2018" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Sky fade overlay */}
      <rect x="0" y="0" width="1440" height="320" fill="url(#skyFade)" />

      {/* Far mountain range */}
      <path
        d="M0,320 L0,220 Q60,205 90,215 Q130,225 160,198 Q195,172 235,185 Q270,198 300,172
           Q330,148 375,162 Q415,176 445,148 Q472,122 520,136 Q565,148 595,126
           Q628,104 680,120 Q728,135 768,112 Q808,90 860,108
           Q910,126 950,104 Q990,82 1048,96 Q1102,110 1140,90
           Q1180,70 1240,85 Q1300,100 1340,80 Q1385,60 1440,75
           L1440,320 Z"
        fill="#0F2018"
      />

      {/* Mid mountain range — slightly lighter */}
      <path
        d="M0,320 L0,250 Q80,238 120,248 Q180,258 210,232
           Q245,208 295,222 Q345,236 380,215
           Q415,194 470,210 Q525,225 560,205
           Q598,185 660,200 Q720,214 760,195
           Q800,176 870,190 Q940,204 980,185
           Q1020,166 1090,178 Q1155,190 1200,172
           Q1248,154 1310,168 Q1375,182 1440,165
           L1440,320 Z"
        fill="#152A1E"
      />

      {/* Desert floor */}
      <path
        d="M0,292 Q180,282 360,287 Q540,292 720,282 Q900,272 1080,280 Q1260,288 1440,278
           L1440,320 L0,320 Z"
        fill="#1A3025"
      />

      {/* Saguaro 1 — small, far left */}
      <Saguaro cx={168} bottom={292} h={118} w={14} lx={38} lh={44} rx={34} rh={40} />

      {/* Saguaro 2 — medium */}
      <Saguaro cx={420} bottom={292} h={158} w={18} lx={46} lh={52} rx={42} rh={48} />

      {/* Saguaro 3 — tallest, center */}
      <Saguaro cx={724} bottom={292} h={205} w={24} lx={58} lh={66} rx={52} rh={60} fill="#2C5040" />

      {/* Saguaro 4 — medium-right */}
      <Saguaro cx={1018} bottom={292} h={162} w={19} lx={48} lh={54} rx={44} rh={50} />

      {/* Saguaro 5 — small, far right */}
      <Saguaro cx={1272} bottom={292} h={125} w={15} lx={40} lh={46} rx={36} rh={42} />

      {/* A few foreground rocks */}
      <ellipse cx={80} cy={310} rx={55} ry={16} fill="#112218" />
      <ellipse cx={580} cy={313} rx={40} ry={11} fill="#112218" />
      <ellipse cx={900} cy={311} rx={65} ry={14} fill="#112218" />
      <ellipse cx={1380} cy={312} rx={48} ry={13} fill="#112218" />
    </svg>
  )
}
