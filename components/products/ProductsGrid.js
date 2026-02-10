import React, { useState } from 'react';
import { IconX } from '@tabler/icons-react';
import { UPLOADS_BASE_URL } from '@config/api';
import SafeImage from '@ui/SafeImage';
import InfoNotFound from '@ui/InfoNotFound';
import { ROUTES } from '@constants/routes';

const ProductsGrid = ({ items = [], loading, error }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    if (loading) return <div className="text-center py-20 text-2xl font-bold dark:text-white animate-pulse">Cargando productos...</div>;
    if (error) return <div className="text-center py-20 text-2xl font-bold text-red-500">Error: {error}</div>;

    if (!loading && items.length === 0) {
        return (
            <InfoNotFound
                title="No hay productos disponibles"
                message="Actualmente no tenemos productos en esta sección. Por favor, vuelve más tarde o explora otras categorías."
                buttonText="Explorar colecciones"
                redirectTo={ROUTES.PRODUCTS}
            />
        );
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {items.map((item) => (
                    <div key={item._id} className="group flex flex-col h-full bg-white dark:bg-card-bg-dark rounded-base shadow-sm hover:shadow-base transition-all duration-300 transform hover:-translate-y-2">
                        <div className="relative h-64 overflow-hidden rounded-t-base">
                            <SafeImage
                                width={500}
                                height={500}
                                src={`${UPLOADS_BASE_URL}/${item.image}`}
                                className="object-fit-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                alt={item.name}
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h5 className="text-xl font-bold mb-2 dark:text-text-base-dark">{item.name}</h5>
                            <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">{item.description}</p>
                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-accent font-bold">${item.price}</span>
                                <button
                                    onClick={() => setSelectedProduct(item)}
                                    className="py-2 px-4 bg-text-base dark:bg-text-base-dark text-bg-base dark:text-bg-base-dark font-semibold rounded-base hover:opacity-90 transition-opacity"
                                >
                                    Ver detalle
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Product details modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black bg-opacity-65 backdrop-blur-md transition-opacity">
                    <div className="bg-bg-base dark:bg-card-bg-dark w-full max-w-4xl max-h-[90vh] rounded-base shadow-2xl overflow-hidden flex flex-col animate-fade-in border border-secondary/10 dark:border-secondary-dark/20">
                        {/* Header - Fixed */}
                        <div className="flex justify-between items-center p-5 md:p-6 border-b border-secondary/10 dark:border-secondary-dark/50 bg-bg-base/80 dark:bg-card-bg-dark/80 backdrop-blur-sm sticky top-0 z-10">
                            <h5 className="text-xl md:text-2xl font-bold dark:text-text-base-dark truncate pr-4">{selectedProduct.name}</h5>
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="p-2 -mr-2 text-gray-500 hover:text-text-base dark:hover:text-text-base-dark transition-colors"
                            >
                                <IconX className="w-6 h-6" stroke={2} />
                            </button>
                        </div>

                        {/* Content - Scrollable */}
                        <div className="overflow-y-auto p-6 md:p-10">
                            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                                {/* Image Container */}
                                <div className="w-full md:w-1/2 flex-shrink-0">
                                    <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-base shadow-lg bg-gray-100 dark:bg-gray-800">
                                        <SafeImage
                                            width={600}
                                            height={600}
                                            src={`${UPLOADS_BASE_URL}/${selectedProduct.image}`}
                                            alt={selectedProduct.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>

                                {/* Information Container */}
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <div className="mb-6">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-full">
                                                Producto Premium
                                            </span>
                                            {selectedProduct.countInStock > 0 && (
                                                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-wider rounded-full">
                                                    En Inventario
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold mb-2 dark:text-text-base-dark">{selectedProduct.name}</h3>
                                        <p className="text-2xl font-bold text-accent">${selectedProduct.price}</p>
                                    </div>

                                    <div className="mb-8">
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {selectedProduct.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-secondary/10 dark:border-secondary-dark/50">
                                        <h5 className="text-sm font-bold uppercase tracking-widest mb-4 dark:text-text-base-dark/70">Especificaciones</h5>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                            <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                                Sostenibilidad garantizada
                                            </li>
                                            <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                                Edici&oacute;n limitada
                                            </li>
                                            <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                                Calidad premium
                                            </li>
                                            <li className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                                Env&iacute;o ecol&oacute;gico
                                            </li>
                                        </ul>

                                        <button
                                            disabled={selectedProduct.countInStock === 0}
                                            className={`w-full py-4 bg-accent text-white font-bold rounded-base shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 ${selectedProduct.countInStock === 0 ? 'grayscale cursor-not-allowed opacity-50' : 'active:scale-95'}`}
                                        >
                                            {selectedProduct.countInStock > 0 ? 'Agregar al carrito' : 'Agotado'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { ProductsGrid };
