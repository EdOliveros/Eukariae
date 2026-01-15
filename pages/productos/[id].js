import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Productos } from '@components/Productos/Productos.js'
import { products, collections } from '@components/Database/products.js'

const CollectionPage = () => {
    const router = useRouter()
    const { id } = router.query

    const collection = (collections || []).find((c) => c.id === id)

    if (!collection) {
        if (typeof window !== 'undefined' && !id) return null; // Wait for router
        return (
            <div className="min-h-screen flex items-center justify-center bg-bg-base dark:bg-[#121212]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold dark:text-white mb-4">Colección no encontrada</h1>
                    <button
                        onClick={() => router.push('/productos')}
                        className="text-accent hover:underline font-semibold"
                    >
                        Volver a productos
                    </button>
                </div>
            </div>
        )
    }

    const collectionProducts = products.filter((p) => collection.productIds.includes(p.id))

    return (
        <div className="bg-bg-base dark:bg-[#121212] transition-colors duration-300">
            <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
                <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 flex items-center justify-center">
                    <div className="text-center px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest text-white uppercase mb-4 drop-shadow-lg">
                            {collection.title}
                        </h1>
                        <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="py-24">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold dark:text-[#e0e0e0] mb-6">{collection.title}</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
                        {collection.description}
                    </p>
                </div>
                <Productos items={collectionProducts} />
            </div>
        </div>
    )
}

export default CollectionPage
