// Hand-drawn cartoon-realistic SVG portrait: Tanya Preciado — Head of Grower Relations
// Golden-brown skin, wide-brimmed field hat (rust hatband), hazel eyes, gold hoop earrings, turquoise pendant

export default function TanyaPortrait() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Portrait of Tanya Preciado, Head of Grower Relations"
    >
      <defs>
        <clipPath id="tanya-clip">
          <circle cx="100" cy="100" r="93" />
        </clipPath>
        <radialGradient id="tanya-bg" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2D5A3D" />
          <stop offset="100%" stopColor="#1B3A2D" />
        </radialGradient>
        <radialGradient id="tanya-skin" cx="42%" cy="30%" r="58%">
          <stop offset="0%" stopColor="#E09050" />
          <stop offset="52%" stopColor="#C07030" />
          <stop offset="100%" stopColor="#9A5018" />
        </radialGradient>
        <radialGradient id="tanya-hat-crown" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#4A2A10" />
          <stop offset="100%" stopColor="#2A1405" />
        </radialGradient>
        <linearGradient id="tanya-hat-brim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#382008" />
          <stop offset="100%" stopColor="#1E1004" />
        </linearGradient>
        <radialGradient id="tanya-ear-l" cx="65%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#D08040" />
          <stop offset="100%" stopColor="#A06020" />
        </radialGradient>
        <radialGradient id="tanya-ear-r" cx="35%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#D08040" />
          <stop offset="100%" stopColor="#A06020" />
        </radialGradient>
      </defs>

      {/* Background */}
      <circle cx="100" cy="100" r="95" fill="url(#tanya-bg)" />

      <g clipPath="url(#tanya-clip)">
        {/* Clothing — work shirt / chambray */}
        <ellipse cx="100" cy="198" rx="80" ry="44" fill="#3A5A7A" />
        <path
          d="M 50,188 L 70,165 L 88,174 L 100,168 L 112,174 L 130,165 L 150,188 L 100,215 Z"
          fill="#425A6A"
        />
        {/* Shirt collar open */}
        <path
          d="M 88,168 L 100,158 L 112,168 L 100,176 Z"
          fill="#EAE8E2"
          opacity="0.75"
        />

        {/* Neck */}
        <rect x="88" y="150" width="24" height="26" rx="9" fill="url(#tanya-skin)" />

        {/* Turquoise pendant on chain */}
        <path
          d="M 85,162 Q 100,168 115,162"
          stroke="#C4892A"
          strokeWidth="1.2"
          fill="none"
          opacity="0.8"
        />
        <circle cx="100" cy="170" r="7" fill="#2AADA0" />
        <circle cx="100" cy="170" r="4.5" fill="#1A8880" />
        <circle cx="98" cy="168" r="1.5" fill="#3ACAB8" opacity="0.6" />

        {/* Left ear */}
        <ellipse cx="63" cy="112" rx="7.5" ry="9" fill="url(#tanya-ear-l)" />

        {/* Right ear */}
        <ellipse cx="137" cy="112" rx="7.5" ry="9" fill="url(#tanya-ear-r)" />

        {/* Large gold hoop earrings — left */}
        <ellipse
          cx="57"
          cy="118"
          rx="9"
          ry="11"
          fill="none"
          stroke="#C4892A"
          strokeWidth="3.2"
        />
        {/* Hoop clasp top */}
        <circle cx="57" cy="108" r="2.5" fill="#C4892A" />

        {/* Large gold hoop earrings — right */}
        <ellipse
          cx="143"
          cy="118"
          rx="9"
          ry="11"
          fill="none"
          stroke="#C4892A"
          strokeWidth="3.2"
        />
        <circle cx="143" cy="108" r="2.5" fill="#C4892A" />

        {/* Face */}
        <ellipse cx="100" cy="110" rx="37" ry="44" fill="url(#tanya-skin)" />

        {/* Hair visible under brim — dark warm brown */}
        <path
          d="M 66,88 Q 100,82 134,88 L 132,96 Q 100,90 68,96 Z"
          fill="#3A1A05"
        />

        {/* Forehead highlight */}
        <ellipse cx="97" cy="92" rx="14" ry="7" fill="#E09050" opacity="0.32" />

        {/* Left eyebrow — slightly arched, natural */}
        <path
          d="M 76,98 Q 86,92 96,96"
          stroke="#2A1005"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Right eyebrow */}
        <path
          d="M 104,96 Q 114,92 124,98"
          stroke="#2A1005"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Left eye — hazel, outer corner lifted */}
        {/* White */}
        <path
          d="M 78,107 Q 87,101 96,107 Q 87,113 78,107 Z"
          fill="white"
        />
        {/* Iris — hazel (warm brown-green) */}
        <circle cx="87" cy="107" r="4.8" fill="#7A5028" />
        <circle cx="87" cy="107" r="3" fill="#5A3818" />
        {/* Pupil */}
        <circle cx="87" cy="107" r="1.8" fill="#0A0500" />
        {/* Iris green fleck (hazel) */}
        <path d="M 84,104 Q 88,103 91,106" stroke="#5A7A30" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Highlight */}
        <circle cx="89" cy="105" r="1.6" fill="white" opacity="0.9" />
        {/* Upper lash line — outer corner slightly raised */}
        <path
          d="M 78,107 Q 87,101 96,106 L 96,108"
          stroke="#1A0800"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Outer corner flick */}
        <path d="M 96,106 L 99,103" stroke="#1A0800" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Right eye — hazel */}
        <path
          d="M 104,107 Q 113,101 122,107 Q 113,113 104,107 Z"
          fill="white"
        />
        <circle cx="113" cy="107" r="4.8" fill="#7A5028" />
        <circle cx="113" cy="107" r="3" fill="#5A3818" />
        <circle cx="113" cy="107" r="1.8" fill="#0A0500" />
        <path d="M 110,104 Q 114,103 117,106" stroke="#5A7A30" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="115" cy="105" r="1.6" fill="white" opacity="0.9" />
        <path
          d="M 104,107 Q 113,101 122,106 L 122,108"
          stroke="#1A0800"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M 122,106 L 125,103" stroke="#1A0800" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <path
          d="M 100,115 Q 95,123 91,126 Q 100,128 109,126 Q 105,123 100,115"
          fill="#904E18"
          opacity="0.3"
        />
        <ellipse cx="92" cy="125" rx="3.5" ry="2" fill="#804010" opacity="0.32" />
        <ellipse cx="108" cy="125" rx="3.5" ry="2" fill="#804010" opacity="0.32" />

        {/* Warm smile */}
        <path
          d="M 88,135 Q 100,146 112,135"
          stroke="#8A4018"
          strokeWidth="2.8"
          fill="none"
          strokeLinecap="round"
        />
        {/* Lips */}
        <path
          d="M 88,135 Q 94,131 100,132 Q 106,131 112,135 Q 106,138 100,139 Q 94,138 88,135 Z"
          fill="#C05830"
          opacity="0.72"
        />
        {/* Upper lip bow */}
        <path
          d="M 91,134 Q 96,131 100,132 Q 104,131 109,134"
          stroke="#A04820"
          strokeWidth="0.8"
          fill="none"
          opacity="0.55"
        />

        {/* Cheek warmth */}
        <ellipse cx="76" cy="122" rx="12" ry="8" fill="#C85030" opacity="0.13" />
        <ellipse cx="124" cy="122" rx="12" ry="8" fill="#C85030" opacity="0.13" />

        {/* ── Wide-brimmed field hat ── */}
        {/* Hat brim — wide, ellipse */}
        <ellipse
          cx="100"
          cy="78"
          rx="76"
          ry="18"
          fill="url(#tanya-hat-brim)"
        />
        {/* Brim underside rim */}
        <ellipse
          cx="100"
          cy="78"
          rx="76"
          ry="18"
          fill="none"
          stroke="#1A0A02"
          strokeWidth="1.5"
        />
        {/* Hat crown */}
        <path
          d="M 52,78 Q 50,30 100,22 Q 150,30 148,78 Z"
          fill="url(#tanya-hat-crown)"
        />
        {/* Crown shading */}
        <path
          d="M 80,78 Q 78,38 100,26 Q 122,38 120,78 Z"
          fill="#3A1E08"
          opacity="0.3"
        />
        {/* Crown top highlight */}
        <ellipse cx="100" cy="28" rx="18" ry="8" fill="#5A3018" opacity="0.4" />
        {/* Rust hatband */}
        <path
          d="M 52,74 Q 100,82 148,74 L 148,68 Q 100,76 52,68 Z"
          fill="#A84B2F"
        />
        {/* Hatband highlight */}
        <path
          d="M 60,70 Q 100,77 140,70"
          stroke="#C86040"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        {/* Small band knot detail on left side */}
        <rect x="62" y="68" width="8" height="8" rx="2" fill="#8A3820" />
        <rect x="63" y="69" width="6" height="6" rx="1.5" fill="#A84B2F" opacity="0.7" />
      </g>

      {/* Sage-bordered circular frame */}
      <circle cx="100" cy="100" r="93" fill="none" stroke="#4A7C59" strokeWidth="5" />
    </svg>
  )
}
