export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-near-black text-cream/60 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div>
          <p className="font-playfair text-xl text-cream font-bold">
            What Grows <span className="italic text-gold">in Vegas</span>
          </p>
          <p className="font-archivo text-sm mt-1.5 text-cream/50 italic">
            Fresh from the desert. Delivered with intent.
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs font-archivo-narrow uppercase tracking-widest text-cream/40">
            © {year} What Grows in Vegas LLC. All rights reserved.
          </p>
          <div className="flex items-center justify-center md:justify-end gap-5 mt-3">
            {['About', 'Produce', 'Territory', 'Team', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-archivo-narrow uppercase tracking-widest text-cream/40 hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
