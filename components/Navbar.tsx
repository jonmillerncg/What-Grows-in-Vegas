'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Produce', href: '#produce' },
  { label: 'Territory', href: '#territory' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-forest/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.35)]'
          : 'bg-forest/75 backdrop-blur-sm'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-playfair text-[1.25rem] leading-none text-cream font-bold tracking-tight flex items-baseline gap-1"
          aria-label="What Grows in Vegas — home"
        >
          What Grows
          <span className="italic text-gold ml-1">in Vegas</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-archivo-narrow uppercase tracking-widest text-[0.7rem] text-cream/75 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Partner CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-gold text-near-black font-archivo-narrow uppercase tracking-wider text-[0.68rem] font-bold hover:bg-gold-light transition-colors duration-200"
          >
            Partner with us
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-cream p-1.5 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-200 ${open ? 'rotate-45 translate-y-[7px]' : 'mb-1.5'}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-200 ${open ? 'opacity-0' : 'mb-1.5'}`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80 border-t border-sage/20' : 'max-h-0'}`}
      >
        <ul className="bg-forest px-6 py-5 flex flex-col gap-5" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-archivo-narrow uppercase tracking-widest text-sm text-cream/75 hover:text-gold transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex px-5 py-2 rounded-full bg-gold text-near-black font-archivo-narrow uppercase tracking-wider text-xs font-bold"
              onClick={() => setOpen(false)}
            >
              Partner with us
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
