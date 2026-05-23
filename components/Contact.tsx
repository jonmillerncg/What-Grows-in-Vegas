'use client'
import { useState, FormEvent } from 'react'
import FadeIn from '@/components/FadeIn'

type FormState = {
  name: string
  businessName: string
  email: string
  customerType: string
  message: string
  website: string   // honeypot — must stay empty
}

const initialForm: FormState = {
  name: '',
  businessName: '',
  email: '',
  customerType: '',
  message: '',
  website: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

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

            {status === 'success' ? (
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
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-5 py-2 rounded-full border border-sage/30 text-cream/70 font-archivo-narrow uppercase tracking-wider text-xs hover:border-gold/50 hover:text-gold transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot — visually hidden, should stay empty */}
                <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
                  <label htmlFor="website">Leave this empty</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>

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
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-forest/60 border border-sage/25 rounded-lg px-4 py-3 text-cream placeholder-cream/30 font-archivo text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition"
                      placeholder="Jane Smith"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block font-archivo-narrow uppercase tracking-widest text-[0.62rem] text-cream/50 mb-1.5">
                      Business Name *
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      autoComplete="organization"
                      value={form.businessName}
                      onChange={handleChange}
                      className="w-full bg-forest/60 border border-sage/25 rounded-lg px-4 py-3 text-cream placeholder-cream/30 font-archivo text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition"
                      placeholder="The Desert Table Restaurant"
                    />
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
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-forest/60 border border-sage/25 rounded-lg px-4 py-3 text-cream placeholder-cream/30 font-archivo text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition"
                      placeholder="jane@yourbusiness.com"
                    />
                  </div>

                  {/* Customer Type */}
                  <div>
                    <label htmlFor="customerType" className="block font-archivo-narrow uppercase tracking-widest text-[0.62rem] text-cream/50 mb-1.5">
                      Business Type
                    </label>
                    <select
                      id="customerType"
                      name="customerType"
                      value={form.customerType}
                      onChange={handleChange}
                      className="w-full bg-forest/60 border border-sage/25 rounded-lg px-4 py-3 text-cream font-archivo text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition appearance-none"
                    >
                      <option value="" className="bg-forest text-cream/60">Select a type…</option>
                      <option value="retail" className="bg-forest">Retail grocery store</option>
                      <option value="restaurant" className="bg-forest">Restaurant / food service</option>
                      <option value="casino" className="bg-forest">Casino / resort kitchen</option>
                      <option value="farm-to-table" className="bg-forest">Farm-to-table restaurant</option>
                      <option value="independent-grocer" className="bg-forest">Independent grocer</option>
                      <option value="distributor" className="bg-forest">Distributor / wholesaler</option>
                      <option value="other" className="bg-forest">Other</option>
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
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-forest/60 border border-sage/25 rounded-lg px-4 py-3 text-cream placeholder-cream/30 font-archivo text-sm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/25 transition resize-none"
                      placeholder="Tell us about your business and what you're looking for…"
                    />
                  </div>

                  {/* Error message */}
                  {status === 'error' && (
                    <p className="text-sm font-archivo text-rust bg-rust/10 border border-rust/20 rounded-lg px-4 py-3" role="alert">
                      {errorMsg}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-full bg-gold text-near-black font-archivo-narrow uppercase tracking-wider text-sm font-bold hover:bg-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
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
