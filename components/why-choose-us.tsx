import { Zap, Shield, Lock, Headphones } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Attivazione immediata',
    description: 'Ricevi la tua licenza via email in pochi secondi dopo il pagamento.'
  },
  {
    icon: Shield,
    title: 'Licenze originali',
    description: 'Tutte le nostre licenze sono 100% autentiche e verificabili.'
  },
  {
    icon: Lock,
    title: 'Pagamenti sicuri',
    description: 'Transazioni protette con Stripe, il leader mondiale nei pagamenti online.'
  },
  {
    icon: Headphones,
    title: 'Assistenza dedicata',
    description: 'Supporto clienti disponibile via email con risposta entro 24 ore.'
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Perché scegliere KeySafeHub
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La tua sicurezza e soddisfazione sono la nostra priorità
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative group text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-azure/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-azure/10 text-azure mb-5 group-hover:bg-azure group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-7 w-7" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
