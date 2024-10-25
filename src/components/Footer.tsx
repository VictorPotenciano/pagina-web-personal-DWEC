"use client";

import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { usePathname } from "next/navigation";

export default function Footer() {
  // Obtiene la ruta actual para aplicar estilos condicionalmente
  const pathname = usePathname();

  return (
    // Contenedor principal 
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Contenedor de navegación y redes sociales */}
        <div className="xl:flex xl:justify-between">
          {/* Sección de navegación con enlaces a diferentes páginas */}
          <div className="space-y-8 xl:col-span-1">
            <nav className="-mx-5 -my-2">
              <div className="flex flex-wrap justify-center">
                {/* Enlace a Inicio, con estilo dinámico si está en la ruta actual */}
                <div className="px-5 py-2">
                  <Link
                    href="/"
                    className={`text-base text-gray-300 hover:text-white ${
                      pathname === "/"
                        ? "font-bold text-gray-500 underline underline-offset-4"
                        : ""
                    }`}
                  >
                    Inicio
                  </Link>
                </div>

                {/* Enlace a Sobre mí */}
                <div className="px-5 py-2">
                  <Link
                    href="/about"
                    className={`text-base text-gray-300 hover:text-white ${
                      pathname === "/about"
                        ? "font-bold text-gray-500 underline underline-offset-4"
                        : ""
                    }`}
                  >
                    Sobre mí
                  </Link>
                </div>

                {/* Enlace a Proyecto */}
                <div className="px-5 py-2">
                  <Link
                    href="/projects"
                    className={`text-base text-gray-300 hover:text-white ${
                      pathname === "/projects"
                        ? "font-bold text-gray-500 underline underline-offset-4"
                        : ""
                    }`}
                  >
                    Proyecto
                  </Link>
                </div>

                {/* Enlace a Contacto */}
                <div className="px-5 py-2">
                  <Link
                    href="/contact"
                    className={`text-base text-gray-300 hover:text-white ${
                      pathname === "/contact"
                        ? "font-bold text-gray-500 underline underline-offset-4"
                        : ""
                    }`}
                  >
                    Contacto
                  </Link>
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
