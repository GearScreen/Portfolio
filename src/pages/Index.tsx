import { useState } from "react";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import ProjectCard from "@/components/ProjectCard";
import ProjectLightbox from "@/components/ProjectLightbox";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

// CoopFactory project images
import coopFactory_Cover from "@/assets/CoopFactory/CoopFactory_Cover.png";
import coopFactory_01 from "@/assets/CoopFactory/CoopFactory_01.png";
import coopFactory_02 from "@/assets/CoopFactory/CoopFactory_02.png";
import coopFactory_03 from "@/assets/CoopFactory/CoopFactory_03.png";

// FastAPI Images
import fastAPI_Cover from "@/assets/FastAPI/FastAPI.png";
import fastAPI_01 from "@/assets/FastAPI/FastAPI_Get.png";

// POE_Item Design Images
import POE_Item_Cover from "@/assets/POE_ItemDesign/POE_ItemDesign_Cover.png";
import POE_Item_01 from "@/assets/POE_ItemDesign/POE_Item_Lightbox.png";

// Wordpress Images
import Wordpress_Cover from "@/assets/Wordpress/Wp_Home.png";
import Wordpress_01 from "@/assets/Wordpress/WP_Mamp.png";
import Wordpress_02 from "@/assets/Wordpress/WP_ACF.png";
import Wordpress_03 from "@/assets/Wordpress/WP_FSE.png";
import Wordpress_04 from "@/assets/Wordpress/WP_GoogleMap.png";

// Lol Caught Images
import Lol_Caught_Cover from "@/assets/Lol_Caught/CAUGHT_02.png";
import Lol_Caught_01 from "@/assets/Lol_Caught/LolCaught_Search_01.png";
import Lol_Caught_02 from "@/assets/Lol_Caught/LolCaught_Search_02.png";
import Lol_Caught_03 from "@/assets/Lol_Caught/LolCaught_Stats.png";
import Lol_Caught_04 from "@/assets/Lol_Caught/Tech_API.png";

// React App Images
import reactApp_Cover from "@/assets/ReactApp/ReactApp_01.png";

// RiskHunt Images
import riskHunt_Cover from "@/assets/RiskHunt/RiskHunt_01.png";
import riskHunt_01 from "@/assets/RiskHunt/RH_CreateAccount.png";
import riskHunt_02 from "@/assets/RiskHunt/LoadImage.png";
import riskHunt_03 from "@/assets/RiskHunt/RH_PointC.gif";
import riskHunt_04 from "@/assets/RiskHunt/PhpMyAdmin_01.png";

// Siege Notes Images
import siegeNotes_Cover from "@/assets/SiegeNotes/ParchmentIcon.png";

// Old Portfolio Images
import oldPortfolio_Cover from "@/assets/OldPortfolio/OldPortfolio.png";

// Dashing Exploration Images
import dashingExploration_Cover from "@/assets/DashingExploration/DE_GoogleplayPage.png";
import dashingExploration_01 from "@/assets/DashingExploration/DE_01.gif";
import dashingExploration_02 from "@/assets/DashingExploration/DE_Bonus.gif";
import dashingExploration_03 from "@/assets/DashingExploration/DE_Dash_02.gif";
import dashingExploration_04 from "@/assets/DashingExploration/DE_Shop.png";

// Toybox Warefare Images
import toyboxWarfare_Cover from "@/assets/ToyboxWarfare/ToyboxWarfare_Cover.png";
import toyboxWarfare_01 from "@/assets/ToyboxWarfare/ToyBoxWarfare_01.gif";
import toyboxWarfare_02 from "@/assets/ToyboxWarfare/ToyBoxWarfare_02.gif";
import toyboxWarfare_03 from "@/assets/ToyboxWarfare/ToyBoxWarfare_03.gif";
import toyboxWarfare_04 from "@/assets/ToyboxWarfare/ToyBoxWarfare_04.gif";

// Projet Tron Images
import projectTron_Cover from "@/assets/ProjetTron/Arena_01.png";
import projectTron_01 from "@/assets/ProjetTron/Arena_02.png";
import projectTron_02 from "@/assets/ProjetTron/Tron_Progress.gif";
import projectTron_03 from "@/assets/ProjetTron/Tron_ExplosionMoto.gif";

// Game of Life Images
import gameOfLife_Cover from "@/assets/GameOfLife/GameOfLifeCover.jpg";
import gameOfLife_01 from "@/assets/GameOfLife/GOL_Pulsar.gif";
import gameOfLife_02 from "@/assets/GameOfLife/GosperGliderGun.gif";
import gameOfLife_03 from "@/assets/GameOfLife/GOL_Tutrtles.gif";
import gameOfLife_04 from "@/assets/GameOfLife/GOL_Ghost_Turtles.gif";

// HomeLab Images
import homeLab_Cover from "@/assets/HomeLab/OpenMediaVault.png";
import homeLab_01 from "@/assets/HomeLab/Navidrome.png";

