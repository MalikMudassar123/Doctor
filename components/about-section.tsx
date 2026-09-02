"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Heart, Users, BookOpen, Stethoscope, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { person, internship, expertise } from "@/lib/site-data"

export function AboutSection({ showHeader = true }: { showHeader?: boolean }) {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Human Nutrition & Dietetics",
      institution: `Registration No. ${person.registrationNo}`,
    },
    {
      icon: Award,
      title: internship.title,
      institution: `${internship.organisation} — ${internship.from} to ${internship.to}`,
    },
    {
      icon: Stethoscope,
      title: "Clinical Training",
      institution: `Under supervision of the ${internship.department}`,
    },
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
      description: "All recommendations are grounded in the latest nutritional science and clinical guidelines.",
    },
    {
      icon: Users,
      title: "Practical & Local",
      description: "Plans built around everyday Pakistani food, your routine, your budget and your family's meals.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary mb-4">About {person.name}</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
              Your Partner in
              <span className="text-primary block">Nutritional Wellness</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              {person.name} completed her clinical internship in Human Nutrition and Dietetics at the{" "}
              {internship.organisation}, gaining hands-on experience in cardiac patients&apos; nutrition, dietary
              assessment and clinical nutrition counselling.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Certificate */}
          <div className="mx-auto w-full max-w-[440px]">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-muted">
              <Image
                src={person.certificate}
                alt={`${person.name} holding her ${internship.title} certificate`}
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Certificate of Internship Completion · Issued {internship.issued}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe nutrition is not just about food — it is about building a sustainable routine that nourishes
                both body and mind. My approach combines clinical nutrition science with practical solutions that fit
                into everyday life in Pakistan.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                During my internship at the Cardiac &amp; Liver Center, DHQ Hospital Toba Tek Singh, I worked directly
                with cardiac patients on dietary assessment and one-to-one nutrition counselling. That experience shapes
                how I work today: listen first, assess properly, then plan.
              </p>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Qualifications &amp; Certifications</h4>
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

            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-center mb-8">Areas of Expertise</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 max-w-3xl mx-auto">
            {expertise.map((area) => (
              <li key={area} className="flex items-center border-b border-border/60 pb-3">
                <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                <span>{area}</span>
              </li>
            ))}
          </ul>
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
