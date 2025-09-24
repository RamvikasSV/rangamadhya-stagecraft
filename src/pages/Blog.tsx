import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Folk Theatre in Modern Society",
      excerpt: "Exploring how traditional folk theatre continues to resonate with contemporary audiences and address current social issues.",
      author: "Dinesh Sir",
      date: "September 20, 2024",
      category: "Folk Theatre",
      readTime: "5 min read",
      image: "/src/assets/folk-theatre.jpg"
    },
    {
      id: 2,
      title: "Building Confidence Through Theatre Workshops",
      excerpt: "How our community workshops are transforming young lives by building confidence and communication skills.",
      author: "Theatre Team",
      date: "September 15, 2024",
      category: "Workshops",
      readTime: "4 min read",
      image: "/src/assets/workshop.jpg"
    },
    {
      id: 3,
      title: "Historical Plays: Uncovering Forgotten Stories",
      excerpt: "Our journey in creating historical plays that bring untold truths to light and educate audiences about cultural heritage.",
      author: "Dinesh Sir",
      date: "September 10, 2024",
      category: "Historical Theatre",
      readTime: "6 min read",
      image: "/src/assets/hero-theatre.jpg"
    },
    {
      id: 4,
      title: "Theatre as a Medium for Social Change",
      excerpt: "Understanding how protest theatre can be a powerful tool for raising awareness about social and cultural issues.",
      author: "Community Team",
      date: "September 5, 2024",
      category: "Social Theatre",
      readTime: "7 min read",
      image: "/src/assets/folk-theatre.jpg"
    },
    {
      id: 5,
      title: "Preserving Karnataka's Cultural Heritage",
      excerpt: "Our commitment to preserving traditional music and theatre forms for future generations through education and performance.",
      author: "Cultural Team",
      date: "August 30, 2024",
      category: "Cultural Preservation",
      readTime: "5 min read",
      image: "/src/assets/hero-theatre.jpg"
    },
    {
      id: 6,
      title: "Community Outreach: Bringing Theatre to Villages",
      excerpt: "Stories from our outreach programs across Karnataka and the impact of community-driven theatre initiatives.",
      author: "Outreach Team",
      date: "August 25, 2024",
      category: "Community",
      readTime: "4 min read",
      image: "/src/assets/workshop.jpg"
    }
  ];

  const categories = [
    "All",
    "Folk Theatre",
    "Workshops", 
    "Historical Theatre",
    "Social Theatre",
    "Cultural Preservation",
    "Community"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-cultural text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Theatre Insights
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Stories, insights, and reflections from our journey in community theatre, 
                cultural preservation, and social transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="px-4 py-2 cursor-pointer hover:bg-secondary hover:text-secondary-foreground transition-theatrical"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="overflow-hidden hover-lift cultural-glow transition-theatrical group"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-theatrical"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent hover:bg-accent text-accent-foreground">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-theatrical">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-accent font-medium">
                        {post.readTime}
                      </span>
                      
                      <Button 
                        asChild
                        variant="ghost"
                        size="sm"
                        className="text-secondary hover:text-secondary-foreground hover:bg-secondary/10 group-hover:translate-x-1 transition-all"
                      >
                        <Link to={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-theatre-beige text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about new blog posts, 
              upcoming workshops, and performance announcements.
            </p>
            
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-cultural"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;