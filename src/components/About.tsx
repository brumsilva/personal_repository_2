import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to development with strong communication skills"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Creative solutions to complex technical challenges"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results that exceed expectations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate software engineer with a drive for innovation and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a Full Stack Developer with a strong background in Angular, React, and NodeJS. 
                I enjoy creating user-friendly interfaces and integrating different systems to deliver 
                solutions that aid in digital transformation. Currently, I am working on developing APIs 
                for Unimed Fortaleza, a leading healthcare provider in Brazil.
              </p>
              <p>
                In addition to my technical skills, I have a keen interest in innovation and entrepreneurship. 
                I have co-founded two startups, Jobi and Consujr Soluções Jurídicas, where I gained experience 
                in leading and managing complex projects, implementing innovative strategies, and building 
                relationships with various stakeholders.
              </p>
              <p>
                I have completed a Data for Business course from Tera and am pursuing a Bachelor's degree 
                in Computer Software Engineering from UniFanor Wyden. I am always open to new challenges 
                and opportunities to grow and learn.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-primary">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;