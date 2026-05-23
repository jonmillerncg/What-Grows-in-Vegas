import FadeIn from '@/components/FadeIn'
import SouthwestMap from '@/components/illustrations/SouthwestMap'

const territory = [
  {
    state: 'Nevada',
    abbr: 'NV',
    cities: ['Las Vegas', 'Henderson', 'Reno', 'Carson City'],
    isHQ: true,
  },
  {
    state: 'Arizona',
    abbr: 'AZ',
    cities: ['Phoenix', 'Tucson', 'Scottsdale', 'Flagstaff', 'Yuma'],
  },
  {
    state: 'Utah',
    abbr: 'UT',
    cities: ['Salt Lake City', 'Provo', 'St. George', 'Ogden'],
  },
  {
    state: 'New Mexico',
    abbr: 'NM',
    cities: ['Albuquerque', 'Santa Fe', 'Taos', 'Las Cruces'],
  },
  {
    state: 'Colorado',
    abbr: 'CO',
    cities: ['Denver', 'Boulder', 'Colorado Springs', 'Pueblo'],
  },
  {
    state: 'California',
    abbr: 'CA',
    cities: ['Los Angeles', 'San Diego', 'Palm Springs', 'Bakersfield'],
  },
]

export default function Territory() {
  return (
    <section id="territory" className="bg-sand py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left — state list */}
        <FadeIn>
          <div className="border-l-4 border-gold pl-6 mb-12">
            <p className="font-archivo-narrow uppercase tracking-[0.2em] text-muted text-xs mb-2">
              Delivery Territory
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-forest font-bold leading-tight">
              Six states.
              <br />
              One commitment.
            </h2>
          </div>

          <p className="text-near-black/65 font-archivo leading-relaxed mb-10 text-[1.05rem]">
            We serve the American Southwest from our Las Vegas hub — a deliberate choice that puts
            us within 48 hours of every major market in the region. Our cold chain doesn&apos;t
            blink, and neither do we.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {territory.map(({ state, abbr, cities, isHQ }, i) => (
              <FadeIn key={state} delay={i * 80}>
                <div className="bg-cream border border-sage/20 rounded-xl p-5 hover:border-sage/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-archivo-narrow font-bold text-xs tracking-widest uppercase text-sage bg-sage/10 px-2 py-0.5 rounded">
                      {abbr}
                    </span>
                    <h3 className="font-playfair text-lg text-forest font-bold">{state}</h3>
                    {isHQ && (
                      <span className="ml-auto font-archivo-narrow text-[0.6rem] uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded">
                        HQ
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1">
                    {cities.map((city) => (
                      <li
                        key={city}
                        className="font-archivo text-xs text-near-black/55"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Right — map */}
        <FadeIn delay={150} className="sticky top-24">
          <div className="rounded-2xl overflow-hidden border border-sage/30 bg-forest shadow-xl p-4">
            <SouthwestMap />
            <p className="text-center font-archivo-narrow uppercase tracking-widest text-[0.62rem] text-cream/40 mt-3">
              Distribution Routes from Las Vegas HQ
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
