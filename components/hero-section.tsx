"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { person, internship } from "@/lib/site-data"

export function HeroSection() {
  const focus = [
    "Cardiac patient nutrition",
    "Dietary assessment",
    "Clinical nutrition counselling",
    "Personalised diet plans",
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/abstract-organic-nutrition-pattern.jpg')] opacity-[0.035]"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">{person.title}</p>

              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-balance leading-tight">
                Eat Well,
                <span className="text-primary block">Live Better</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-xl">
                {person.name} is a Human Nutrition &amp; Dietetics professional trained at the{" "}
                {internship.organisation}. She builds practical, evidence-based diet plans around your health condition,
                your budget and the food you actually eat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 group" asChild>
                <Link href="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
                <Link href="/about">About {person.name.split(" ")[0]}</Link>
              </Button>
            </div>

            {/* Focus areas */}
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-6 border-t border-border/60">
              {focus.map((item) => (
                <li key={item} className="flex items-center text-muted-foreground">
                  <Check className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content - Image */}
          <div className="relative mx-auto w-full max-w-[400px] lg:max-w-[460px]">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-muted">
              <Image
                src={person.portrait}
                alt={`${person.name} — ${person.title}`}
                fill
                sizes="(max-width: 1024px) 400px, 460px"
                className="object-cover object-[50%_62%]"
                priority
              />
            </div>

            <div className="mt-5 rounded-2xl border bg-card px-5 py-4 shadow-sm">
              <div className="font-semibold leading-tight">Certified in Human Nutrition &amp; Dietetics</div>
              <div className="text-sm text-muted-foreground mt-1">{internship.organisation}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
