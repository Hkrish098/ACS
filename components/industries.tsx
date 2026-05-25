import {
  Car,
  Utensils,
  Pill,
  Package,
  Fuel,
  Zap,
  Droplets,
  ShoppingBag,
} from 'lucide-react'

const industries = [
  {
    icon: Car,
    name: 'Automotive',
    description: 'Advanced automation for manufacturing and assembly',
  },
  {
    icon: Utensils,
    name: 'Food & Beverage',
    description: 'Process automation and quality control systems',
  },
  {
    icon: Pill,
    name: 'Pharmaceuticals',
    description: 'Precision automation and regulatory compliance',
  },
  {
    icon: Package,
    name: 'Packaging',
    description: 'High-speed automation for packaging lines',
  },
  {
    icon: Fuel,
    name: 'Oil & Gas',
    description: 'Industrial automation for complex operations',
  },
  {
    icon: Zap,
    name: 'Power & Energy',
    description: 'Control systems and monitoring solutions',
  },
  {
    icon: Droplets,
    name: 'Water Treatment',
    description: 'Process control and automated monitoring',
  },
  {
    icon: ShoppingBag,
    name: 'FMCG',
    description: 'Production automation and logistics optimization',
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Industries We Serve</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Solutions for Every Industry
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            Ascent Control Systems serves diverse industries with tailored automation solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="group relative bg-card rounded-lg border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 space-y-4 text-center">
                  <div className="flex justify-center">
                    <div className="inline-flex p-4 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>

                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/70 mb-6">
            Don&apos;t see your industry? We customize solutions for any supply chain environment.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Discuss your specific needs
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
