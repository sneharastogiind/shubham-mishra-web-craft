import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time payments, inventory management, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: ["Full Stack", "React", "Node.js"],
      image: "🛒",
      github: "https://github.com/shubhammishra/ecommerce-platform",
      demo: "https://demo-ecommerce.shubhammishra.dev",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      category: ["Full Stack", "React", "TypeScript"],
      image: "📝",
      github: "https://github.com/shubhammishra/task-manager",
      demo: "https://tasks.shubhammishra.dev",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and detailed analytics.",
      tech: ["React", "TypeScript", "OpenWeather API"],
      category: ["React", "Frontend"],
      image: "🌤️",
      github: "https://github.com/shubhammishra/weather-dashboard",
      demo: "https://weather.shubhammishra.dev",
      featured: false
    },
    {
      id: 4,
      title: "Blog CMS",
      description: "Content management system for bloggers with markdown support, SEO optimization, and analytics.",
      tech: ["Next.js", "Node.js", "MongoDB", "MDX"],
      category: ["Full Stack", "Next.js", "Node.js"],
      image: "📖",
      github: "https://github.com/shubhammishra/blog-cms",
      demo: "https://cms.shubhammishra.dev",
      featured: true
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time chat app with rooms, private messaging, file sharing, and emoji reactions.",
      tech: ["React", "Socket.io", "Node.js", "Redis"],
      category: ["Full Stack", "React", "Node.js"],
      image: "💬",
      github: "https://github.com/shubhammishra/chat-app",
      demo: "https://chat.shubhammishra.dev",
      featured: false
    },
    {
      id: 6,
      title: "Portfolio Analytics",
      description: "Analytics dashboard for tracking portfolio performance with interactive charts and insights.",
      tech: ["Python", "Django", "Chart.js", "PostgreSQL"],
      category: ["Python", "Full Stack"],
      image: "📊",
      github: "https://github.com/shubhammishra/portfolio-analytics",
      demo: "https://analytics.shubhammishra.dev",
      featured: false
    },
    {
      id: 7,
      title: "Recipe Finder",
      description: "Discover recipes based on ingredients you have, with nutritional information and cooking instructions.",
      tech: ["React", "TypeScript", "Recipe API"],
      category: ["React", "Frontend"],
      image: "👨‍🍳",
      github: "https://github.com/shubhammishra/recipe-finder",
      demo: "https://recipes.shubhammishra.dev",
      featured: false
    },
    {
      id: 8,
      title: "Expense Tracker",
      description: "Personal finance manager with budget tracking, expense categorization, and financial insights.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: ["Full Stack", "React", "Node.js"],
      image: "💰",
      github: "https://github.com/shubhammishra/expense-tracker",
      demo: "https://expenses.shubhammishra.dev",
      featured: true
    }
  ];

  const filters = ["All", "Full Stack", "React", "Node.js", "Python", "Frontend"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's a collection of projects I've worked on, showcasing my skills in 
            full-stack development, problem-solving, and creating user-focused solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 flex items-center">
            <span className="mr-2">⭐</span>
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 4).map((project) => (
              <Card key={project.id} className="p-6 card-hover group">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h2 className="text-2xl font-semibold mb-4 sm:mb-0">All Projects</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <Filter className="h-4 w-4 text-muted-foreground mt-2 mr-2" />
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="text-xs"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="p-6 card-hover group">
                <div className="text-3xl mb-3">{project.image}</div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found for the selected filter.</p>
              <Button
                variant="outline"
                onClick={() => setActiveFilter("All")}
                className="mt-4"
              >
                Show All Projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;