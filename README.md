# Proyecto de Portafolio en Next.js

Este proyecto es una aplicación de portafolio construida con **Next.js** y **Tailwind CSS**. Contiene múltiples componentes reutilizables que facilitan la navegación y organización de contenido, como proyectos realizados, información personal y opciones de contacto.

## Tecnologías Principales

- **Next.js**: Marco de desarrollo de React para la creación de aplicaciones web rápidas y optimizadas.
- **Tailwind CSS**: Biblioteca de utilidades CSS para estilización rápida y adaptable.
- **Headless UI**: Componentes UI accesibles para interfaces interactivas y optimizadas.
- **React Icons**: Conjunto de íconos para redes sociales y navegación.
- **Formspree**: Servicio para manejar formularios de contacto sin necesidad de un backend, permitiendo enviar correos electrónicos fácilmente.

## Componentes

La estructura de componentes está organizada para facilitar la reutilización y una experiencia de usuario intuitiva. A continuación, se describen los principales componentes y su funcionalidad.

### 1. `Nav`

El componente `Nav` es la barra de navegación principal de la aplicación, que proporciona enlaces de acceso rápido a las secciones clave de la página: "Inicio", "Sobre Mí", "Proyectos" y "Contacto". Este componente tiene un menú desplegable para dispositivos móviles, accesible a través de un botón de hamburguesa.

- **Rutas activas**: Utiliza el hook `usePathname` para detectar la página actual y aplicar estilos condicionales al enlace correspondiente.
- **Menú responsive**: Usa `Popover` y `PopoverPanel` de Headless UI para implementar el menú desplegable en pantallas pequeñas.
- **Imagen del logo**: Incluye el logo de la aplicación con `next/image`.
- **Links**: Cada enlace resalta la página activa mediante subrayado y cambio de color.

````tsx
import Nav from "@/components/Nav";

<Nav />


## 2. Footer

El componente **Footer** es el pie de página, donde se encuentran enlaces a las redes sociales del usuario y enlaces de navegación adicionales. Además, muestra un mensaje de derechos de autor en la parte inferior.

- **Enlaces sociales**: Incluye íconos para GitHub y LinkedIn utilizando `react-icons`, con enlaces configurados a las redes del usuario.
- **Estilo Condicional**: Los enlaces de navegación resaltan la página activa para mejorar la usabilidad.
- **Mensaje de derechos**: Incluye un mensaje de copyright configurado para el año actual.

```tsx
import Footer from "@/components/Footer";

<Footer />

## 3. ProjectCard

**ProjectCard** es el componente para cada tarjeta de proyecto, diseñado para mostrar una vista previa visual, título, descripción breve y un botón que enlaza al proyecto completo.

- **Propiedades (`project`)**: Recibe un objeto `project` con los atributos `title`, `description`, `imageSrc`, y `link`.
- **Estructura en tres secciones**:
  - **CardHeader**: contiene la imagen de la tarjeta.
  - **CardContent**: muestra el título y la descripción.
  - **CardFooter**: incluye un botón de acceso al proyecto.

```tsx
import ProjectCard from "@/components/ProjectCard";

<ProjectCard project={projectData} />


## 4. ProjectList

**ProjectList** es un contenedor de tarjetas de proyectos. Recibe un array de proyectos y utiliza **ProjectCard** para mapear y renderizar cada uno.

- **Propiedades (`projects`)**: Recibe un array de objetos `Project`.
- **Diseño adaptable**: Usa Tailwind CSS para organizar las tarjetas en una cuadrícula responsive que se ajusta a diferentes tamaños de pantalla.

```tsx
import ProjectList from "@/components/ProjectList";

<ProjectList projects={projectsData} />


## 5. Contact

**Contact** es el componente que permite a los usuarios enviar mensajes directamente a través de un formulario de contacto. Utiliza **Formspree** para manejar el envío de formularios de forma sencilla y efectiva.

- **Uso de Formspree**: Este servicio permite recibir correos electrónicos desde el formulario sin necesidad de un backend. Simplemente se configura el formulario con la URL de Formspree y se manejan los envíos.
- **Validación**: Se pueden agregar validaciones para asegurar que los campos requeridos se completen adecuadamente antes del envío.

```tsx
import Contact from "@/components/Contact";

<Contact />


## Conclusión

Este portafolio es un ejemplo de cómo utilizar **Next.js** y **Tailwind CSS** para crear aplicaciones web modernas y responsivas. Se enfoca en la reutilización de componentes y en una experiencia de usuario óptima, aprovechando tecnologías como **Formspree** para facilitar la comunicación.

````
