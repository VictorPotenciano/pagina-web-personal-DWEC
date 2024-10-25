import { HiAcademicCap } from "react-icons/hi";
import { FaCertificate } from "react-icons/fa";


export default function Component() {
  return (
    // Contenedor principal 
    <div className="relative pt-5 px-4 mb-24 pb-0.5 bg-gray-50 sm:px-6 lg:px-8">
      {/* Título de introducción, centrado y adaptable en tamaño */}
      <p className="text-center text-lg sm:text-xl">¿Quieres saber más</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mt-2">
        Sobre mí?
      </h1>
      {/* Sección de contenido principal */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-4xl">
          {/* Contenedor de tarjetas, con layout responsive */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 mt-8">
            {/* Tarjeta de "Cursos" */}
            <div className="p-6 flex flex-col flex-1 bg-white rounded-3xl border border-black text-center">
              {/* Ícono y título */}
              <HiAcademicCap className="h-8 w-8 mx-auto" />
              <h3 className="text-xl font-semibold mt-2">Cursos</h3>

              {/* Descripción y enlace */}
              <p className="mt-2">
                <a
                  href="https://www.freecodecamp.org/espanol/certification/VictorPotenciano/responsive-web-design"
                  className="underline underline-offset-4 hover:text-gray-500"
                >
                  Certificado Diseño Web Responsivo
                </a>
                <br />
                freeCodeCamp.org
              </p>
            </div>

            {/* Tarjeta de "Educación" */}
            <div className="p-6 flex flex-col flex-1 bg-white rounded-3xl border border-black text-center">
              {/* Ícono y título */}
              <FaCertificate className="h-8 w-8 mx-auto" />
              <h3 className="text-xl font-semibold mt-2">Educación</h3>

              {/* Descripción */}
              <p className="mt-2">
                Grado Superior <br />
                Desarrollo de Aplicaciones Multiplataforma
              </p>
            </div>
          </div>

          {/* Descripción adicional sobre el perfil del desarrollador */}
          <div className="text-container text-center m-10 sm:text-left">
            <p className="text-base sm:text-lg">
              Desarrollador Full Stack en busca de trabajo, con conocimientos en
              HTML, CSS y Javascript, creación de proyectos con Angular en
              FrontEnd y SpringBoot o Node.Js para BackEnd y manejo de base de
              datos como MongoDb o PostgreSQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
