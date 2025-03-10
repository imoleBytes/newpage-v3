import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        
    // <!-- Hero Section -->
    <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')"}}></div>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    About Newpage Edu Consult
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-100">
                    Transforming education through personalized learning experiences since 2010
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href="#our-story" className="bg-white text-primary px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                        Our Story
                    </Link>
                    <Link href="/#contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Hero;
