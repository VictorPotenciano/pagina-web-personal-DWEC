import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "../../../typing";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div>
      {/* Tarjeta principal que muestra la información del proyecto */}
      <Card key={project.id} className="flex flex-col">
        {/* Encabezado de la tarjeta que contiene la imagen del proyecto */}
        <CardHeader>
          <div className="relative w-full h-48">
            <Image
              src={project.imageSrc}
              alt={`Imagen de ${project.title}`}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
        </CardHeader>

        {/* Contenido principal de la tarjeta con el título y la descripción */}
        <CardContent className="flex-grow">
          <CardTitle className="text-xl font-bold mb-2">
            {project.title}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>

        {/* Pie de la tarjeta con el botón de enlace al proyecto */}
        <CardFooter>
          <Link href={project.link} passHref>
            <Button className="w-full">Ver Proyecto</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
