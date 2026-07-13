import { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import Link from 'next/link'
import { 
  Monitor, 
  FileText, 
  Shield, 
  Package, 
  Download, 
  Key, 
  CheckCircle, 
  HelpCircle,
  Mail,
  ArrowRight,
  Laptop,
  Settings,
  RefreshCw
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Guide Complete | KeySafeHub',
  description: 'Guide dettagliate per l\'installazione e attivazione di Windows, Office e McAfee. Istruzioni passo-passo per tutti i nostri prodotti.',
  keywords: 'guida installazione windows, attivazione office, guida mcafee, product key, licenza digitale',
}

const guides = [
  {
    id: 'windows-11-pro',
    title: 'Windows 11 Pro',
    description: 'Guida completa per installare e attivare Windows 11 Pro',
    icon: Monitor,
    color: 'bg-blue-500',
    sections: [
      {
        title: 'Requisiti di Sistema',
        steps: [
          'Processore: 1 GHz o superiore con 2 o più core su processore a 64 bit compatibile',
          'RAM: almeno 4 GB',
          'Spazio di archiviazione: 64 GB o superiore',
          'Firmware di sistema: UEFI, compatibile con Secure Boot',
          'TPM: Trusted Platform Module versione 2.0',
          'Scheda grafica: compatibile con DirectX 12 o successivo con driver WDDM 2.0',
          'Display: display ad alta definizione (720p) di diagonale superiore a 9 pollici'
        ]
      },
      {
        title: 'Download del File ISO',
        steps: [
          'Vai sul sito ufficiale Microsoft: microsoft.com/software-download/windows11',
          'Scorri fino a "Scarica immagine disco (ISO) di Windows 11"',
          'Seleziona "Windows 11 (multi-edizione ISO)" dal menu a tendina',
          'Clicca su "Scarica" e seleziona la lingua italiana',
          'Conferma e attendi il download del file ISO (circa 5-6 GB)'
        ]
      },
      {
        title: 'Creazione Chiavetta USB Avviabile',
        steps: [
          'Scarica Media Creation Tool dal sito Microsoft',
          'Inserisci una chiavetta USB da almeno 8 GB (i dati saranno cancellati)',
          'Avvia Media Creation Tool e accetta i termini di licenza',
          'Seleziona "Crea supporto di installazione per un altro PC"',
          'Scegli lingua, edizione e architettura (64 bit consigliato)',
          'Seleziona "Unità flash USB" e scegli la tua chiavetta',
          'Attendi il completamento della creazione (15-30 minuti)'
        ]
      },
      {
        title: 'Installazione di Windows 11',
        steps: [
          'Inserisci la chiavetta USB nel PC e riavvialo',
          'Premi il tasto per il menu di boot (F12, F2, ESC o DEL a seconda del PC)',
          'Seleziona la chiavetta USB come dispositivo di avvio',
          'Nella schermata di installazione, scegli lingua e layout tastiera',
          'Clicca su "Installa" e poi "Non ho un codice Product Key" (lo inserirai dopo)',
          'Seleziona "Windows 11 Pro" come edizione',
          'Accetta i termini di licenza e scegli "Personalizzata: installa solo Windows"',
          'Seleziona il disco dove installare Windows (formattalo se necessario)',
          'Attendi il completamento dell\'installazione e i riavvii automatici'
        ]
      },
      {
        title: 'Attivazione con Product Key',
        steps: [
          'Dopo l\'installazione, apri le Impostazioni (Windows + I)',
          'Vai su Sistema > Attivazione',
          'Clicca su "Cambia codice Product Key"',
          'Inserisci il Product Key ricevuto via email da KeySafeHub',
          'Clicca su "Avanti" e poi su "Attiva"',
          'Attendi la conferma: "Windows è stato attivato"',
          'Il tuo Windows 11 Pro è ora attivato e pronto all\'uso!'
        ]
      }
    ]
  },
  {
    id: 'windows-11-home',
    title: 'Windows 11 Home',
    description: 'Guida completa per installare e attivare Windows 11 Home',
    icon: Laptop,
    color: 'bg-cyan-500',
    sections: [
      {
        title: 'Requisiti di Sistema',
        steps: [
          'Processore: 1 GHz o superiore con 2 o più core su processore a 64 bit',
          'RAM: almeno 4 GB',
          'Spazio di archiviazione: 64 GB o superiore',
          'TPM: Trusted Platform Module versione 2.0',
          'Connessione Internet per la configurazione iniziale',
          'Account Microsoft richiesto per completare la configurazione'
        ]
      },
      {
        title: 'Download e Installazione',
        steps: [
          'Vai su microsoft.com/software-download/windows11',
          'Scarica il Media Creation Tool',
          'Crea una chiavetta USB avviabile seguendo le istruzioni',
          'Avvia il PC dalla USB e segui la procedura guidata',
          'Seleziona "Windows 11 Home" quando richiesto',
          'Completa la configurazione con il tuo account Microsoft'
        ]
      },
      {
        title: 'Attivazione',
        steps: [
          'Apri Impostazioni > Sistema > Attivazione',
          'Clicca su "Cambia codice Product Key"',
          'Inserisci il Product Key ricevuto da KeySafeHub',
          'Clicca su "Attiva" e attendi la conferma',
          'Windows 11 Home è ora attivato!'
        ]
      }
    ]
  },
  {
    id: 'office-2021',
    title: 'Office 2021 Professional Plus',
    description: 'Guida completa per installare e attivare Office 2021',
    icon: FileText,
    color: 'bg-orange-500',
    sections: [
      {
        title: 'Prima di Iniziare',
        steps: [
          'Assicurati che il PC soddisfi i requisiti minimi',
          'Verifica di avere una connessione Internet stabile',
          'Disinstalla eventuali versioni precedenti di Office',
          'Chiudi tutte le applicazioni Office eventualmente aperte',
          'Tieni a portata di mano il Product Key ricevuto via email'
        ]
      },
      {
        title: 'Download di Office 2021',
        steps: [
          'Riceverai via email il link per il download e il Product Key',
          'Clicca sul link fornito per scaricare il file di installazione',
          'In alternativa, vai su setup.office.com e inserisci il Product Key',
          'Accedi con un account Microsoft o creane uno nuovo',
          'Scarica il file di installazione Office (circa 4-5 GB)'
        ]
      },
      {
        title: 'Installazione',
        steps: [
          'Esegui il file scaricato come amministratore (tasto destro > Esegui come amministratore)',
          'L\'installazione inizierà automaticamente in background',
          'Non spegnere il PC durante l\'installazione (15-30 minuti)',
          'Al termine, troverai le app Office nel menu Start',
          'Potrebbe essere necessario riavviare il computer'
        ]
      },
      {
        title: 'Attivazione di Office',
        steps: [
          'Apri una qualsiasi app Office (es. Word o Excel)',
          'Clicca su "Accedi" se richiesto e usa il tuo account Microsoft',
          'Se appare la finestra di attivazione, clicca su "Attiva con un codice Product Key"',
          'Inserisci il Product Key di 25 caratteri ricevuto via email',
          'Clicca su "Attiva Office" e attendi la conferma',
          'Per verificare: File > Account > La licenza deve risultare attiva'
        ]
      },
      {
        title: 'App Incluse in Office 2021',
        steps: [
          'Word - Elaboratore di testi professionale',
          'Excel - Fogli di calcolo avanzati',
          'PowerPoint - Presentazioni professionali',
          'Outlook - Client email e calendario',
          'Access - Database relazionale (solo versione Pro Plus)',
          'Publisher - Creazione di pubblicazioni (solo versione Pro Plus)',
          'OneNote - Blocco note digitale',
          'Teams - Collaborazione e videochiamate'
        ]
      }
    ]
  },
  {
    id: 'office-2024',
    title: 'Office 2024 Professional Plus',
    description: 'Guida completa per installare e attivare Office 2024',
    icon: FileText,
    color: 'bg-red-500',
    sections: [
      {
        title: 'Novità di Office 2024',
        steps: [
          'Nuove funzionalità AI integrate in Word, Excel e PowerPoint',
          'Interfaccia utente modernizzata con nuovo design Fluent',
          'Prestazioni migliorate e avvio più rapido delle applicazioni',
          'Nuove funzioni di collaborazione in tempo reale',
          'Supporto migliorato per formati file moderni',
          'Funzionalità di accessibilità potenziate'
        ]
      },
      {
        title: 'Requisiti di Sistema',
        steps: [
          'Windows 10 o Windows 11 (64 bit)',
          'Processore: 1.6 GHz, 2 core o superiore',
          'RAM: 4 GB (8 GB consigliati)',
          'Spazio su disco: 4 GB disponibili',
          'Risoluzione schermo: 1280 x 768 o superiore',
          'Connessione Internet per l\'attivazione'
        ]
      },
      {
        title: 'Download e Installazione',
        steps: [
          'Ricevi il link di download e il Product Key via email',
          'Clicca sul link per scaricare l\'installer di Office 2024',
          'Esegui il file come amministratore',
          'L\'installazione procede automaticamente (20-30 minuti)',
          'Non chiudere la finestra durante l\'installazione',
          'Al termine, le app saranno nel menu Start'
        ]
      },
      {
        title: 'Attivazione',
        steps: [
          'Apri Word, Excel o qualsiasi app Office',
          'Clicca su "Attiva" quando richiesto',
          'Seleziona "Ho un codice Product Key"',
          'Inserisci il codice di 25 caratteri',
          'Clicca su "Attiva" e attendi la conferma',
          'Verifica in File > Account che la licenza sia attiva'
        ]
      }
    ]
  },
  {
    id: 'mcafee',
    title: 'McAfee Total Protection',
    description: 'Guida completa per installare e attivare McAfee',
    icon: Shield,
    color: 'bg-red-600',
    sections: [
      {
        title: 'Prima dell\'Installazione',
        steps: [
          'Disinstalla eventuali altri antivirus presenti nel sistema',
          'Gli antivirus in conflitto possono causare problemi',
          'Usa lo strumento di rimozione ufficiale se necessario',
          'Riavvia il computer dopo la disinstallazione',
          'Assicurati di avere una connessione Internet stabile'
        ]
      },
      {
        title: 'Attivazione dell\'Account',
        steps: [
          'Vai su mcafee.com/activate',
          'Clicca su "Accedi" se hai già un account McAfee',
          'Oppure clicca su "Crea account" per registrarti',
          'Inserisci il codice di attivazione ricevuto via email',
          'Il codice verrà associato al tuo account McAfee',
          'Ora puoi scaricare McAfee su qualsiasi dispositivo autorizzato'
        ]
      },
      {
        title: 'Download e Installazione',
        steps: [
          'Dopo l\'attivazione, clicca su "Scarica" nella dashboard',
          'Verrà scaricato un file di installazione',
          'Esegui il file e clicca su "Installa"',
          'Accetta i termini di licenza',
          'L\'installazione richiede 5-10 minuti',
          'Al termine, McAfee si avvierà automaticamente'
        ]
      },
      {
        title: 'Prima Configurazione',
        steps: [
          'McAfee eseguirà una scansione rapida automatica',
          'Configura la scansione pianificata (consigliato: settimanale)',
          'Attiva il firewall e la protezione web',
          'Configura la protezione in tempo reale',
          'Imposta le eccezioni per software fidato se necessario',
          'Esegui una scansione completa del sistema (30-60 minuti)'
        ]
      },
      {
        title: 'Gestione Multi-Dispositivo',
        steps: [
          'Accedi a my.mcafee.com con le tue credenziali',
          'Vai su "I miei dispositivi"',
          'Clicca su "Aggiungi dispositivo" per installare su altri PC/Mac/smartphone',
          'Puoi gestire tutti i dispositivi da un unico pannello',
          'Le licenze multi-dispositivo permettono protezione su tutta la famiglia'
        ]
      }
    ]
  },
  {
    id: 'bundle',
    title: 'Bundle Windows + Office/McAfee',
    description: 'Guida per installare i bundle con più prodotti',
    icon: Package,
    color: 'bg-emerald-500',
    sections: [
      {
        title: 'Contenuto del Bundle',
        steps: [
          'Riceverai 2 o 3 Product Key separati via email',
          'Ogni chiave è per un prodotto specifico',
          'Le chiavi sono chiaramente etichettate nell\'email',
          'Conserva le chiavi in un luogo sicuro',
          'I link di download sono inclusi nell\'email'
        ]
      },
      {
        title: 'Ordine di Installazione Consigliato',
        steps: [
          '1. Installa prima Windows (il sistema operativo base)',
          '2. Configura Windows e installa gli aggiornamenti',
          '3. Installa Office (Word, Excel, ecc.)',
          '4. Installa l\'antivirus per ultimo',
          'Questo ordine evita conflitti durante l\'installazione'
        ]
      },
      {
        title: 'Installazione Windows',
        steps: [
          'Segui la guida dedicata a Windows 11 Pro/Home',
          'Attiva Windows con il primo Product Key',
          'Verifica che l\'attivazione sia completata',
          'Installa tutti gli aggiornamenti di Windows Update',
          'Riavvia il computer prima di procedere'
        ]
      },
      {
        title: 'Installazione Office',
        steps: [
          'Segui la guida dedicata a Office 2021/2024',
          'Usa il secondo Product Key per l\'attivazione',
          'Verifica che tutte le app siano attivate',
          'Configura il tuo account Microsoft nelle app'
        ]
      },
      {
        title: 'Installazione Antivirus (se incluso)',
        steps: [
          'Segui la guida dedicata a McAfee',
          'Usa il terzo codice per l\'attivazione',
          'Esegui una scansione completa dopo l\'installazione',
          'Configura la protezione in tempo reale'
        ]
      }
    ]
  }
]

const supportLinks = [
  {
    title: 'FAQ',
    description: 'Risposte alle domande più frequenti',
    href: '/faq',
    icon: HelpCircle
  },
  {
    title: 'Contattaci',
    description: 'Supporto via email entro 24 ore',
    href: '/contatti',
    icon: Mail
  },
  {
    title: 'Garanzia e Resi',
    description: 'Informazioni su rimborsi e garanzia',
    href: '/garanzia-resi',
    icon: RefreshCw
  },
  {
    title: 'Info Licenze',
    description: 'Come funzionano le licenze digitali',
    href: '/informazioni-licenze',
    icon: Key
  }
]

export default function GuidePage() {
  return (
    <>
      <PageHeader
        title="Guide Complete"
        description="Istruzioni dettagliate per installare e attivare tutti i nostri prodotti. Segui le guide passo-passo per una configurazione perfetta."
      />

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Quick Links */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Accesso Rapido alle Guide
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {guides.map((guide) => (
                <a
                  key={guide.id}
                  href={`#${guide.id}`}
                  className="flex flex-col items-center p-4 bg-card border border-border rounded-xl hover:border-azure/50 hover:shadow-lg transition-all group"
                >
                  <div className={`w-12 h-12 ${guide.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <guide.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {guide.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Full Guides */}
          <div className="space-y-16">
            {guides.map((guide) => (
              <div key={guide.id} id={guide.id} className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 ${guide.color} rounded-2xl flex items-center justify-center`}>
                    <guide.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {guide.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {guide.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6">
                  {guide.sections.map((section, sectionIndex) => (
                    <Card key={sectionIndex} className="bg-card border-border">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-3 text-lg">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-azure text-white text-sm font-bold">
                            {sectionIndex + 1}
                          </span>
                          {section.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-3">
                          {section.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex gap-3">
                              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground leading-relaxed">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* CTA to buy product */}
                <div className="mt-6 p-6 bg-azure/10 border border-azure/20 rounded-xl">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Non hai ancora acquistato {guide.title}?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Acquista ora e ricevi il Product Key immediatamente via email.
                      </p>
                    </div>
                    <Button asChild className="bg-azure hover:bg-azure/90 text-white">
                      <Link href={guide.id.includes('office') ? '/office' : guide.id.includes('mcafee') ? '/antivirus' : guide.id.includes('bundle') ? '/bundle' : '/windows'}>
                        Acquista Ora
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Support Section */}
          <div className="mt-20 pt-16 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground text-center mb-4">
              Hai Bisogno di Aiuto?
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Il nostro team di supporto è sempre pronto ad aiutarti. Contattaci per qualsiasi problema durante l&apos;installazione o l&apos;attivazione.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex flex-col items-center p-6 bg-card border border-border rounded-xl hover:border-azure/50 hover:shadow-lg transition-all group text-center"
                >
                  <div className="w-14 h-14 bg-azure/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-azure/20 transition-colors">
                    <link.icon className="w-6 h-6 text-azure" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
