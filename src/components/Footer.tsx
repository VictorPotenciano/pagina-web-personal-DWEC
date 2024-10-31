"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";
import NavLink from "./NavLink";
import { estilosNavegacion, rutas } from "@/data/rutasData";

export default function Footer() {
  return (
    // Contenedor principal
    <footer className="bg-black text-white ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Contenedor de navegación y redes sociales */}
        <div className="xl:flex xl:justify-between">
          {/* Sección de navegación con enlaces a diferentes páginas */}
          <div className="space-y-8 xl:col-span-1">
            <nav className="-mx-5 -my-2">
              <div className="flex flex-col items-start space-y-4">
                <div className="flex gap-3 px-5 py-2">
                  {/* Enlaces de navegación */}
                  {Object.keys(rutas).map((key: string) => (
                    <NavLink
                      ruta={key}
                      estiloActivo={estilosNavegacion.footer.estiloActivo}
                      estiloBase={estilosNavegacion.footer.estilo}
                      closeAction={close}
                    />
                  ))}
                </div>
              </div>
            </nav>
          </div>

          {/* Sección de redes sociales */}
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Sígueme en redes sociales
            </h3>
            <div className="mt-4 flex space-x-6">
              {/* Enlace a GitHub */}
              <a
                href="https://github.com/VictorPotenciano"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">GitHub</span>
                <SiGithub className="h-6 w-6" aria-hidden="true" />
              </a>

              {/* Enlace a LinkedIn */}
              <a
                href="https://www.linkedin.com/in/victor-potenciano-9a29392a4/"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">LinkedIn</span>
                <SiLinkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Sección de derechos de autor en el pie de página */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 Victor Potenciano. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
