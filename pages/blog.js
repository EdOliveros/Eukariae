import React, { useState } from 'react'
import Image from 'next/image'
import Entrada from '../components/Entrada/Entrada.js'
import { useApi } from '../hooks/useApi.js'
import { UPLOADS_BASE_URL } from '../config/api.js'

const Blog = () => {
    const { data: posts, loading, error } = useApi('/blog');
    const [selectedPost, setSelectedPost] = useState(null);

    const articulosInvestigacion = Array.isArray(posts) ? posts.filter(p => !p.category || p.category.toLowerCase() === 'investigación') : [];

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
                    <div className="space-y-12">
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
                </div>
            </div>


            {selectedPost && (
                <Entrada
                    selectedPost={selectedPost}
                    setSelectedPost={setSelectedPost}
                />
            )}
        </div>
    );
};

export default Blog;
