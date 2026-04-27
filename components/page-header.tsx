interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
