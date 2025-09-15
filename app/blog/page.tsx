import { Navigation } from "@/components/navigation"
import { BlogSection } from "@/components/blog-section"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Rss, Mail, BookOpen, TrendingUp, Users } from "lucide-react"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const popularTags = [
    "Weight Loss",
    "Diabetes",
    "Plant-Based",
    "Sports Nutrition",
    "Meal Prep",
    "Heart Health",
    "Gut Health",
    "Supplements",
  ]

  const recentPosts = [
    "The Science Behind Sustainable Weight Loss",
    "Plant-Based Protein Sources Guide",
    "Managing Diabetes Through Nutrition",
    "Sports Nutrition for Endurance Athletes",
    "Gut Health and Overall Wellness",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Nutrition Blog
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 text-balance">
              Evidence-Based
              <span className="text-primary block">Nutrition Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Stay informed with the latest research, practical tips, and expert advice to support your health and
              wellness journey.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search articles, topics, or nutrition advice..."
                className="pl-10 pr-4 py-3 text-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">Search</Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="p-4 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Articles Published</div>
            </Card>
            <Card className="p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm text-muted-foreground">Monthly Readers</div>
            </Card>
            <Card className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">2K+</div>
              <div className="text-sm text-muted-foreground">Newsletter Subscribers</div>
            </Card>
            <Card className="p-4 text-center">
              <Rss className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">Weekly</div>
              <div className="text-sm text-muted-foreground">New Content</div>
            </Card>
          </div>
        </div>
      </section>

      <BlogSection />

      {/* Sidebar Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Newsletter Signup */}
            <Card className="p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Get weekly nutrition tips and the latest articles delivered to your inbox.
              </p>
              <div className="space-y-3">
                <Input placeholder="Enter your email" type="email" />
                <Button className="w-full">Subscribe to Newsletter</Button>
              </div>
            </Card>

            {/* Popular Tags */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Recent Posts */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="text-sm">
                    <div className="font-medium hover:text-primary cursor-pointer transition-colors">{post}</div>
                    <div className="text-muted-foreground text-xs mt-1">2 days ago</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
