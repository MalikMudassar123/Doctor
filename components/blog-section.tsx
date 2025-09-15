"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Image from "next/image"

export function BlogSection() {
  const featuredPost = {
    id: "1",
    title: "The Science Behind Sustainable Weight Loss: Why Quick Fixes Don't Work",
    excerpt:
      "Discover the evidence-based approach to lasting weight management that focuses on metabolic health, behavioral changes, and sustainable lifestyle modifications.",
    author: "Dr. Rubia Noor",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Weight Management",
    image: "/healthy-meal-prep-containers-colorful-vegetables.jpg",
    featured: true,
  }

  const blogPosts = [
    {
      id: "2",
      title: "Plant-Based Nutrition: Complete Protein Sources You Need to Know",
      excerpt:
        "A comprehensive guide to getting all essential amino acids from plant-based sources, with practical meal planning tips.",
      author: "Dr. Rubia Noor",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Plant-Based",
      image: "/plant-based-protein-sources-quinoa-legumes-nuts.jpg",
    },
    {
      id: "3",
      title: "Managing Diabetes Through Nutrition: A Practical Approach",
      excerpt:
        "Learn how to effectively manage blood sugar levels through strategic meal timing, portion control, and smart food choices.",
      author: "Dr. Rubia Noor",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Medical Nutrition",
      image: "/diabetes-friendly-meal-blood-sugar-management.jpg",
    },
    {
      id: "4",
      title: "Sports Nutrition: Fueling Your Performance Naturally",
      excerpt:
        "Optimize your athletic performance with evidence-based nutrition strategies that support training, recovery, and competition.",
      author: "Dr. Rubia Noor",
      date: "2024-01-03",
      readTime: "5 min read",
      category: "Sports Nutrition",
      image: "/athlete-nutrition-pre-workout-meal-preparation.jpg",
    },
    {
      id: "5",
      title: "Gut Health and Nutrition: The Connection You Can't Ignore",
      excerpt:
        "Explore the vital relationship between digestive health and overall wellness, plus foods that support a healthy microbiome.",
      author: "Dr. Rubia Noor",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Digestive Health",
      image: "/gut-health-foods-probiotics-fiber-rich-vegetables.jpg",
    },
    {
      id: "6",
      title: "Nutrition for Busy Professionals: Healthy Eating on the Go",
      excerpt:
        "Practical strategies for maintaining optimal nutrition despite a hectic schedule, including meal prep tips and portable options.",
      author: "Dr. Rubia Noor",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Lifestyle",
      image: "/busy-professional-healthy-lunch-office-setting.jpg",
    },
  ]

  const categories = ["All", "Weight Management", "Plant-Based", "Medical Nutrition", "Sports Nutrition", "Lifestyle"]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Nutrition Blog
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
            Latest Insights &<span className="text-primary block">Expert Tips</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Stay informed with evidence-based nutrition advice, practical tips, and the latest research in health and
            wellness.
          </p>
        </div>

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
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Featured</Badge>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="secondary">{featuredPost.category}</Badge>
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
              <div className="relative h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3" variant="secondary">
                  {post.category}
                </Badge>
              </div>
              <div className="p-6">
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
