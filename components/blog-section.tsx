"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

export function BlogSection({ showHeader = true }: { showHeader?: boolean }) {
  const featuredPost = {
    id: "1",
    title: "Heart-Healthy Eating: What Cardiac Patients Should Actually Change First",
    excerpt:
      "Salt, ghee and portion size do more damage than most people realise. A practical guide drawn from counselling cardiac patients at DHQ Hospital Toba Tek Singh.",
    author: "Rubia Noor",
    date: "2026-08-28",
    readTime: "8 min read",
    category: "Cardiac Nutrition",
    featured: true,
  }

  const blogPosts = [
    {
      id: "2",
      title: "Affordable Protein: Getting Enough on a Pakistani Grocery Budget",
      excerpt:
        "Daal, eggs, yoghurt and chana can meet your protein needs without expensive supplements. Here is how much you actually need.",
      author: "Rubia Noor",
      date: "2026-08-20",
      readTime: "6 min read",
      category: "Diet Planning",
    },
    {
      id: "3",
      title: "Managing Diabetes Through Nutrition: A Practical Approach",
      excerpt:
        "Learn how to effectively manage blood sugar levels through strategic meal timing, portion control, and smart food choices.",
      author: "Rubia Noor",
      date: "2026-08-12",
      readTime: "7 min read",
      category: "Medical Nutrition",
    },
    {
      id: "4",
      title: "Dietary Assessment: What Happens in Your First Consultation",
      excerpt:
        "A walk through the 24-hour recall, measurements and lab review that come before any diet plan is written.",
      author: "Rubia Noor",
      date: "2026-08-05",
      readTime: "5 min read",
      category: "Clinical Nutrition",
    },
    {
      id: "5",
      title: "Gut Health and Nutrition: The Connection You Can't Ignore",
      excerpt:
        "Explore the vital relationship between digestive health and overall wellness, plus foods that support a healthy microbiome.",
      author: "Rubia Noor",
      date: "2026-07-24",
      readTime: "6 min read",
      category: "Digestive Health",
    },
    {
      id: "6",
      title: "Ramadan Nutrition: Sehri and Iftar Without the Energy Crash",
      excerpt:
        "How to structure sehri and iftar so you stay hydrated, keep your energy steady and avoid weight gain over the month.",
      author: "Rubia Noor",
      date: "2026-07-15",
      readTime: "4 min read",
      category: "Seasonal",
    },
  ]

  const categories = ["All", "Cardiac Nutrition", "Clinical Nutrition", "Diet Planning", "Medical Nutrition", "Digestive Health", "Seasonal"]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        {showHeader && (
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary mb-4">Nutrition Blog</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
              Latest Insights &<span className="text-primary block">Expert Tips</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Stay informed with evidence-based nutrition advice, practical tips, and the latest research in health and
              wellness.
            </p>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-16 overflow-hidden hover:shadow-xl transition-shadow">
          <div className="p-8 lg:p-12 border-l-4 border-primary">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                <span className="text-xs font-medium uppercase tracking-widest text-primary">
                  Featured · {featuredPost.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  {featuredPost.readTime}
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4 text-balance">{featuredPost.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                </div>
                <Button className="group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="p-6">
                <div className="text-xs font-medium uppercase tracking-widest text-primary mb-3">{post.category}</div>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-balance group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{post.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
