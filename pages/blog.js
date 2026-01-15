import React, { useState } from 'react'
import Image from 'next/image'
import { useApi } from '../hooks/useApi.js'
import { UPLOADS_BASE_URL } from '../config/api.js'

const Blog = () => {
    const { data: posts, loading, error } = useApi('/blog');
    const [selectedPost, setSelectedPost] = useState(null);

    const articulosInvestigacion = Array.isArray(posts) ? posts.filter(p => !p.category || p.category.toLowerCase() === 'investigación') : [];
    const articulosOpinion = Array.isArray(posts) ? posts.filter(p => p.category && p.category.toLowerCase() === 'opinión') : [];

    if (loading) return <div className="text-center py-20 text-2xl font-bold dark:text-white">Cargando blog...</div>;
    if (error) return <div className="text-center py-20 text-2xl font-bold text-red-500">Error: {error}</div>;


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
                                    <span>{post.category || 'Blog'}</span>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</span>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 w-full">
                                    <div className="w-full md:w-40 h-40 relative flex-shrink-0">
                                        <Image src={`${UPLOADS_BASE_URL}/${post.image}`} fill alt={post.title} className="object-cover rounded-base" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors dark:text-[#e0e0e0]">{post.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{post.content.substring(0, 100)}...</p>
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
                                    <span>{post.category || 'Blog'}</span>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</span>
                                </div>
                                <div className="flex flex-col md:flex-row-reverse gap-6 w-full">
                                    <div className="w-full md:w-40 h-40 relative flex-shrink-0">
                                        <Image src={`${UPLOADS_BASE_URL}/${post.image}`} fill alt={post.title} className="object-cover rounded-base" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors dark:text-[#e0e0e0] md:text-right">{post.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2 md:text-right">{post.content.substring(0, 100)}...</p>
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
                            <h2 className="text-2xl font-bold dark:text-[#e0e0e0]">{selectedPost.title}</h2>
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
                                    <span>{selectedPost.category || 'Blog'}</span>
                                    <span className="text-gray-300">|</span>
                                    <span>{new Date(selectedPost.createdAt).toLocaleDateString()}</span>
                                </div>
                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                    <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">{selectedPost.content}</p>
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
