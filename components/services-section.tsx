"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Dumbbell, Baby, Users, Utensils, Activity, Clock, CheckCircle, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Heart,
      title: "Weight Management",
      description: "Sustainable weight loss and maintenance programs tailored to your lifestyle and preferences.",
      duration: "60 min",
      price: "$150",
      features: [
        "Comprehensive metabolic assessment",
        "Personalized meal planning",
        "Weekly progress tracking",
        "Lifestyle modification strategies",
      ],
      popular: true,
    },
    {
      icon: Activity,
      title: "Medical Nutrition Therapy",
      description: "Specialized nutrition care for diabetes, heart disease, digestive disorders, and other conditions.",
      duration: "75 min",
      price: "$180",
      features: [
        "Condition-specific nutrition plans",
        "Lab result interpretation",
        "Medication-nutrition interactions",
        "Ongoing medical coordination",
      ],
    },
    {
      icon: Dumbbell,
      title: "Sports Nutrition",
      description: "Performance optimization for athletes and active individuals at all levels.",
      duration: "60 min",
      price: "$160",
      features: [
        "Performance nutrition planning",
        "Pre/post workout strategies",
        "Supplement recommendations",
        "Competition preparation",
      ],
    },
    {
      icon: Baby,
      title: "Pediatric Nutrition",
      description: "Specialized nutrition care for children and adolescents, including picky eating solutions.",
      duration: "45 min",
      price: "$140",
      features: [
        "Age-appropriate meal planning",
        "Growth monitoring support",
        "Family-friendly strategies",
        "School lunch optimization",
      ],
    },
    {
      icon: Users,
      title: "Family Nutrition",
      description: "Comprehensive nutrition planning for the whole family with practical, budget-friendly solutions.",
      duration: "90 min",
      price: "$200",
      features: [
        "Family meal planning",
        "Budget-conscious shopping",
        "Kid-friendly healthy recipes",
        "Lifestyle integration",
      ],
    },
    {
      icon: Utensils,
      title: "Plant-Based Transition",
      description: "Expert guidance for transitioning to plant-based eating with proper nutritional balance.",
      duration: "60 min",
      price: "$150",
      features: [
        "Gradual transition planning",
        "Nutrient adequacy assessment",
        "Plant protein optimization",
        "Recipe and meal ideas",
      ],
    },
  ]

  const packages = [
    {
      name: "Starter Package",
      sessions: "3 Sessions",
      duration: "1 Month",
      price: "$400",
      originalPrice: "$450",
      features: [
        "Initial comprehensive assessment",
        "Personalized nutrition plan",
        "2 follow-up consultations",
        "Email support between sessions",
        "Basic meal planning templates",
      ],
    },
    {
      name: "Transformation Package",
      sessions: "6 Sessions",
      duration: "3 Months",
      price: "$750",
      originalPrice: "$900",
      features: [
        "Everything in Starter Package",
        "Advanced meal planning",
        "Recipe customization",
        "Progress tracking tools",
        "Supplement recommendations",
        "Priority scheduling",
      ],
      popular: true,
    },
    {
      name: "Premium Wellness",
      sessions: "12 Sessions",
      duration: "6 Months",
      price: "$1,400",
      originalPrice: "$1,800",
      features: [
        "Everything in Transformation Package",
        "Monthly body composition analysis",
        "Grocery shopping guidance",
        "Family meal planning",
        "24/7 text support",
        "Quarterly wellness assessments",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Personalized Nutrition
            <span className="text-primary block">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Choose from our comprehensive range of nutrition services, each designed to meet your unique health goals
            and lifestyle needs.
          </p>
        </div>

        {/* Individual Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 relative group">
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">Most Popular</Badge>
              )}

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
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

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">{service.price}</div>
                <Button className="group-hover:translate-x-1 transition-transform">
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Package Deals */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4">Package Deals</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Save more with our comprehensive packages designed for long-term success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 relative hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Best Value
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                  <div className="text-sm text-muted-foreground mb-4">
                    {pkg.sessions} • {pkg.duration}
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`}>
                  Choose Package
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
