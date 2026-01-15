import React from 'react'
import Image from 'next/image'
import img from '../../public/assets/101.jpg'

const InfoContacto = () => {
    return (
        <div className="bg-bg-base dark:bg-[#121212] transition-colors duration-300">
            <div className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 bg-white dark:bg-[#1e1e1e] p-8 lg:p-12 rounded-base shadow-lg">
                    {/* Decorative Letter */}
                    <div className="hidden lg:flex items-center justify-center w-20 h-40 text-6xl font-black text-accent opacity-20 border-r dark:border-gray-700 pr-8">
                        E
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-6">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-text-base dark:text-[#e0e0e0] mb-2 tracking-tighter uppercase">
                                Conéctate con la Naturaleza
                            </h1>
                            <p className="text-sm font-bold text-accent tracking-[0.3em] mb-6">
                                --- DIVULGACIÓN CIENTÍFICA & ARTE ---
                            </p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                            Estamos aquí para responder tus dudas sobre nuestras piezas, expediciones o artículos. Cada mensaje es una oportunidad para aprender y compartir nuestro amor por la biodiversidad.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/3">
                        <div className="relative aspect-square overflow-hidden rounded-base shadow-2xl border-4 border-white dark:border-[#121212] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src={img}
                                fill
                                alt="Artesanía y Naturaleza"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Additional Description */}
                    <div className="hidden lg:block w-1/4 text-sm text-gray-500 dark:text-gray-500 italic leading-relaxed border-l dark:border-gray-700 pl-8">
                        "La ilustración no es solo una representación; es un acto de preservación y respeto por aquello que nos rodea."
                    </div>
                </div>
            </div>
        </div>
    )
}

export { InfoContacto }
