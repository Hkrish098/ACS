import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* CTA Section */}
        <div className="mb-16 pb-16 border-b border-background/20">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold">Ready to Transform Your Operations?</h2>
            <p className="text-lg text-background/80">
              Partner with Ascent Control Systems for advanced automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 rounded-lg border border-background/30 hover:bg-background/10 font-medium transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company */}
          <div className="space-y-4">
            <Image
              src="/ACS_logo.png"
              alt="Ascent Control Systems Logo"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
            <p className="text-sm text-background/70">
              Ascent Control Systems delivers advanced automation solutions for industrial and process industries, helping businesses achieve Industry 4.0 transformation through cutting-edge technologies.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link href="#services" className="hover:text-background transition-colors">Features</Link></li>
              <li><Link href="#industries" className="hover:text-background transition-colors">Solutions</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link href="#about" className="hover:text-background transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Webinars</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Contact</h4>
            <div className="space-y-3 text-sm text-background/80">
              <a href="mailto:info@ascentcontrolsystems.in" className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                info@ascentcontrolsystems.in
              </a>
              <a href="tel:+918431154522" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                +91 8431154522
              </a>
              <a href="tel:+918830676076" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                +91 8830676076
              </a>
              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>Shop No. 05, Goyal Industrial Premises,<br />F-II Block, Plot No. 5/2/3,<br />Near Wonder Car Service,<br />MIDC Bhosari, Pune - 411018</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social and Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-background/70">
            © {currentYear} Ascent Control Systems. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-lg hover:bg-background/10 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-background/10 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-background/10 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <div className="flex gap-6 text-sm text-background/70">
            <a href="#" className="hover:text-background transition-colors">Privacy</a>
            <a href="#" className="hover:text-background transition-colors">Terms</a>
            <a href="#" className="hover:text-background transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
