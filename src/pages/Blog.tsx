import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications: Best Practices and Patterns",
      excerpt: "Learn how to structure React applications for scalability, maintainability, and team collaboration. We'll explore component patterns, state management, and optimization techniques.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Architecture"],
      featured: true,
      slug: "building-scalable-react-applications"
    },
    {
      id: 2,
      title: "The Future of Web Development: What to Expect in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development. From AI-powered tools to new frameworks, here's what developers should watch.",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Web Development", "Trends", "Future"],
      featured: true,
      slug: "future-of-web-development-2024"
    },
    {
      id: 3,
      title: "Mastering TypeScript: Advanced Types and Patterns",
      excerpt: "Deep dive into TypeScript's advanced features including conditional types, mapped types, and utility types. Perfect for developers looking to level up their TypeScript skills.",
      date: "2024-01-05",
      readTime: "12 min read",
      tags: ["TypeScript", "JavaScript", "Programming"],
      featured: false,
      slug: "mastering-typescript-advanced-types"
    },
    {
      id: 4,
      title: "Building REST APIs with Node.js and Express",
      excerpt: "A comprehensive guide to building robust REST APIs with Node.js, Express, and MongoDB. Includes authentication, validation, error handling, and testing strategies.",
      date: "2023-12-28",
      readTime: "15 min read",
      tags: ["Node.js", "API", "Backend"],
      featured: false,
      slug: "building-rest-apis-nodejs-express"
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox: When to Use Which?",
      excerpt: "Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout system for optimal results in your web projects.",
      date: "2023-12-20",
      readTime: "7 min read",
      tags: ["CSS", "Layout", "Frontend"],
      featured: false,
      slug: "css-grid-vs-flexbox"
    },
    {
      id: 6,
      title: "Optimizing React Performance: Tips and Techniques",
      excerpt: "Learn practical techniques to optimize React application performance, including memoization, code splitting, lazy loading, and profiling tools.",
      date: "2023-12-15",
      readTime: "10 min read",
      tags: ["React", "Performance", "Optimization"],
      featured: true,
      slug: "optimizing-react-performance"
    },
    {
      id: 7,
      title: "Getting Started with Docker for Web Developers",
      excerpt: "A beginner-friendly introduction to Docker and containerization. Learn how to containerize your web applications for consistent development and deployment.",
      date: "2023-12-08",
      readTime: "9 min read",
      tags: ["Docker", "DevOps", "Deployment"],
      featured: false,
      slug: "getting-started-docker-web-developers"
    },
    {
      id: 8,
      title: "JavaScript ES2024: New Features You Should Know",
      excerpt: "Explore the latest JavaScript features in ES2024, including new methods, syntax improvements, and how they can improve your development workflow.",
      date: "2023-12-01",
      readTime: "5 min read",
      tags: ["JavaScript", "ES2024", "Features"],
      featured: false,
      slug: "javascript-es2024-new-features"
    }
  ];

  const categories = ["All", "React", "JavaScript", "Node.js", "CSS", "TypeScript", "DevOps"];
  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I share my thoughts, experiences, and learnings about web development, 
            programming, and the ever-evolving world of technology.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 flex items-center">
            <span className="mr-2">🔥</span>
            Featured Posts
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <Card key={post.id} className="p-6 card-hover group cursor-pointer">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary">
                  Read More <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h2 className="text-2xl font-semibold mb-4 sm:mb-0">All Posts</h2>
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="p-6 card-hover group cursor-pointer">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>
                
                <Button variant="ghost" size="sm" className="p-0 h-auto font-medium group-hover:text-primary">
                  Read More <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <Card className="p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get notified when I publish new articles about web development, programming tips, and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="button-glow">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;