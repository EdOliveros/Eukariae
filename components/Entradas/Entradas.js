import React from 'react'
import Image from 'next/image'
import por from '@public/assets/capturas.png'
import useScrollReveal from '../../hooks/useScrollReveal'
import Link from 'next/link'

const blogPosts = [
    {
        id: 1,
        title: "De como un pobre entierra a la mamá",
        author: "JuanDiego",
        date: "23 de febrero de 2023",
        summary: "Una reflexión profunda sobre las tradiciones y las dificultades económicas en el duelo...",
        image: por
    },
    {
        id: 2,
        title: "Biodiversidad en peligro",
        author: "Sara Orjuela",
        date: "10 de marzo de 2023",
        summary: "Descubre las especies más amenazadas de nuestro ecosistema y cómo podemos ayudar...",
        image: por
    },
    {
        id: 3,
        title: "El arte de ilustrar naturaleza",
        author: "Juan Gómez",
        date: "05 de abril de 2023",
        summary: "El proceso creativo detrás de cada ilustración digital y la observación de campo...",
        image: por
    }
];

const Entradas = () => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div className="bg-bg-base dark:bg-[#121212] py-20 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" ref={ref}>
                    <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-text-base dark:bg-[#e0e0e0] text-bg-base dark:text-[#121212] rounded-full mb-4">Blog</span>
                    <h3 className={`text-4xl md:text-5xl font-extrabold mb-6 dark:text-[#e0e0e0] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Últimas Entradas
                    </h3>
                    <p className={`text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Explora nuestros artículos más recientes sobre biología, arte y cultura con una mirada profunda a nuestro entorno.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group flex flex-col h-full bg-white dark:bg-card-bg rounded-base shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-800">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                                    <Link href="/blog" className="px-6 py-2 bg-white text-text-base rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        Leer Artículo
                                    </Link>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.author}</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-4 dark:text-[#e0e0e0] group-hover:text-accent transition-colors">{post.title}</h4>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">{post.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link href="/blog" className="inline-block px-10 py-3 border-2 border-text-base dark:border-[#e0e0e0] text-text-base dark:text-[#e0e0e0] font-bold rounded-base hover:bg-text-base hover:text-bg-base dark:hover:bg-[#e0e0e0] dark:hover:text-[#121212] transition-all duration-300 uppercase tracking-widest text-sm">
                        Ver Todo el Blog
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { Entradas }