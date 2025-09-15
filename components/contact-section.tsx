"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Mon-Fri 9AM-6PM"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["dr.rubia@nutrition.com", "Response within 24 hours"],
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Downtown Wellness Center", "123 Health Street, Suite 200"],
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
      action: "Book Online",
    },
  ]

  const faqs = [
    {
      question: "How long is an initial consultation?",
      answer:
        "Initial consultations typically last 75 minutes to allow for a comprehensive health assessment and personalized nutrition plan development.",
    },
    {
      question: "Do you accept insurance?",
      answer: "We accept most major insurance plans. Please contact us to verify your specific coverage and benefits.",
    },
    {
      question: "Can I do virtual consultations?",
      answer:
        "Yes! We offer secure video consultations for your convenience, especially for follow-up appointments and ongoing support.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring any recent lab results, a list of current medications, and a 3-day food diary if possible.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Ready to Start Your
            <span className="text-primary block">Health Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Contact us today to schedule your personalized nutrition consultation and take the first step towards
            optimal health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-serif font-bold mb-6">Send us a Message</h3>
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Message Sent Successfully!</h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What can we help you with?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Schedule a Consultation</SelectItem>
                      <SelectItem value="services">Questions about Services</SelectItem>
                      <SelectItem value="insurance">Insurance & Billing</SelectItem>
                      <SelectItem value="follow-up">Follow-up Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your health goals, questions, or how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How would you like us to contact you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="text">Text Message</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full text-lg py-6">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                        <Button variant="outline" size="sm" className="mt-3 bg-transparent">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">Find Us</h4>
              <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Downtown Wellness Center</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h4 className="font-semibold text-lg mb-3">{faq.question}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
