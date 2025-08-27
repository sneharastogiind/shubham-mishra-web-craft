import { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@shubhammishra.dev",
      href: "mailto:hello@shubhammishra.dev",
      copyable: true
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India (Available Worldwide)",
      href: null,
      copyable: false
    },
    {
      icon: Phone,
      label: "Available",
      value: "Mon - Fri, 9:00 AM - 6:00 PM IST",
      href: null,
      copyable: false
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/shubhammishra",
      handle: "@shubhammishra"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/shubhammishra",
      handle: "/in/shubhammishra"
    },
    {
      icon: Twitter,
      name: "Twitter",
      href: "https://twitter.com/shubhammishra",
      handle: "@shubhammishra"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent! 🎉",
      description: "Thanks for reaching out! I'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: `${text} has been copied to your clipboard.`,
    });
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project 
            and discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Send me a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="John"
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="Doe"
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="john@example.com"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="Let's work together!"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    required
                    rows={6}
                    placeholder="Tell me about your project, timeline, and how I can help..."
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full button-glow"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
              <p className="text-muted-foreground mb-8">
                I'm always excited to collaborate on new projects and discuss innovative ideas. 
                Whether you need a full-stack developer, have questions about web development, 
                or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/30">
                    <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                    {info.copyable && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(info.value)}
                        className="text-xs"
                      >
                        Copy
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Connect on social</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">
                          {social.name}
                        </p>
                        <p className="text-muted-foreground text-xs">{social.handle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Fun Message */}
            <Card className="p-6 bg-warm-gradient text-white">
              <h3 className="font-semibold mb-2">Let's build something awesome together! 🚀</h3>
              <p className="text-sm text-white/90">
                I typically respond within 24 hours. Looking forward to hearing about your project!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;