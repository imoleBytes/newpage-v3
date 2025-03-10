import React from 'react';

const WhyChoose = () => {
    return (
        // <!-- Why Choose Us Section -->
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Newpage Edu Consult</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        What sets us apart from other educational services
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start p-6 bg-gray-800 rounded-lg">
                        <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                <i className="fas fa-user-graduate text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Expert Tutors</h3>
                            <p className="text-gray-300">
                                Our tutors are not only subject matter experts but also trained educators who understand effective teaching methodologies and can adapt to different learning styles.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-6 bg-gray-800 rounded-lg">
                        <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                <i className="fas fa-chalkboard-teacher text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Personalized Learning Plans</h3>
                            <p className="text-gray-300">
                                We develop customized learning strategies based on comprehensive assessments of each student's strengths, weaknesses, and learning preferences.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-6 bg-gray-800 rounded-lg">
                        <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                <i className="fas fa-chart-line text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                            <p className="text-gray-300">
                                Our track record speaks for itself, with 98% of our students showing significant improvement in academic performance and confidence.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-6 bg-gray-800 rounded-lg">
                        <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                <i className="fas fa-laptop-house text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Flexible Options</h3>
                            <p className="text-gray-300">
                                We offer in-home, online, and group tutoring options to accommodate different schedules, preferences, and learning environments.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-6 bg-gray-800 rounded-lg">
                        <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                <i className="fas fa-comments text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Regular Communication</h3>
                            <p className="text-gray-300">
                                We maintain open lines of communication with parents and students, providing regular progress reports and updates on learning goals.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start p-6 bg-gray-800 rounded-lg">
                        <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                <i className="fas fa-book-reader text-white"></i>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Comprehensive Subject Coverage</h3>
                            <p className="text-gray-300">
                                From mathematics and sciences to languages and test preparation, we offer expert tutoring across a wide range of subjects and grade levels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    );
}

export default WhyChoose;
