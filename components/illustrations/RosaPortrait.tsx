// Hand-drawn cartoon-realistic SVG portrait: Rosa Llagas — CEO & Co-Founder
// Warm light-brown skin, short dark hair, confident smile

export default function RosaPortrait() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Portrait of Rosa Llagas, CEO and Co-Founder"
    >
      <defs>
        <clipPath id="rosa-clip">
          <circle cx="100" cy="100" r="93" />
        </clipPath>
        <radialGradient id="rosa-bg" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2D5A3D" />
          <stop offset="100%" stopColor="#1B3A2D" />
        </radialGradient>
        <radialGradient id="rosa-skin" cx="42%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#E8AA7A" />
          <stop offset="55%" stopColor="#C87845" />
          <stop offset="100%" stopColor="#A85E2A" />
        </radialGradient>
        <radialGradient id="rosa-hair" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#2A1205" />
          <stop offset="100%" stopColor="#0F0800" />
        </radialGradient>
        <radialGradient id="rosa-ear-l" cx="60%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#D88850" />
          <stop offset="100%" stopColor="#B06832" />
        </radialGradient>
        <radialGradient id="rosa-ear-r" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#D88850" />
          <stop offset="100%" stopColor="#B06832" />
        </radialGradient>
      </defs>

      {/* Background */}
      <circle cx="100" cy="100" r="95" fill="url(#rosa-bg)" />

      <g clipPath="url(#rosa-clip)">
        {/* Shoulders / jacket */}
        <ellipse cx="100" cy="196" rx="80" ry="44" fill="#1A2E38" />
        <path
          d="M48,185 L68,162 L86,170 L100,165 L114,170 L132,162 L152,185 L100,210 Z"
          fill="#1E3542"
        />
        {/* Blouse/shirt at collar */}
        <ellipse cx="100" cy="175" rx="22" ry="18" fill="#F0EAE0" opacity="0.85" />

        {/* Neck */}
        <rect x="87" y="150" width="26" height="28" rx="9" fill="url(#rosa-skin)" />

        {/* Left ear */}
        <ellipse cx="63" cy="107" rx="8" ry="10" fill="url(#rosa-ear-l)" />
        <ellipse cx="63" cy="107" rx="4.5" ry="6" fill="#A85C28" opacity="0.4" />

        {/* Right ear */}
        <ellipse cx="137" cy="107" rx="8" ry="10" fill="url(#rosa-ear-r)" />
        <ellipse cx="137" cy="107" rx="4.5" ry="6" fill="#A85C28" opacity="0.4" />

        {/* Face */}
        <ellipse cx="100" cy="103" rx="39" ry="48" fill="url(#rosa-skin)" />

        {/* Hair — main mass (top of head) */}
        <ellipse cx="100" cy="60" rx="41" ry="26" fill="url(#rosa-hair)" />
        {/* Hair — left side sweep */}
        <ellipse cx="67" cy="82" rx="15" ry="22" fill="url(#rosa-hair)" />
        {/* Hair — right side */}
        <ellipse cx="133" cy="82" rx="15" ry="22" fill="url(#rosa-hair)" />
        {/* Hair — front edge / hairline */}
        <path
          d="M 66,70 Q 100,56 134,70 L 134,80 Q 118,68 100,66 Q 82,68 66,80 Z"
          fill="#1A0A02"
        />
        {/* Small side hair detail near temples */}
        <path d="M 66,80 Q 64,88 65,96" stroke="#1A0A02" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M 134,80 Q 136,88 135,96" stroke="#1A0A02" strokeWidth="6" strokeLinecap="round" fill="none" />

        {/* Forehead highlight */}
        <ellipse cx="97" cy="76" rx="14" ry="7" fill="#E8AA7A" opacity="0.35" />

        {/* Left eyebrow */}
        <path
          d="M 78,89 Q 87,84 96,87"
          stroke="#2A1005"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Right eyebrow */}
        <path
          d="M 104,87 Q 113,84 122,89"
          stroke="#2A1005"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Left eye — white */}
        <ellipse cx="87" cy="99" rx="8.5" ry="6" fill="white" />
        {/* Left iris */}
        <circle cx="87" cy="99" r="5" fill="#3A1A06" />
        {/* Left pupil */}
        <circle cx="87" cy="99" r="2.8" fill="#0F0800" />
        {/* Left highlight */}
        <circle cx="89.5" cy="97" r="1.8" fill="white" opacity="0.9" />
        {/* Left eyelid line */}
        <path d="M 78,99 Q 87,93 96,99" stroke="#2A1005" strokeWidth="1.8" fill="none" />
        {/* Left lower lash */}
        <path d="M 79,102 Q 87,106 95,102" stroke="#C07840" strokeWidth="1" fill="none" opacity="0.5" />

        {/* Right eye — white */}
        <ellipse cx="113" cy="99" rx="8.5" ry="6" fill="white" />
        {/* Right iris */}
        <circle cx="113" cy="99" r="5" fill="#3A1A06" />
        {/* Right pupil */}
        <circle cx="113" cy="99" r="2.8" fill="#0F0800" />
        {/* Right highlight */}
        <circle cx="115.5" cy="97" r="1.8" fill="white" opacity="0.9" />
        {/* Right eyelid line */}
        <path d="M 104,99 Q 113,93 122,99" stroke="#2A1005" strokeWidth="1.8" fill="none" />
        <path d="M 105,102 Q 113,106 121,102" stroke="#C07840" strokeWidth="1" fill="none" opacity="0.5" />

        {/* Nose */}
        <path
          d="M 100,108 Q 95,116 92,119 Q 100,121 108,119 Q 105,116 100,108"
          fill="#A05820"
          opacity="0.3"
        />
        <ellipse cx="93" cy="118" rx="3.5" ry="2" fill="#904E18" opacity="0.3" />
        <ellipse cx="107" cy="118" rx="3.5" ry="2" fill="#904E18" opacity="0.3" />

        {/* Smile — confident, warm */}
        <path
          d="M 87,130 Q 100,142 113,130"
          stroke="#8A4018"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Lips */}
        <path
          d="M 87,130 Q 93,126 100,127 Q 107,126 113,130 Q 107,133 100,134 Q 93,133 87,130 Z"
          fill="#B85538"
          opacity="0.75"
        />
        {/* Upper lip line */}
        <path
          d="M 91,129 Q 96,126 100,127 Q 104,126 109,129"
          stroke="#9A4028"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />

        {/* Cheek warmth */}
        <ellipse cx="77" cy="116" rx="11" ry="8" fill="#C84040" opacity="0.12" />
        <ellipse cx="123" cy="116" rx="11" ry="8" fill="#C84040" opacity="0.12" />
      </g>

      {/* Sage-bordered circular frame */}
      <circle cx="100" cy="100" r="93" fill="none" stroke="#4A7C59" strokeWidth="5" />
    </svg>
  )
}
