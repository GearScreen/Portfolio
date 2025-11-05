import frontend_icon from "@/assets/frontend_icon.svg";
import backend_icon from "@/assets/backend_icon.svg";
import game_icon from "@/assets/game_icon.svg";
import language_icon from "@/assets/language_icon.svg";
import devops_icon from "@/assets/devops_icon.svg";

const skillCategories = [
  {
    icon: frontend_icon,
    title: "Frontend Development",
    skills: ["React", "HTML5", "CSS3", "TypeScript", "Bootstrap CSS", "Wordpress"], // Responsive Design "Next.js"
  },
  {
    icon: backend_icon,
    title: "Backend Development",
    skills: ["Node.js", "REST APIs", "Python Flask", "PHP"],
  },
  {
    icon: game_icon,
    title: "Game Development",
    skills: ["Unity", "Unreal", "3D Modeling", "VFX", "SFX"],
  },
  {
    icon: language_icon,
    title: "Language",
    skills: ["Python", "Java", "JavaScript", "C#"],
  },
  {
    icon: devops_icon,
    title: "Dev Ops", //Tools & Others
    skills: ["Git", "Docker", "CI/CD", "Agile"],
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Compétences</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Compétences acquises au cours de mes études et de mes projets personnels/professionnels <br></br>
          Je travail actuelement à en ajouter d'avantage
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <img src={Icon} alt="Icon" className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
