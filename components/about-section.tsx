"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Heart, Users, BookOpen, Stethoscope } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const qualifications = [
    { icon: GraduationCap, title: "MSc in Clinical Nutrition", institution: "University of Health Sciences" },
    { icon: Award, title: "Certified Dietitian", institution: "National Board of Nutrition" },
    { icon: Stethoscope, title: "Sports Nutrition Specialist", institution: "International Sports Nutrition Society" },
  ]

  const expertise = [
    "Weight Management",
    "Diabetes Care",
    "Heart Health",
    "Sports Nutrition",
    "Digestive Health",
    "Pediatric Nutrition",
    "Eating Disorders",
    "Plant-Based Diets",
  ]

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every client receives personalized attention and empathetic support throughout their journey.",
    },
    {
      icon: BookOpen,
      title: "Evidence-Based",
      description: "All recommendations are grounded in the latest nutritional science and research.",
    },
    {
      icon: Users,
      title: "Holistic Approach",
      description: "We consider your lifestyle, preferences, and goals to create sustainable solutions.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About Dr. Rubia Noor
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Your Partner in
            <span className="text-primary block">Nutritional Wellness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            With over 8 years of experience in clinical nutrition, Dr. Rubia Noor has helped hundreds of clients achieve
            their health goals through personalized, science-based nutrition strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/dr-rubia-noor-professional-portrait-in-consultatio.jpg"
                alt="Dr. Rubia Noor in consultation"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Achievement Card */}
            <Card className="absolute -bottom-8 -right-8 p-6 bg-accent text-accent-foreground shadow-xl">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe that nutrition is not just about food—it's about creating a sustainable lifestyle that
                nourishes both body and mind. My approach combines cutting-edge nutritional science with practical,
                real-world solutions that fit seamlessly into your daily life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're managing a health condition, optimizing athletic performance, or simply wanting to feel
                your best, I'm here to guide you every step of the way with personalized care and unwavering support.
              </p>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Qualifications & Certifications</h4>
              <div className="space-y-3">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <qual.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{qual.title}</div>
                      <div className="text-sm text-muted-foreground">{qual.institution}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-center mb-8">Areas of Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((area, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-center mb-12">My Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
