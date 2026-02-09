import React from 'react'
import SafeImage from '@ui/SafeImage'
import InfoNotFound from '@ui/InfoNotFound'
import { ProductsGrid } from '@products/ProductsGrid'
import { API_BASE_URL, UPLOADS_BASE_URL } from '@config/api'
import { ROUTES } from '@constants/routes'

/** @param {{ collection?: any | null, products?: any[] }} props */
const CollectionPage = ({ collection, products = [] }) => {
    if (!collection) {
        return (
            <div className="min-h-screen bg-bg-base dark:bg-bg-base-dark flex items-center justify-center">
                <InfoNotFound
                    title="Colección no encontrada"
                    message="Lo sentimos, la colección que buscas no existe o ha sido movida."
                    buttonText="Volver a productos"
                    redirectTo={ROUTES.PRODUCTS}
                />
            </div>
        )
    }

    const collectionProducts = products.filter((p) => p.category === collection._id)

    return (
        <div className="bg-bg-base dark:bg-bg-base-dark transition-colors duration-300">
            <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
                <SafeImage
                    src={collection.image ? `${UPLOADS_BASE_URL}/${collection.image}` : null}
                    alt={collection.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 flex items-center justify-center">
                    <div className="text-center px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest text-white uppercase mb-4 drop-shadow-lg">
                            {collection.name}
                        </h1>
                        <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="py-24">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold dark:text-text-base-dark mb-6">{collection.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
                        {collection.description}
                    </p>
                </div>
                <ProductsGrid items={collectionProducts} />
            </div>
        </div>
    )
}

export default CollectionPage

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    try {
        const [categoriesRes, productsRes] = await Promise.all([
            fetch(`${API_BASE_URL}/categories`),
            fetch(`${API_BASE_URL}/products`),
        ]);

        const [categories, products] = await Promise.all([
            categoriesRes.ok ? categoriesRes.json() : [],
            productsRes.ok ? productsRes.json() : [],
        ]);

        const collection = (categories || []).find((c) => c._id === params.id) || null;

        return {
            props: {
                collection,
                products: Array.isArray(products) ? products : [],
            },
            revalidate: 300,
        };
    } catch (error) {
        return {
            props: {
                collection: null,
                products: [],
            },
            revalidate: 300,
        };
    }
}
