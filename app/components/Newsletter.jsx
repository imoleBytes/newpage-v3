import React from 'react';

const Newsletter = () => {
    return (
        // <!-- Newsletter Section -->
        <section className="py-16 bg-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
                    <p className="text-xl text-white/80 mb-8">
                        Stay updated with educational tips, special offers, and news from NewpageConsult.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                        <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-md focus:outline-none"/>
                        <button type="submit" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    
    );
}

export default Newsletter;
