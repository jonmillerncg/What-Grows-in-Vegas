import Image from 'next/image'
import FadeIn from '@/components/FadeIn'

const team = [
  {
    name: 'Rosa Llagas',
    title: 'CEO & Co-Founder',
    img: '/team/rosa-llagas.png',
    bio: 'Rosa built What Grows in Vegas from a single truck and two farm partners in 2009. A fourth-generation New Mexican, she grew up harvesting Hatch chiles and spent a decade in food logistics before founding WGIV. She holds a degree in Agricultural Economics from UNLV.',
  },
  {
    name: 'Desmond Kael',
    title: 'VP of Logistics',
    img: '/team/desmond-kael.png',
    bio: 'Desmond architected the 48-hour cold-chain network that defines WGIV\'s reputation. Before joining in 2013, he spent eight years managing refrigerated distribution for a national food service company. He has since expanded our fleet to 22 vehicles operating across six states.',
  },
  {
    name: 'Tanya Preciado',
    title: 'Head of Grower Relations',
    img: '/team/tanya-preciado.png',
    bio: 'Tanya is the reason our farmers stay with us. She manages direct relationships with over 60 partner farms, negotiating fair pricing, supporting irrigation infrastructure projects, and championing Tohono O\'odham and Navajo heritage growers within our network.',
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-cream py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <FadeIn className="mb-16">
          <div className="border-l-4 border-gold pl-6">
            <p className="font-archivo-narrow uppercase tracking-[0.2em] text-muted text-xs mb-2">
              The People
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-forest font-bold leading-tight">
              Who we are
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {team.map(({ name, title, img, bio }, i) => (
            <FadeIn key={name} delay={i * 120} className="flex flex-col items-center text-center">
              <div className="relative w-44 h-44 mb-6 drop-shadow-xl rounded-full overflow-hidden ring-4 ring-sage/40">
                <Image
                  src={img}
                  alt={name}
                  fill
                  className="object-cover object-top"
                  sizes="176px"
                />
              </div>

              <h3 className="font-playfair text-2xl text-forest font-bold mb-1">{name}</h3>
              <p className="font-archivo-narrow uppercase tracking-widest text-xs text-gold mb-5">
                {title}
              </p>
              <p className="font-archivo text-near-black/65 leading-relaxed text-sm max-w-xs">
                {bio}
              </p>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
