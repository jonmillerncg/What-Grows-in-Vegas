'use client'
import DesertNight from '@/components/illustrations/DesertNight'

// Deterministic pseudo-random star positions (no Math.random — avoids hydration mismatch)
const STAR_COUNT = 120
const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
  const x = ((i * 1597 + 8191) % 9973) / 9973
  const y = ((i * 2333 + 4091) % 7919) / 7919
  const size = i % 7 === 0 ? 2.5 : i % 4 === 0 ? 2 : i % 3 === 0 ? 1.5 : 1
  const anims = ['twinkle', 'twinkle-b', 'twinkle-c']
  const animName = anims[i % 3]
  const dur = (2.2 + ((i * 17) % 30) * 0.12).toFixed(1)
  const del = ((i * 0.19) % 3).toFixed(2)
  return { x: (x * 100).toFixed(2), y: (y * 70).toFixed(2), size, animName, dur, del }
})

const stats = [
  { value: '1,500+', label: 'Produce Items' },
  { value: '48hr', label: 'Farm-to-Dock' },
  { value: '6', label: 'States Served' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-forest min-h-screen overflow-hidden flex flex-col"
      aria-label="Hero"
    >
      {/* ── Starfield ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-cream"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationName: s.animName,
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.del}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>

      {/* ── Moon ── */}
      <div
        className="absolute top-28 right-[8%] md:right-[12%] pointer-events-none"
        aria-hidden="true"
        style={{ animation: 'moonGlow 4s ease-in-out infinite' }}
      >
        <svg viewBox="0 0 90 90" className="w-16 h-16 md:w-24 md:h-24" aria-hidden="true">
          <defs>
            <radialGradient id="moonGrad" cx="38%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#FFF8E8" />
              <stop offset="55%" stopColor="#F5D98A" />
              <stop offset="100%" stopColor="#E8B040" />
            </radialGradient>
          </defs>
          <circle cx="45" cy="45" r="40" fill="url(#moonGrad)" opacity="0.92" />
          {/* Subtle surface texture */}
          <circle cx="36" cy="38" r="6" fill="#E0A830" opacity="0.18" />
          <circle cx="52" cy="52" r="4" fill="#D49820" opacity="0.14" />
          <circle cx="42" cy="56" r="3" fill="#D49820" opacity="0.1" />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6 pt-24 pb-56 md:pb-64">
        <p className="font-archivo-narrow uppercase tracking-[0.22em] text-gold text-xs mb-6">
          Desert-Sourced · American Southwest
        </p>

        <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-bold leading-[1.07] mb-6">
          What Grows
          <br />
          <span className="italic text-gold-light">in Vegas</span>
        </h1>

        <p className="font-archivo text-cream/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          Stays fresh. Delivers everywhere.{' '}
          <span className="text-cream/50 italic">Nobody asks how.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-gold text-near-black font-archivo-narrow uppercase tracking-wider text-sm font-bold hover:bg-gold-light transition-colors duration-200 shadow-lg"
          >
            Become a Partner
          </a>
          <a
            href="#produce"
            className="px-8 py-3.5 rounded-full border border-cream/30 text-cream font-archivo-narrow uppercase tracking-wider text-sm hover:border-cream/60 hover:text-cream transition-colors duration-200"
          >
            See Our Produce
          </a>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative z-20 border-t border-sage/30 bg-near-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-sage/20 py-5 px-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center px-4">
              <span className="font-playfair text-2xl md:text-3xl text-gold font-bold">{value}</span>
              <span className="font-archivo-narrow uppercase tracking-widest text-[0.6rem] md:text-[0.68rem] text-cream/50 mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desert landscape SVG ── */}
      <div
        className="absolute bottom-[72px] md:bottom-[68px] left-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        <DesertNight />
      </div>
    </section>
  )
}
