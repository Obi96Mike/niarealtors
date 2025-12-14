"use client";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { BlogCard } from "@/components/BlogCard";
import { Calendar, Clock, Eye, Share2, Facebook, Linkedin } from "lucide-react";
import { XLogo } from "@/components/icons/XLogo";

interface BlogPostProps {
  onNavigate: (page: string, id?: string) => void;
}

export function BlogPost({ onNavigate }: BlogPostProps) {
  const recentPosts = [
    {
      id: "top-neighborhoods",
      image: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?auto=format&fit=max&w=1600&q=80",
      title: "Top 5 Neighborhoods in Nairobi for Young Professionals",
      author: "James Mwangi",
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
      title: "Understanding Property Development Timelines",
      author: "Grace Wanjiru",
      date: "Nov 25, 2025",
      readTime: "6 min read",
      views: 987,
      comments: 12,
      likes: 54,
      category: "Property Investment",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-white py-4">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted-foreground">
            <button onClick={() => onNavigate("home")} className="hover:text-primary">Home</button>
            <span className="mx-2">/</span>
            <button onClick={() => onNavigate("insights")} className="hover:text-primary">Insights</button>
            <span className="mx-2">/</span>
            <span>Investing in Kenya's Real Estate Market in 2025</span>
          </nav>
        </div>
      </div>

      <article className="py-12">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-sm text-white">
              Property Investment
            </div>
            <h1 className="mb-6 text-4xl" style={{ color: "#0D402D", fontWeight: 600 }}>
              Investing in Kenya&apos;s Real Estate Market in 2025
            </h1>
            <div className="mb-6 flex items-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763479169474-728a7de108c3?auto=format&fit=max&w=1600&q=80"
                alt="Sarah Kamau"
                className="mr-4 h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">Sarah Kamau</div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    Dec 1, 2025
                  </span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    5 min read
                  </span>
                  <span className="flex items-center">
                    <Eye className="mr-1 h-4 w-4" />
                    1,234 views
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 border-y border-border py-4">
              <span className="flex items-center text-sm text-muted-foreground">
                <Share2 className="mr-2 h-4 w-4" /> Share:
              </span>
              {[Facebook, XLogo, Linkedin].map((Icon) => (
                <button key={Icon.name} className="text-muted-foreground transition-colors hover:text-primary">
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="relative mb-12 h-[500px] overflow-hidden rounded-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759428807275-b798a80e2801?auto=format&fit=max&w=1600&q=80"
              alt="Investing in Kenya's Real Estate"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose max-w-none text-muted-foreground">
            <p className="text-lg">
              Kenya&apos;s real estate market continues to show remarkable resilience and growth potential as we move
              through 2025. With favorable economic indicators, infrastructure development, and an increasing middle
              class, the property sector presents compelling opportunities for both local and international investors.
            </p>
            <h2 style={{ color: "#0D402D" }}>Market Overview</h2>
            <p>
              The Kenyan real estate market has evolved significantly over the past decade, transitioning from a
              predominantly speculative market to one driven by end-user demand and institutional investment. The sector
              has shown an average annual growth rate of 8-10%, outpacing many traditional investment vehicles.
            </p>
            <p>
              Key drivers include urbanization trends, with Nairobi and other major cities experiencing rapid population
              growth, and government initiatives such as the Affordable Housing Program.
            </p>
            <h2 style={{ color: "#0D402D" }}>Key Investment Areas</h2>
            <h3 style={{ color: "#0D402D" }}>1. Residential Developments</h3>
            <p>Strong demand in suburbs such as Karen, Runda, Kilimani, and Westlands.</p>
            <h3 style={{ color: "#0D402D" }}>2. Commercial Properties</h3>
            <p>Office spaces and retail units in prime locations offer attractive yields.</p>
            <h3 style={{ color: "#0D402D" }}>3. Off-Plan Investments</h3>
            <p>Capital appreciation potential when developer track record is solid.</p>
            <h2 style={{ color: "#0D402D" }}>Investment Considerations</h2>
            <ul className="space-y-2">
              <li>Location analysis and future development plans</li>
              <li>Legal due diligence and title verification</li>
              <li>Market dynamics and rental yield potential</li>
              <li>Infrastructure development and accessibility</li>
              <li>Developer reputation and project viability</li>
            </ul>
            <h2 style={{ color: "#0D402D" }}>2025 Market Trends</h2>
            <p>
              Sustainability, smart home tech, remote work influence, and mixed-use developments continue to shape buyer
              preferences.
            </p>
            <h2 style={{ color: "#0D402D" }}>Conclusion</h2>
            <p>
              Kenya&apos;s real estate market in 2025 offers diverse opportunities for investors across different
              budgets. Due diligence and partnering with reputable professionals remain key to maximizing returns.
            </p>
          </div>

          <div className="my-12 flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground">Tags:</span>
            {["Real Estate Investment", "Kenya Property Market", "Property Investment", "Market Trends"].map((tag) => (
              <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="my-12 rounded-lg bg-secondary p-8">
            <div className="flex items-start">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763479169474-728a7de108c3?auto=format&fit=max&w=1600&q=80"
                alt="Sarah Kamau"
                className="mr-6 h-20 w-20 rounded-full object-cover"
              />
              <div>
                <h3 className="mb-2 text-xl" style={{ color: "#0D402D" }}>
                  About Sarah Kamau
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Sarah Kamau is the Managing Director of Nia Realtors with over 15 years of experience in Kenya&apos;s
                  real estate market.
                </p>
                <button onClick={() => onNavigate("team-profile")} className="text-primary hover:underline">
                  View Full Profile →
                </button>
              </div>
            </div>
          </div>

          <div className="my-12">
            <h3 className="mb-6 text-xl" style={{ color: "#0D402D" }}>
              Comments (23)
            </h3>
            <div className="space-y-6">
              {[
                {
                  name: "John Doe",
                  time: "2 days ago",
                  text: "Great insights! Very helpful for anyone looking to invest in Kenya's property market.",
                },
                {
                  name: "Jane Smith",
                  time: "3 days ago",
                  text: "Could you provide more details on the off-plan investment opportunities in Westlands?",
                },
              ].map((comment) => (
                <div key={comment.name} className="border-b border-border pb-6">
                  <div className="mb-3 flex items-start">
                    <div className="mr-3 h-10 w-10 rounded-full bg-secondary" />
                    <div className="flex-1">
                      <div className="mb-1 flex items-center">
                        <span className="mr-2 font-medium">{comment.name}</span>
                        <span className="text-sm text-muted-foreground">{comment.time}</span>
                      </div>
                      <p className="text-muted-foreground">{comment.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-secondary p-6">
              <h4 className="mb-4 text-lg" style={{ color: "#0D402D" }}>
                Leave a Comment
              </h4>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded border border-border bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded border border-border bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <textarea
                  placeholder="Your comment"
                  rows={4}
                  className="w-full resize-none rounded border border-border bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded bg-primary px-6 py-2 text-white transition-colors hover:bg-[#0a3222]"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-2xl" style={{ color: "#0D402D" }}>
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {recentPosts.map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                author={post.author}
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
    </div>
  );
}
