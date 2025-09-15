import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, User, Phone, Mail, MoreHorizontal, Plus, Filter } from "lucide-react"

export default function AdminAppointments() {
  const appointments = [
    {
      id: "1",
      client: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      service: "Weight Management Follow-up",
      date: "2024-01-15",
      time: "9:00 AM",
      duration: "60 min",
      status: "confirmed",
      notes: "Progress check on meal plan adherence",
    },
    {
      id: "2",
      client: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+1 (555) 234-5678",
      service: "Initial Diabetes Consultation",
      date: "2024-01-15",
      time: "10:30 AM",
      duration: "75 min",
      status: "confirmed",
      notes: "New client with Type 2 diabetes",
    },
    {
      id: "3",
      client: "Emily Rodriguez",
      email: "emily.r@email.com",
      phone: "+1 (555) 345-6789",
      service: "Family Nutrition Planning",
      date: "2024-01-15",
      time: "1:00 PM",
      duration: "90 min",
      status: "pending",
      notes: "Meal planning for family of 5",
    },
    {
      id: "4",
      client: "David Park",
      email: "david.park@email.com",
      phone: "+1 (555) 456-7890",
      service: "Sports Nutrition Consultation",
      date: "2024-01-15",
      time: "2:30 PM",
      duration: "60 min",
      status: "confirmed",
      notes: "Marathon training nutrition plan",
    },
    {
      id: "5",
      client: "Lisa Thompson",
      email: "lisa.t@email.com",
      phone: "+1 (555) 567-8901",
      service: "Digestive Health Assessment",
      date: "2024-01-15",
      time: "4:00 PM",
      duration: "45 min",
      status: "confirmed",
      notes: "IBS management consultation",
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
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <div className="md:ml-64">
        <AdminHeader />
        <main className="p-6">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-serif font-bold">Appointments</h1>
                <p className="text-muted-foreground">Manage your client appointments and schedule</p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Appointment
              </Button>
            </div>

            {/* Filters */}
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input placeholder="Search appointments..." />
                </div>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    <SelectItem value="weight-management">Weight Management</SelectItem>
                    <SelectItem value="medical-nutrition">Medical Nutrition</SelectItem>
                    <SelectItem value="sports-nutrition">Sports Nutrition</SelectItem>
                    <SelectItem value="family-nutrition">Family Nutrition</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </Card>

            {/* Appointments List */}
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <Card key={appointment.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold text-lg">{appointment.client}</h3>
                          <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                        </div>
                        <p className="text-muted-foreground">{appointment.service}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(appointment.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {appointment.time} ({appointment.duration})
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            {appointment.phone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            {appointment.email}
                          </div>
                        </div>
                        {appointment.notes && (
                          <p className="text-sm text-muted-foreground mt-2">
                            <strong>Notes:</strong> {appointment.notes}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Complete
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Showing 1-5 of 23 appointments</p>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
