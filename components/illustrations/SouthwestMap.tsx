// Inline SVG Southwest US map — six states, delivery routes, HQ marker (Las Vegas)
export default function SouthwestMap() {
  // State fill and stroke colors
  const stateFill = '#244535'
  const stateBorder = '#4A7C59'
  const routeColor = '#C4892A'

  // HQ: Las Vegas, NV  ≈  (108, 148) in this viewBox
  const hq = { x: 108, y: 148 }

  // Destination cities (approximate positions)
  const cities = [
    { label: 'Phoenix', x: 120, y: 264 },
    { label: 'Salt Lake City', x: 200, y: 80 },
    { label: 'Denver', x: 318, y: 105 },
    { label: 'Albuquerque', x: 324, y: 246 },
    { label: 'Los Angeles', x: 34, y: 298 },
    { label: 'San Diego', x: 25, y: 332 },
  ]

  return (
    <svg
      viewBox="0 0 420 380"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg mx-auto"
      role="img"
      aria-label="Southwest US delivery territory map showing Nevada, Arizona, Utah, Colorado, New Mexico, and California"
    >
      <defs>
        <filter id="routeGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L6,3 Z" fill={routeColor} opacity="0.7" />
        </marker>
      </defs>

      {/* ── State shapes ── */}

      {/* California — tall, narrow, western */}
      <path
        d="M10,28 L82,28 L85,60 L88,108 L84,158 L80,195 L72,245 L58,292 L42,330 L28,355 L10,355 Z"
        fill={stateFill}
        stroke={stateBorder}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Nevada — above Arizona, right of CA */}
      <path
        d="M82,28 L178,28 L178,58 L172,168 L148,178 L130,185 L80,195 L84,158 L88,108 L85,60 Z"
        fill={stateFill}
        stroke={stateBorder}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Utah — square-ish, right of NV */}
      <path
        d="M178,28 L268,28 L268,145 L178,145 L178,58 Z"
        fill={stateFill}
        stroke={stateBorder}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Colorado — rectangular, right of UT */}
      <path
        d="M268,60 L380,60 L380,152 L268,152 L268,60 Z"
        fill={stateFill}
        stroke={stateBorder}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Arizona — below NV/UT */}
      <path
        d="M80,195 L130,185 L148,178 L172,168 L178,145 L268,145 L268,330 L178,330 L140,340 L105,340 L80,310 Z"
        fill={stateFill}
        stroke={stateBorder}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* New Mexico — right of AZ, below CO */}
      <path
        d="M268,152 L380,152 L380,340 L268,340 L268,330 L268,145 L268,152 Z"
        fill={stateFill}
        stroke={stateBorder}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* State labels */}
      {[
        { label: 'NV', x: 128, y: 100 },
        { label: 'CA', x: 46, y: 195 },
        { label: 'UT', x: 222, y: 88 },
        { label: 'CO', x: 324, y: 106 },
        { label: 'AZ', x: 175, y: 242 },
        { label: 'NM', x: 322, y: 242 },
      ].map(({ label, x, y }) => (
        <text
          key={label}
          x={x}
          y={y}
          textAnchor="middle"
          fontFamily="sans-serif"
          fontWeight="700"
          fontSize="11"
          letterSpacing="1"
          fill="#FAF6EE"
          opacity="0.5"
        >
          {label}
        </text>
      ))}

      {/* ── Delivery routes from Las Vegas ── */}
      {cities.map(({ label, x, y }) => (
        <line
          key={label}
          x1={hq.x}
          y1={hq.y}
          x2={x}
          y2={y}
          stroke={routeColor}
          strokeWidth="1.5"
          strokeDasharray="5 3"
          opacity="0.65"
          markerEnd="url(#arrowhead)"
        />
      ))}

      {/* ── Destination city dots ── */}
      {cities.map(({ label, x, y }) => (
        <g key={`dot-${label}`}>
          <circle cx={x} cy={y} r="4" fill={routeColor} opacity="0.5" />
          <circle cx={x} cy={y} r="2.5" fill={routeColor} />
        </g>
      ))}

      {/* ── HQ Marker — Las Vegas ── */}
      <g>
        {/* Outer pulse ring */}
        <circle cx={hq.x} cy={hq.y} r="10" fill="#E8B040" opacity="0.2" />
        <circle cx={hq.x} cy={hq.y} r="7" fill="#E8B040" opacity="0.35" />
        <circle cx={hq.x} cy={hq.y} r="4.5" fill="#E8B040" />
        {/* Pin top circle */}
        <circle cx={hq.x} cy={hq.y - 2} r="3" fill="#FAF6EE" />

        {/* HQ label */}
        <rect x={hq.x + 12} y={hq.y - 12} width={62} height={22} rx="4" fill="#0F2018" opacity="0.85" />
        <text
          x={hq.x + 43}
          y={hq.y + 3}
          textAnchor="middle"
          fontFamily="sans-serif"
          fontWeight="700"
          fontSize="9"
          fill="#E8B040"
          letterSpacing="0.5"
        >
          HQ · Las Vegas
        </text>
      </g>
    </svg>
  )
}
