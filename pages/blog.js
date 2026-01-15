import React, { useState } from 'react'
import Image from 'next/image'
import mimg from '@public/assets/logo.png'

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const articulosInvestigacion = [
        {
            titulo: "Cómo preparar un delicioso café",
            categoria: 'Investigación',
            fecha: "2023-05-03",
            contenido: "En este artículo te enseñaremos paso a paso cómo preparar un café perfecto para disfrutar en casa o en la oficina. Desde la elección del grano hasta la temperatura adecuada del agua, cada detalle cuenta para una experiencia sensorial única.",
            resumen: 'Aprende los secretos del café perfecto en casa.',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'v1'
        },
        {
            titulo: "Los mejores ejercicios para mantenerse en forma",
            fecha: "2023-04-28",
            categoria: 'Investigación',
            contenido: "¿Quieres estar en forma pero no sabes por dónde empezar? En este artículo te presentamos los mejores ejercicios para mantenerse saludable y en forma, adaptados para diferentes niveles de condición física.",
            resumen: 'Guía práctica para una vida activa y saludable.',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'v2'
        },
        {
            titulo: "Consejos para viajar con poco presupuesto",
            fecha: "2023-04-20",
            categoria: 'Investigación',
            contenido: "¿Quieres viajar pero tienes un presupuesto limitado? En este artículo te damos algunos consejos para ahorrar dinero durante tus viajes, desde el alojamiento hasta la alimentación local.",
            resumen: 'Explora el mundo sin gastar una fortuna.',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'v3'
        }
    ];

    const articulosOpinion = [
        {
            titulo: "La importancia del cuidado de la piel",
            fecha: "2023-04-15",
            categoria: 'Opinión',
            contenido: "¿Quieres tener una piel radiante y saludable? En este artículo te explicamos por qué es importante cuidar tu piel y te damos algunos consejos para lograrlo según tu tipo de piel.",
            resumen: 'Consejos esenciales para una piel sana.',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'v4'
        },
        {
            titulo: "Mejores prácticas para el trabajo remoto",
            fecha: "2023-04-10",
            categoria: 'Opinión',
            contenido: "El trabajo remoto ha llegado para quedarse. Aquí compartimos nuestras mejores prácticas para mantener la productividad y el equilibrio entre vida laboral y personal.",
            resumen: 'Maximiza tu productividad desde casa.',
            imagen: mimg,
            youtube: 'lmu1AxXA2Xc',
            myId: 'v5'
        }
    ]

    return (
        <div className="bg-bg-base dark:bg-[#121212] py-20 transition-colors duration-300 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold dark:text-[#e0e0e0] mb-4">Nuestro Blog</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">Investigación, opinión y cultura.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Columna Investigación */}
                    <div className="space-y-12">
                        <h2 className="text-2xl font-bold border-b-2 border-accent pb-2 inline-block mb-8 dark:text-[#e0e0e0]">Investigación</h2>
                        {articulosInvestigacion.map((post) => (
                            <button
                                key={post.myId}
                                onClick={() => setSelectedPost(post)}
                                className="group flex flex-col items-start text-left w-full hover:bg-gray-50 dark:hover:bg-[#1e1e1e] p-6 rounded-base transition-all duration-300 border-r-2 border-transparent hover:border-accent"
                            >
                                <div className="flex items-center gap-4 text-xs font-bold text-accent uppercase tracking-widest mb-4">
                                    <span>{post.categoria}</span>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-gray-500">{post.fecha}</span>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 w-full">
                                    <div className="w-full md:w-40 h-40 relative flex-shrink-0">
                                        <Image src={post.imagen} fill alt={post.titulo} className="object-cover rounded-base" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors dark:text-[#e0e0e0]">{post.titulo}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{post.resumen}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Columna Opinión */}
                    <div className="space-y-12 md:mt-12">
                        <h2 className="text-2xl font-bold border-b-2 border-accent pb-2 inline-block mb-8 dark:text-[#e0e0e0]">Opinión</h2>
                        {articulosOpinion.map((post) => (
                            <button
                                key={post.myId}
                                onClick={() => setSelectedPost(post)}
                                className="group flex flex-col items-start text-left w-full hover:bg-gray-50 dark:hover:bg-[#1e1e1e] p-6 rounded-base transition-all duration-300 border-l-2 border-transparent hover:border-accent"
                            >
                                <div className="flex items-center gap-4 text-xs font-bold text-accent uppercase tracking-widest mb-4">
                                    <span>{post.categoria}</span>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-gray-500">{post.fecha}</span>
                                </div>
                                <div className="flex flex-col md:flex-row-reverse gap-6 w-full">
                                    <div className="w-full md:w-40 h-40 relative flex-shrink-0">
                                        <Image src={post.imagen} fill alt={post.titulo} className="object-cover rounded-base" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors dark:text-[#e0e0e0] md:text-right">{post.titulo}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2 md:text-right">{post.resumen}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal de Artículo */}
            {selectedPost && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity">
                    <div className="bg-bg-base dark:bg-[#1e1e1e] w-full max-w-5xl h-[90vh] rounded-base shadow-2xl overflow-hidden flex flex-col">
                        <div className="flex justify-between items-center p-6 border-b dark:border-[#3a3a3a]">
                            <h2 className="text-2xl font-bold dark:text-[#e0e0e0]">{selectedPost.titulo}</h2>
                            <button onClick={() => setSelectedPost(null)} className="text-gray-500 hover:text-text-base dark:hover:text-[#e0e0e0]">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <div className="flex-grow overflow-y-auto p-8">
                            <div className="max-w-4xl mx-auto">
                                <div className="aspect-video w-full mb-10 rounded-base overflow-hidden shadow-lg bg-black">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${selectedPost.youtube}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="flex items-center gap-4 text-sm font-bold text-accent uppercase tracking-widest mb-8">
                                    <span>{selectedPost.categoria}</span>
                                    <span className="text-gray-300">|</span>
                                    <span>{selectedPost.fecha}</span>
                                </div>
                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                    <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">{selectedPost.contenido}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-t dark:border-[#3a3a3a] text-right">
                            <button onClick={() => setSelectedPost(null)} className="bg-accent text-white px-8 py-2 rounded-base font-bold hover:opacity-90 transition-opacity">
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blog;
