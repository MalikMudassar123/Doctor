"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, DollarSign, TrendingUp, CheckCircle, Star, ArrowRight } from "lucide-react"

export function AdminDashboardOverview() {
  const stats = [
    {
      title: "Today's Appointments",
      value: "8",
      change: "+2 from yesterday",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      title: "Active Clients",
      value: "127",
      change: "+12 this month",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
      title: "Monthly Revenue",
      value: "$18,450",
      change: "+15% from last month",
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      title: "Success Rate",
      value: "94%",
      change: "+2% this quarter",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
    },
  ]

  const todayAppointments = [
    {
      time: "9:00 AM",
      client: "Sarah Johnson",
      type: "Follow-up Consultation",
      status: "confirmed",
      duration: "60 min",
    },
    {
      time: "10:30 AM",
      client: "Michael Chen",
      type: "Initial Assessment",
      status: "confirmed",
      duration: "75 min",
    },
    {
      time: "1:00 PM",
      client: "Emily Rodriguez",
      type: "Weight Management",
      status: "pending",
      duration: "60 min",
    },
    {
      time: "2:30 PM",
      client: "David Park",
      type: "Sports Nutrition",
      status: "confirmed",
      duration: "60 min",
    },
    {
      time: "4:00 PM",
      client: "Lisa Thompson",
      type: "Digestive Health",
      status: "confirmed",
      duration: "45 min",
    },
  ]

  const recentActivity = [
    {
      action: "New client registration",
      client: "James Wilson",
      time: "2 hours ago",
      type: "client",
    },
    {
      action: "Appointment completed",
      client: "Sarah Johnson",
      time: "3 hours ago",
      type: "appointment",
    },
    {
      action: "Payment received",
      client: "Michael Chen",
      time: "5 hours ago",
      type: "payment",
    },
    {
      action: "Blog post published",
      client: "Plant-Based Nutrition Guide",
      time: "1 day ago",
      type: "content",
    },
    {
      action: "New testimonial received",
      client: "Emily Rodriguez",
      time: "2 days ago",
      type: "testimonial",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-serif font-bold mb-2">Welcome back, Dr. Noor!</h1>
        <p className="text-muted-foreground">Here's what's happening with your practice today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Today's Appointments */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Today's Appointments</h2>
            <Button variant="outline" size="sm">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {todayAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-sm font-medium">{appointment.time}</div>
                    <div className="text-xs text-muted-foreground">{appointment.duration}</div>
                  </div>
                  <div>
                    <div className="font-medium">{appointment.client}</div>
                    <div className="text-sm text-muted-foreground">{appointment.type}</div>
                  </div>
                </div>
                <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <Button variant="outline" size="sm">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{activity.action}</span>
                    {activity.type !== "content" && <span className="text-muted-foreground"> - {activity.client}</span>}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button className="h-20 flex-col space-y-2">
            <Calendar className="h-6 w-6" />
            <span className="text-sm">New Appointment</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
            <Users className="h-6 w-6" />
            <span className="text-sm">Add Client</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
            <CheckCircle className="h-6 w-6" />
            <span className="text-sm">Complete Session</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
            <Star className="h-6 w-6" />
            <span className="text-sm">Request Review</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}
