import React from 'react';

const Values = () => {
    return (
        // <!-- Core Values Section -->
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        These principles guide everything we do at Newpage Edu Consult
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-8 rounded-lg text-center transition-transform hover:scale-105">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <i className="fas fa-star text-primary text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Excellence</h3>
                        <p className="text-gray-700">
                            We strive for excellence in all aspects of our educational services, from the quality of our tutoring to the professionalism of our staff.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg text-center transition-transform hover:scale-105">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <i className="fas fa-users text-primary text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Personalization</h3>
                        <p className="text-gray-700">
                            We recognize that each student is unique, with individual learning styles, strengths, and challenges. Our approach is tailored to meet these specific needs.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg text-center transition-transform hover:scale-105">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <i className="fas fa-heart text-primary text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Compassion</h3>
                        <p className="text-gray-700">
                            We approach education with empathy and understanding, creating a supportive environment where students feel valued and encouraged.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg text-center transition-transform hover:scale-105">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <i className="fas fa-lightbulb text-primary text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Innovation</h3>
                        <p className="text-gray-700">
                            We continuously seek new and effective teaching methods, embracing technology and research-based strategies to enhance learning outcomes.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg text-center transition-transform hover:scale-105">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <i className="fas fa-balance-scale text-primary text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Integrity</h3>
                        <p className="text-gray-700">
                            We conduct our business with honesty, transparency, and ethical standards, building trust with students, parents, and the community.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg text-center transition-transform hover:scale-105">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <i className="fas fa-hands-helping text-primary text-2xl"></i>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Collaboration</h3>
                        <p className="text-gray-700">
                            We believe in the power of partnership between tutors, students, parents, and schools to create a supportive educational ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    
    );
}

export default Values;
