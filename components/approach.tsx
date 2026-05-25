import { CheckCircle2 } from 'lucide-react'

const reasons = [
  'Experienced & skilled engineering team',
  'Customized & cost-effective solutions',
  'On-time project delivery',
  'High-quality standards & safety',
  '24/7 technical support & service',
  'Strong after-sales support',
]

export function Approach() {
  return (
    <section id="approach" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Why Choose Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Why Choose Ascent Control Systems?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            We deliver excellence through experience, innovation, and unwavering commitment to your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image or visual element */}
          <div className="relative h-96 sm:h-[450px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden border border-primary/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-primary/20">⚙️</div>
                <p className="text-primary/40 font-semibold">Advanced Automation</p>
                <p className="text-primary/30 text-sm">Solutions for Industry 4.0</p>
              </div>
            </div>
          </div>

          {/* Right side - Benefits */}
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {reason}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
          >
            Get in Touch
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
