import {
  Zap,
  Wifi,
  Cpu,
  Gauge,
  TrendingUp,
  Wrench,
  MonitorPlay,
  BoxesIcon,
} from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'ROBOTICS SOLUTIONS',
    description: 'Industrial robots, cobots, welding, pick & place, palletizing, and custom robotic cells.',
  },
  {
    icon: Wifi,
    title: 'INDUSTRIAL IOT (IIOT)',
    description: 'IoT solutions for data collection, analytics, dashboard & remote monitoring.',
  },
  {
    icon: Cpu,
    title: 'PLC PROGRAMMING',
    description: 'PLC programming, panel design, installation, testing & commissioning.',
  },
  {
    icon: Gauge,
    title: 'MOTION & DRIVE SOLUTIONS',
    description: 'Servo systems, VFD drives, motion control & synchronization solutions.',
  },
  {
    icon: TrendingUp,
    title: 'SCADA DEVELOPMENT',
    description: 'SCADA system design, development, data acquisition, remote monitoring & control.',
  },
  {
    icon: Wrench,
    title: 'MACHINE AUTOMATION',
    description: 'End-to-end automation for machines, lines and process systems.',
  },
  {
    icon: MonitorPlay,
    title: 'HMI DESIGN',
    description: 'User-friendly HMI/SCADA interface design for better visualization and control.',
  },
  {
    icon: BoxesIcon,
    title: 'PANEL MANUFACTURING',
    description: 'Control panel, MCC, PCC, PLC, VFD & instrumentation panels manufacturing.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Our Services</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Our Core Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            Comprehensive automation solutions for industrial and process industries.
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
