import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Domande Frequenti (FAQ)',
  description: 'Trova risposte alle domande più comuni sulle licenze digitali, attivazione, pagamenti e garanzia.',
  openGraph: {
    title: 'FAQ | KeySafeHub',
    description: 'Risposte alle domande frequenti su licenze, attivazione e supporto.',
  }
}

const faqs = [
  {
    question: 'Come ricevo la licenza dopo l\'acquisto?',
    answer: 'Dopo aver completato il pagamento con Stripe, riceverai immediatamente un\'email contenente il codice di licenza (product key) e le istruzioni dettagliate per l\'attivazione. Il processo è completamente automatizzato e la consegna avviene in pochi secondi.'
  },
  {
  question: 'Perché i vostri prezzi sono così convenienti?',
    answer: 'I nostri prezzi sono competitivi perché applichiamo un modello di business basato sul recupero di licenze dismesse da aziende che non le utilizzano più, ad esempio a causa di passaggi a sistemi cloud o eccedenze di stock. Grazie alla normativa UE sulla libera circolazione dei beni digitali, siamo in grado di rimettere queste licenze originali sul mercato a una frazione del costo di listino ufficiale. Questo processo ci permette di offrire al cliente finale un risparmio notevole garantendo al contempo l\'assoluta autenticità e validità del software.'
  },
  {
    question: 'Quanto dura la licenza?',
    answer: 'Tutte le nostre licenze sono perpetue, ovvero valide a vita. Non si tratta di abbonamenti e non ci sono rinnovi automatici. Una volta acquistata, la licenza è tua per sempre e puoi utilizzarla senza limiti di tempo.'
  },
  {
    question: 'Come funziona l\'attivazione?',
    answer: 'L\'attivazione è semplice: vai nelle impostazioni del tuo sistema operativo (per Windows) o nella sezione Account di Office, inserisci il codice di licenza ricevuto via email e segui le istruzioni a schermo. Se hai difficoltà, il nostro supporto è disponibile per assisterti.'
  },
  {
    question: 'Posso chiedere un rimborso?',
    answer: 'Sì, offriamo una garanzia di soddisfazione. Se la licenza non funziona correttamente, provvederemo prima a fornirti una sostituzione gratuita. Se il problema persiste, procederemo con il rimborso completo. Contatta il nostro supporto entro 30 giorni dall\'acquisto.'
  },
  {
    question: 'Le licenze sono originali?',
    answer: 'Assolutamente sì. Tutte le nostre licenze sono 100% originali Microsoft, autentiche e verificabili. Si tratta di licenze ESD (Electronic Software Delivery) che vengono distribuite digitalmente e sono perfettamente legali secondo la normativa europea.'
  },
  {
    question: 'In quanto tempo ricevo la chiave di licenza?',
    answer: 'La consegna è immediata. Non appena Stripe conferma il pagamento (solitamente pochi secondi), il sistema invia automaticamente l\'email con la licenza. Controlla anche la cartella spam se non la trovi nella posta in arrivo.'
  },
  {
    question: 'Posso usare la licenza su più dispositivi?',
    answer: 'Le nostre licenze sono per singolo dispositivo. Una licenza Windows può essere attivata su un solo PC, così come una licenza Office. Se hai bisogno di attivare più dispositivi, dovrai acquistare più licenze.'
  },
  {
    question: 'Cosa succede se formatto il PC?',
    answer: 'Se formatti il PC e reinstalli lo stesso sistema operativo, puoi riutilizzare la stessa licenza. Windows memorizza l\'attivazione legata all\'hardware del computer. In caso di cambio significativo dell\'hardware, contattaci per assistenza.'
  },
 {
  question: "Le licenze sono legali?",
  answer:
    "Sì, assolutamente. Tutte le licenze fornite da KeySafeHub sono completamente legali e conformi alla normativa vigente, in quanto si tratta di licenze ESD (Electronic Software Delivery) che, ai sensi della sentenza della Corte di Giustizia Europea C-128/11, possono essere legittimamente rivendute all'interno dell'Unione Europea. Operiamo nel pieno rispetto della Direttiva 2009/24/CE e del principio di esaurimento del diritto di distribuzione, garantendo esclusivamente licenze autentiche e verificabili.",
},

]

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Domande Frequenti"
        description="Trova risposte alle tue domande su licenze, attivazione e supporto"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-azure/30 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Section */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-secondary/50 border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Non hai trovato la risposta che cercavi?
            </h3>
            <p className="text-muted-foreground mb-6">
              Il nostro team di supporto è a tua disposizione
            </p>
            <Button asChild className="bg-azure hover:bg-azure/90 text-white">
              <Link href="/contatti">
                Contattaci
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
