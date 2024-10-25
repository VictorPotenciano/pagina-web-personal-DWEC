import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MdEmail } from "react-icons/md";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Contact() {
  return (
    <div className="flex items-start justify-center mb-24 bg-gray-50 pt-4">
      {/* Sección de encabezado con título */}
      <div className="container mx-auto px-4 py-1 max-w-2xl">
        <div className="text-center mb-6">
          <p className="text-center text-lg sm:text-xl">Sigamos en</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mt-2">
            Contacto
          </h1>
        </div>
        {/* Tarjeta que contiene el formulario de contacto */}
        <Card className="w-full">
           {/* Encabezado de la tarjeta con título e ícono */}
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <MdEmail className="mr-2 h-5 w-5" />
              Envíame un mensaje
            </CardTitle>
          </CardHeader>
        {/* Contenido de la tarjeta con el formulario de contacto */}
          <CardContent>
            <form
              className="space-y-4"
              action="https://formspree.io/f/xvgogyyl"
              method="POST"
            >
              {/* Campo de entrada para el nombre */}
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" required />
              </div>
              {/* Campo de entrada para el email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" required />
              </div>
              {/* Campo de entrada para el mensaje */}
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" required />
              </div>
              {/* Botones de enviar y borrar */}
              <div className="flex space-x-2 justify-center">
                <Button type="submit">Enviar</Button>
                <Button type="reset" variant="outline">
                  Borrar
                </Button>
              </div>
            </form>
            {/* Enlace a LinkedIn y Github debajo del formulario */}
            <div className="flex flex-col items-center mt-6 text-center text-2xl font-bold">
              <a
                href="https://www.linkedin.com/in/victor-potenciano-9a29392a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                <SiLinkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/VictorPotenciano"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                <SiGithub className="mr-2 h-5 w-5" />
                Github
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
