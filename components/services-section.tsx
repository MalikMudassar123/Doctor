"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HeartPulse, Activity, Scale, ClipboardList, Users, Utensils, Clock, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection({ showHeader = true }: { showHeader?: boolean }) {
  const services = [
    {
      icon: HeartPulse,
      title: "Cardiac Patient Nutrition",
      description:
        "Heart-healthy diet plans for patients with cardiac conditions — the area I trained in directly at the Cardiac & Liver Center, DHQ Hospital Toba Tek Singh.",
      duration: "45–60 min",
      features: [
        "Sodium, fat and fluid management",
        "Post-procedure and recovery diets",
        "Blood pressure friendly meal planning",
        "Coordination with your cardiologist's advice",
      ],
      popular: true,
    },
    {
      icon: ClipboardList,
      title: "Dietary Assessment",
      description:
        "A full review of what you currently eat, your anthropometrics and your lab reports before any plan is written.",
      duration: "45 min",
      features: [
        "24-hour recall and food frequency review",
        "BMI and body measurement assessment",
        "Lab report review (sugar, lipids, Hb)",
        "Written assessment summary",
      ],
    },
    {
      icon: Activity,
      title: "Clinical Nutrition Counselling",
      description:
        "One-to-one counselling for diabetes, hypertension, liver and kidney conditions, anaemia and other medical needs.",
      duration: "45–60 min",
      features: [
        "Condition-specific diet planning",
        "Portion and timing guidance",
        "Food–medicine interaction advice",
        "Follow-up review sessions",
      ],
    },
    {
      icon: Scale,
      title: "Weight Management",
      description:
        "Sustainable weight loss or weight gain plans built around desi food, your routine and your budget.",
      duration: "45 min",
      features: [
        "Calorie and macro targets",
        "Local, affordable food swaps",
        "Progress tracking",
        "Realistic, no-crash-diet approach",
      ],
    },
    {
      icon: Utensils,
      title: "Diet Plan Design",
      description:
        "A written weekly diet plan using everyday Pakistani meals — roti, daal, sabzi, salan — not imported ingredients.",
      duration: "30 min",
      features: [
        "7-day meal schedule",
        "Sehri/iftar and Ramadan variants",
        "Vegetarian and budget options",
        "Printable plan you can stick on the fridge",
      ],
    },
    {
      icon: Users,
      title: "Family & Maternal Nutrition",
      description:
        "Nutrition guidance for mothers, growing children and the whole household in one sitting.",
      duration: "60 min",
      features: [
        "Pregnancy and lactation nutrition",
        "Child growth and picky eating",
        "One plan the whole family can eat",
        "Practical grocery guidance",
      ],
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary mb-4">Services</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
              Personalized Nutrition
              <span className="text-primary block">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Every service below is built on clinical training in Human Nutrition and Dietetics. Consultations are
              available in person in Toba Tek Singh and online.
            </p>
          </div>
        )}

        {/* Individual Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-lg transition-all duration-300 relative group flex flex-col ${
                index === 0 ? "ring-1 ring-primary/40" : ""
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-auto group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/contact">
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        <Card className="p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold mb-3">Consultation fee</h3>
          <p className="text-muted-foreground leading-relaxed">
            Fees depend on the type of consultation and whether it is in person or online. Get in touch and you will be
            told the exact fee before anything is booked — no packages, no hidden charges.
          </p>
          <Button size="lg" className="mt-6" asChild>
            <Link href="/contact">Ask about fees</Link>
          </Button>
        </Card>
      </div>
    </section>
  )
}
