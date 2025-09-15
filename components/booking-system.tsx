"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, MessageSquare, CheckCircle } from "lucide-react"

export function BookingSystem() {
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [step, setStep] = useState(1)

  const services = [
    { id: "weight-management", name: "Weight Management", duration: "60 min", price: "$150" },
    { id: "medical-nutrition", name: "Medical Nutrition Therapy", duration: "75 min", price: "$180" },
    { id: "sports-nutrition", name: "Sports Nutrition", duration: "60 min", price: "$160" },
    { id: "pediatric-nutrition", name: "Pediatric Nutrition", duration: "45 min", price: "$140" },
    { id: "family-nutrition", name: "Family Nutrition", duration: "90 min", price: "$200" },
    { id: "plant-based", name: "Plant-Based Transition", duration: "60 min", price: "$150" },
  ]

  const availableDates = [
    { date: "2024-01-15", day: "Monday", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"] },
    { date: "2024-01-16", day: "Tuesday", slots: ["10:00 AM", "1:00 PM", "3:00 PM"] },
    { date: "2024-01-17", day: "Wednesday", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM", "5:00 PM"] },
    { date: "2024-01-18", day: "Thursday", slots: ["10:00 AM", "12:00 PM", "3:00 PM"] },
    { date: "2024-01-19", day: "Friday", slots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"] },
  ]

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setStep(2)
  }

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setSelectedTime("")
    setStep(3)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep(4)
  }

  const selectedServiceData = services.find((s) => s.id === selectedService)
  const selectedDateData = availableDates.find((d) => d.date === selectedDate)

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Book Consultation
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Schedule Your
            <span className="text-primary block">Consultation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Take the first step towards better health. Book your personalized nutrition consultation in just a few
            clicks.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= stepNum ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > stepNum ? <CheckCircle className="w-5 h-5" /> : stepNum}
                  </div>
                  {stepNum < 4 && <div className={`w-12 h-0.5 mx-2 ${step > stepNum ? "bg-primary" : "bg-muted"}`} />}
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <div className="flex items-center mb-6">
                  <User className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Choose Your Service</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className="p-4 cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-primary"
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{service.name}</h4>
                        <Badge variant="secondary">{service.price}</Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date Selection */}
            {step === 2 && (
              <div>
                <div className="flex items-center mb-6">
                  <Calendar className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Select Date</h3>
                </div>
                <div className="mb-4">
                  <Badge variant="outline">Selected: {selectedServiceData?.name}</Badge>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {availableDates.map((dateOption) => (
                    <Card
                      key={dateOption.date}
                      className="p-4 cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-primary"
                      onClick={() => handleDateSelect(dateOption.date)}
                    >
                      <div className="text-center">
                        <div className="font-semibold">{dateOption.day}</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {new Date(dateOption.date).toLocaleDateString()}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {dateOption.slots.length} slots available
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
                <Button variant="outline" onClick={() => setStep(1)} className="mt-6">
                  Back to Services
                </Button>
              </div>
            )}

            {/* Step 3: Time Selection */}
            {step === 3 && (
              <div>
                <div className="flex items-center mb-6">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Select Time</h3>
                </div>
                <div className="mb-4 space-x-2">
                  <Badge variant="outline">Service: {selectedServiceData?.name}</Badge>
                  <Badge variant="outline">
                    Date: {selectedDateData?.day}, {new Date(selectedDate).toLocaleDateString()}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedDateData?.slots.map((time) => (
                    <Button
                      key={time}
                      variant="outline"
                      className="p-4 h-auto hover:bg-primary hover:text-primary-foreground bg-transparent"
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                <Button variant="outline" onClick={() => setStep(2)} className="mt-6">
                  Back to Dates
                </Button>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {step === 4 && (
              <div>
                <div className="flex items-center mb-6">
                  <MessageSquare className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold">Your Information</h3>
                </div>

                {/* Booking Summary */}
                <Card className="p-4 mb-6 bg-primary/5">
                  <h4 className="font-semibold mb-2">Booking Summary</h4>
                  <div className="space-y-1 text-sm">
                    <div>Service: {selectedServiceData?.name}</div>
                    <div>
                      Date: {selectedDateData?.day}, {new Date(selectedDate).toLocaleDateString()}
                    </div>
                    <div>Time: {selectedTime}</div>
                    <div>Duration: {selectedServiceData?.duration}</div>
                    <div className="font-semibold text-primary">Price: {selectedServiceData?.price}</div>
                  </div>
                </Card>

                <form className="space-y-6">
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
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-25">18-25</SelectItem>
                        <SelectItem value="26-35">26-35</SelectItem>
                        <SelectItem value="36-45">36-45</SelectItem>
                        <SelectItem value="46-55">46-55</SelectItem>
                        <SelectItem value="56-65">56-65</SelectItem>
                        <SelectItem value="65+">65+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="goals">Health Goals & Concerns</Label>
                    <Textarea
                      id="goals"
                      placeholder="Please describe your health goals, dietary concerns, or any specific conditions you'd like to address..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Previous Nutrition Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Have you worked with a nutritionist before?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="never">Never worked with a nutritionist</SelectItem>
                        <SelectItem value="once">Worked with one before</SelectItem>
                        <SelectItem value="multiple">Worked with multiple nutritionists</SelectItem>
                        <SelectItem value="ongoing">Currently working with someone</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
                      Back to Time Selection
                    </Button>
                    <Button type="submit" className="flex-1">
                      Confirm Booking
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
