import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import SafeImage from '@ui/SafeImage';
import { UPLOADS_BASE_URL } from '@config/api';
import { resolveImageUrl } from 'lib/media';

const CollectionCard = ({ collection }) => {
    return (
        <Link href={`/products/${collection._id}`} className="group block h-full">
            <div className="flex flex-col h-full bg-white dark:bg-card-bg-dark rounded-base shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-transparent hover:border-accent/20">
                <div className="relative h-72 overflow-hidden">
                    <SafeImage
                        src={resolveImageUrl(collection.image, UPLOADS_BASE_URL)}
                        alt={collection.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-6">
                        <span className="px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-full">
                            Colección
                        </span>
                    </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 dark:text-text-base-dark group-hover:text-accent transition-colors duration-300">
                        {collection.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">
                        {collection.description}
                    </p>
                    <div className="mt-auto flex items-center text-accent font-bold group-hover:translate-x-2 transition-transform duration-300">
                        Explorar Colección
                        <IconArrowRight className="w-5 h-5 ml-2" stroke={1.5} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CollectionCard;
