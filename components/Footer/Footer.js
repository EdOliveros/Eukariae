import React from 'react'
import logo from '@public/assets/logo.png'
import rayita from '@public/assets/rayita.png'
import Image from 'next/image'
import facebook from '@public/assets/facebook-round-icon.png'
import instagram from '@public/assets/instagram-round-icon.png'
import pinterest from '@public/assets/pinterest-round-icon.png'
import visa from '@public/assets/visa-icon.png'
import master from '@public/assets/master-card-icon.png'
import paypal from '@public/assets/paypal-color-icon.png'
import pagoSeguro from '@public/assets/online-secure-payment-icon.png'
import pagoOnline from '@public/assets/vip-label-icon.png'

const Footer = () => {
    const socialIcons = [
        { src: facebook, alt: 'Facebook' },
        { src: instagram, alt: 'Instagram', href: 'https://www.instagram.com/eukariae/' },
        { src: pinterest, alt: 'Pinterest' },
        { src: rayita, alt: 'Logo' },
    ];

    const paymentIcons = [
        { src: visa, alt: 'Visa' },
        { src: master, alt: 'Mastercard' },
        { src: paypal, alt: 'Paypal' },
        { src: pagoSeguro, alt: 'Secure Payment' },
        { src: pagoOnline, alt: 'Online Payment' },
    ];

    const infoSections = [
        'HELP & INFORMATION',
        'ABOUT EUKARIAE',
        'OUR MISSION',
        'CONSERVATION',
    ];

    return (
        <footer className="mt-auto bg-bg-base dark:bg-[#121212] text-text-base dark:text-[#e0e0e0] transition-colors duration-300">
            <div className="container mx-auto px-6 py-12">
                {/* Icons Section */}
                <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
                    {[...socialIcons, ...paymentIcons].map((icon, index) => (
                        <div key={index} className="w-10 transition-transform duration-300 hover:-translate-y-1 cursor-pointer">
                            {icon.href ? (
                                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={icon.src}
                                        alt={icon.alt}
                                        className="rounded-full w-full h-auto"
                                    />
                                </a>
                            ) : (
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    className="rounded-full w-full h-auto"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Info Grid Section */}
            <div className="bg-secondary dark:bg-[#3a3a3a] py-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {infoSections.map((section) => (
                            <div key={section}>
                                <p className="font-bold text-sm tracking-widest">{section}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { Footer }