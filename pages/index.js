import { About } from '@components/About/About';
import { Entradas } from '@components/Entradas/Entradas';
import { Galeria } from '@components/Galeria';
import { Productos } from '@components/Productos/Productos';
import React from 'react';
import { useApi } from '../hooks/useApi.js';

const Home = () => {
    const { data: blogData, loading: blogLoading, error: blogError } = useApi('/blog');
    const { data: productsData, loading: productsLoading, error: productsError } = useApi('/products');

    const blogPosts = blogData || [];
    const products = productsData || [];

    return (
        <div>
            <Galeria />
            <section id="about">
                <About />
            </section>
            <section id="entradas">
                <Entradas items={blogPosts} loading={blogLoading} error={blogError} />
            </section>
            <section id="productos">
                <Productos items={products} loading={productsLoading} error={productsError} />
            </section>
        </div>
    );
};

export default Home;