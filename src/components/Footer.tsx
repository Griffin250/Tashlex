import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Isaac Tashlex</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Entrepreneurship Trainer & Innovation Ecosystem Builder empowering the next generation of African entrepreneurs.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Experience", "Impact", "Programs", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/isaac-tashlex"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={12} />
              </a>
              <a
                href="mailto:contact@isaactashlex.com"
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Isaac Tashlex. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
