"use client";

import ProjectCard from "./ProjectCard";
import { Project } from "../../../typing";

// Definición del tipo de propiedades que se esperan recibir en el componente
type Props = {
  projects: Project[];
};

const ProjectList = ({ projects }: Props) => {
  return (
    // Contenedor principal 
    <div className="mx-auto px-4 py-8 min-h-[calc(100vh-4rem)] bg-gray-50">
      
      {/* Título de la sección */}
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Proyectos Realizados
      </h1>
      
      {/* Grid para organizar las tarjetas en una o más columnas según el tamaño de pantalla */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-50 m-10">
        
        {/* Mapeo de cada proyecto recibido en las propiedades y renderización de una tarjeta para cada uno */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
