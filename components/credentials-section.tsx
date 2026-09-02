"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, Calendar, Building2, FileText } from "lucide-react"
import Image from "next/image"
import { person, internship } from "@/lib/site-data"

export function CredentialsSection() {
  const facts = [
    { icon: FileText, label: "Certificate", value: internship.title },
    { icon: Building2, label: "Institution", value: internship.organisation },
    { icon: Calendar, label: "Duration", value: `${internship.from} — ${internship.to}` },
    { icon: CheckCircle, label: "Reference No.", value: internship.refNo },
  ]

  return (
    <section className="py-20 bg-background border-y">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary mb-4">Verified Credentials</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Trained Where It
            <span className="text-primary block">Actually Matters</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Clinical internship completed under the {internship.department} at a working government hospital —
            not a weekend course.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Certificate image */}
          <Card className="overflow-hidden">
            <div className="relative w-full aspect-[3/4] bg-muted">
              <Image
                src={person.certificate}
                alt={`${internship.title} certificate awarded to ${person.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </Card>

          {/* Details */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {facts.map((fact, index) => (
                <Card key={index} className="p-5">
                  <fact.icon className="w-6 h-6 text-primary mb-3" />
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{fact.label}</div>
                  <div className="font-semibold leading-snug">{fact.value}</div>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Hands-on experience gained</h3>
              <ul className="space-y-3">
                {internship.experience.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Certified by</h3>
              <div className="space-y-4">
                {internship.signatories.map((signatory, index) => (
                  <div key={index}>
                    <div className="font-medium">{signatory.name}</div>
                    <div className="text-sm text-muted-foreground">{signatory.role}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">{internship.project}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
