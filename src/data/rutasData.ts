export const rutas: { [index: string]: any } = {
  home: {
    path: "/",
    name: "Inicio",
  },
  about: {
    path: "/about",
    name: "Sobre Mi",
  },
  projects: {
    path: "/projects",
    name: "Proyectos",
  },
  contact: {
    path: "/contact",
    name: "Contacto",
  },
};

export const estilosNavegacion = {
  nav: {
    estilo: "hover:text-gray-500",
    estiloActivo: "font-bold underline underline-offset-4",
  },
  ham: {
    estilo:
      "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2",
    estiloActivo: "font-bold",
  },
  footer: {
    estilo: "text-base text-gray-300 hover:text-white",
    estiloActivo: "font-bold text-gray-500 underline underline-offset-4",
  },
};
