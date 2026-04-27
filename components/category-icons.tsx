import Link from 'next/link'
import { Monitor, FileText, Shield, Package } from 'lucide-react'

const categories = [
  {
    name: 'Windows',
    href: '/windows',
    icon: Monitor,
    description: 'Windows 11 Pro & Home',
    color: 'bg-blue-500',
  },
  {
    name: 'Office',
    href: '/office',
    icon: FileText,
    description: 'Office 2021 & 2024',
    color: 'bg-orange-500',
  },
  {
    name: 'Antivirus',
    href: '/antivirus',
    icon: Shield,
    description: 'McAfee Total Protection',
    color: 'bg-red-500',
  },
  {
    name: 'Bundle',
    href: '/bundle',
    icon: Package,
    description: 'Pacchetti Risparmio',
    color: 'bg-emerald-500',
  },
]

export function CategoryIcons() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Scegli la tua categoria
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trova il software perfetto per le tue esigenze
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center p-8 bg-card rounded-2xl border border-border hover:border-azure/50 hover:shadow-lg hover:shadow-azure/10 transition-all duration-300"
            >
              <div className={`${category.color} p-5 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-azure transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
