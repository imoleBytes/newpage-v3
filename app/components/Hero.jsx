import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
      
        // <!-- Hero Section -->
        <section id="home" className="relative py-20 md:py-32">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('/img/CompressBooks.jpg')`}}></div>
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 text-center md:text-left text-white mb-10 md:mb-0">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                          Unlock Your Academic Potential
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-100">
                          Expert tutors providing personalized learning experiences for students of all ages, both in-home and online.
                      </p>
                      <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                          <a href="#contact" className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition">
                              Book a Free Session
                          </a>
                          <a href="#how-it-works" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition">
                              Learn More
                          </a>
                      </div>
                  </div>
                  <div className="md:w-1/2">
                        <img src="/img/compressClass.jpg" alt="Student learning with tutor" className="rounded-lg shadow-2xl w-full h-auto relative z-10"/>
                  </div>
              </div>
          </div>
      </section>
  
    );
}

export default Hero;
