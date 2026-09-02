"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { contact, person } from "@/lib/site-data"

export function ContactSection({ showHeader = true }: { showHeader?: boolean }) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    contact.phone && {
      icon: Phone,
      title: "Phone / WhatsApp",
      details: [contact.phone, "Mon–Sat, 10:00 AM – 6:00 PM"],
      action: "Call Now",
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    contact.email && {
      icon: Mail,
      title: "Email",
      details: [contact.email, "Response within 24 hours"],
      action: "Send Email",
      href: `mailto:${contact.email}`,
    },
    {
      icon: MapPin,
      title: "Location",
      details: contact.addressLines,
      action: "Get Directions",
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${person.city}, ${person.region}`,
      )}`,
    },
    {
      icon: Clock,
      title: "Consultation Hours",
      details: contact.hoursLines,
      action: "Book Online",
      href: "/services",
    },
  ].filter(Boolean) as {
    icon: typeof Phone
    title: string
    details: string[]
    action: string
    href: string
  }[]

  const faqs = [
    {
      question: "How long is an initial consultation?",
      answer:
        "An initial consultation runs 45 to 60 minutes. That covers a full dietary assessment, your measurements and any lab reports you bring, before a plan is written.",
    },
    {
      question: "Do you offer online consultations?",
      answer:
        "Yes. Consultations are available in person in Toba Tek Singh and online over WhatsApp or video call for clients elsewhere in Pakistan and abroad.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Any recent lab reports (blood sugar, lipid profile, Hb, LFT/RFT), a list of medicines you take, and a rough note of what you ate over the last three days.",
    },
    {
      question: "Will the diet plan use normal Pakistani food?",
      answer:
        "Yes. Plans are built around roti, daal, sabzi, salan, fruit and everyday grocery items — no imported ingredients or expensive supplements required.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        {showHeader && (
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary mb-4">Get In Touch</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
              Ready to Start Your
              <span className="text-primary block">Health Journey?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Contact us today to schedule your personalized nutrition consultation and take the first step towards
              optimal health.
            </p>
          </div>
        )}

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
                    <Input id="phone" type="tel" placeholder="+92 300 1234567" />
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
                      <SelectItem value="fees">Fees & Booking</SelectItem>
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
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
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
                        <Button variant="outline" size="sm" className="mt-3 bg-transparent" asChild>
                          <Link href={info.href}>{info.action}</Link>
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
              <iframe
                title={`Map of ${person.city}, ${person.region}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${person.city}, ${person.region}`,
                )}&output=embed`}
                className="w-full h-64 rounded-lg border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
