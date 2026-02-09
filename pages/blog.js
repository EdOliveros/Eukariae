import React, { useState } from 'react'
import Image from 'next/image'
import PostModal from '@blog/PostModal'
import { API_BASE_URL, UPLOADS_BASE_URL } from '@config/api'

/** @param {{ posts?: any[], error?: string | null }} props */
const Blog = ({ posts = [], error = null }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    const articulosInvestigacion = Array.isArray(posts) ? posts.filter(p => !p.category || p.category.toLowerCase() === 'investigación') : [];

    if (error) return <div className="text-center py-20 text-2xl font-bold text-red-500">Error: {error}</div>;


    return (
        <div className="bg-bg-base dark:bg-bg-base-dark py-20 transition-colors duration-300 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold dark:text-text-base-dark mb-4">Nuestro Blog</h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">Investigación, opinión y cultura.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        {articulosInvestigacion.map((post) => (
                            <button
                                key={post.myId}
                                onClick={() => setSelectedPost(post)}
                                className="group flex flex-col items-start text-left w-full hover:bg-gray-50 dark:hover:bg-card-bg-dark p-6 rounded-base transition-all duration-300 border-r-2 border-transparent hover:border-accent"
                            >
                                <div className="flex items-center gap-4 text-xs font-bold text-accent uppercase tracking-widest mb-4">
                                    <span>{post.category || 'Blog'}</span>
                                    <span className="text-gray-300">|</span>
                                    <span className="text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</span>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 w-full">
                                    <div className="w-full md:w-40 h-40 relative flex-shrink-0">
                                        <Image
                                            src={`${UPLOADS_BASE_URL}/${post.image}`}
                                            fill
                                            alt={post.title}
                                            className="object-cover rounded-base"
                                            sizes="(max-width: 768px) 100vw, 160px"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors dark:text-text-base-dark">{post.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{post.content.substring(0, 100)}...</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>


            {selectedPost && (
                <PostModal
                    selectedPost={selectedPost}
                    setSelectedPost={setSelectedPost}
                />
            )}
        </div>
    );
};

export default Blog;

export async function getStaticProps() {
    try {
        // ISR: refresh blog data every 5 minutes
        const [blogRes] = await Promise.all([
            fetch(`${API_BASE_URL}/blog`),
        ]);

        const [blogData] = await Promise.all([
            blogRes.ok ? blogRes.json() : [],
        ]);

        return {
            props: {
                posts: Array.isArray(blogData) ? blogData : [],
                error: blogRes.ok ? null : `Error: ${blogRes.statusText}`,
            },
            revalidate: 300,
        };
    } catch (err) {
        return {
            props: {
                posts: [],
                error: 'Error al cargar el blog',
            },
            revalidate: 300,
        };
    }
}
