import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Termini e Condizioni',
  description: 'Termini e condizioni di utilizzo del sito KeySafeHub e condizioni di vendita delle licenze digitali.',
  openGraph: {
    title: 'Termini e Condizioni | KeySafeHub',
    description: 'Condizioni di utilizzo e vendita di KeySafeHub.',
  }
}

export default function TerminiCondizioniPage() {
  return (
    <>
      <PageHeader
        title="Termini e Condizioni"
        description="Condizioni generali di utilizzo e vendita"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Accettazione dei Termini</h2>
                <p className="text-muted-foreground leading-relaxed">
                  L&apos;utilizzo del sito KeySafeHub e l&apos;acquisto dei prodotti offerti comportano l&apos;accettazione 
                  integrale dei presenti Termini e Condizioni. Se non accetti questi termini, ti preghiamo di non 
                  utilizzare il sito e di non effettuare acquisti. L&apos;uso continuato del sito costituisce accettazione 
                  di eventuali modifiche ai presenti termini.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Descrizione del Servizio</h2>
                <p className="text-muted-foreground leading-relaxed">
                  KeySafeHub è una piattaforma di e-commerce specializzata nella vendita di licenze software digitali 
                  per prodotti Microsoft Windows e Microsoft Office. Le licenze vendute sono di tipo ESD 
                  (Electronic Software Delivery), ovvero licenze digitali distribuite elettronicamente, 
                  legittime e conformi alla normativa europea sulla rivendita di software.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Processo di Acquisto</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Il processo di acquisto si articola nelle seguenti fasi:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Selezione del prodotto desiderato</li>
                  <li>Reindirizzamento alla pagina di pagamento sicuro Stripe</li>
                  <li>Completamento del pagamento</li>
                  <li>Ricezione immediata della licenza via email</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Il contratto di vendita si perfeziona al momento della conferma del pagamento da parte di Stripe.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Prezzi e Pagamenti</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tutti i prezzi indicati sul sito sono comprensivi di IVA ove applicabile. I pagamenti vengono 
                  elaborati in modo sicuro tramite Stripe. Accettiamo le principali carte di credito e debito. 
                  KeySafeHub non memorizza né ha accesso ai dati delle carte di pagamento, che vengono gestiti 
                  esclusivamente da Stripe in conformità agli standard PCI-DSS.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Consegna delle Licenze</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Le licenze digitali vengono consegnate istantaneamente via email all&apos;indirizzo fornito durante 
                  il processo di pagamento. L&apos;email contiene il codice di licenza (Product Key) e le istruzioni 
                  per l&apos;attivazione. In caso di mancata ricezione, controlla la cartella spam o contatta il nostro supporto.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Natura delle Licenze Digitali</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le licenze vendute da KeySafeHub sono:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Perpetue:</strong> valide a vita, senza scadenza o rinnovi</li>
                  <li><strong>Per singolo dispositivo:</strong> attivabili su un solo computer</li>
                  <li><strong>Non trasferibili:</strong> una volta attivate, non possono essere trasferite</li>
                  <li><strong>Digitali (ESD):</strong> consegnate elettronicamente senza supporto fisico</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Diritto di Recesso</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trattandosi di contenuti digitali forniti su supporto non materiale, il diritto di recesso 
                  previsto dal Codice del Consumo (D.Lgs. 206/2005) non si applica una volta che la licenza 
                  è stata consegnata e/o attivata. Effettuando l&apos;acquisto, l&apos;utente acconsente alla consegna 
                  immediata del contenuto digitale e riconosce che ciò comporta la perdita del diritto di recesso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Garanzia e Sostituzione</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nonostante l&apos;esclusione del diritto di recesso, KeySafeHub garantisce il corretto funzionamento 
                  delle licenze vendute. In caso di problemi di attivazione non dipendenti dall&apos;utente, 
                  provvederemo alla sostituzione gratuita della licenza o, se non possibile, al rimborso completo. 
                  Per maggiori dettagli, consulta la pagina <a href="/garanzia-resi" className="text-azure hover:underline">Garanzia e Resi</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitazione di Responsabilità</h2>
                <p className="text-muted-foreground leading-relaxed">
                  KeySafeHub non è responsabile per danni indiretti, incidentali o consequenziali derivanti 
                  dall&apos;utilizzo delle licenze acquistate. La nostra responsabilità è limitata al prezzo pagato 
                  per il prodotto. Non siamo responsabili per problemi derivanti da hardware difettoso, 
                  software di terze parti, o uso improprio delle licenze.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Proprietà Intellettuale</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I nomi dei prodotti e i loghi Microsoft, Windows e Office sono marchi registrati di Microsoft Corporation. 
                  L&apos;utilizzo di tali marchi, nomi o immagini su questo sito avviene esclusivamente a scopo informativo 
                  e per identificare la compatibilità o l&apos;oggetto della licenza venduta, senza implicare alcuna affiliazione 
                  diretta o violazione del copyright. Tutti i contenuti originali del sito (testi, grafica, loghi KeySafeHub) 
                  sono di nostra proprietà.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Uso Accettabile</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  L&apos;utente si impegna a:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Utilizzare le licenze esclusivamente per scopi leciti</li>
                  <li>Non rivendere o distribuire le licenze acquistate</li>
                  <li>Fornire informazioni accurate durante l&apos;acquisto</li>
                  <li>Non tentare di compromettere la sicurezza del sito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Legge Applicabile e Foro Competente</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia 
                  sarà competente il Foro del luogo di residenza del consumatore, se applicabile, 
                  o in alternativa il Foro di Milano.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Modifiche ai Termini</h2>
                <p className="text-muted-foreground leading-relaxed">
                  KeySafeHub si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. 
                  Le modifiche saranno efficaci dalla data di pubblicazione sul sito. L&apos;uso continuato del sito 
                  dopo la pubblicazione delle modifiche costituisce accettazione dei nuovi termini.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">14. Contatti</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Per qualsiasi domanda relativa ai presenti Termini e Condizioni, contattaci all&apos;indirizzo: 
                  <a href="mailto:support@keysafehub.eu" className="text-azure hover:underline ml-1">support@keysafehub.eu</a>
                </p>
              </section>

              {/* --- NUOVA SEZIONE LEGALE AGGIUNTA --- */}
              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-xl font-bold text-foreground mb-4 italic">15. Conformità Legale Europea (Sentenza C-128/11)</h2>
                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong>KEYSAFEHUB</strong> RISPETTA LE NORME E LE LEGGI EUROPEE RELATIVE ALLA RIVENDITA DEL SOFTWARE: 
                    Sentenza della Corte di Giustizia dell&apos;Unione Europea <strong>C-128/11 del 3 luglio 2012</strong> e C.E. C-128/2011. 
                    Questa giurisprudenza conferma la legittimità della rivendita di licenze software &quot;usate&quot; o precedentemente 
                    immesse sul mercato UE.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                    Tutti i Marchi sono di proprietà dei legittimi Proprietari; Marchi di Terze Parti, nomi di Prodotti, 
                    nomi Commerciali, Descrizioni/Immagini di Prodotti, nomi di Società e Società qui menzionate possono 
                    essere Marchi dei rispettivi Proprietari o Marchi di altre Società, utilizzati esclusivamente a scopo 
                    Informativo e per il Beneficio del Proprietario senza implicare una Violazione del Copyright.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
