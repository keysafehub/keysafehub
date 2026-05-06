export interface Product {
  id: string
  title: string
  description: string
  longDescription?: string
  features?: string[]
  systemRequirements?: string[]
  image: string
  originalPrice: number
  salePrice: number
  discountPercent: number
  stripeLink: string
  category: 'windows' | 'office' | 'bundle' | 'antivirus'
  guide?: string[]
}

export const products: Product[] = [
  // Windows Products
  {
    id: 'windows-11-pro',
    title: 'Windows 11 Pro',
    description: 'La versione professionale di Windows 11 con funzionalità avanzate per la sicurezza e la produttività.',
    longDescription: 'Windows 11 Pro è la versione professionale del sistema operativo Microsoft...',
    features: [
      'BitLocker - Crittografia completa del disco',
      'Desktop Remoto - Accesso al PC da qualsiasi luogo',
      'Hyper-V - Virtualizzazione integrata',
      'Windows Sandbox - Ambiente isolato per test',
      'Supporto Azure Active Directory',
      'Gestione criteri di gruppo (GPO)',
      'Windows Information Protection',
      'Aggiornamenti posticipabili'
    ],
    systemRequirements: [
      'Processore: 1 GHz o superiore con 2 o più core (64-bit)',
      'RAM: 4 GB minimo',
      'Spazio su disco: 64 GB minimo',
      'Firmware: UEFI con Secure Boot',
      'TPM: Versione 2.0',
      'Scheda grafica: DirectX 12 compatibile',
      'Display: HD (720p) minimo'
    ],
    image: '/products/win11-pro.webp',
    originalPrice: 59.90,
    salePrice: 14.90,
    discountPercent: 75,
    stripeLink: 'https://buy.stripe.com/9B614h0uN5sW8wc8W5b3q00',
    category: 'windows',
    guide: [
      'Scarica il file ISO di Windows 11 dal sito ufficiale Microsoft',
      'Crea una chiavetta USB avviabile con Media Creation Tool',
      'Avvia il PC dalla USB e segui l\'installazione guidata',
      'Quando richiesto, inserisci il Product Key ricevuto via email',
      'Completa l\'installazione e verifica l\'attivazione in Impostazioni > Sistema > Attivazione'
    ]
  },
  {
    id: 'windows-11-home',
    title: 'Windows 11 Home',
    description: 'Windows 11 Home per uso domestico con tutte le funzionalità essenziali.',
    longDescription: 'Windows 11 Home è la versione ideale per uso domestico e personale...',
    features: [
      'Interfaccia moderna con nuovo menu Start',
      'Snap Layouts - Organizzazione finestre intelligente',
      'Widget personalizzabili',
      'Microsoft Teams integrato',
      'Supporto app Android (Amazon Appstore)',
      'DirectStorage per gaming veloce',
      'Auto HDR per gaming migliorato',
      'Windows Hello - Accesso biometrico'
    ],
    systemRequirements: [
      'Processore: 1 GHz o superiore con 2 o più core (64-bit)',
      'RAM: 4 GB minimo',
      'Spazio su disco: 64 GB minimo',
      'Firmware: UEFI con Secure Boot',
      'TPM: Versione 2.0',
      'Scheda grafica: DirectX 12 compatibile',
      'Display: HD (720p) minimo'
    ],
    image: '/products/win11-home.webp',
    originalPrice: 49.90,
    salePrice: 11.90,
    discountPercent: 76,
    stripeLink: 'https://buy.stripe.com/aFaeV7elD4oSfYEdclb3q05',
    category: 'windows',
    guide: [
      'Scarica il file ISO di Windows 11 dal sito ufficiale Microsoft',
      'Crea una chiavetta USB avviabile con Media Creation Tool',
      'Avvia il PC dalla USB e segui l\'installazione guidata',
      'Quando richiesto, inserisci il Product Key ricevuto via email',
      'Completa l\'installazione e verifica l\'attivazione in Impostazioni > Sistema > Attivazione'
    ]
  },
  
  // Office Products
  {
    id: 'office-2021-pro-plus',
    title: 'Office 2021 Professional Plus',
    description: 'Suite completa con Word, Excel, PowerPoint, Outlook, Access e Publisher.',
    longDescription: 'Microsoft Office 2021 Professional Plus è la suite completa...',
    features: [
      'Microsoft Word - Elaborazione testi professionale',
      'Microsoft Excel - Fogli di calcolo avanzati',
      'Microsoft PowerPoint - Presentazioni d\'impatto',
      'Microsoft Outlook - Email e calendario',
      'Microsoft Access - Database relazionali',
      'Microsoft Publisher - Pubblicazioni grafiche',
      'Licenza perpetua (no abbonamento)',
      'Aggiornamenti di sicurezza inclusi'
    ],
    systemRequirements: [
      'Processore: 1.6 GHz o superiore, dual-core',
      'RAM: 4 GB (64-bit), 2 GB (32-bit)',
      'Spazio su disco: 4 GB disponibili',
      'Display: 1280 x 768 minimo',
      'Sistema operativo: Windows 10 o Windows 11',
      'Browser: Edge, Chrome, Firefox o Safari'
    ],
    image: '/products/office21.webp',
    originalPrice: 49.90,
    salePrice: 13.90,
    discountPercent: 72,
    stripeLink: 'https://buy.stripe.com/7sY7sFelD4oSh2I3BLb3q04',
    category: 'office',
    guide: [
      'Ricevi il Product Key e il link per il download via email',
      'Scarica il file di installazione dal link fornito',
      'Esegui il file e segui la procedura guidata di installazione',
      'Apri un\'app Office (es. Word) e inserisci il Product Key quando richiesto',
      'Verifica l\'attivazione in File > Account'
    ]
  },
  {
    id: 'office-2024-pro-plus',
    title: 'Office 2024 Professional Plus',
    description: 'L\'ultima versione di Office con tutte le nuove funzionalità e miglioramenti.',
    longDescription: 'Microsoft Office 2024 Professional Plus rappresenta l\'ultima evoluzione...',
    features: [
      'Nuove funzionalità AI integrate',
      'Interfaccia utente rinnovata',
      'Prestazioni migliorate',
      'Nuove funzioni Excel (XLOOKUP, LET, LAMBDA)',
      'PowerPoint Designer potenziato',
      'Outlook con ricerca migliorata',
      'Supporto formati moderni',
      'Licenza perpetua inclusa'
    ],
    systemRequirements: [
      'Processore: 1.6 GHz o superiore, dual-core',
      'RAM: 4 GB (64-bit)',
      'Spazio su disco: 4 GB disponibili',
      'Display: 1280 x 768 minimo',
      'Sistema operativo: Windows 10 o Windows 11',
      'Connessione internet per attivazione'
    ],
    image: '/products/office24.webp',
    originalPrice: 79.90,
    salePrice: 24.90,
    discountPercent: 69,
    stripeLink: 'https://buy.stripe.com/6oU00d3GZ08CcMs2xHb3q03',
    category: 'office',
    guide: [
      'Ricevi il Product Key e il link per il download via email',
      'Scarica il file di installazione dal link fornito',
      'Esegui il file e segui la procedura guidata di installazione',
      'Apri un\'app Office (es. Word) e inserisci il Product Key quando richiesto',
      'Verifica l\'attivazione in File > Account'
    ]
  },
  
  // Bundle Products
  {
    id: 'bundle-win11-office2021',
    title: 'Windows 11 Pro + Office 2021',
    description: 'Il bundle perfetto: Windows 11 Pro e Office 2021 Professional Plus insieme.',
    longDescription: 'Questo bundle combina il meglio di Microsoft...',
    features: [
      'Windows 11 Pro completo',
      'Office 2021 Professional Plus completo',
      'Due Product Key separati',
      'Risparmio rispetto all\'acquisto singolo',
      'Attivazione immediata',
      'Supporto tecnico incluso',
      'Licenze perpetue (no abbonamento)',
      'Download digitale istantaneo'
    ],
    systemRequirements: [
      'Requisiti Windows 11 Pro',
      'Processore: 1 GHz dual-core 64-bit',
      'RAM: 4 GB minimo (8 GB consigliati)',
      'Spazio su disco: 70 GB minimo',
      'TPM 2.0 e Secure Boot richiesti',
      'Connessione internet per download'
    ],
    image: '/products/win11-pro-office21.webp',
    originalPrice: 109.80,
    salePrice: 19.90,
    discountPercent: 82,
    stripeLink: 'https://buy.stripe.com/aFafZb5P76x07s8b4db3q01',
    category: 'bundle',
    guide: [
      'Ricevi 2 Product Key separati via email (Windows + Office)',
      'Installa prima Windows 11 Pro seguendo la guida dedicata',
      'Una volta attivato Windows, installa Office 2021',
      'Attiva Office inserendo il secondo Product Key',
      'Verifica entrambe le attivazioni nelle rispettive impostazioni'
    ]
  },
  {
    id: 'bundle-win11-office2024',
    title: 'Windows 11 Pro + Office 2024',
    description: 'Il bundle premium: Windows 11 Pro e Office 2024 Professional Plus insieme.',
    longDescription: 'Il bundle premium per chi vuole il massimo...',
    features: [
      'Windows 11 Pro - Ultima versione',
      'Office 2024 Professional Plus - Ultima versione',
      'Due Product Key separati',
      'Massimo risparmio garantito',
      'Funzionalità AI di Office 2024',
      'BitLocker e sicurezza avanzata',
      'Licenze perpetue incluse',
      'Supporto prioritario'
    ],
    systemRequirements: [
      'Requisiti Windows 11 Pro',
      'Processore: 1 GHz dual-core 64-bit',
      'RAM: 8 GB consigliati',
      'Spazio su disco: 80 GB minimo',
      'TPM 2.0 e Secure Boot richiesti',
      'Connessione internet per download'
    ],
    image: '/products/win11-pro-office24.webp',
    originalPrice: 139.80,
    salePrice: 29.90,
    discountPercent: 79,
    stripeLink: 'https://buy.stripe.com/dRmfZbb9r7B4aEkegpb3q06',
    category: 'bundle',
    guide: [
      'Ricevi 2 Product Key separati via email (Windows + Office)',
      'Installa prima Windows 11 Pro seguendo la guida dedicata',
      'Una volta attivato Windows, installa Office 2024',
      'Attiva Office inserendo il secondo Product Key',
      'Verifica entrambe le attivazioni nelle rispettive impostazioni'
    ]
  },

  // Antivirus Products
  {
    id: 'mcafee-antivirus-plus',
    title: 'McAfee AntiVirus Plus',
    description: 'Protezione antivirus essenziale per il tuo PC con scansione in tempo reale.',
    longDescription: 'McAfee AntiVirus Plus offre una protezione essenziale...',
    features: [
      'Protezione antivirus in tempo reale',
      'Scansione anti-malware',
      'Protezione ransomware',
      'Firewall personale',
      'Scansione vulnerabilità Wi-Fi',
      'Aggiornamenti automatici',
      'Impatto minimo sulle prestazioni',
      'Abbonamento 1 anno'
    ],
    systemRequirements: [
      'Windows 10 o Windows 11',
      'Processore: 1 GHz o superiore',
      'RAM: 2 GB minimo',
      'Spazio su disco: 500 MB',
      'Connessione internet richiesta'
    ],
    image: '/products/mcafee-plus.webp',
    originalPrice: 39.90,
    salePrice: 9.90,
    discountPercent: 75,
    stripeLink: 'https://buy.stripe.com/5kQaERelD2gK5k0dclb3q02',
    category: 'antivirus',
    guide: [
      'Ricevi il codice di attivazione via email dopo l\'acquisto',
      'Vai su mcafee.com/activate e crea un account McAfee',
      'Inserisci il codice di attivazione ricevuto',
      'Scarica e installa McAfee seguendo le istruzioni',
      'Esegui la prima scansione completa del sistema'
    ]
  },
  {
    id: 'mcafee-total-protection-1',
    title: 'McAfee Total Protection - 1 Dispositivo',
    description: 'Protezione completa per PC, Mac, smartphone e tablet. Abbonamento 1 anno.',
    longDescription: 'McAfee Total Protection è la soluzione di sicurezza completa...',
    features: [
      'Antivirus e anti-malware avanzato',
      'VPN sicura illimitata',
      'Gestore password',
      'Protezione identità',
      'Navigazione sicura',
      'Firewall avanzato',
      'Protezione rete domestica',
      'Supporto 24/7'
    ],
    systemRequirements: [
      'Windows 10/11, macOS, Android, iOS',
      'Processore: 1 GHz o superiore',
      'RAM: 2 GB minimo',
      'Spazio su disco: 500 MB',
      'Connessione internet richiesta'
    ],
    image: '/products/mcafee-1.webp',
    originalPrice: 49.90,
    salePrice: 11.90,
    discountPercent: 76,
    stripeLink: 'https://buy.stripe.com/5kQ7sF5P77B4cMs8W5b3q07',
    category: 'antivirus',
    guide: [
      'Ricevi il codice di attivazione via email dopo l\'acquisto',
      'Vai su mcafee.com/activate e crea un account McAfee',
      'Inserisci il codice di attivazione ricevuto',
      'Scarica e installa McAfee sul tuo dispositivo',
      'Attiva la protezione in tempo reale e esegui una scansione'
    ]
  },
  {
    id: 'mcafee-total-protection-5',
    title: 'McAfee Total Protection - 5 Dispositivi',
    description: 'Protezione completa per tutta la famiglia. 5 dispositivi, 1 anno di abbonamento.',
    longDescription: 'McAfee Total Protection per 5 dispositivi è la soluzione ideale...',
    features: [
      'Protezione per 5 dispositivi',
      'Antivirus e anti-malware premium',
      'VPN sicura per tutti i dispositivi',
      'Gestore password famiglia',
      'Controllo parentale',
      'Protezione identità famiglia',
      'Monitoraggio dark web',
      'Supporto prioritario 24/7'
    ],
    systemRequirements: [
      'Windows 10/11, macOS, Android, iOS',
      'Processore: 1 GHz o superiore',
      'RAM: 2 GB minimo per dispositivo',
      'Spazio su disco: 500 MB per dispositivo',
      'Connessione internet richiesta'
    ],
    image: '/products/mcaffe-5.webp', // Mantenuto 'mcaffe' come da tuo screenshot
    originalPrice: 89.90,
    salePrice: 22.90,
    discountPercent: 75,
    stripeLink: 'https://buy.stripe.com/eVq4gt91j4oSeUA1tDb3q08',
    category: 'antivirus',
    guide: [
      'Ricevi il codice di attivazione via email dopo l\'acquisto',
      'Vai su mcafee.com/activate e accedi al tuo account',
      'Inserisci il codice per attivare la licenza per 5 dispositivi',
      'Installa McAfee su ogni dispositivo della famiglia',
      'Gestisci tutti i dispositivi dal pannello di controllo online'
    ]
  },
  {
    id: 'bundle-win11-mcafee',
    title: 'Windows 11 Pro + McAfee Total Protection',
    description: 'Il bundle sicurezza: Windows 11 Pro con McAfee Total Protection incluso.',
    longDescription: 'Il bundle perfetto per chi vuole un PC sicuro fin dal primo giorno...',
    features: [
      'Windows 11 Pro completo',
      'McAfee Total Protection 1 dispositivo',
      'Doppia protezione garantita',
      'BitLocker + Antivirus McAfee',
      'VPN sicura inclusa',
      'Protezione identità',
      'Due codici separati',
      'Risparmio esclusivo'
    ],
    systemRequirements: [
      'Requisiti Windows 11 Pro',
      'Processore: 1 GHz dual-core 64-bit',
      'RAM: 4 GB minimo',
      'Spazio su disco: 65 GB minimo',
      'TPM 2.0 richiesto',
      'Connessione internet'
    ],
    image: '/products/win11-mcafee.webp',
    originalPrice: 109.80,
    salePrice: 24.90,
    discountPercent: 77,
    stripeLink: 'https://buy.stripe.com/9B614h0uN5sW8wc8W5b3q00',
    category: 'bundle',
    guide: [
      'Ricevi 2 codici separati via email (Windows + McAfee)',
      'Installa prima Windows 11 Pro con il primo Product Key',
      'Una volta attivato Windows, vai su mcafee.com/activate',
      'Attiva McAfee con il secondo codice e installa',
      'Esegui la prima scansione per proteggere il tuo PC'
    ]
  },
]

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(p => p.category === category)
}

export const getFeaturedProducts = () => {
  return [
    products.find(p => p.id === 'windows-11-pro')!,
    products.find(p => p.id === 'office-2024-pro-plus')!,
    products.find(p => p.id === 'bundle-win11-office2021')!,
    products.find(p => p.id === 'mcafee-total-protection-1')!,
  ]
}

export const getProductById = (id: string) => {
  return products.find(p => p.id === id)
}
