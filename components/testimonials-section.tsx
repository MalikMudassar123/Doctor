"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, Heart, TrendingUp, Award } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marathon Runner",
      location: "San Francisco, CA",
      image: "/client-testimonial-sarah-marathon-runner.jpg",
      rating: 5,
      quote:
        "Dr. Rubia completely transformed my approach to sports nutrition. I went from struggling with energy crashes during long runs to achieving my personal best marathon time. Her personalized meal timing and hydration strategies made all the difference.",
      results: "Achieved PR marathon time",
      category: "Sports Nutrition",
      beforeAfter: {
        before: "Frequent energy crashes during training",
        after: "Consistent energy throughout 26.2 miles",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Type 2 Diabetes Patient",
      location: "Austin, TX",
      image: "/client-testimonial-michael-diabetes-management.jpg",
      rating: 5,
      quote:
        "Working with Dr. Noor has been life-changing. She helped me understand how to manage my diabetes through nutrition without feeling deprived. My A1C dropped from 8.2 to 6.1 in just 6 months, and I've never felt better.",
      results: "A1C reduced from 8.2 to 6.1",
      category: "Medical Nutrition",
      beforeAfter: {
        before: "Uncontrolled blood sugar levels",
        after: "Stable glucose with improved energy",
      },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Working Mom of 3",
      location: "Denver, CO",
      image: "/client-testimonial-emily-working-mom-weight-loss.jpg",
      rating: 5,
      quote:
        "As a busy mom, I thought healthy eating was impossible with my schedule. Dr. Rubia showed me how to meal prep efficiently and make nutritious choices that my whole family loves. I lost 35 pounds and have so much more energy for my kids.",
      results: "Lost 35 pounds sustainably",
      category: "Weight Management",
      beforeAfter: {
        before: "Exhausted, relying on processed foods",
        after: "Energetic with family-friendly meal plans",
      },
    },
    {
      id: 4,
      name: "David Park",
      role: "Plant-Based Athlete",
      location: "Portland, OR",
      image: "/client-testimonial-david-plant-based-athlete.jpg",
      rating: 5,
      quote:
        "Transitioning to plant-based eating while maintaining my CrossFit performance seemed impossible until I met Dr. Noor. She created a comprehensive plan that not only maintained my strength but actually improved my recovery time and overall performance.",
      results: "Improved recovery & performance",
      category: "Plant-Based Nutrition",
      beforeAfter: {
        before: "Concerned about protein and performance",
        after: "Thriving on plant-based nutrition",
      },
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "IBS Sufferer",
      location: "Seattle, WA",
      image: "/client-testimonial-lisa-digestive-health.jpg",
      rating: 5,
      quote:
        "After years of digestive issues and restrictive diets that didn't work, Dr. Rubia's systematic approach to identifying my trigger foods and healing my gut has given me my life back. I can finally eat without fear and enjoy social meals again.",
      results: "95% reduction in IBS symptoms",
      category: "Digestive Health",
      beforeAfter: {
        before: "Daily digestive discomfort and food fear",
        after: "Comfortable eating with diverse food choices",
      },
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Heart Disease Patient",
      location: "Miami, FL",
      image: "/client-testimonial-james-heart-health.jpg",
      rating: 5,
      quote:
        "Following my heart attack, Dr. Noor helped me completely overhaul my diet in a way that felt sustainable and enjoyable. My cardiologist is amazed at my cholesterol improvements, and I feel like I have a new lease on life.",
      results: "Cholesterol reduced by 40%",
      category: "Heart Health",
      beforeAfter: {
        before: "High cholesterol and cardiac risk",
        after: "Optimal heart health markers",
      },
    },
  ]

  const stats = [
    { icon: Heart, value: "500+", label: "Lives Transformed" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Award, value: "4.9/5", label: "Average Rating" },
    { icon: Star, value: "98%", label: "Would Recommend" },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentClient = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Real Results from
            <span className="text-primary block">Real People</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Discover how personalized nutrition has transformed the lives of our clients across various health goals and
            challenges.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Featured Testimonial */}
        <Card className="mb-16 overflow-hidden max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={currentClient.image || "/placeholder.svg"}
                alt={currentClient.name}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                {currentClient.category}
              </Badge>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                {[...Array(currentClient.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary mb-4" />
              <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                "{currentClient.quote}"
              </blockquote>
              <div className="mb-6">
                <div className="font-semibold text-lg">{currentClient.name}</div>
                <div className="text-muted-foreground">{currentClient.role}</div>
                <div className="text-sm text-muted-foreground">{currentClient.location}</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 mb-6">
                <div className="font-semibold text-primary mb-2">Key Result:</div>
                <div className="text-sm">{currentClient.results}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" onClick={prevTestimonial}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextTestimonial}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentTestimonial + 1} of {testimonials.length}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Before/After Highlight */}
        <Card className="mb-16 p-8 max-w-4xl mx-auto bg-gradient-to-r from-secondary/20 to-accent/20">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Transformation Spotlight</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😔</span>
              </div>
              <h4 className="font-semibold mb-2 text-muted-foreground">Before</h4>
              <p className="text-sm">{currentClient.beforeAfter.before}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😊</span>
              </div>
              <h4 className="font-semibold mb-2 text-primary">After</h4>
              <p className="text-sm">{currentClient.beforeAfter.after}</p>
            </div>
          </div>
        </Card>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`p-6 hover:shadow-lg transition-all cursor-pointer ${
                index === currentTestimonial ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                "{testimonial.quote.substring(0, 120)}..."
              </p>
              <Badge variant="secondary" className="text-xs">
                {testimonial.category}
              </Badge>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of clients who have transformed their health with personalized nutrition guidance.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  )
}
