import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Star, Quote, CheckCircle, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recensioni Clienti',
  description: 'Leggi le recensioni dei nostri clienti soddisfatti.',
  openGraph: {
    title: 'Recensioni Clienti | KeySafeHub',
    description: 'Scopri cosa pensano i nostri clienti di KeySafeHub.',
  }
}

const reviews = [
  {
    id: 1,
    text: "Servizio rapido, licenza arrivata in pochi secondi. Ho attivato Windows 11 Pro senza problemi. Consigliatissimo!",
    author: "Marco R.",
    rating: 5,
    product: "Windows 11 Pro",
    verified: true
  },
  {
    id: 2,
    text: "Prezzi ottimi e attivazione immediata. Ero scettico inizialmente ma tutto ha funzionato perfettamente.",
    author: "Laura P.",
    rating: 5,
    product: "Office 2021 Professional Plus",
    verified: true
  },
  {
    id: 3,
    text: "Supporto clienti molto disponibile. Ho avuto un problema minore con l'installazione e mi hanno risposto in un paio d'ore risolvendo tutto.",
    author: "Giuseppe M.",
    rating: 4,
    product: "Bundle Windows + Office",
    verified: true
  }
  // ... puoi aggiungere le altre qui seguendo lo stesso schema con le virgolette doppie "
]

export default function RecensioniPage() {
  const averageRating = 4.8 // Valore fisso per evitare errori di calcolo nel build

  return (
    <>
      <PageHeader
        title="Recensioni Clienti"
        description="Scopri cosa pensano di noi i nostri clienti soddisfatti"
      />

      <section className="py-12 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-azure text-azure" />
                ))}
              </div>
              <p className="text-3xl font-bold text-foreground">4.8/5</p>
              <p className="text-sm text-muted-foreground">Valutazione media</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground mb-2">10.000+</p>
              <p className="text-sm text-muted-foreground">Clienti soddisfatti</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-azure/30 hover:shadow-lg transition-all duration-300"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-azure/20" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'fill-azure text-azure' : 'text-muted/30'}`} 
                    />
                  ))}
                </div>
                <span className="inline-block text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full mb-3">
                  {review.product}
                </span>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-border/30 pt-4">
                  <p className="text-sm font-medium text-foreground">{review.author}</p>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-xs text-azure font-semibold">
                      <CheckCircle className="h-4 w-4" />
                      <span>Verificato</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl border border-border p-8 md:p-12 text-center shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-azure/10 mb-6">
                <Mail className="h-8 w-8 text-azure" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Vuoi lasciare la tua recensione?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Inviaci il tuo feedback via email: lo pubblicheremo in questa pagina!
              </p>
              <a 
                href="mailto:recensioni@keysafehub.eu?subject=Recensione%20KeySafeHub" 
                className="inline-flex items-center justify-center px-10 py-4 bg-azure text-white font-bold rounded-xl hover:bg-azure/90 transition-all shadow-lg"
              >
                Invia a recensioni@keysafehub.eu
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
