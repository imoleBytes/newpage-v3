import React from 'react';

const Journey = () => {
    return (
        // <!-- Our Journey Timeline -->
        <section className="py-16 bg-pattern">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Key milestones in our growth and development
                    </p>
                </div>
                
                <div className="timeline-container">
                    <div className="timeline-item timeline-left">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">2010</h3>
                            <p className="text-gray-700">
                                Newpage Edu Consult was founded by Mr Yusuf Abiodun with a team of 5 tutors, offering in-home tutoring services in mathematics and science.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-item timeline-right">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">2012</h3>
                            <p className="text-gray-700">
                                Expanded our services to include English, foreign languages, and social studies, growing our team to 25 tutors.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-item timeline-left">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">2015</h3>
                            <p className="text-gray-700">
                                Launched our online tutoring platform, allowing us to reach students nationwide and internationally.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-item timeline-right">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">2017</h3>
                            <p className="text-gray-700">
                                Introduced specialized test preparation programs for SAT, ACT, WAEC, JAMB, and other standardized tests.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-item timeline-left">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">2019</h3>
                            <p className="text-gray-700">
                                Celebrated helping our 1,000th student achieve academic success and opened our first physical learning center.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-item timeline-right">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">2021</h3>
                            <p className="text-gray-700">
                                Expanded our team to over 100 tutors and introduced innovative group learning programs and summer academic camps.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-item timeline-left">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">2023</h3>
                            <p className="text-gray-700">
                                Reached the milestone of 5,000+ students served and expanded our services to include college counseling and career guidance.
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline-item timeline-right">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">2025</h3>
                            <p className="text-gray-700">
                                Today, with over 200 expert tutors and a comprehensive range of educational services, we continue to grow while maintaining our commitment to personalized learning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    );
}

export default Journey;