const projects = [
  {
    id: 1,
    title: "Node.js : CoopFactory",
    description: "CoopFactory est un jeu similaire à cookie clicker mais en multijoueur",
    fullDescription: "Le backend est hébergé gratuitement sur Render.com (ce qui implique un temps de latence au démarrage du serveur après une période d'inactivité). \n\nLe jeu utilise Node.js et Socket.io pour la communication en temps réel entre les clients et le serveur. Le score est commun aux joueurs mais les ressources sont individuelles et permettent d'améliorer un des quatre modules de l'usine.",
    category: "Développement Web",
    images: [coopFactory_Cover, coopFactory_01, coopFactory_02, coopFactory_03],
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Socket.io", "Render.com"],
    links: [{name: "CoopFactory", url:"https://gearscreen.github.io/CoopFactory/CoopFactoryFront/"},
      {name: "GitHub", url: "https://github.com/GearScreen/CoopFactory"}, {name: "Render.com", url:"https://render.com/"}],
  },
  {
    id: 2,
    title: "MSPR : FastAPI",
    description: "Projet MSPR où j'ai appris à utiliser FastAPI",
    fullDescription: "Le projet réalisé en groupe consistait à récupérer des données (nous avons utilisé Kaggle) et les afficher via une API REST en utilisant FastAPI. \n\n J'ai utilisé Uvicorn comme serveur ASGI pour exécuter l'application FastAPI, et j'ai testé les endpoints de l'API avec des requêtes Curl.",
    category: "Développement Web",
    images: [fastAPI_Cover, fastAPI_01],
    technologies: ["Python", "FastAPI", "Uvicorn", "Kaggle", "Curl", "SQLite3", "SQLAlchemy"],
    links: [{name: "Kaggle", url:"https://www.kaggle.com/"}],
  },
  {
    id: 3,
    title: "Python Flask : POE Item Design",
    description: "Galerie d'images développée avec Python Flask et hébergée sur PythonAnywhere",
    fullDescription: "Le projet est hébergé gratuitement sur Pythonanywhere (ce qui implique que je doive manuellement remettre le projet en ligne tous les 3 mois, il ne sera donc probablement pas disponible) \n\n la galerie d'images présente les items que j'ai designé (Fan made) pour le jeu Path of Exile en utilisant le site Path of Exile Item Creator",
    category: "Développement Web",
    images: [POE_Item_Cover, POE_Item_01],
    technologies: ["Python", "Python Flask", "HTML5", "CSS3"],
    links: [{name: "POE Item Design", url:"https://barbasoyun.pythonanywhere.com/"},
      {name: "GitHub", url: "https://github.com/GearScreen/POE_ItemDesign"}, {name: "Path of Exile Item Creator", url:"https://poeitem.crunchyintheory.com/create"}],
  },
  {
    id: 4,
    title: "Site Wordpress",
    description: "Projet WordPress où j'ai créé un thème puis j'ai testé le FSE",
    fullDescription: "J'ai utilisé MAMP pour le développement avec un serveur local avec Phpmyadmin pour la Base de Données",
    category: "Développement Web",
    images: [Wordpress_Cover, Wordpress_01, Wordpress_02, Wordpress_03, Wordpress_04],
    technologies: ["Wordpress", "FSE", "PhpMyAdmin", "MAMP"],
    links: [{name: "Wordpress", url:"https://wordpress.com/fr/"},]
  },
  {
    id: 5,
    title: "React : Lol Caught",
    description: "Utilise l'API de Riot Games afin de comparer des stats entre deux joueurs",
    fullDescription: "L'application web permet de comparer le nombre de morts dans l'historique de partie de deux joueurs de League of Legends en utilisant l'API de Riot Games. \n\nLes utilisateurs peuvent entrer les noms d'invocateur des joueurs qu'ils souhaitent comparer, et l'application récupère et affiche les données \n\n Le projet n'est pas encore mis en ligne",
    category: "Développement Web",
    images: [Lol_Caught_Cover, Lol_Caught_01, Lol_Caught_02, Lol_Caught_03, Lol_Caught_04],
    technologies: ["React"],
    links: [{name: "Riot Developper Portal", url:"https://developer.riotgames.com/"}],
  },
  {
    id: 6,
    title: "React : Test App",
    description: "Premier projet sur React",
    fullDescription: "J'ai suivi le tutoriel de Net Ninja et je suis allé plus loin par moi-même. Le Projet est publié sur GitHub Pages",
    category: "Développement Web",
    images: [reactApp_Cover],
    technologies: ["React"],
    links: [{name: "React App", url:"https://gearscreen.github.io/ReactApp/"}, {name: "GitHub", url: "https://github.com/GearScreen/ReactApp"}],
  },
  {
    id: 7,
    title: "RiskHunt",
    description: "Application pour créer et gérer des scénarios de formation à la sécurité",
    fullDescription: "Projet réalisé dans le cadre d'une alternance en 3ème année. \n\n Le Frontend du projet a été fait avec Unity et est connecté à une base de données hébergée sur O2switch",
    category: "Développement Web",
    images: [riskHunt_Cover, riskHunt_01, riskHunt_02, riskHunt_03, riskHunt_04],
    technologies: ["Php", "PhpMyAdmin", "Unity", "C#"],
    links: [{name: "Page du Projet", url:"https://gearscreen.github.io/CoopFactory/CoopFactoryFront/"},
      {name: "GitHub", url: "https://github.com/GearScreen/CoopFactory"}, {name: "Render.com", url:"https://render.com/"}],
  },
  {
    id: 8,
    title: "Java : Siege Notes",
    description: "Application pour éditer des fichiers .txt",
    fullDescription: "Développé avec Java Swing, je voulais utiliser une application de prise de notes beaucoup plus efficace que le simple bloc-notes de Windows. C'est dans ce contexte que j'ai découvert Obsidian qui m'aide beaucoup à progresser \n\n C'est un projet que je souhaite revisiter plus tard",
    category: "Application Bureau",
    images: [siegeNotes_Cover],
    technologies: ["Java", "Java Swing"],
    links: [{name: "Github", url:"https://github.com/GearScreen/SiegeNotes"}],
  },
  {
    id: 9,
    title: "Ancien Portfolio",
    description: "Mon Ancien Portfolio",
    fullDescription: "Il contient des projets plus secondaires que je n'ai pas inclus dans ce nouveau portfolio et des présentations plus techniques",
    category: "Développement Web",
    images: [oldPortfolio_Cover],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    links: [{name: "Portfolio", url:"https://gearscreen.github.io/Portfolio_WEB/"}],
  },
  {
    id: 10,
    title: "Dashing Exploration",
    description: "Jeu Mobile Platformer 2D",
    fullDescription: "Dashing Exploration est un jeu en 2D sideview composé d'un hub et de dix niveaux avec chacun un objectif dans un monde infiniment grand former de carrés. \n Le joueur doit explorer ce monde en combinant ses capacités de déplacements et en interagissant avec son environnement pour compléter les objectifs",
    category: "Game Dev",
    images: [dashingExploration_Cover, dashingExploration_01, dashingExploration_02, dashingExploration_03, dashingExploration_04],
    technologies: ["Unity", "C#", "Android"],
    links: [{name: "GitHub", url:"https://github.com/GearScreen/DashingExploration"}],
  },
  {
    id: 11,
    title: "Toybox Warfare",
    description: "Projet de fin de 1ère année : Tower Defense",
    fullDescription: "Projet réalisé en groupe pluridisciplinaire sur Unity en C#. J'ai programmé le system de tourelles, implémenté les assets des artistes et apris à utilisé l'héritage",
    category: "Game Dev",
    images: [toyboxWarfare_Cover, toyboxWarfare_01, toyboxWarfare_02, toyboxWarfare_03, toyboxWarfare_04],
    technologies: ["Unity", "C#"],
    links: [{name: "Itch.io", url:"https://pte-project.itch.io/toybox-warfare"}],
  },
  {
    id: 12,
    title: "Projet Tron",
    description: "Projet Étudiant en Équipe de dev",
    fullDescription: "Réalisé à 3 dev, nous avons produit tous les modèles 3D lors de ce projet sur le thème de Tron",
    category: "Game Dev",
    images: [projectTron_Cover, projectTron_01, projectTron_02, projectTron_03],
    technologies: ["Unity", "C#"],
    links: [{name: "GitHub", url:"https://github.com/GearScreen/DashingExploration"}],
  },
  {
    id: 13,
    title: "Game of Life",
    description: "Le jeu de la vie sur Unity en C#",
    fullDescription: "Le jeu de la vie sur Unity en C#",
    category: "Game Dev",
    images: [gameOfLife_Cover, gameOfLife_01, gameOfLife_02, gameOfLife_03, gameOfLife_04],
    technologies: ["Unity", "C#"],
    links: [{name: "Jeu de la Vie Wiki", url:"https://fr.wikipedia.org/wiki/Jeu_de_la_vie"}],
  },
  {
    id: 14,
    title: "Home Lab",
    description: "Début de mon Home Lab personnel",
    fullDescription: "J'ai utilisé un PC portable récupérer que j'ai reconditionné avec Linux Ubuntu \n\n j'ai utilisé VirtualBox pour faire tourner OpenMediaVault dans une VM et Navidrome (music server) connecté au dossier de musique partagé de OpenMediaVault",
    category: "Autres",
    images: [homeLab_Cover, homeLab_01],
    technologies: ["Linux", "Ubuntu", "Dockeer", "VirtualBox"],
    links: [{name: "Jeu de la Vie Wiki", url:"https://fr.wikipedia.org/wiki/Jeu_de_la_vie"}],
  },
];

const categories = ["Tous", "Développement Web", "Application Bureau", "Game Dev", "Autres"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Développement Web");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <section id="projects" className="py-20">
        <div className="container px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Mes Projets</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Découvrez mes derniers projets en Web Development et Game Developpement
          </p>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.images[0]}
                category={project.category}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <Contact />

      <ProjectLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        project={selectedProject}
      />

      <footer className="py-8 border-t border-border">
        <div className="container px-4 text-center text-muted-foreground">
          <p>© 2025 Portfolio</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
