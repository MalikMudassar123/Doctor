import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Phone, Calendar, TrendingUp, MoreHorizontal, Plus, Filter } from "lucide-react"

export default function AdminClients() {
  const clients = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      joinDate: "2023-08-15",
      lastVisit: "2024-01-10",
      totalSessions: 12,
      status: "active",
      goal: "Weight Management",
      progress: "Excellent",
      notes: "Lost 25 lbs, very motivated",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "m.chen@email.com",
      phone: "+1 (555) 234-5678",
      joinDate: "2023-11-20",
      lastVisit: "2024-01-08",
      totalSessions: 8,
      status: "active",
      goal: "Diabetes Management",
      progress: "Good",
      notes: "A1C improved significantly",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      phone: "+1 (555) 345-6789",
      joinDate: "2023-12-01",
      lastVisit: "2024-01-05",
      totalSessions: 6,
      status: "active",
      goal: "Family Nutrition",
      progress: "Good",
      notes: "Implementing meal prep strategies",
    },
    {
      id: "4",
      name: "David Park",
      email: "david.park@email.com",
      phone: "+1 (555) 456-7890",
      joinDate: "2023-09-10",
      lastVisit: "2024-01-03",
      totalSessions: 15,
      status: "active",
      goal: "Sports Performance",
      progress: "Excellent",
      notes: "Marathon PR achieved",
    },
    {
      id: "5",
      name: "Lisa Thompson",
      email: "lisa.t@email.com",
      phone: "+1 (555) 567-8901",
      joinDate: "2023-10-05",
      lastVisit: "2023-12-20",
      totalSessions: 4,
      status: "inactive",
      goal: "Digestive Health",
      progress: "Fair",
      notes: "Needs follow-up appointment",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "inactive":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "completed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  const getProgressColor = (progress: string) => {
    switch (progress) {
      case "Excellent":
        return "text-green-600"
      case "Good":
        return "text-blue-600"
      case "Fair":
        return "text-yellow-600"
      case "Poor":
        return "text-red-600"
      default:
        return "text-gray-600"
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
                <h1 className="text-3xl font-serif font-bold">Clients</h1>
                <p className="text-muted-foreground">Manage your client relationships and progress</p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Client
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Clients</p>
                    <p className="text-2xl font-bold">127</p>
                  </div>
                  <User className="h-8 w-8 text-primary" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Clients</p>
                    <p className="text-2xl font-bold">98</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">New This Month</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                    <p className="text-2xl font-bold">94%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
              </Card>
            </div>

            {/* Filters */}
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input placeholder="Search clients..." />
                </div>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Goals</SelectItem>
                    <SelectItem value="weight-management">Weight Management</SelectItem>
                    <SelectItem value="diabetes">Diabetes Management</SelectItem>
                    <SelectItem value="sports">Sports Performance</SelectItem>
                    <SelectItem value="family">Family Nutrition</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </Card>

            {/* Clients List */}
            <div className="space-y-4">
              {clients.map((client) => (
                <Card key={client.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold text-lg">{client.name}</h3>
                          <Badge className={getStatusColor(client.status)}>{client.status}</Badge>
                          <Badge variant="outline">{client.goal}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            {client.email}
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-1" />
                            {client.phone}
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 text-sm">
                          <div>
                            <span className="text-muted-foreground">Joined: </span>
                            {new Date(client.joinDate).toLocaleDateString()}
                          </div>
                          <div>
                            <span className="text-muted-foreground">Last Visit: </span>
                            {new Date(client.lastVisit).toLocaleDateString()}
                          </div>
                          <div>
                            <span className="text-muted-foreground">Sessions: </span>
                            {client.totalSessions}
                          </div>
                          <div>
                            <span className="text-muted-foreground">Progress: </span>
                            <span className={getProgressColor(client.progress)}>{client.progress}</span>
                          </div>
                        </div>
                        {client.notes && (
                          <p className="text-sm text-muted-foreground">
                            <strong>Notes:</strong> {client.notes}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        Schedule
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
              <p className="text-sm text-muted-foreground">Showing 1-5 of 127 clients</p>
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
