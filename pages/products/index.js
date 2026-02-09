import React from 'react'
import Image from 'next/image'
import img from '@public/assets/Wall-papers-4K_Jaguar.jpg'
import { ProductsGrid } from '@products/ProductsGrid'
import CollectionCard from '@products/CollectionCard'
import { API_BASE_URL } from '@config/api'

/** @param {{ products?: any[], categories?: any[], productsError?: string | null }} props */
const ProductsPage = ({ products = [], categories = [], productsError = null }) => {
  const showCollections = categories && categories.length > 0;

  return (
    <div className="bg-bg-base dark:bg-bg-base-dark transition-colors duration-300">
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={img}
          alt="Hero Products"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white dark:bg-card-bg-dark px-10 py-6 rounded-base shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.2em] text-text-base dark:text-text-base-dark uppercase">
              {showCollections ? "Colecciones" : "Compra Ahora"}
            </h1>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-text-base-dark mb-6">
            {showCollections ? "Nuestras Colecciones" : "Nuestra Colección"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {showCollections
              ? "Explora nuestras diferentes líneas de productos inspiradas en la riqueza natural de Colombia."
              : "Piezas únicas inspiradas en la biodiversidad colombiana, diseñadas para los amantes de la naturaleza y el arte."
            }
          </p>
        </div>

        {showCollections ? (
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {categories.map((collection) => (
                <CollectionCard key={collection._id} collection={collection} />
              ))}
            </div>
            {/* Show all products below collections */}
            <div className="mt-20">
              <ProductsGrid items={products} loading={false} error={productsError} />
            </div>
          </div>
        ) : (
          <ProductsGrid items={products} loading={false} error={productsError} />
        )}
      </div>
    </div>
  )
}

export default ProductsPage

export async function getStaticProps() {
  try {
    // ISR: refresh products data every 5 minutes
    const [productsRes, categoriesRes] = await Promise.all([
      fetch(`${API_BASE_URL}/products`),
      fetch(`${API_BASE_URL}/categories`),
    ]);

    const [productsData, categoriesData] = await Promise.all([
      productsRes.ok ? productsRes.json() : [],
      categoriesRes.ok ? categoriesRes.json() : [],
    ]);

    return {
      props: {
        products: Array.isArray(productsData) ? productsData : [],
        categories: Array.isArray(categoriesData) ? categoriesData : [],
        productsError: productsRes.ok ? null : `Error: ${productsRes.statusText}`,
      },
      revalidate: 300,
    };
  } catch (err) {
    return {
      props: {
        products: [],
        categories: [],
        productsError: 'Error al cargar productos',
      },
      revalidate: 300,
    };
  }
}
