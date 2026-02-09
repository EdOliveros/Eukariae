import React from 'react';
import SafeImage from '@ui/SafeImage';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';
import useScrollReveal from '@hooks/useScrollReveal';
import { UPLOADS_BASE_URL } from '@config/api';


const PostsSection = ({ items = [], loading, error }) => {
    const [ref, isVisible] = useScrollReveal();

    if (loading) return <div className="text-center py-20 text-2xl font-bold dark:text-white">Cargando blog...</div>;
    if (error) return <div className="text-center py-20 text-2xl font-bold text-red-500">Error: {error}</div>;

    // Limit the homepage preview to the latest 3 posts
    const blogPosts = items.slice(0, 3);

    /** @type {(post: { summary?: string, content?: string }) => string} */
    const getSummary = (post) => {
        if (post.summary) return post.summary;
        if (post.content) return `${post.content.substring(0, 120)}...`;
        return 'Explora este articulo en nuestro blog.';
    };

    return (
        <div className="bg-bg-base dark:bg-bg-base-dark py-20 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" ref={ref}>
                    <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-text-base dark:bg-text-base-dark text-bg-base dark:text-bg-base-dark rounded-full mb-4">Blog</span>
                    <h3 className={`text-4xl md:text-5xl font-extrabold mb-6 dark:text-text-base-dark transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Últimas Entradas
                    </h3>
                    <p className={`text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Explora nuestros artículos más recientes sobre biología, arte y cultura con una mirada profunda a nuestro entorno.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <div key={post._id || post.id} className="group flex flex-col h-full bg-white dark:bg-card-bg-dark rounded-base shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-800">
                            <div className="relative h-64 overflow-hidden">
                                <SafeImage
                                    src={`${UPLOADS_BASE_URL}/${post.image}`}
                                    alt={post.title}
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                                    <Link href={ROUTES.BLOG} className="px-6 py-2 bg-white text-text-base rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        Leer Artículo
                                    </Link>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                                    <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Reciente'}</span>
                                    <span>•</span>
                                    <span>{post.author || 'Eukariae'}</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-4 dark:text-text-base-dark group-hover:text-accent transition-colors">{post.title}</h4>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">{getSummary(post)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link href={ROUTES.BLOG} className="inline-block px-10 py-3 border-2 border-text-base dark:border-text-base-dark text-text-base dark:text-text-base-dark font-bold rounded-base hover:bg-text-base hover:text-bg-base dark:hover:bg-text-base-dark dark:hover:text-bg-base-dark transition-all duration-300 uppercase tracking-widest text-sm">
                        Ver Todo el Blog
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { PostsSection }
