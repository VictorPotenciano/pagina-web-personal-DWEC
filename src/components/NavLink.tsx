import Link from "next/link";
import { usePathname } from "next/navigation";
import { rutas } from "@/data/rutasData";

type NavKey = keyof typeof rutas;

const NavLink = ({
  ruta,
  estiloActivo,
  estiloBase,
  closeAction = () => {},
}: {
  ruta: NavKey;
  estiloActivo: string;
  estiloBase: string;
  closeAction?: () => void;
}) => {
  // Obtiene la ruta actual para aplicar estilos condicionalmente
  const pathname = usePathname();
  return (
    <Link
      href={rutas[ruta].path}
      onClick={closeAction}
      className={`${estiloBase} ${
        pathname === rutas[ruta].path ? estiloActivo : ""
      }`}
    >
      {rutas[ruta].name}
    </Link>
  );
};

export default NavLink;
