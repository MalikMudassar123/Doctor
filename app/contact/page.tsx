import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 text-balance">
              Let's Start Your
              <span className="text-primary block">Wellness Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Ready to transform your health? Get in touch today to schedule your personalized nutrition consultation
              and take the first step towards optimal wellness.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
