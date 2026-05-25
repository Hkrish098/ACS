'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'Industries', href: '#industries' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/ACS.png"
              alt="ACS Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mx-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
