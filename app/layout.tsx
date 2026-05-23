import type { Metadata } from 'next'
import { Playfair_Display, Archivo, Archivo_Narrow } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  variable: '--font-archivo-narrow',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'What Grows in Vegas | Fresh Desert Produce Distributor',
  description:
    'Premium desert-sourced produce distributed across the American Southwest. Farm-to-dock in 48 hours across six states. Supplying casinos, resort kitchens, and independent grocers since 2009.',
  keywords:
    'fresh produce, desert produce, Las Vegas distributor, Southwest food distribution, Medjool dates, Hatch green chiles, prickly pear',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${archivo.variable} ${archivoNarrow.variable} font-archivo bg-cream text-near-black antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
