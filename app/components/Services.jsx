import React from 'react';

const Services = () => {
    return (
    // <!-- Services Section -->
    <section id="services" className="py-16 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tutoring Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We offer a variety of tutoring options to meet your unique learning needs and schedule.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <i className="fas fa-home text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center">In-Home Tutoring</h3>
                    <p className="text-gray-600 text-center">
                        Our tutors come to your home for personalized, one-on-one learning in a comfortable environment.
                    </p>
                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>Personalized attention</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>Comfortable learning environment</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>Flexible scheduling</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>No commute required</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <i className="fas fa-laptop text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center">Online Tutoring</h3>
                    <p className="text-gray-600 text-center">
                        Connect with expert tutors from anywhere with our interactive online learning platform.
                    </p>
                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>Interactive whiteboard</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>Screen sharing capabilities</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>Access from anywhere</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>Recorded sessions available</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <i className="fas fa-users text-primary text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center">Group Sessions</h3>
                    <p className="text-gray-600 text-center">
                        Learn collaboratively with peers in small group sessions led by our expert tutors.
                    </p>
                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>Collaborative learning</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>Cost-effective option</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>Peer motivation</span>
                        </li>
                        <li className="flex items-center">
                            <i className="fas fa-check text-secondary mr-2"></i>
                            <span>Available online or in-person</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Services;
