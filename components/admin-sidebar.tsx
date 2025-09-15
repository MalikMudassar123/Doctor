"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
  Bell,
  DollarSign,
} from "lucide-react"

export function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/admin", icon: Home, label: "Dashboard", badge: null },
    { href: "/admin/appointments", icon: Calendar, label: "Appointments", badge: "3" },
    { href: "/admin/clients", icon: Users, label: "Clients", badge: null },
    { href: "/admin/blog", icon: FileText, label: "Blog Posts", badge: null },
    { href: "/admin/testimonials", icon: MessageSquare, label: "Testimonials", badge: "2" },
    { href: "/admin/analytics", icon: BarChart3, label: "Analytics", badge: null },
    { href: "/admin/payments", icon: DollarSign, label: "Payments", badge: null },
    { href: "/admin/notifications", icon: Bell, label: "Notifications", badge: "5" },
    { href: "/admin/settings", icon: Settings, label: "Settings", badge: null },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-card border-r border-border z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">R</span>
              </div>
              <div>
                <h2 className="font-serif font-bold text-lg">Dr. Rubia Noor</h2>
                <p className="text-sm text-muted-foreground">Admin Panel</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
