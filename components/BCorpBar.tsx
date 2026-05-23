export default function BCorpBar() {
  return (
    <div className="bg-sand border-t border-b border-sand py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-4">
        {/* B Corp logo mark (inline SVG) */}
        <svg
          viewBox="0 0 48 60"
          className="w-9 h-11 flex-shrink-0"
          aria-hidden="true"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="48" height="60" rx="3" fill="#1B3A2D" />
          <text
            x="24"
            y="26"
            textAnchor="middle"
            fontFamily="serif"
            fontWeight="700"
            fontSize="22"
            fill="#FAF6EE"
          >
            B
          </text>
          <text
            x="24"
            y="48"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontWeight="600"
            fontSize="7"
            letterSpacing="1.5"
            fill="#C4892A"
          >
            CORP
          </text>
        </svg>
        <div>
          <p className="font-archivo-narrow uppercase tracking-widest text-xs text-muted">
            Certified B Corporation
          </p>
          <p className="font-archivo text-sm text-near-black/70 mt-0.5">
            Meeting the highest standards of social and environmental performance.
          </p>
        </div>
      </div>
    </div>
  )
}
