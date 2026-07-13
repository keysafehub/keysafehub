import Link from 'next/link'
import { CheckCircle, Mail, Shield, ArrowRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acquisto completato',
  description: 'Il tuo acquisto è andato a buon fine. Controlla la tua email per la licenza.',
  robots: { index: false, follow: false },
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-24">
      <div className="w-full max-w-lg">

        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center animate-pulse">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-500" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Grazie per il tuo acquisto!
          </h1>
          <p className="text-muted-foreground text-lg">
            Il pagamento è stato confermato con successo.
          </p>
        </div>

        <div className="bg-azure/5 border border-azure/20 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-azure/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mail className="w-5 h-5 text-azure" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground mb-1">
                La licenza è in arrivo via email
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hai ricevuto un&apos;email con il codice di licenza e le istruzioni di attivazione.
                Controlla anche la cartella <strong className="text-foreground">spam</strong> se
                non la trovi entro qualche minuto.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Clock className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground mb-1">
                Consegna automatica
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Il sistema invia la licenza automaticamente pochi secondi dopo la conferma.
                Se non hai ricevuto nulla entro 5 minuti, contattaci subito.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-secondary/40 border border-border/50 rounded-2xl p-5 mb-8 flex items-center gap-4">
          <Shield className="w-5 h-5 text-azure flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            Problemi con l&apos;attivazione? Siamo qui.{' '}
            <a href="mailto:support@keysafehub.eu" className="text-azure font-medium hover:underline">
              support@keysafehub.eu
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="flex-1 bg-azure hover:bg-azure/90 text-white font-medium h-11">
            <Link href="/guide">
              Guide di attivazione
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1 h-11">
            <Link href="/">Torna alla home</Link>
          </Button>
        </div>

      </div>
    </div>
  )
}
