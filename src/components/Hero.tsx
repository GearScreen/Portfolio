import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/DashingExploration/DE_01.gif";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.95), hsl(var(--primary) / 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Yoan Lechevalier
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Diplomé E-artsup Game & Creative Coding
        </p>
        <button
          onClick={scrollToProjects}
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Voir Mes Projets
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;
