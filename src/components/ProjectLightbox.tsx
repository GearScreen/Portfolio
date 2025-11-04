import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProjectLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription: string;
    category: string;
    images: string[];
    technologies: string[];
    links: {name: string; url: string}[];
  } | null;
}

const ProjectLightbox = ({ isOpen, onClose, project }: ProjectLightboxProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{project.title}</DialogTitle>
          <Badge variant="secondary" className="w-fit">
            {project.category}
          </Badge>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Gallery */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            {project.images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-primary w-8"
                          : "bg-primary/30"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

            {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Liens</h3>
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <Badge key={link.name} variant="outline">
                  <a href={link.url} target="_blank" style={{textDecoration: "underline"}}>{link.name}</a>
                </Badge>
              ))}
            </div>
          </div>
          {/* Project Description */}
          <div style={{ whiteSpace: 'pre-line'}}>
            <h3 className="text-lg font-semibold mb-2">Présentation du Projet</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Utilisées</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectLightbox;
