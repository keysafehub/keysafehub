import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { Mail, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta il supporto KeySafeHub per assistenza sulle licenze, attivazione o domande. Risposta garantita entro 24 ore.',
  openGraph: {
    title: 'Contatti | KeySafeHub',
    description: 'Contatta il nostro supporto clienti per qualsiasi domanda.',
  }
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Supporto',
    description: 'support@keysafehub.eu',
    detail: 'Per tutte le richieste di assistenza'
  },
  {
    icon: Clock,
    title: 'Tempo di Risposta',
    description: 'Entro 24 ore',
    detail: 'Nei giorni lavorativi'
  },
  {
    icon: Shield,
    title: 'Supporto Garantito',
    description: 'Assistenza dedicata',
    detail: 'Per tutti i tuoi acquisti'
  },
]

export default function ContattiPage() {
  return (
    <>
      <PageHeader
        title="Contattaci"
        description="Siamo qui per aiutarti. Compila il form e ti risponderemo entro 24 ore."
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Inviaci un messaggio
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Informazioni di contatto
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-azure/10 flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-azure" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-foreground font-medium">
                        {info.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 rounded-xl bg-secondary/50 border border-border/50">
                <h3 className="font-semibold text-foreground mb-3">
                  Prima di contattarci
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ti consigliamo di consultare la nostra sezione{' '}
                  <a href="/faq" className="text-azure hover:underline">
                    FAQ
                  </a>{' '}
                  dove potresti trovare già la risposta alla tua domanda. 
                  Per problemi con l&apos;attivazione, includi nella richiesta il 
                  codice ordine ricevuto via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
