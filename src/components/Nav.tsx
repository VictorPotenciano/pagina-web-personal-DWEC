"use client";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { estilosNavegacion, rutas } from "@/data/rutasData";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    // Contenedor principal
    <Popover className="mx-auto flex items-center border-b-2 px-6 py-2 h-24">
      {({ close }) => (
        <>
          {/* Logo, con un enlace a la página principal */}
          <Link href="/">
            <Image
              src="/images/android-chrome-192x192.png"
              alt="logo"
              width={50}
              height={50}
              priority
              className="ml-10"
            />
          </Link>

          {/* Navegación principal para pantallas grandes */}
          <div className="grow">
            <div className="hidden sm:flex items-center justify-center gap-2 sm:gap-6 md:gap-8  text-xl">
              {Object.keys(rutas).map((key: string) => (
                <NavLink
                  ruta={key}
                  estiloActivo={estilosNavegacion.nav.estiloActivo}
                  estiloBase={estilosNavegacion.nav.estilo}
                />
              ))}
            </div>
          </div>

          {/* Botón del menú desplegable para pantallas pequeñas */}
          <div className="flex grow items-center justify-end sm:hidden">
            <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Abrir Menú</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>

          {/* Menú desplegable con transición para pantallas pequeñas */}
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-30"
            >
              {/* Contenido del menú móvil */}
              <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  {/* Logo y botón de cerrar menú */}
                  <div className="flex items-center justify-between">
                    <Link href="/" onClick={close}>
                      <Image
                        src="/images/android-chrome-192x192.png"
                        alt="logo"
                        width={50}
                        height={50}
                        priority
                      />
                    </Link>
                    <div className="-mr-2">
                      <PopoverButton className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Cerrar Menú</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </PopoverButton>
                    </div>
                  </div>

                  {/* Navegación del menú desplegable */}
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {Object.keys(rutas).map((key: string) => (
                        <NavLink
                          ruta={key}
                          estiloActivo={estilosNavegacion.ham.estiloActivo}
                          estiloBase={estilosNavegacion.ham.estilo}
                          closeAction={close}
                        />
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Nav;
