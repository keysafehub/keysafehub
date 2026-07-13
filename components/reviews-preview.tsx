import { Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const reviews = [
  {
    id: 1,
    text: 'Servizio rapido, licenza arrivata in pochi secondi.',
    author: 'Marco R.',
    rating: 5
  },
  {
    id: 2,
    text: 'Prezzi ottimi e attivazione immediata.',
    author: 'Laura P.',
    rating: 5
  },
  {
    id: 3,
    text: 'Supporto clienti molto disponibile.',
    author: 'Giuseppe M.',
    rating: 5
  },
]

export function ReviewsPreview() {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Cosa dicono i nostri clienti
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Oltre 10.000 clienti soddisfatti in tutta Europa
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-azure/30" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-azure text-azure" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-primary-foreground/90 leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <p className="text-sm font-medium text-primary-foreground/70">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild 
            className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 font-semibold backdrop-blur-sm"
          >
            <Link href="/recensioni">
              Leggi tutte le recensioni
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
