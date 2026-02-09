import React, { useState, useMemo } from 'react';
import { IconPhoto } from '@tabler/icons-react';
import Image from 'next/image';

const SafeImage = ({ src, alt, width, height, fill, className, ...props }) => {
    const [error, setError] = useState(false);
    const isValidSrc = useMemo(() => {
        if (!src) return false;
        if (typeof src === 'string') {
            const trimmed = src.trim();
            if (!trimmed) return false;
            if (trimmed.endsWith('/uploads/') || trimmed.endsWith('/uploads')) return false;
            if (trimmed.endsWith('/uploads/null') || trimmed.endsWith('/uploads/undefined')) return false;
            return true;
        }
        // StaticImport object
        return true;
    }, [src]);

    // Fallback: simple colored box with alt text or symbol
    const Placeholder = () => (
        <div
            className={`flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-400 rounded-base ${className}`}
            style={{
                width: fill ? '100%' : (width || '100%'),
                height: fill ? '100%' : (height || '100%'),
                aspectRatio: !width && !height && !fill ? '1/1' : 'auto'
            }}
        >
            <div className="text-center p-4">
                <IconPhoto className="w-12 h-12 mx-auto mb-2 opacity-20" stroke={1.5} />
                <span className="text-xs font-medium uppercase tracking-wider opacity-40">{alt || 'Sin imagen'}</span>
            </div>
        </div>
    );

    if (!isValidSrc || error) {
        return <Placeholder />;
    }

    return (
        <Image
            src={src}
            alt={alt || ''}
            width={width}
            height={height}
            fill={fill}
            className={className}
            onError={() => setError(true)}
            {...props}
        />
    );
};

export default SafeImage;
