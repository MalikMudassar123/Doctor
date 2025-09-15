import { Navigation } from "@/components/navigation"
import { ServicesSection } from "@/components/services-section"
import { BookingSystem } from "@/components/booking-system"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Award } from "lucide-react"
import { Footer } from "@/components/footer"

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
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 text-balance">
              Comprehensive Nutrition
              <span className="text-primary block">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              From weight management to specialized medical nutrition therapy, discover our full range of personalized
              nutrition services designed to help you achieve optimal health.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Clients Served</div>
            </Card>
            <Card className="p-4 text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </Card>
            <Card className="p-4 text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-4 text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">6</div>
              <div className="text-sm text-muted-foreground">Specializations</div>
            </Card>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven 4-step process ensures you get the personalized care and support you need for lasting results
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
                Why Choose Our
                <span className="text-primary block">Nutrition Services?</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our comprehensive approach combines scientific expertise with practical, real-world solutions that fit
                seamlessly into your lifestyle.
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

            <div className="relative">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/nutritionist-consultation-session-with-client.jpg"
                  alt="Nutrition consultation session"
                  className="w-full h-full object-cover"
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
