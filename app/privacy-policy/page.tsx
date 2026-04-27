import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Informativa sulla privacy di KeySafeHub. Scopri come trattiamo i tuoi dati personali in conformità al GDPR.',
  openGraph: {
    title: 'Privacy Policy | KeySafeHub',
    description: 'Informativa sulla privacy e trattamento dati personali.',
  }
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Informativa sul trattamento dei dati personali"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Titolare del Trattamento</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Il titolare del trattamento dei dati personali è KeySafeHub, contattabile all&apos;indirizzo email support@keysafehub.eu. 
                  Il titolare si impegna a proteggere la privacy degli utenti e a trattare i dati personali in conformità al 
                  Regolamento (UE) 2016/679 (GDPR) e alla normativa italiana vigente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Dati Raccolti</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  KeySafeHub raccoglie i seguenti tipi di dati personali:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Dati identificativi:</strong> nome, cognome, indirizzo email</li>
                  <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, sistema operativo, pagine visitate</li>
                  <li><strong>Dati di pagamento:</strong> elaborati in modo sicuro tramite Stripe (non conserviamo dati delle carte)</li>
                  <li><strong>Dati di contatto:</strong> informazioni fornite tramite il form di contatto</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Finalità del Trattamento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I dati personali vengono trattati per le seguenti finalità:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Elaborazione e consegna degli ordini di licenze digitali</li>
                  <li>Gestione delle richieste di assistenza clienti</li>
                  <li>Invio di comunicazioni relative agli ordini</li>
                  <li>Adempimento degli obblighi legali e fiscali</li>
                  <li>Miglioramento dei nostri servizi e dell&apos;esperienza utente</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Base Giuridica</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Il trattamento dei dati si basa su: esecuzione di un contratto (acquisto di licenze), 
                  consenso dell&apos;interessato (per comunicazioni marketing), adempimento di obblighi legali, 
                  e legittimo interesse del titolare (miglioramento dei servizi e prevenzione frodi).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookie Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Il sito utilizza cookie tecnici necessari per il funzionamento e cookie analitici per comprendere 
                  come i visitatori interagiscono con il sito. I cookie utilizzati sono:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Cookie tecnici:</strong> essenziali per il funzionamento del sito</li>
                  <li><strong>Cookie di sessione:</strong> eliminati alla chiusura del browser</li>
                  <li><strong>Cookie analitici:</strong> per analisi statistiche anonime del traffico</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Conservazione dei Dati</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I dati personali vengono conservati per il tempo necessario a fornire i servizi richiesti e 
                  comunque non oltre quanto previsto dalla normativa fiscale e civilistica vigente. 
                  I dati relativi agli ordini vengono conservati per 10 anni per obblighi fiscali. 
                  I dati di contatto vengono conservati fino alla richiesta di cancellazione.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Diritti dell&apos;Interessato</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In conformità al GDPR, hai diritto di:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Accesso:</strong> ottenere conferma del trattamento e accedere ai tuoi dati</li>
                  <li><strong>Rettifica:</strong> correggere dati inesatti o incompleti</li>
                  <li><strong>Cancellazione:</strong> richiedere la cancellazione dei tuoi dati</li>
                  <li><strong>Limitazione:</strong> limitare il trattamento in determinati casi</li>
                  <li><strong>Portabilità:</strong> ricevere i dati in formato strutturato</li>
                  <li><strong>Opposizione:</strong> opporti al trattamento per motivi legittimi</li>
                  <li><strong>Revoca del consenso:</strong> revocare il consenso in qualsiasi momento</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Per esercitare i tuoi diritti, contattaci a support@keysafehub.eu. 
                  Hai inoltre il diritto di proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Sicurezza dei Dati</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, 
                  perdita, distruzione o divulgazione. I pagamenti sono gestiti tramite Stripe, leader mondiale nei pagamenti sicuri, 
                  con crittografia SSL/TLS e conformità PCI-DSS.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifiche alla Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ci riserviamo il diritto di modificare questa privacy policy in qualsiasi momento. 
                  Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. 
                  Ti invitiamo a consultare periodicamente questa pagina.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contatti</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Per qualsiasi domanda relativa a questa privacy policy o al trattamento dei tuoi dati personali, 
                  puoi contattarci all&apos;indirizzo email: <a href="mailto:support@keysafehub.eu" className="text-azure hover:underline">support@keysafehub.eu</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
