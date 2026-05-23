'use client'
import { useForm, ValidationError } from '@formspree/react'
import FadeIn from '@/components/FadeIn'

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_URL!)

  return (
    <section id="contact" className="bg-forest py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left — contact info */}
        <FadeIn>
          <div className="border-l-4 border-gold pl-6 mb-10">
            <p className="font-archivo-narrow uppercase tracking-[0.2em] text-gold/70 text-xs mb-2">
              Get in Touch
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream font-bold leading-tight">
              Let&apos;s work together
            </h2>
          </div>

          <p className="text-cream/65 font-archivo leading-relaxed mb-10 text-[1.05rem]">
            Whether you&apos;re a resort kitchen, independent grocer, or farm-to-table restaurant,
            we&apos;d love to talk about what we can bring to your shelves or your menu.
          </p>

          <ul className="space-y-6">
            {[
              {
                label: 'Phone',
                value: '(702) 791-1046',
                href: 'tel:+17027911046',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.94 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.85 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
              },
              {
                label: 'Email',
                value: 'hello@whatgrowsinvegas.com',
                href: 'mailto:hello@whatgrowsinvegas.com',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ),
              },
              {
                label: 'Address',
                value: '6265 S Valley View Blvd STE I\nLas Vegas, NV 89118',
                href: 'https://maps.google.com/?q=6265+S+Valley+View+Blvd+STE+I+Las+Vegas+NV+89118',
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
              },
              {
                label: 'Hours',
                value: 'Mon – Fri, 6 am – 6 pm PT',
                href: null,
                icon: (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
              },
            ].map(({ label, value, href, icon }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="text-gold mt-0.5 flex-shrink-0">{icon}</span>
                <div>
                  <p className="font-archivo-narrow uppercase tracking-widest text-[0.62rem] text-gold/60 mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="font-archivo text-cream/80 hover:text-gold transition-colors leading-snug whitespace-pre-line"
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-archivo text-cream/80 leading-snug whitespace-pre-line">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Right — inquiry form */}
        <FadeIn delay={120}>
          <div className="bg-near-black/40 border border-sage/20 rounded-2xl p-8">
            <h3 className="font-playfair text-2xl text-cream font-bold mb-6">
              Send an inquiry
            </h3>

            {state.succeeded ? (
              <div className="text-center py-10" role="alert">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-sage/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <p className="font-playfair text-xl text-cream font-bold mb-2">Message received.</p>
                <p className="font-archivo text-cream/60 text-sm leading-relaxed">
                  Thanks for reaching out. Someone from our team will be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                {/* Honeypot — Formspree ignores submissions where _gotcha is filled */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block font-archivo-narrow uppercase tracking-widest text-[0.62rem] text-cream/50 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full bg-forest/60 border border-sage/25 rounded-lg px-4 py-3 text-cream placeholder-cream/30 font-archivo text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition"
                      placeholder="Jane Smith"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-rust text-xs mt-1 font-archivo" />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="business_name" className="block font-archivo-narrow uppercase tracking-widest text-[0.62rem] text-cream/50 mb-1.5">
                      Business Name *
                    </label>
                    <input
                      id="business_name"
                      name="business_name"
                      type="text"
                      required
                      autoComplete="organization"
                      className="w-full bg-forest/60 border border-sage/25 rounded-lg px-4 py-3 text-cream placeholder-cream/30 font-archivo text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition"
                      placeholder="The Desert Table Restaurant"
                    />
                    <ValidationError prefix="Business name" field="business_name" errors={state.errors} className="text-rust text-xs mt-1 font-archivo" />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-archivo-narrow uppercase tracking-widest text-[0.62rem] text-cream/50 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full bg-forest/60 border border-sage/25 rounded-lg px-4 py-3 text-cream placeholder-cream/30 font-archivo text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition"
                      placeholder="jane@yourbusiness.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-rust text-xs mt-1 font-archivo" />
                  </div>

                  {/* Customer Type */}
                  <div>
                    <label htmlFor="customer_type" className="block font-archivo-narrow uppercase tracking-widest text-[0.62rem] text-cream/50 mb-1.5">
                      Business Type
                    </label>
                    <select
                      id="customer_type"
                      name="customer_type"
                      className="w-full bg-forest/60 border border-sage/25 rounded-lg px-4 py-3 text-cream font-archivo text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition appearance-none"
                    >
                      <option value="" className="bg-forest text-cream/60">Select a type…</option>
                      <option value="Retail grocery store" className="bg-forest">Retail grocery store</option>
                      <option value="Restaurant / food service" className="bg-forest">Restaurant / food service</option>
                      <option value="Casino / resort kitchen" className="bg-forest">Casino / resort kitchen</option>
                      <option value="Farm-to-table restaurant" className="bg-forest">Farm-to-table restaurant</option>
                      <option value="Independent grocer" className="bg-forest">Independent grocer</option>
                      <option value="Distributor / wholesaler" className="bg-forest">Distributor / wholesaler</option>
                      <option value="Other" className="bg-forest">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-archivo-narrow uppercase tracking-widest text-[0.62rem] text-cream/50 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-forest/60 border border-sage/25 rounded-lg px-4 py-3 text-cream placeholder-cream/30 font-archivo text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition resize-none"
                      placeholder="Tell us about your business and what you're looking for…"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-rust text-xs mt-1 font-archivo" />
                  </div>

                  {/* General form error */}
                  <ValidationError errors={state.errors} className="text-sm font-archivo text-rust bg-rust/10 border border-rust/20 rounded-lg px-4 py-3" />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3.5 rounded-full bg-gold text-near-black font-archivo-narrow uppercase tracking-wider text-sm font-bold hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {state.submitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      'Send Inquiry'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
