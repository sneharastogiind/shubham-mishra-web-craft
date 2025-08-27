import { MapPin, Calendar, Coffee, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      description: "Leading development of scalable web applications and mentoring junior developers.",
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      description: "Built responsive web applications using React, Node.js, and modern deployment practices.",
    },
    {
      year: "2020",
      title: "Frontend Developer",
      description: "Started my journey in web development, focusing on creating beautiful user interfaces.",
    },
    {
      year: "2018",
      title: "Computer Science Graduate",
      description: "Completed my degree and discovered my passion for web technologies and problem-solving.",
    },
  ];

  const funFacts = [
    { icon: Coffee, text: "I've consumed over 2,847 cups of coffee while coding" },
    { icon: Code, text: "Written 100,000+ lines of code and counting" },
    { icon: MapPin, text: "Based in India, working with clients worldwide" },
    { icon: Calendar, text: "5+ years of turning coffee into code" },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer who believes in the power of clean code, 
            great design, and meaningful user experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Photo & Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-48 h-48 bg-muted rounded-2xl flex items-center justify-center mx-auto md:mx-0 flex-shrink-0">
                <span className="text-6xl">👨‍💻</span>
              </div>
              
              <div className="space-y-4 flex-1">
                <h2 className="text-2xl font-semibold">Hey there! 👋</h2>
                <div className="prose prose-gray max-w-none space-y-4 text-muted-foreground">
                  <p>
                    I'm Shubham Mishra, a full-stack developer from India with a passion for 
                    creating digital experiences that matter. My journey into coding started during 
                    my computer science studies, where I fell in love with the art of turning 
                    ideas into reality through code.
                  </p>
                  <p>
                    What started as curiosity about "how websites work" has evolved into a 
                    fulfilling career where I get to solve complex problems, learn new technologies, 
                    and help businesses achieve their goals through innovative web solutions.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring the latest tech trends, 
                    contributing to open source projects, or sharing my knowledge through blog posts 
                    and mentoring fellow developers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Did you know?</h3>
            <div className="space-y-4">
              {funFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                    <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{fact.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="gradient-text">Journey</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="w-16 h-16 bg-warm-gradient rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.year}
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 p-6 card-hover">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              "JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL",
              "MongoDB", "Docker", "AWS", "Git", "Tailwind CSS", "Next.js"
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="p-3 text-center justify-center">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;