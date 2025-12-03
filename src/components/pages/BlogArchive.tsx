"use client";

import { useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { BlogCard } from "@/components/BlogCard";

interface BlogArchiveProps {
  onNavigate: (page: string, id?: string) => void;
}

export function BlogArchive({ onNavigate }: BlogArchiveProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "investment", label: "Property Investment" },
    { id: "lifestyle", label: "Design & Lifestyle" },
    { id: "market", label: "Market Trends" },
  ];

  const blogPosts = [
    {
      id: "investing-kenya-2025",
      image: "https://images.unsplash.com/photo-1759428807275-b798a80e2801?auto=format&fit=max&w=1600&q=80",
      title: "Investing in Kenya's Real Estate Market in 2025",
      excerpt: "Discover the key trends and opportunities shaping Kenya's property market this year.",
      author: "Sarah Kamau",
      authorImage:
        "https://images.unsplash.com/photo-1763479169474-728a7de108c3?auto=format&fit=max&w=400&q=80",
      date: "Dec 1, 2025",
      readTime: "5 min read",
      views: 1234,
      comments: 23,
      likes: 89,
      category: "Property Investment",
    },
    {
      id: "top-neighborhoods",
      image: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80",
      title: "Top 5 Neighborhoods in Nairobi for Young Professionals",
      excerpt: "Find the perfect location that matches your lifestyle and budget.",
      author: "James Mwangi",
      authorImage:
        "https://images.unsplash.com/photo-1627161684850-52a7d958f8d7?auto=format&fit=max&w=400&q=80",
      date: "Nov 28, 2025",
      readTime: "7 min read",
      views: 2156,
      comments: 45,
      likes: 167,
      category: "Design & Lifestyle",
    },
    {
      id: "development-timelines",
      image: "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?auto=format&fit=max&w=1600&q=80",
      title: "Understanding Property Development Timelines in Kenya",
      excerpt: "What to expect when investing in off-plan developments.",
      author: "Grace Wanjiru",
      authorImage:
        "https://images.unsplash.com/photo-1763479169474-728a7de108c3?auto=format&fit=max&w=400&q=80",
      date: "Nov 25, 2025",
      readTime: "6 min read",
      views: 987,
      comments: 12,
      likes: 54,
      category: "Property Investment",
    },
    {
      id: "home-buying-guide",
      image: "https://images.unsplash.com/photo-1669333490889-194e8f46a766?auto=format&fit=max&w=1600&q=80",
      title: "First-Time Home Buyer's Guide for Kenya",
      excerpt: "Essential tips and insights for making your first property purchase.",
      author: "Sarah Kamau",
      date: "Nov 20, 2025",
      readTime: "8 min read",
      views: 1876,
      comments: 34,
      likes: 142,
      category: "Property Investment",
    },
    {
      id: "interior-trends",
      image: "https://images.unsplash.com/photo-1620086464194-5127366b51ea?auto=format&fit=max&w=1600&q=80",
      title: "2025 Interior Design Trends for Kenyan Homes",
      excerpt: "Transform your space with these contemporary design trends.",
      author: "James Mwangi",
      date: "Nov 15, 2025",
      readTime: "5 min read",
      views: 1543,
      comments: 28,
      likes: 98,
      category: "Design & Lifestyle",
    },
    {
      id: "rental-market-analysis",
      image: "https://images.unsplash.com/photo-1617341623760-1919df79274c?auto=format&fit=max&w=1600&q=80",
      title: "Nairobi Rental Market Analysis Q4 2025",
      excerpt: "Comprehensive insights into rental prices and market dynamics.",
      author: "David Omondi",
      date: "Nov 10, 2025",
      readTime: "10 min read",
      views: 2341,
      comments: 56,
      likes: 203,
      category: "Market Trends",
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category.toLowerCase().includes(selectedCategory.replace("-", " ")));

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759428807275-b798a80e2801?auto=format&fit=max&w=1600&q=80"
          alt="Insights"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1280px] px-4 text-center text-white sm:px-6 lg:px-8">
            <nav className="mb-4 text-sm text-white/80">
              <button onClick={() => onNavigate("home")} className="hover:text-white">Home</button>
              <span className="mx-2">/</span>
              <span>Insights</span>
            </nav>
            <h1 className="mb-4 text-4xl md:text-5xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Insights & Resources
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-white/90">Expert advice, market trends, and property insights</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-6 py-2 transition-colors ${
                  selectedCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-primary hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                authorImage={post.authorImage}
                date={post.date}
                readTime={post.readTime}
                views={post.views}
                comments={post.comments}
                likes={post.likes}
                category={post.category}
                onReadMore={() => onNavigate("blog-post", post.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl" style={{ color: "#FFFFFF" }}>
            Subscribe to Our Newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Get the latest property insights, market trends, and exclusive listings delivered to your inbox
          </p>
          <form className="mx-auto flex max-w-md gap-3" action="/api/newsletter" method="post">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="flex-1 rounded bg-white px-4 py-3 text-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="rounded bg-white px-8 py-3 text-primary transition-colors hover:bg-white/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
