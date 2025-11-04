import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import itch from "@/assets/itch_icon.jpg";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4">
        <div className="mx-auto text-center" style={{width: "60em"}}>
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground text-lg mb-8">
            J'ai étudié pendant 3 ans Unity et le C# et tout ce qu'il y a autour de la création de jeux vidéo
            <br></br>
            <br></br>
            Actuellement je découvre et j'apprends des technologies/langages de développement qui me plaise autant que Unity
            afin de réaliser de nouveaux projets Web, applicatifs, etc
            <br></br>
            <br></br>
            Je cherche à travailler en entreprise pour continuer mon apprentissage
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="bg-primary text-primary-foreground rounded-full h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background">
                <Mail className="w-5 h-5" />
                yoan.lechevalier@gmail.com
              </div>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/yoan-lechevalier/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/GearScreen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://yoan-lechevalier.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <img src={itch} alt="Itch" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
