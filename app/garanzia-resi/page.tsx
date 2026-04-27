import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Shield, RefreshCw, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Garanzia e Resi',
  description: 'Informazioni sulla garanzia delle licenze digitali KeySafeHub, politica di sostituzione e rimborsi.',
  openGraph: {
    title: 'Garanzia e Resi | KeySafeHub',
    description: 'Garanzia di soddisfazione, sostituzione gratuita e supporto dedicato.',
  }
}

const guaranteeFeatures = [
  {
    icon: Shield,
    title: 'Licenze Garantite',
    description: 'Tutte le licenze sono 100% originali e funzionanti'
  },
  {
    icon: RefreshCw,
    title: 'Sostituzione Gratuita',
    description: 'In caso di problemi, sostituiamo la licenza senza costi'
  },
  {
    icon: Clock,
    title: 'Risposta in 24h',
    description: 'Il nostro supporto risponde entro 24 ore lavorative'
  },
  {
    icon: MessageCircle,
    title: 'Assistenza Dedicata',
    description: 'Supporto tecnico per l\'attivazione incluso'
  },
]

export default function GaranziaResiPage() {
  return (
    <>
      <PageHeader
        title="Garanzia e Resi"
        description="La tua soddisfazione è la nostra priorità"
      />

      {/* Guarantee Features */}
      <section className="py-12 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guaranteeFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 p-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-azure/10 flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-azure" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">La Nostra Garanzia</h2>
                <p className="text-muted-foreground leading-relaxed">
                  KeySafeHub garantisce che tutte le licenze vendute sono originali, autentiche e funzionanti. 
                  Ci impegniamo a fornire un servizio di qualità e a risolvere qualsiasi problema tu possa incontrare 
                  con l&apos;attivazione delle tue licenze.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Sostituzione Gratuita</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se la licenza acquistata non funziona correttamente, procederemo con la sostituzione gratuita. 
                  La sostituzione viene effettuata quando:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Il codice di licenza non viene accettato dal sistema</li>
                  <li>La licenza risulta già utilizzata (non per causa dell&apos;acquirente)</li>
                  <li>L&apos;attivazione non va a buon fine nonostante i passaggi corretti</li>
                  <li>Si verificano errori durante il processo di attivazione</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Per richiedere una sostituzione, contattaci all&apos;indirizzo support@keysafehub.eu 
                  indicando il numero d&apos;ordine e descrivendo il problema riscontrato.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Politica di Rimborso</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Poiché vendiamo contenuti digitali con consegna immediata, il diritto di recesso standard 
                  non si applica (ai sensi dell&apos;art. 59 del Codice del Consumo). Tuttavia, offriamo il rimborso 
                  completo nelle seguenti situazioni:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>La sostituzione della licenza non ha risolto il problema</li>
                  <li>Non siamo in grado di fornire una licenza funzionante</li>
                  <li>L&apos;ordine non è stato consegnato entro 24 ore dall&apos;acquisto</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Importante:</strong> Il rimborso non è possibile se la licenza è stata attivata 
                  con successo e poi si è verificato un problema per cause esterne (formattazione, 
                  cambio hardware, ecc.).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Assistenza Tecnica</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Il nostro team di supporto è a tua disposizione per aiutarti con l&apos;attivazione delle licenze. 
                  Offriamo assistenza per:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Guida passo-passo all&apos;attivazione</li>
                  <li>Risoluzione di errori durante l&apos;attivazione</li>
                  <li>Verifica dello stato della licenza</li>
                  <li>Supporto per la reinstallazione dopo formattazione</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Tempi di Risposta</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ci impegniamo a rispondere a tutte le richieste di supporto entro 24 ore lavorative. 
                  Per le richieste urgenti relative a problemi di attivazione, spesso rispondiamo molto più rapidamente. 
                  Nel weekend e nei giorni festivi i tempi di risposta potrebbero essere leggermente più lunghi.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Come Contattarci</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Per richieste relative alla garanzia, sostituzioni o rimborsi, contattaci a:
                </p>
                <div className="bg-secondary/50 p-6 rounded-xl border border-border/50">
                  <p className="font-medium text-foreground mb-2">Email: support@keysafehub.eu</p>
                  <p className="text-sm text-muted-foreground">
                    Includi sempre il numero d&apos;ordine e una descrizione dettagliata del problema. 
                    Se possibile, allega screenshot dell&apos;errore riscontrato.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Casi Non Coperti</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La garanzia e il rimborso non si applicano nei seguenti casi:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Licenza già attivata con successo</li>
                  <li>Problemi causati da software di terze parti o malware</li>
                  <li>Hardware non compatibile o difettoso</li>
                  <li>Mancato rispetto delle istruzioni di attivazione</li>
                  <li>Richiesta effettuata oltre 30 giorni dall&apos;acquisto</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
