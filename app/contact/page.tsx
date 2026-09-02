import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/20 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary mb-4">Contact Us</p>
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

      <ContactSection showHeader={false} />
      <Footer />
    </main>
  )
}
