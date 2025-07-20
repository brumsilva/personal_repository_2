import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Unimed Fortaleza - Healthcare APIs",
      description: "Developing APIs for a leading healthcare provider in Brazil using best market practices, NodeJS backend, and agile methodologies with continuous integration.",
      technologies: ["Node.js", "NestJS", "API Development", "Agile", "Healthcare"],
      github: "#",
      live: "#",
      image: "https://img.freepik.com/free-photo/hand-medical-glove-pointing-virtual-screen-medical-technology_53876-104200.jpg?semt=ais_hybrid&w=740"
    },
    {
      title: "Sunne Energias Renováveis - Frontend",
      description: "Frontend development for renewable energy solutions, implementing user interface features, testing and debugging code, and enhancing user experience.",
      technologies: ["React", "Angular", "JavaScript", "UI/UX", "Testing"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop"
    },
    {
      title: "Jobi - Startup Co-Founder",
      description: "CEO and co-founder of a startup focused on creating and implementing vision, mission, and strategy. Managed communities and implemented Life Long Learning strategies.",
      technologies: ["Leadership", "Strategy", "Community Management", "Innovation"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
      title: "Consujr Soluções Jurídicas",
      description: "Founded and structured a legal solutions company, focusing on legal technology and digital transformation in the legal sector.",
      technologies: ["Entrepreneurship", "Legal Tech", "Business Strategy", "Leadership"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="hero-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary animate-fade-in-up group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="liquid-shape bg-secondary/50 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="liquid-shape border-primary text-primary hover:gradient-primary hover:text-primary-foreground transition-liquid"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Details
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="liquid-button text-primary-foreground border-0 hover:scale-105 transition-liquid"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <Button
            variant="outline"
            size="lg"
            className="liquid-shape border-primary text-primary hover:gradient-primary hover:text-primary-foreground transition-liquid"
            asChild
          >
            <a href="https://github.com/brumsilva" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;