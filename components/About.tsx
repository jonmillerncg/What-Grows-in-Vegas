import FadeIn from '@/components/FadeIn'
import DesertSunset from '@/components/illustrations/DesertSunset'

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left column — story */}
        <FadeIn>
          <div className="border-l-4 border-gold pl-6 mb-10">
            <p className="font-archivo-narrow uppercase tracking-[0.2em] text-muted text-xs mb-2">
              Our Story
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-forest font-bold leading-tight">
              What the Desert&apos;s Been Hiding:
              <br />
              An Oasis of Flavor
            </h2>
          </div>

          <div className="space-y-5 text-near-black/75 leading-relaxed font-archivo text-[1.05rem]">
            <p>
              What Grows in Vegas was founded in 2009 out of a converted refrigerated van parked
              outside a farmers&apos; market on the edge of Las Vegas. Our founders had a simple
              theory: the Mojave, Sonoran, and Chihuahuan deserts were producing extraordinary
              food that nobody in the mainstream distribution chain was touching.
            </p>
            <p>
              They were right. Desert-grown produce — dates, chiles, prickly pear, tepary beans,
              pistachios — thrives in conditions that would destroy conventional crops. Intense
              sun, mineral-rich soil, and low humidity concentrate flavor in ways that irrigated
              flatland farming simply cannot replicate.
            </p>
            <p>
              Today we source directly from growers across the Mojave, Sonoran, and Chihuahuan
              desert corridors and deliver to over 340 partners across six states within 48 hours
              of harvest. Our clients include casino resort kitchens, farm-to-table restaurants,
              and independent grocers who know that provenance matters.
            </p>
          </div>

          {/* Pull-quote */}
          <FadeIn delay={150} className="mt-10">
            <blockquote className="border-l-4 border-sage pl-6 py-2">
              <p className="font-playfair text-xl md:text-2xl text-forest italic leading-snug">
                &ldquo;The desert has been holding out on everyone.&rdquo;
              </p>
              <footer className="mt-3 font-archivo-narrow uppercase tracking-widest text-xs text-muted">
                — Rosa Llagas, CEO &amp; Co-Founder
              </footer>
            </blockquote>
          </FadeIn>

          {/* Key facts */}
          <FadeIn delay={250} className="mt-10 grid grid-cols-3 gap-6">
            {[
              { value: '2009', label: 'Founded' },
              { value: '3', label: 'Desert Regions' },
              { value: '48hr', label: 'Max. Transit Time' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-playfair text-3xl text-sage font-bold">{value}</p>
                <p className="font-archivo-narrow uppercase tracking-widest text-xs text-muted mt-1">
                  {label}
                </p>
              </div>
            ))}
          </FadeIn>
        </FadeIn>

        {/* Right column — illustration */}
        <FadeIn delay={120} className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
            <DesertSunset />
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
