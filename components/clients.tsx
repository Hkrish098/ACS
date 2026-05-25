'use client'

export function Clients() {
  const clients = [
    'Bonfiglioli',
    'TATA MOTORS',
    'APAR TECHNOLOGY',
    'Mahindra',
    'ANAND MANDO',
    'TALBROS',
    'Kirloskar',
    'TATA GOTION',
    'eECA MOBILITY',
    'GEBERIT',
  ]

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Trusted By Industry Leaders</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Our Valued Customers
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            Leading companies partner with Ascent Control Systems for advanced automation solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg border border-border p-6 flex items-center justify-center min-h-24 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="relative z-10 text-center font-semibold text-foreground/80 group-hover:text-primary transition-colors text-sm">
                {client}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-foreground/70">
            Join industry leaders choosing Ascent Control Systems for innovation and reliability
          </p>
        </div>
      </div>
    </section>
  )
}
