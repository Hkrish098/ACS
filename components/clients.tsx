'use client'

export function Clients() {
  const clients = [
    'Global Logistics Inc.',
    'FastShip Networks',
    'Tech Supply Co.',
    'Retail Distribution',
    'Express Delivery Co.',
    'Supply Chain Hub',
    'Logistics Pioneer',
    'Commerce Solutions',
    'Distribution Masters',
    'Global Networks',
    'Supply Partners',
    'Efficiency Systems',
  ]

  return (
    <section className="py-20 sm:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">Trusted by Industry Leaders</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            500+ Enterprise Clients Worldwide
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 rounded-lg border border-border bg-background/50 hover:border-primary/50 transition-colors"
              >
                <span className="text-foreground font-medium text-sm sm:text-base">
                  {client}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/50 to-transparent pointer-events-none" />
        </div>

        {/* Marquee animation */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  )
}
