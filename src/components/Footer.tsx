import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/shubhammishra", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/shubhammishra", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/shubhammishra", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@shubhammishra.dev", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-warm-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              <span className="font-semibold text-lg gradient-text">Shubham Mishra</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Full-stack developer passionate about creating amazing web experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                Ready to bring your ideas to life?
              </p>
              <a
                href="mailto:hello@shubhammishra.dev"
                className="text-primary hover:text-accent transition-colors text-sm font-medium"
              >
                hello@shubhammishra.dev
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center space-x-1">
            <span>© {currentYear} Shubham Mishra</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-bounce-soft" />
              <span>by Shubham</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;