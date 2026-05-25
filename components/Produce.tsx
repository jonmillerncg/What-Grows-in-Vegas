import Image from 'next/image'
import FadeIn from '@/components/FadeIn'

const produce = [
  {
    name: 'Medjool Dates',
    season: 'Late Summer – Fall',
    desc: 'Grown in the Coachella and Mojave basin, our Medjool dates are large, caramel-soft, and nothing like the dried-out version you\'ve had before.',
    img: '/produce/medjool-dates.png',
  },
  {
    name: 'Hatch Green Chiles',
    season: 'Late Summer',
    desc: 'Roasted or fresh, the Hatch valley\'s high desert elevation produces chiles with heat, sweetness, and smoke that no other region can replicate.',
    img: '/produce/hatch-green-chiles.png',
  },
  {
    name: 'Prickly Pear',
    season: 'Late Summer – Fall',
    desc: 'The fruit of the nopal cactus — jewel-bright, faintly sweet, and beloved by every bartender and pastry chef in our network.',
    img: '/produce/prickly-pear.png',
  },
  {
    name: 'Desert Citrus',
    season: 'Winter – Spring',
    desc: 'Arizona\'s sun-drenched citrus belt delivers Blood oranges, Rio Star grapefruit, and navels with a brix level you won\'t find in Florida.',
    img: '/produce/desert-citrus.png',
  },
  {
    name: 'Nopal Cactus',
    season: 'Year-round',
    desc: 'Paddle cactus leaves — cleaned and trimmed — for the growing market in Latin kitchens, health food stores, and forward-thinking restaurants.',
    img: '/produce/nopal-cactus.png',
  },
  {
    name: 'Tepary Beans',
    season: 'Summer – Fall',
    desc: 'An ancient Sonoran Desert legume, drought-hardy and dense with protein and flavor. Chefs who discover them rarely go back to standard white beans.',
    img: '/produce/tepary-beans.png',
  },
  {
    name: 'New Mexico Pistachios',
    season: 'Fall',
    desc: 'Dry-farmed at elevation, these pistachios have a richer, deeper flavor than their California cousins. Available roasted or raw.',
    img: '/produce/nm-pistachios.png',
  },
  {
    name: 'Jicama',
    season: 'Year-round',
    desc: 'Crisp, mildly sweet, and endlessly versatile. Our jicama moves fast — sourced straight from the growing fields of Sonora and Chihuahua.',
    img: '/produce/jicama.png',
  },
  {
    name: 'Desert Herbs',
    season: 'Year-round',
    desc: 'Epazote, Mexican oregano, desert sage, and hoja santa. The backbone of authentic Southwest and Northern Mexican cooking.',
    img: '/produce/desert-herbs.png',
  },
]

export default function Produce() {
  return (
    <section id="produce" className="bg-forest py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <FadeIn className="mb-14">
          <div className="border-l-4 border-gold pl-6">
            <p className="font-archivo-narrow uppercase tracking-[0.2em] text-gold/70 text-xs mb-2">
              What We Carry
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream font-bold leading-tight">
              Straight from the source
            </h2>
          </div>
          <p className="mt-6 text-cream/60 font-archivo leading-relaxed max-w-2xl text-[1.05rem]">
            We offer over 1,500 produce items—from large-scale farms to small, local growers you
            may not know yet. Built on decades-long grower relationships, our network also gives
            you access to exclusive products that showcase the unique flavors of the American
            Southwest. Below are some of our most popular exclusive offerings:
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {produce.map(({ name, season, desc, img }, i) => (
            <FadeIn key={name} delay={i * 55}>
              <article className="bg-near-black/30 border border-sage/20 rounded-2xl overflow-hidden flex flex-col h-full hover:border-gold/40 hover:bg-near-black/50 transition-all duration-300">
                <div className="relative w-full aspect-square">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <h3 className="font-playfair text-xl text-cream font-bold leading-snug">
                    {name}
                  </h3>
                  <p className="font-archivo text-cream/60 text-sm leading-relaxed flex-1">{desc}</p>
                  <div className="flex items-center gap-2 pt-1 border-t border-sage/15">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="font-archivo-narrow uppercase tracking-widest text-gold/80 text-[0.65rem]">
                      {season}
                    </span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
