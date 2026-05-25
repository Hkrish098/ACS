import {
  BarChart3,
  Truck,
  Zap,
  Shield,
  LineChart,
  Users,
  Cog,
  TrendingUp,
} from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Monitor your entire supply chain with live dashboards and instant insights into performance metrics.',
  },
  {
    icon: Truck,
    title: 'Route Optimization',
    description: 'AI-powered algorithms that reduce delivery times and fuel costs while maximizing vehicle utilization.',
  },
  {
    icon: Zap,
    title: 'Automation Engine',
    description: 'Intelligent automation for order processing, warehouse management, and inventory optimization.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Proactive alerts and predictive analytics to identify and mitigate supply chain disruptions.',
  },
  {
    icon: LineChart,
    title: 'Demand Forecasting',
    description: 'Machine learning models that accurately predict demand patterns and optimize inventory levels.',
  },
  {
    icon: Users,
    title: 'Collaboration Hub',
    description: 'Unified platform for seamless communication between suppliers, logistics partners, and customers.',
  },
  {
    icon: Cog,
    title: 'System Integration',
    description: 'Plug-and-play integration with your existing ERP, WMS, and TMS systems.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description: 'Comprehensive KPI monitoring and reporting for continuous improvement across all operations.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Our Services</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Comprehensive Supply Chain Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            Everything you need to optimize, automate, and scale your supply chain operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-card rounded-lg border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 space-y-4">
                  <div className="inline-flex p-3 bg-primary/10 group-hover:bg-primary/20 rounded-lg transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 inline-flex items-center gap-1 transition-all"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
