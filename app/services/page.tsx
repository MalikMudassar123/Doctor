import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { ServicesSection } from "@/components/services-section"
import { BookingSystem } from "@/components/booking-system"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import { person } from "@/lib/site-data"

export default function ServicesPage() {
  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive health assessment and goal setting session to understand your unique needs.",
    },
    {
      step: "02",
      title: "Personalized Plan",
      description: "Custom nutrition plan designed specifically for your lifestyle, preferences, and health goals.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Guided support as you begin implementing your new nutrition strategies with ongoing adjustments.",
    },
    {
      step: "04",
      title: "Progress Monitoring",
      description: "Regular check-ins to track progress, celebrate wins, and refine your plan for optimal results.",
    },
  ]

  const benefits = [
    "Evidence-based nutrition strategies",
    "Personalized meal planning",
    "Ongoing support and accountability",
    "Flexible scheduling options",
    "Comprehensive health assessments",
    "Family-friendly approaches",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/20 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary mb-4">Our Services</p>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 text-balance">
              Comprehensive Nutrition
              <span className="text-primary block">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Cardiac and clinical nutrition, dietary assessment and personalised diet planning — available in person
              in Toba Tek Singh and online across Pakistan.
            </p>
          </div>

        </div>
      </section>

      <ServicesSection showHeader={false} />

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How a consultation actually runs, from first assessment to follow-up
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
                Why Work With
                <span className="text-primary block">Rubia Noor?</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Clinical training at a working hospital, plans built from everyday Pakistani food, and a clear
                assessment before anything is prescribed.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[380px]">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-muted">
                <Image
                  src={person.portrait}
                  alt={`${person.name} — ${person.title}`}
                  fill
                  sizes="380px"
                  className="object-cover object-[50%_62%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSystem />
      <Footer />
    </main>
  )
}
