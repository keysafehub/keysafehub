import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
// Importa il componente Script per caricare il Pixel in modo ottimizzato
import Script from 'next/script'

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
        {/* JSON-LD Schema originale */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Tag Noscript di riserva per utenti senza Javascript */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2081996525687917&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Meta Pixel Code caricato in modo non bloccante dopo l'interattività della pagina */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2081996525687917');
              fbq('track', 'PageView');
            `,
          }}
        />

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
