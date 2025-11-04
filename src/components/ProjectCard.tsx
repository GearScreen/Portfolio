import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  onClick: () => void;
}

const ProjectCard = ({ title, description, image, category, onClick }: ProjectCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer overflow-hidden border-0 transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: 'var(--gradient-card)',
        boxShadow: 'var(--shadow-card)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>
      
      <div className="p-6">
        <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
          {category}
        </div>
        <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
