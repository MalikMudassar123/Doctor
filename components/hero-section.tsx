"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Star, Users, Award, Heart } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "8+", label: "Years Experience" },
    { icon: Heart, value: "95%", label: "Success Rate" },
    { icon: Star, value: "4.9", label: "Client Rating" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/abstract-organic-nutrition-pattern.jpg')] opacity-5"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                <Heart className="w-4 h-4 mr-2" />
                Certified Nutritionist & Wellness Expert
              </div>

              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-balance leading-tight">
                Transform Your
                <span className="text-primary block">Health Journey</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-xl">
                Discover personalized nutrition plans that fit your lifestyle. Dr. Rubia Noor combines evidence-based
                science with compassionate care to help you achieve lasting wellness.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-float">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/professional-female-dietitian-in-modern-clinic.jpg"
                alt="Dr. Rubia Noor - Professional Dietitian"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for consultation</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-primary/90 backdrop-blur-sm rounded-2xl p-4 text-primary-foreground shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
