import React from 'react'
import Image from 'next/image'
import img from '@public/assets/Wall-papers-4K_Jaguar.jpg'
import { Productos } from '@components/Productos/Productos.js'
import CollectionCard from '@components/Productos/CollectionCard.js'
import { products as pro, collections } from '@components/Database/products.js'

const productos = () => {
  const showCollections = collections && collections.length > 1;

  return (
    <div className="bg-bg-base dark:bg-[#121212] transition-colors duration-300">
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={img}
          alt="Hero Products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white dark:bg-[#1e1e1e] px-10 py-6 rounded-base shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.2em] text-text-base dark:text-[#e0e0e0] uppercase">
              {showCollections ? "Colecciones" : "Compra Ahora"}
            </h1>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-[#e0e0e0] mb-6">
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
              {collections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </div>
        ) : (
          <Productos cantidad={pro.length} />
        )}
      </div>
    </div>
  )
}

export default productos