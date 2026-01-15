import React, { useState } from 'react';
import Image from 'next/image';
import { UPLOADS_BASE_URL } from '../../config/api.js';

const Productos = ({ items = [], loading, error }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    if (loading) return <div className="text-center py-20 text-2xl font-bold dark:text-white">Cargando productos...</div>;
    if (error) return <div className="text-center py-20 text-2xl font-bold text-red-500">Error: {error}</div>;

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {items.map((item) => (
                    <div key={item._id} className="group flex flex-col h-full bg-white dark:bg-card-bg rounded-base shadow-sm hover:shadow-base transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-64 overflow-hidden rounded-t-base">
                            <Image
                                width={500}
                                height={500}
                                src={`${UPLOADS_BASE_URL}/${item.image}`}
                                className="object-fit-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                alt={item.name}
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h5 className="text-xl font-bold mb-2 dark:text-[#e0e0e0]">{item.name}</h5>
                            <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">{item.description}</p>
                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-accent font-bold">${item.price}</span>
                                <button
                                    onClick={() => setSelectedProduct(item)}
                                    className="py-2 px-4 bg-text-base dark:bg-[#e0e0e0] text-bg-base dark:text-[#121212] font-semibold rounded-base hover:opacity-90 transition-opacity"
                                >
                                    Ver detalle
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tailwind Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity">
                    <div className="bg-bg-base dark:bg-[#1e1e1e] w-full max-w-4xl rounded-base shadow-2xl overflow-hidden animate-fade-in">
                        <div className="flex justify-between items-center p-6 border-b dark:border-[#3a3a3a]">
                            <h5 className="text-2xl font-bold dark:text-[#e0e0e0]">{selectedProduct.name}</h5>
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="text-gray-500 hover:text-text-base dark:hover:text-[#e0e0e0]"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/2">
                                    <Image
                                        width={600}
                                        height={600}
                                        src={`${UPLOADS_BASE_URL}/${selectedProduct.image}`}
                                        alt={selectedProduct.name}
                                        className="rounded-base shadow-md object-cover w-full aspect-square"
                                    />
                                </div>
                                <div className="md:w-1/2 flex flex-col">
                                    <h3 className="text-3xl font-bold mb-4 dark:text-[#e0e0e0]">{selectedProduct.name}</h3>
                                    <p className="text-2xl font-semibold text-accent mb-6">${selectedProduct.price}</p>
                                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{selectedProduct.description}</p>
                                    <hr className="mb-6 dark:border-[#3a3a3a]" />
                                    <h5 className="text-lg font-bold mb-4 dark:text-[#e0e0e0]">Detalles</h5>
                                    <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400">
                                        <li>Disponibilidad: {selectedProduct.countInStock > 0 ? 'En inventario' : 'Agotado'}</li>
                                        <li>Materiales sostenibles</li>
                                        <li>Diseño inspirado en la naturaleza</li>
                                    </ul>
                                    <button
                                        disabled={selectedProduct.countInStock === 0}
                                        className={`mt-8 w-full py-3 bg-accent text-white font-bold rounded-base hover:opacity-90 transition-opacity ${selectedProduct.countInStock === 0 ? 'grayscale cursor-not-allowed opacity-50' : ''}`}
                                    >
                                        {selectedProduct.countInStock > 0 ? 'Agregar al carrito' : 'Agotado'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { Productos };