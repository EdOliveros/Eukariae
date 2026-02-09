import React, { useState, useEffect } from 'react'
import imageGaleri1 from '@public/assets/Wall-papers-4K_Danta.jpg'
import imageGaleri2 from '@public/assets/Wall-papers-4K_Epitome.jpg'
import imageGaleri3 from '@public/assets/Wall-papers-4K_Jaguar.jpg'
import imageGaleri4 from '@public/assets/Wall-papers-4K_Rana.jpg'
import SafeImage from '@ui/SafeImage'
import useScrollReveal from '@hooks/useScrollReveal'
import Link from 'next/link'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { ROUTES } from '@constants/routes'

const slides = [
  {
    image: imageGaleri1,
    title: 'Descubre la Belleza Natural',
    description: 'Explora nuestra colección inspirada en la biodiversidad.',
    cta: 'Ver Colección',
    href: ROUTES.PRODUCTS
  },
  {
    image: imageGaleri2,
    title: 'Arte y Conservación',
    description: 'Cada pieza cuenta una historia de nuestro entorno.',
    cta: 'Leer Más',
    href: ROUTES.BLOG
  },
  {
    image: imageGaleri3,
    title: 'El Espíritu del Jaguar',
    description: 'Fuerza y elegancia en cada detalle.',
  },
  {
    image: imageGaleri4,
    title: 'Protege la Vida',
    description: 'Únete a nuestra misión de conservación.',
  },
];

const GallerySection = () => {
  const [heroRef, isHeroVisible] = useScrollReveal();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Auto-rotate hero slides
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div ref={heroRef} className={`relative w-full h-[100vh] sm:h-[70vh] lg:h-[100vh] overflow-hidden bg-bg-base dark:bg-bg-base-dark transition-opacity duration-1000 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 z-20"></div>
          <SafeImage
            src={slide.image}
            fill
            className="object-cover object-center w-full h-full"
            alt={slide.title}
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center text-white px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg transform transition-transform duration-700 delay-300 translate-y-0 opacity-100">
              {slide.title}
            </h2>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md">
              {slide.description}
            </p>
            {slide.cta && (
              <Link href={slide.href} className="px-8 py-3 bg-text-base text-bg-base font-bold rounded-base hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95">
                {slide.cta}
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-2 text-white bg-black bg-opacity-20 rounded-full hover:bg-opacity-40 transition-all"
        aria-label="Previous slide"
      >
        <IconChevronLeft className="w-8 h-8" stroke={1.5} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-2 text-white bg-black bg-opacity-20 rounded-full hover:bg-opacity-40 transition-all"
        aria-label="Next slide"
      >
        <IconChevronRight className="w-8 h-8" stroke={1.5} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  )
}

export { GallerySection };
