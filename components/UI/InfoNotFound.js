import React from 'react';
import { useRouter } from 'next/router';

const InfoNotFound = ({
    title = "Información no encontrada",
    message = "Lo sentimos, pero la información que buscas no está disponible en este momento.",
    buttonText = "Volver al inicio",
    redirectTo = "/"
}) => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center py-20 px-6 text-center animate-fade-in">
            <div className="mb-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-full inline-block">
                <svg className="w-16 h-16 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 dark:text-[#e0e0e0]">{title}</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
                {message}
            </p>
            <button
                onClick={() => router.push(redirectTo)}
                className="py-3 px-8 bg-accent text-white font-bold rounded-base hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            >
                {buttonText}
            </button>
        </div>
    );
};

export default InfoNotFound;
