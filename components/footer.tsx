"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Dr. Noor" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const services = [
    { href: "/services#weight-management", label: "Weight Management" },
    { href: "/services#medical-nutrition", label: "Medical Nutrition" },
    { href: "/services#sports-nutrition", label: "Sports Nutrition" },
    { href: "/services#family-nutrition", label: "Family Nutrition" },
    { href: "/services#plant-based", label: "Plant-Based Nutrition" },
  ]

  const resources = [
    { href: "/blog", label: "Nutrition Blog" },
    { href: "/resources/meal-plans", label: "Meal Plans" },
    { href: "/resources/recipes", label: "Healthy Recipes" },
    { href: "/resources/guides", label: "Nutrition Guides" },
    { href: "/faq", label: "FAQ" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Dr. Rubia Noor</h3>
                <p className="text-primary-foreground/80 text-sm">Certified Nutritionist</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transforming lives through personalized nutrition and evidence-based wellness strategies.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>dr.rubia@nutrition.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Downtown Wellness Center
                  <br />
                  123 Health Street, Suite 200
                </span>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  Mon-Fri: 9AM-6PM
                  <br />
                  Sat: 10AM-2PM
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Get weekly nutrition tips and healthy recipes delivered to your inbox.
            </p>
            <div className="space-y-3 mb-6">
              <Input
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>

            <h5 className="font-semibold mb-3">Resources</h5>
            <ul className="space-y-2 text-sm">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Certifications */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground">
                Licensed Nutritionist
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground">
                Board Certified
              </Badge>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">© 2024 Dr. Rubia Noor Nutrition. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-primary-foreground/80 hover:text-primary-foreground">
                Accessibility
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 text-primary-foreground/60 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 fill-current" />
            <span>for better health</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
