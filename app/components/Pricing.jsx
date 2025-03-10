import React from 'react';

const Pricing = () => {
    return (
        
    // <!-- Pricing Section -->
    <section className="py-16 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Affordable Tutoring Plans</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Choose the tutoring package that fits your needs and budget.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                    <div className="p-8 bg-primary/5 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-center">Basic</h3>
                        <div className="text-center my-6">
                            <span className="text-5xl font-bold">$45</span>
                            <span className="text-gray-600">/hour</span>
                        </div>
                        <p className="text-center text-gray-600">Perfect for occasional help with specific topics</p>
                    </div>
                    <div className="p-8">
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>One-on-one tutoring</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Qualified subject experts</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Flexible scheduling</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Online or in-home options</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <i className="fas fa-times mr-3"></i>
                                <span>Progress reports</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <i className="fas fa-times mr-3"></i>
                                <span>Homework help between sessions</span>
                            </li>
                        </ul>
                        <div className="mt-8 text-center">
                            <a href="#contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition w-full">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 transform scale-105 z-10">
                    <div className="p-8 bg-primary text-white border-b border-primary/20 relative">
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            POPULAR
                        </div>
                        <h3 className="text-2xl font-bold text-center">Standard</h3>
                        <div className="text-center my-6">
                            <span className="text-5xl font-bold">$40</span>
                            <span className="text-white/80">/hour</span>
                        </div>
                        <p className="text-center text-white/80">Ideal for regular academic support</p>
                    </div>
                    <div className="p-8">
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>One-on-one tutoring</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Qualified subject experts</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Flexible scheduling</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Online or in-home options</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Monthly progress reports</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <i className="fas fa-times mr-3"></i>
                                <span>Homework help between sessions</span>
                            </li>
                        </ul>
                        <div className="mt-8 text-center">
                            <a href="#contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition w-full">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                    <div className="p-8 bg-primary/5 border-b border-gray-200">
                        <h3 className="text-2xl font-bold text-center">Premium</h3>
                        <div className="text-center my-6">
                            <span className="text-5xl font-bold">$35</span>
                            <span className="text-gray-600">/hour</span>
                        </div>
                        <p className="text-center text-gray-600">Comprehensive support for academic excellence</p>
                    </div>
                    <div className="p-8">
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>One-on-one tutoring</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Qualified subject experts</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Flexible scheduling</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Online or in-home options</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Weekly progress reports</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check text-secondary mr-3"></i>
                                <span>Unlimited homework help</span>
                            </li>
                        </ul>
                        <div className="mt-8 text-center">
                            <a href="#contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition w-full">
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Pricing;
