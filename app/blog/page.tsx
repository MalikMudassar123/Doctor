import { Navigation } from "@/components/navigation"
import { BlogSection } from "@/components/blog-section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const popularTopics = [
    "Cardiac nutrition",
    "Diabetes",
    "Heart health",
    "Dietary assessment",
    "Diet planning",
    "Ramadan nutrition",
  ]

  const recentPosts = [
    "Heart-Healthy Eating: What Cardiac Patients Should Change First",
    "Affordable Protein on a Pakistani Grocery Budget",
    "Dietary Assessment: What Happens in Your First Consultation",
    "Managing Diabetes Through Nutrition",
    "Ramadan Nutrition: Sehri and Iftar Without the Energy Crash",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/20 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary mb-4">Nutrition Blog</p>
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
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search articles, topics, or nutrition advice..."
                className="pl-10 pr-4 py-3 text-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">Search</Button>
            </div>
          </div>

        </div>
      </section>

      <BlogSection showHeader={false} />

      {/* Sidebar Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Popular Tags */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Popular Topics</h3>
              <ul className="space-y-3 text-sm">
                {popularTopics.map((topic) => (
                  <li
                    key={topic}
                    className="border-b border-border/60 pb-2 cursor-pointer hover:text-primary transition-colors"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Recent Posts */}
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="text-sm">
                    <div className="font-medium hover:text-primary cursor-pointer transition-colors">{post}</div>
                    
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
