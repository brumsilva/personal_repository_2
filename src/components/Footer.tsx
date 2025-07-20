import { Github, Linkedin, Mail, Heart, Cpu } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="py-12 border-t border-border bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold hero-text mb-2 flex items-center gap-2">
              <Cpu className="h-6 w-6 text-primary" />
              BRUNOSILVATECH
            </h3>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/20 transition-smooth group"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5 group-hover:text-primary transition-smooth" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Your Name. Made with{" "}
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />{" "}
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;