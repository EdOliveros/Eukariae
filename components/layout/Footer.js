import React from 'react'
import Link from 'next/link'
import { ROUTES } from '@constants/routes'

/**
 * @typedef {{ label: string, href: string }} FooterLink
 * @typedef {{ title: string, links: FooterLink[] }} FooterGroup
 */

/** @type {FooterGroup[]} */
const FOOTER_GROUPS = [
  {
    title: 'Explorar',
    links: [
      { label: 'Inicio', href: ROUTES.HOME },
      { label: 'Productos', href: ROUTES.PRODUCTS },
      { label: 'Blog', href: ROUTES.BLOG },
      { label: 'Nosotros', href: ROUTES.ABOUT },
    ],
  },
  {
    title: 'Ayuda',
    links: [
      { label: 'Contacto', href: ROUTES.CONTACT },
      { label: 'Productos', href: ROUTES.PRODUCTS },
      { label: 'Blog', href: ROUTES.BLOG },
    ],
  },
  {
    title: 'Eukariae',
    links: [
      { label: 'Sobre Nosotros', href: ROUTES.ABOUT },
      { label: 'Nuestra Misión', href: `${ROUTES.ABOUT}#mission` },
      { label: 'Valores', href: `${ROUTES.ABOUT}#values` },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Blog', href: ROUTES.BLOG },
      { label: 'Colecciones', href: ROUTES.PRODUCTS },
      { label: 'Contacto', href: ROUTES.CONTACT },
    ],
  },
]

const Footer = () => {
  return (
    <footer className="mt-auto bg-bg-base dark:bg-bg-base-dark text-text-base dark:text-text-base-dark transition-colors duration-300">
      <div className="bg-secondary dark:bg-secondary-dark py-14">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-md">
              <p className="text-xs font-bold tracking-[0.35em] text-accent uppercase mb-4">
                Estudio Eukariae
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
                Arte, biología y conservación en un solo lugar.
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Descubre productos e historias inspiradas en la biodiversidad colombiana. Cada pieza
                fortalece una conexión más profunda con la naturaleza.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full lg:max-w-3xl">
              {FOOTER_GROUPS.map((group) => (
                <div key={group.title}>
                  <p className="text-sm font-bold tracking-widest uppercase mb-4">{group.title}</p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="transition-colors hover:text-accent"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span>© {new Date().getFullYear()} Eukariae. Todos los derechos reservados.</span>
            <div className="flex items-center gap-6">
              <Link href={ROUTES.ABOUT} className="hover:text-accent transition-colors">Nosotros</Link>
              <Link href={ROUTES.CONTACT} className="hover:text-accent transition-colors">Contacto</Link>
              <Link href={ROUTES.PRODUCTS} className="hover:text-accent transition-colors">Productos</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
