import FadeIn from '@/components/FadeIn'

const values = [
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="#E8B040" opacity="0.18" />
        <circle cx="20" cy="7" r="5" fill="#E8B040" />
        <path
          d="M20,12 L20,30 M12,18 L28,18 M13,25 L27,25"
          stroke="#E8B040"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Sun-Sourced',
    body: 'We source only the best produce grown across the American Southwest—carefully selected from desert-climate farms that know how to cultivate exceptional flavor in one of the world\'s most demanding environments. No middlemen. No mystery origins. If we sell it, we know the farm—and the field—it came from.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
        <rect x="4" y="14" width="32" height="20" rx="4" fill="#E8B040" opacity="0.15" />
        <rect x="8" y="14" width="24" height="20" rx="3" fill="none" stroke="#E8B040" strokeWidth="2" />
        <path
          d="M14,10 L14,18 M26,10 L26,18"
          stroke="#E8B040"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="24" r="4" fill="#E8B040" opacity="0.7" />
        <path d="M20,20 L20,28 M16,24 L24,24" stroke="#1B3A2D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Cold Chain Hot Pace',
    body: 'Our refrigerated fleet runs continuous cold-chain logistics. 48-hour farm-to-dock is not an aspiration — it\'s a contractual guarantee.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="#E8B040" opacity="0.12" />
        <path
          d="M20,30 C20,30 10,22 10,15 C10,10 14.5,7 20,11 C25.5,7 30,10 30,15 C30,22 20,30 20,30 Z"
          fill="#E8B040"
          opacity="0.8"
        />
        <path
          d="M20,30 L20,35"
          stroke="#E8B040"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M16,35 L24,35"
          stroke="#E8B040"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Roots Matter',
    body: 'We buy direct from the growers—not the middlemen. Fair prices, multi-year relationships, and complete transparency. When a grower has a bumper crop, we\'re there to support it. When they have a tough season, we stand by them.',
  },
]

export default function Values() {
  return (
    <section className="bg-sage py-24 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="font-archivo-narrow uppercase tracking-[0.2em] text-cream/60 text-xs mb-3">
            What We Stand For
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-cream font-bold">
            How we operate
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map(({ icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 100}>
              <div className="bg-forest/40 border border-cream/10 rounded-2xl p-8 h-full flex flex-col gap-5 hover:bg-forest/60 transition-colors duration-300">
                <div>{icon}</div>
                <h3 className="font-playfair text-2xl text-cream font-bold">{title}</h3>
                <p className="font-archivo text-cream/70 leading-relaxed text-sm">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
