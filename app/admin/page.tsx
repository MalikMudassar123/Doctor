import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"
import { AdminDashboardOverview } from "@/components/admin-dashboard-overview"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <div className="md:ml-64">
        <AdminHeader />
        <main className="p-6">
          <AdminDashboardOverview />
        </main>
      </div>
    </div>
  )
}
