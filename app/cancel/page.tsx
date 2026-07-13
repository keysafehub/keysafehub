import Link from 'next/link'
import { XCircle, ShoppingCart, ArrowLeft, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pagamento annullato',
  description: 'Il pagamento è stato annullato. Nessun importo è stato addebitato.',
  robots: { index: false, follow: false },
}

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-24">
      <div className="w-full max-w-lg">

        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-muted-foreground/10 flex items-center justify-center">
              <XCircle className="w-10 h-10 text-muted-foreground" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Pagamento annullato
          </h1>
          <p className="text-muted-foreground text-lg">
            Nessun importo è stato addebitato sul tuo conto.
          </p>
        </div>

        <div className="bg-card border border-border/50 rounded-2xl p-6 mb-6">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            Hai annullato il processo di pagamento. Puoi riprovare quando vuoi —
            i tuoi prodotti sono ancora disponibili.
          </p>
        </div>

        <div className="bg-secondary/40 border border-border/50 rounded-2xl p-5 mb-8 flex items-start gap-4">
          <HelpCircle className="w-5 h-5 text-azure flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Hai avuto problemi con il pagamento? Contattaci:{' '}
            <a href="mailto:support@keysafehub.eu" className="text-azure font-medium hover:underline">
              support@keysafehub.eu
            </a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="flex-1 bg-azure hover:bg-azure/90 text-white font-medium h-11">
            <Link href="/#prodotti">
              <ShoppingCart className="mr-2 w-4 h-4" />
              Torna ai prodotti
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1 h-11">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Home
            </Link>
          </Button>
        </div>

      </div>
    </div>
  )
}
