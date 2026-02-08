import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SafeImage = ({ src, alt, width, height, fill, className, ...props }) => {
    const [error, setError] = useState(false);
    const [isValidSrc, setIsValidSrc] = useState(true);

    useEffect(() => {
        // Validate src: check if it's just the base URL or empty
        // Next.js StaticImport objects are valid, only check endsWith if it's a string
        if (!src) {
            setIsValidSrc(false);
        } else if (typeof src === 'string') {
            if (src.endsWith('/uploads/') || src.endsWith('/uploads')) {
                setIsValidSrc(false);
            } else {
                setIsValidSrc(true);
                setError(false);
            }
        } else {
            // Assume it's a StaticImport object (local image)
            setIsValidSrc(true);
            setError(false);
        }
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
                <svg className="w-12 h-12 mx-auto mb-2 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
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
