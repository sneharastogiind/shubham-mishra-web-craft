import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-illustration.jpg";

const Home = () => {
  const skills = [
    {
      icon: Code,
      name: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      icon: Database,
      name: "Backend", 
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
    },
    {
      icon: Globe,
      name: "Full Stack",
      technologies: ["REST APIs", "GraphQL", "Docker", "AWS"]
    },
    {
      icon: Zap,
      name: "Tools",
      technologies: ["Git", "Figma", "Postman", "Linux"]
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-section py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="gradient-text">Shubham Mishra</span>{" "}
                  <span className="animate-bounce-soft inline-block">👋</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground">
                  I build things for the web.
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-md">
                I'm a passionate full-stack developer who loves crafting digital experiences 
                that make people's lives easier and more delightful.
              </p>

              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                "Code is poetry written in logic, and every bug is just a plot twist waiting to be resolved."
              </blockquote>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="button-glow">
                  <Link to="/projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/contact">
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Developer workspace illustration"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20 animate-bounce-soft"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-30 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Technologies I <span className="gradient-text">Love</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I work with modern technologies to build scalable, performant, and beautiful web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={skill.name} className="p-6 card-hover text-center">
                  <div className="w-12 h-12 bg-warm-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-3">{skill.name}</h3>
                  <div className="space-y-1">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-accent-light text-accent-foreground px-2 py-1 rounded-full text-xs font-medium m-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to bring your <span className="gradient-text">ideas to life</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's collaborate and build something amazing together. I'm always excited 
              to work on new projects and solve interesting challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="button-glow">
                <Link to="/contact">
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;