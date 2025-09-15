import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Phone, Mail, Star } from "lucide-react"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const timeline = [
    {
      year: "2016",
      title: "Started Private Practice",
      description: "Opened my first nutrition clinic focusing on personalized dietary solutions.",
    },
    {
      year: "2018",
      title: "Sports Nutrition Certification",
      description: "Specialized in athletic performance and sports nutrition protocols.",
    },
    {
      year: "2020",
      title: "Telehealth Expansion",
      description: "Launched virtual consultations to reach clients nationwide.",
    },
    {
      year: "2023",
      title: "Wellness Center",
      description: "Established comprehensive wellness center with multidisciplinary team.",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marathon Runner",
      content: "Dr. Noor transformed my performance with her sports nutrition expertise. I achieved my personal best!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Diabetes Patient",
      content: "Her compassionate approach helped me manage my diabetes while still enjoying food I love.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Working Mom",
      content: "Finally found a nutrition plan that works with my busy lifestyle. Thank you, Dr. Noor!",
      rating: 5,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              About Dr. Rubia Noor
            </Badge>
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

      <AboutSection />

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

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">What Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from people who transformed their health with personalized nutrition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Phone</div>
              <div className="text-primary-foreground/80">+1 (555) 123-4567</div>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Email</div>
              <div className="text-primary-foreground/80">dr.rubia@nutrition.com</div>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Location</div>
              <div className="text-primary-foreground/80">Downtown Wellness Center</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-1">Hours</div>
              <div className="text-primary-foreground/80">Mon-Fri 9AM-6PM</div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
