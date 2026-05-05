import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Star, Quote, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recensioni Clienti',
  description: 'Leggi le recensioni dei nostri clienti soddisfatti. Oltre 10.000 licenze vendute con feedback positivo.',
  openGraph: {
    title: 'Recensioni Clienti | KeySafeHub',
    description: 'Scopri cosa pensano i nostri clienti di KeySafeHub.',
  }
}

const reviews = [
  {
    id: 1,
    text: 'Servizio rapido, licenza arrivata in pochi secondi. Ho attivato Windows 11 Pro senza problemi. Consigliatissimo!',
    author: 'Marco R.',
    location: 'Milano',
    rating: 5,
    product: 'Windows 11 Pro',
    verified: true
  },
  {
    id: 2,
    text: 'Prezzi ottimi e attivazione immediata. Ero scettico inizialmente ma tutto ha funzionato perfettamente.',
    author: 'Laura P.',
    location: 'Roma',
    rating: 5,
    product: 'Office 2021 Professional Plus',
    verified: true
  },
  {
    id: 3,
    text: 'Supporto clienti molto disponibile. Ho avuto un problema minore e mi hanno risposto in poche ore risolvendolo.',
    author: 'Giuseppe M.',
    location: 'Napoli',
    rating: 4.5,
    product: 'Bundle Windows + Office',
    verified: true
  },
  {
    id: 4,
    text: 'Ottimo rapporto qualità prezzo. Licenza originale e funzionante. La uso da 6 mesi senza problemi.',
    author: 'Francesca L.',
    location: 'Torino',
    rating: 5,
    product: 'Windows 11 Pro',
    verified: true
  },
  {
    id: 5,
    text: 'Acquisto semplice e veloce. Email con la chiave arrivata immediatamente dopo il pagamento.',
    author: 'Alessandro T.',
    location: 'Bologna',
    rating: 5,
    product: 'Office 2024 Professional Plus',
    verified: true
  },
  {
    id: 6,
    text: 'Secondo acquisto su questo sito. Sempre affidabili e con prezzi competitivi.',
    author: 'Chiara B.',
    location: 'Firenze',
    rating: 5,
    product: 'Bundle Windows + Office',
    verified: true
  },
  {
    id: 7,
    text: 'Ho consigliato KeySafeHub a tutti i miei amici. Servizio eccellente e licenze genuine.',
    author: 'Roberto C.',
    location: 'Palermo',
    rating: 5,
    product: 'Windows 11 Home',
    verified: true
  },
  {
    id: 8,
    text: 'Finalmente un sito serio per le licenze software. Prezzi onesti e assistenza disponibile.',
    author: 'Valentina G.',
    location: 'Verona',
    rating: 5,
    product: 'Office 2021 Professional Plus',
    verified: true
  },
  {
    id: 9,
    text: 'Attivazione riuscita al primo tentativo. Molto soddisfatto dell\'acquisto.',
    author: 'Stefano N.',
    location: 'Genova',
    rating: 5,
    product: 'Windows 11 Pro',
    verified: true
  },
]

export default function RecensioniPage() {
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length

  return (
    <>
      <PageHeader
        title="Recensioni Clienti"
        description="Scopri cosa pensano di noi i nostri clienti soddisfatti"
      />

      {/* Stats Section */}
      <section className="py-12 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-azure text-azure" />
                ))}
              </div>
              <p className="text-3xl font-bold text-foreground">{averageRating.toFixed(1)}/5</p>
              <p className="text-sm text-muted-foreground">Valutazione media</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground mb-2">10.000+</p>
              <p className="text-sm text-muted-foreground">Clienti soddisfatti</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground mb-2">98%</p>
              <p className="text-sm text-muted-foreground">Tasso di soddisfazione</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-azure/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 h-8 w-8 text-azure/20" />

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-azure text-azure" />
                  ))}
                </div>

                {/* Product Badge */}
                <span className="inline-block text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full mb-3">
                  {review.product}
                </span>

                {/* Review Text */}
                <p className="text-foreground/90 leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">{review.author}</p>
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  </div>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-xs text-azure">
                      <CheckCircle className="h-4 w-4" />
                      <span>Verificato</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
