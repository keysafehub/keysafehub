import Link from 'next/link'
import { Shield, Mail } from 'lucide-react'

const footerLinks = {
  prodotti: [
    { name: 'Windows', href: '/windows' },
    { name: 'Office', href: '/office' },
    { name: 'Antivirus', href: '/antivirus' },
    { name: 'Bundle', href: '/bundle' },
  ],
  supporto: [
    { name: 'Guide', href: '/guide' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contatti', href: '/contatti' },
    { name: 'Recensioni', href: '/recensioni' },
  ],
  legale: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Termini e Condizioni', href: '/termini-condizioni' },
    { name: 'Garanzia e Resi', href: '/garanzia-resi' },
    { name: 'Informazioni Licenze', href: '/informazioni-licenze' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-azure" />
              <span className="text-xl font-bold">KeySafeHub</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Il tuo partner di fiducia per licenze digitali originali. 
              Attivazione immediata e supporto dedicato.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail className="h-4 w-4" />
              <a href="mailto:support@keysafehub.eu" className="hover:text-primary-foreground transition-colors">
                support@keysafehub.eu
              </a>
            </div>
          </div>

          {/* Prodotti */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Prodotti
            </h3>
            <ul className="space-y-3">
              {footerLinks.prodotti.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Supporto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Supporto
            </h3>
            <ul className="space-y-3">
              {footerLinks.supporto.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legale */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Legale
            </h3>
            <ul className="space-y-3">
              {footerLinks.legale.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} KeySafeHub. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-primary-foreground/50">
                Pagamenti sicuri con
              </span>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-1.5 rounded-md">
                <span className="text-sm font-medium">Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
