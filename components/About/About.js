import React from 'react'
import ranita from '@public/assets/ranita.png'
import Image from 'next/image'
import useScrollReveal from '../../hooks/useScrollReveal'

const About = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div ref={ref} className={`bg-secondary dark:bg-[#3a3a3a] py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative group perspective-1000">
              <div className="shadow-2xl rounded-base overflow-hidden border-4 border-white dark:border-[#1e1e1e] transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <Image
                  src={ranita}
                  alt="Ilustración Ranita"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-2 md:order-1 text-text-base dark:text-[#e0e0e0]">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-accent text-white rounded-full mb-4">Nuestra Historia</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Quiénes Somos?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
              Eukariae es una plataforma de divulgación científica donde el arte y la naturaleza se encuentran.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Creada por la bióloga Sara Orjuela y el arquitecto Juan Gómez, mostramos por medio de ilustraciones digitales las especies endémicas y más vulnerables de Colombia. Nuestro propósito es acercar la ciencia a la comunidad, fomentando el interés y el aprendizaje sobre la conservación de nuestra biodiversidad.
            </p>

            <div className="flex gap-12 pt-4">
              <div className="text-center">
                <h3 className="text-4xl font-extrabold text-accent">100+</h3>
                <p className="text-sm font-medium tracking-wide gray-500 uppercase">Especies</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-extrabold text-accent">20+</h3>
                <p className="text-sm font-medium tracking-wide gray-500 uppercase">Artículos</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export { About }