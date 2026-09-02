import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { CredentialsSection } from "@/components/credentials-section"
import { Footer } from "@/components/footer"
import { contact, person } from "@/lib/site-data"

export default function AboutPage() {
  const timeline = [
    {
      year: "2024",
      title: "Enrolled in Human Nutrition & Dietetics",
      description: "Began formal study in Human Nutrition and Dietetics under registration number Ag-2024-ag-8939.",
    },
    {
      year: "Jul 2026",
      title: "Clinical Internship Begins",
      description:
        "Started an internship at the Cardiac & Liver Center, DHQ Hospital Toba Tek Singh, under the Human Nutrition and Dietetics Department.",
    },
    {
      year: "Aug 2026",
      title: "Internship Completed",
      description:
        "Completed the internship on 31 August 2026 with hands-on experience in cardiac patients' nutrition, dietary assessment and clinical nutrition counselling.",
    },
    {
      year: "2026",
      title: "Private Consultations",
      description:
        "Now offering personalised diet planning and nutrition counselling in Toba Tek Singh and online across Pakistan.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/20 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary mb-4">About {person.name}</p>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 text-balance">
              Dedicated to Your
              <span className="text-primary block">Health & Wellness</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Learn more about my journey, philosophy, and commitment to helping you achieve optimal health through
              personalized nutrition.
            </p>
          </div>
        </div>
      </section>

      <AboutSection showHeader={false} />

      {/* Professional Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Professional Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A timeline of milestones that shaped my approach to nutritional wellness
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-semibold flex-shrink-0">
                      {item.year}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CredentialsSection />

      {/* Contact Information */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">Ready to Start?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Take the first step towards better health. Schedule your consultation today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {contact.phone && (
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Phone</div>
                <div className="text-primary-foreground/80">{contact.phone}</div>
              </div>
            )}
            {contact.email && (
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <div className="font-semibold mb-1">Email</div>
                <div className="text-primary-foreground/80">{contact.email}</div>
              </div>
            )}
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Location</div>
              <div className="text-primary-foreground/80">
                {person.city}, {person.region}
              </div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Hours</div>
              <div className="text-primary-foreground/80">{contact.hoursLines.join(", ")}</div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
