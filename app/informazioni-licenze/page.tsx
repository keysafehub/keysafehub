import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Scale, Shield, CheckCircle, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Informazioni sulle Licenze Digitali',
  description: 'Scopri cosa sono le licenze ESD, la loro legalità secondo la normativa europea e le garanzie offerte da KeySafeHub.',
  openGraph: {
    title: 'Informazioni sulle Licenze Digitali | KeySafeHub',
    description: 'Tutto quello che devi sapere sulla legalità delle licenze digitali ESD.',
  }
}

const infoCards = [
  {
    icon: FileText,
    title: 'Licenze ESD',
    description: 'Electronic Software Delivery - distribuzione digitale autorizzata'
  },
  {
    icon: Scale,
    title: 'Conformi UE',
    description: 'Rivendita legale secondo la Corte di Giustizia Europea'
  },
  {
    icon: Shield,
    title: '100% Autentiche',
    description: 'Licenze originali Microsoft verificabili'
  },
  {
    icon: CheckCircle,
    title: 'Garanzia Inclusa',
    description: 'Sostituzione gratuita e assistenza dedicata'
  },
]

export default function InformazioniLicenzePage() {
  return (
    <>
      <PageHeader
        title="Informazioni sulle Licenze Digitali"
        description="Trasparenza e legalità: tutto quello che devi sapere"
      />

      {/* Info Cards */}
      <section className="py-12 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card) => (
              <div key={card.title} className="flex items-start gap-4 p-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-azure/10 flex items-center justify-center">
                  <card.icon className="h-5 w-5 text-azure" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
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
                <h2 className="text-2xl font-bold text-foreground mb-4">Cosa Sono le Licenze ESD?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ESD sta per <strong>Electronic Software Delivery</strong>, ovvero &ldquo;consegna elettronica del software&rdquo;. 
                  Le licenze ESD sono licenze software distribuite digitalmente, senza supporto fisico come CD o DVD.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Quando acquisti una licenza ESD, ricevi:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Un codice di licenza (Product Key) univoco</li>
                  <li>Istruzioni per il download del software (se non già installato)</li>
                  <li>Guida all&apos;attivazione del prodotto</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Le licenze ESD offrono gli stessi diritti d&apos;uso delle licenze retail tradizionali, 
                  ma a prezzi significativamente inferiori grazie all&apos;assenza di costi di produzione e spedizione fisica.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Legalità delle Licenze ESD</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La rivendita di licenze software è stata riconosciuta come <strong>perfettamente legale</strong> 
                  dalla Corte di Giustizia dell&apos;Unione Europea con la storica sentenza del 3 luglio 2012 
                  (Caso C-128/11, UsedSoft GmbH vs Oracle International Corp.).
                </p>
                <div className="bg-secondary/50 p-6 rounded-xl border border-border/50 my-6">
                  <h4 className="font-semibold text-foreground mb-3">Principi stabiliti dalla sentenza:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Il principio di &ldquo;esaurimento del diritto&rdquo; si applica anche al software distribuito digitalmente</li>
                    <li>Una licenza software legittimamente acquistata può essere rivenduta</li>
                    <li>Il nuovo acquirente ottiene gli stessi diritti d&apos;uso del primo acquirente</li>
                    <li>Il venditore originale deve rendere inutilizzabile la propria copia</li>
                  </ul>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  KeySafeHub opera in piena conformità con questa normativa, vendendo esclusivamente 
                  licenze autentiche che non sono più utilizzate dal precedente titolare.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Le Nostre Licenze Sono Originali?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>Assolutamente sì.</strong> Tutte le licenze vendute da KeySafeHub sono:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Autentiche:</strong> codici originali Microsoft, non generati o contraffatti</li>
                  <li><strong>Verificabili:</strong> possono essere verificate tramite gli strumenti ufficiali Microsoft</li>
                  <li><strong>Non utilizzate:</strong> mai attivate precedentemente o correttamente disattivate</li>
                  <li><strong>Perpetue:</strong> valide a vita, senza scadenza o rinnovi automatici</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Acquistiamo le nostre licenze da distributori autorizzati, aziende che hanno dismesso licenze in eccesso, 
                  e canali di distribuzione ESD legittimi.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Garanzia KeySafeHub</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Per garantire la massima tranquillità ai nostri clienti, offriamo:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Sostituzione gratuita:</strong> se la licenza non funziona, la sostituiamo senza costi aggiuntivi</li>
                  <li><strong>Assistenza tecnica:</strong> supporto per l&apos;attivazione incluso nel prezzo</li>
                  <li><strong>Risposta rapida:</strong> il nostro team risponde entro 24 ore lavorative</li>
                  <li><strong>Rimborso completo:</strong> se non riusciamo a risolvere il problema</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Trasparenza e Correttezza</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  KeySafeHub si impegna alla massima trasparenza:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Nessun abbonamento:</strong> paghi una volta, la licenza è tua per sempre</li>
                  <li><strong>Nessun rinnovo automatico:</strong> nessun addebito nascosto o ricorrente</li>
                  <li><strong>Pagamento una tantum:</strong> prezzi chiari e definitivi</li>
                  <li><strong>Nessun costo aggiuntivo:</strong> il prezzo che vedi è quello che paghi</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Perché i Prezzi Sono Così Bassi?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Molti si chiedono come sia possibile offrire licenze originali a prezzi così competitivi. Ecco le ragioni:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Distribuzione digitale:</strong> nessun costo di produzione fisica, packaging o spedizione</li>
                  <li><strong>Volume licensing:</strong> acquistiamo grandi quantità, ottenendo prezzi migliori</li>
                  <li><strong>Licenze redistribuite:</strong> licenze provenienti da aziende che hanno dismisso asset</li>
                  <li><strong>Mercato secondario:</strong> la concorrenza nel mercato ESD mantiene i prezzi competitivi</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Domande Frequenti sulla Legalità</h2>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-xl border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">Microsoft può revocare queste licenze?</h4>
                    <p className="text-muted-foreground text-sm">
                      No. Una licenza legittimamente acquistata e correttamente trasferita non può essere revocata. 
                      La sentenza della Corte di Giustizia UE protegge il diritto del consumatore.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">Riceverò tutti gli aggiornamenti?</h4>
                    <p className="text-muted-foreground text-sm">
                      Sì. Le licenze ESD danno diritto agli stessi aggiornamenti delle licenze retail, 
                      inclusi tutti gli aggiornamenti di sicurezza e le funzionalità.
                    </p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">Posso usare queste licenze per uso professionale?</h4>
                    <p className="text-muted-foreground text-sm">
                      Sì. Le nostre licenze Professional e Pro possono essere utilizzate sia per uso personale 
                      che professionale, senza limitazioni.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contattaci</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Se hai ulteriori domande sulla legalità delle licenze o su qualsiasi altro aspetto, 
                  non esitare a contattarci: <a href="mailto:support@keysafehub.eu" className="text-azure hover:underline">support@keysafehub.eu</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
