import { AboutSection } from '@sections/AboutSection';
import { PostsSection } from '@sections/PostsSection';
import { GallerySection } from '@sections/GallerySection';
import { ProductsGrid } from '@products/ProductsGrid';
import React from 'react';
import { API_BASE_URL } from '@config/api';

/** @param {{ blogPosts?: any[], products?: any[], blogError?: string | null, productsError?: string | null }} props */
const HomePage = ({ blogPosts = [], products = [], blogError = null, productsError = null }) => {
    return (
        <div>
            <GallerySection />
            <section id="about">
                <AboutSection />
            </section>
            <section id="entradas">
                <PostsSection items={blogPosts} loading={false} error={blogError} />
            </section>
            <section id="productos">
                <ProductsGrid items={products} loading={false} error={productsError} />
            </section>
        </div>
    );
};

export default HomePage;

export async function getStaticProps() {
    try {
        // ISR: refresh homepage data every 5 minutes
        const [blogRes, productsRes] = await Promise.all([
            fetch(`${API_BASE_URL}/blog`),
            fetch(`${API_BASE_URL}/products`),
        ]);

        const [blogData, productsData] = await Promise.all([
            blogRes.ok ? blogRes.json() : [],
            productsRes.ok ? productsRes.json() : [],
        ]);

        return {
            props: {
                blogPosts: Array.isArray(blogData) ? blogData : [],
                products: Array.isArray(productsData) ? productsData : [],
                blogError: blogRes.ok ? null : `Error: ${blogRes.statusText}`,
                productsError: productsRes.ok ? null : `Error: ${productsRes.statusText}`,
            },
            revalidate: 300,
        };
    } catch (err) {
        return {
            props: {
                blogPosts: [],
                products: [],
                blogError: 'Error al cargar el blog',
                productsError: 'Error al cargar productos',
            },
            revalidate: 300,
        };
    }
}
