"use client";

import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Component() {
  return (
    // Contenedor principal 
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Contenedor centrado con ancho máximo */}
      <div className="max-w-7xl mx-auto p-14">
        {/* Estructura de flexbox para ajustar imagen y contenido */}
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:gap-28">
          {/* Imagen de perfil */}
          <div className="w-48 h-48 mb-8 lg:w-1/3 lg:h-auto lg:mb-0">
            <div className="relative w-full h-full lg:pt-[100%]">
              <Image
                src="/images/fotoperfil.jpg"
                alt="Foto Perfil de Victor Potenciano"
                fill
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Contenido descriptivo a la derecha de la imagen en pantallas grandes */}
          <div className="lg:w-2/3 lg:pl-12">
            <div className="text-center lg:text-left">
              {/* Título principal con nombre */}
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Hola, Soy </span>
                <span className="block text-primary mt-2">
                  Victor Potenciano
                </span>
              </h1>

              {/* Descripción breve del perfil */}
              <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:mt-5 md:text-xl">
                Descubre todo lo que puedo hacer por ti. Estoy listo para
                ayudarte a alcanzar tus metas y superar tus expectativas.
              </p>

              {/* Botones para contactar y descargar CV */}
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start">
                {/* Botón de contacto */}
                <div className="rounded-md shadow">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
                  >
                    Contáctame!
                  </Link>
                </div>

                {/* Botón para descargar el CV */}
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="/images/Curriculum-Victor.pdf"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar CV!
                  </Link>
                </div>
              </div>

              {/* Enlaces a redes sociales (LinkedIn y GitHub) */}
              <div className="mt-8 flex justify-center lg:justify-start lg:ml-36 space-x-6">
                <a
                  href="https://www.linkedin.com/in/victor-potenciano-9a29392a4/"
                  className="hover:text-primary/90 transition-colors"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin size={40} />
                </a>
                <a
                  href="https://github.com/VictorPotenciano"
                  className="hover:text-primary/90 transition-colors"
                  aria-label="GitHub"
                >
                  <SiGithub size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
