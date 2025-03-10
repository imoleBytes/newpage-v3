import React from 'react';
import Link from 'next/link';
import HamBurgerIcon from './Hamburger';



const Header = () => {
   
    return (
        // <!-- Header/Navigation -->
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-primary font-bold text-2xl">|Newpage<span className='text-red-800'>Consult.</span></span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
                        <Link href="/about" className="text-gray-700 hover:text-primary font-medium">About</Link>
                        <Link href="/#services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
                        <Link href="/#subjects" className="text-gray-700 hover:text-primary font-medium">Subjects</Link>
                        <Link href="/#how-it-works" className="text-gray-700 hover:text-primary font-medium">How It Works</Link>
                        <Link href="/#testimonials" className="text-gray-700 hover:text-primary font-medium">Testimonials</Link>
                        <Link href="/#team" className="text-gray-700 hover:text-primary font-medium">Our Team</Link>
                        <Link href="/#contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition">Get Started</Link>
                    </nav>
                    <div className="flex items-center md:hidden">
                        <HamBurgerIcon/>
                    </div>
                </div>
            </div>
            {/* // <!-- Mobile menu --> */}
            <div className="hidden md:hidden bg-white border-t border-gray-200" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Home</Link>
                    <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">About</Link>
                    <Link href="/#services" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Services</Link>
                    <Link href="/#subjects" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Subjects</Link>
                    <Link href="/#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">How It Works</Link>
                    <Link href="/#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Testimonials</Link>
                    <Link href="/#team" className="block px-3 py-2 text-gray-700 hover:text-primary font-medium">Our Team</Link>
                    <Link href="/#contact" className="block px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition">Get Started</Link>
                </div>
            </div>
        </header>    
    );
}

export default Header;
