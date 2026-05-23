// Hand-drawn cartoon-realistic SVG portrait: Desmond Kael — VP of Logistics
// Deep-brown skin, close-cropped hair, short beard, gold wire glasses

export default function DesmondPortrait() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Portrait of Desmond Kael, VP of Logistics"
    >
      <defs>
        <clipPath id="desmond-clip">
          <circle cx="100" cy="100" r="93" />
        </clipPath>
        <radialGradient id="desmond-bg" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2D5A3D" />
          <stop offset="100%" stopColor="#1B3A2D" />
        </radialGradient>
        <radialGradient id="desmond-skin" cx="40%" cy="28%" r="62%">
          <stop offset="0%" stopColor="#8B4B22" />
          <stop offset="50%" stopColor="#6B3215" />
          <stop offset="100%" stopColor="#4A1E0A" />
        </radialGradient>
        <radialGradient id="desmond-ear-l" cx="65%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#7A3E18" />
          <stop offset="100%" stopColor="#5A2C0E" />
        </radialGradient>
        <radialGradient id="desmond-ear-r" cx="35%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#7A3E18" />
          <stop offset="100%" stopColor="#5A2C0E" />
        </radialGradient>
      </defs>

      {/* Background */}
      <circle cx="100" cy="100" r="95" fill="url(#desmond-bg)" />

      <g clipPath="url(#desmond-clip)">
        {/* Shoulders / suit jacket */}
        <ellipse cx="100" cy="198" rx="82" ry="44" fill="#141E28" />
        <path
          d="M 44,188 L 66,162 L 84,172 L 100,166 L 116,172 L 134,162 L 156,188 L 100,215 Z"
          fill="#192432"
        />
        {/* White shirt / collar */}
        <ellipse cx="100" cy="176" rx="20" ry="17" fill="#EAE8E5" />
        {/* Tie */}
        <path
          d="M 97,174 L 100,160 L 103,174 L 100,182 Z"
          fill="#4A7C59"
        />

        {/* Neck */}
        <rect x="88" y="150" width="24" height="26" rx="9" fill="url(#desmond-skin)" />

        {/* Left ear */}
        <ellipse cx="63" cy="106" rx="7.5" ry="9.5" fill="url(#desmond-ear-l)" />
        <ellipse cx="63" cy="106" rx="4" ry="5.5" fill="#451A08" opacity="0.45" />

        {/* Right ear */}
        <ellipse cx="137" cy="106" rx="7.5" ry="9.5" fill="url(#desmond-ear-r)" />
        <ellipse cx="137" cy="106" rx="4" ry="5.5" fill="#451A08" opacity="0.45" />

        {/* Face */}
        <ellipse cx="100" cy="102" rx="38" ry="47" fill="url(#desmond-skin)" />

        {/* Close-cropped hair — very thin dark layer atop head */}
        <ellipse cx="100" cy="57" rx="39" ry="18" fill="#1A0A02" />
        {/* Hair fade at sides */}
        <path
          d="M 62,80 Q 63,64 72,57 Q 100,42 128,57 Q 137,64 138,80"
          stroke="#1A0A02"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Forehead highlight */}
        <ellipse cx="96" cy="74" rx="13" ry="7" fill="#8B4B22" opacity="0.4" />

        {/* Short beard — covers jaw and chin */}
        <path
          d="M 68,122 Q 65,138 68,148 Q 78,160 100,162 Q 122,160 132,148 Q 135,138 132,122 Q 118,130 100,131 Q 82,130 68,122 Z"
          fill="#2A1005"
          opacity="0.72"
        />
        {/* Beard texture hint */}
        <path
          d="M 72,128 Q 100,135 128,128"
          stroke="#3A1808"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        {/* Moustache */}
        <path
          d="M 87,123 Q 95,126 100,124 Q 105,126 113,123"
          stroke="#1A0A02"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Left eyebrow — strong, slightly arched */}
        <path
          d="M 77,87 Q 86,81 97,85"
          stroke="#1A0800"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Right eyebrow */}
        <path
          d="M 103,85 Q 114,81 123,87"
          stroke="#1A0800"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Left eye */}
        <ellipse cx="87" cy="98" rx="8" ry="5.5" fill="white" />
        <circle cx="87" cy="98" r="4.8" fill="#2A1208" />
        <circle cx="87" cy="98" r="2.6" fill="#0A0500" />
        <circle cx="89.5" cy="96" r="1.8" fill="white" opacity="0.88" />
        <path d="M 79,98 Q 87,92 95,98" stroke="#1A0800" strokeWidth="1.8" fill="none" />

        {/* Right eye */}
        <ellipse cx="113" cy="98" rx="8" ry="5.5" fill="white" />
        <circle cx="113" cy="98" r="4.8" fill="#2A1208" />
        <circle cx="113" cy="98" r="2.6" fill="#0A0500" />
        <circle cx="115.5" cy="96" r="1.8" fill="white" opacity="0.88" />
        <path d="M 105,98 Q 113,92 121,98" stroke="#1A0800" strokeWidth="1.8" fill="none" />

        {/* Gold wire glasses — oval frames */}
        {/* Left lens */}
        <ellipse
          cx="87"
          cy="99"
          rx="13.5"
          ry="10"
          fill="none"
          stroke="#C4892A"
          strokeWidth="1.8"
        />
        {/* Right lens */}
        <ellipse
          cx="113"
          cy="99"
          rx="13.5"
          ry="10"
          fill="none"
          stroke="#C4892A"
          strokeWidth="1.8"
        />
        {/* Bridge */}
        <path
          d="M 100.5,99 L 99.5,99"
          stroke="#C4892A"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Left arm */}
        <path d="M 73.5,99 L 63,103" stroke="#C4892A" strokeWidth="1.5" strokeLinecap="round" />
        {/* Right arm */}
        <path d="M 126.5,99 L 137,103" stroke="#C4892A" strokeWidth="1.5" strokeLinecap="round" />
        {/* Glass lens tint */}
        <ellipse cx="87" cy="99" rx="13" ry="9.5" fill="#A8C0D8" opacity="0.06" />
        <ellipse cx="113" cy="99" rx="13" ry="9.5" fill="#A8C0D8" opacity="0.06" />

        {/* Nose — wide, rounded tip */}
        <path
          d="M 100,107 Q 94,116 90,119 Q 100,121 110,119 Q 106,116 100,107"
          fill="#501C08"
          opacity="0.35"
        />
        <ellipse cx="91" cy="118" rx="4" ry="2.2" fill="#451808" opacity="0.35" />
        <ellipse cx="109" cy="118" rx="4" ry="2.2" fill="#451808" opacity="0.35" />

        {/* Subtle smile / expression — composed */}
        <path
          d="M 90,125 Q 100,130 110,125"
          stroke="#4A1808"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>

      {/* Sage-bordered circular frame */}
      <circle cx="100" cy="100" r="93" fill="none" stroke="#4A7C59" strokeWidth="5" />
    </svg>
  )
}
