import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "Angular", "TypeScript", "JavaScript ES6+", "Next.js",
        "HTML5", "CSS3", "UI/UX Design", "Bootstrap", "jQuery"
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        "Node.js", "NestJS", ".NET", "C#", "Express.js",
        "REST APIs", "Microservices", "API Development"
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        "PostgreSQL", "MongoDB", "MySQL", "Firebase", 
        "Databases", "Data Processing", "System Integration"
      ]
    },
    {
      title: "Tools & Methodologies",
      skills: [
        "Git", "Agile Methodologies", "Continuous Integration", "Six Sigma Green Belt",
        "Community Management", "Innovation", "Entrepreneurship"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="hero-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary animate-fade-in-up"
            >
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="liquid-shape bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-liquid cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold hero-text mb-2">5+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold hero-text mb-2">2</h3>
              <p className="text-muted-foreground">Startups Co-Founded</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold hero-text mb-2">15+</h3>
              <p className="text-muted-foreground">Technologies Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;