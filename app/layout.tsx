import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'KeySafeHub - Licenze Digitali Originali',
    template: '%s | KeySafeHub'
  },
  description: 'Acquista licenze digitali originali per Windows, Office e Antivirus. Attivazione immediata, pagamenti sicuri con Stripe, assistenza dedicata.',
  keywords: ['licenze digitali', 'Windows 11', 'Office 2021', 'Office 2024', 'software originale', 'chiavi di attivazione'],
  authors: [{ name: 'KeySafeHub' }],
  creator: 'KeySafeHub',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://keysafehub.eu',
    siteName: 'KeySafeHub',
    title: 'KeySafeHub - Licenze Digitali Originali',
    description: 'Acquista licenze digitali originali per Windows, Office e Antivirus. Attivazione immediata e pagamenti sicuri.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KeySafeHub - Licenze Digitali Originali'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KeySafeHub - Licenze Digitali Originali',
    description: 'Acquista licenze digitali originali per Windows, Office e Antivirus.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KeySafeHub',
  url: 'https://keysafehub.eu',
  logo: 'https://keysafehub.eu/logo.png',
  description: 'Vendita di licenze digitali originali per Windows e Office',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@keysafehub.eu',
    contactType: 'customer service',
    availableLanguage: 'Italian'
  },
  sameAs: []
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
