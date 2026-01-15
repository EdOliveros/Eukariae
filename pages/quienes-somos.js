import React from 'react'
import Image from 'next/image'
import img from '../public/assets/01.jpg'

const QuienesSomos = () => {
  return (
    <div className="bg-bg-base dark:bg-[#121212] min-h-screen transition-colors duration-300">
      {/* Header Section */}
      <div className="bg-secondary dark:bg-[#1e1e1e] py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black tracking-widest text-text-base dark:text-[#e0e0e0] uppercase">
            Acerca de Nosotros
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 italic mb-8">
              "Combinamos la precisión biológica con la visión arquitectónica para crear un lenguaje único que celebra la vida."
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
              Nuestra plataforma nació de la necesidad de visibilizar la riqueza natural de Colombia a través del arte digital. Creemos que el conocimiento es el primer paso hacia la conservación, y utilizamos cada ilustración para contar una historia de supervivencia y belleza.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent opacity-20 group-hover:opacity-40 rounded-base blur-xl transition-opacity duration-500"></div>
              <figure className="relative h-[400px] overflow-hidden rounded-base shadow-2xl bg-white">
                <Image
                  src={img}
                  fill
                  alt="About Us"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-secondary dark:bg-[#1e1e1e] border-y dark:border-[#3a3a3a] py-20 mb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="p-8 bg-white dark:bg-[#121212] rounded-base shadow-sm hover:shadow-base transition-shadow">
              <h3 className="text-2xl font-bold text-accent mb-4 tracking-tighter">1. DIVULGACIÓN</h3>
              <p className="text-gray-500 dark:text-gray-400">Llevamos la ciencia más allá de la academia, transformando datos en arte visual accesible para todos.</p>
            </div>
            <div className="p-8 bg-white dark:bg-[#121212] rounded-base shadow-sm hover:shadow-base transition-shadow">
              <h3 className="text-2xl font-bold text-accent mb-4 tracking-tighter">2. COMPROMISO</h3>
              <p className="text-gray-500 dark:text-gray-400">Trabajamos estrechamente con proyectos de conservación para asegurar que nuestra visión sea fiel a la realidad biológica.</p>
            </div>
            <div className="p-8 bg-white dark:bg-[#121212] rounded-base shadow-sm hover:shadow-base transition-shadow">
              <h3 className="text-2xl font-bold text-accent mb-4 tracking-tighter">3. EMPATÍA</h3>
              <p className="text-gray-500 dark:text-gray-400">Buscamos conectar emocionalmente al espectador con las especies, fomentando un vínculo de cuidado.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuienesSomos