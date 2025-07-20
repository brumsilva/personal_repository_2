import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="hero-text">Bruno Silva</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Software Engineer PL | Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Angular - React - NodeJS - NestJs - .NET - UI/UX Design | Dublin, Ireland
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up">
            <Button 
              size="lg" 
              className="liquid-button text-primary-foreground border-0 glow-liquid hover:scale-105 transition-liquid"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="liquid-shape border-primary text-primary hover:gradient-primary hover:text-primary-foreground transition-liquid"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-slide-in-right">
            <a 
              href="https://github.com/brumsilva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 liquid-shape bg-card border border-border hover:border-primary transition-liquid hover:glow-liquid"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/brumsilva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 liquid-shape bg-card border border-border hover:border-primary transition-liquid hover:glow-liquid"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:brumsillva@gmail.com"
              className="p-3 liquid-shape bg-card border border-border hover:border-primary transition-liquid hover:glow-liquid"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="animate-float hover:text-primary transition-smooth"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;