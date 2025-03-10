import React from 'react';

const Award = () => {
    return (
       
    // <!-- Awards & Recognition -->
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
                <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our commitment to excellence has been recognized by various organizations
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                        <i className="fas fa-award text-accent text-4xl"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Best Tutoring Service</h3>
                    <p className="text-gray-600">Education Excellence Awards, 2023</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                        <i className="fas fa-medal text-accent text-4xl"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Innovation in Education</h3>
                    <p className="text-gray-600">EdTech Breakthrough Awards, 2022</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                        <i className="fas fa-trophy text-accent text-4xl"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Top Test Prep Provider</h3>
                    <p className="text-gray-600">National Education Association, 2021</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="w-16 h-16 mx-auto mb-4">
                        <i className="fas fa-star text-accent text-4xl"></i>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Community Impact Award</h3>
                    <p className="text-gray-600">City Education Foundation, 2020</p>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Award;
