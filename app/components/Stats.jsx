import React from 'react';

const Stats = () => {
    return (
        
    // <!-- Stats Section -->
    <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">5000+</p>
                    <p className="text-gray-600">Happy Students</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">200+</p>
                    <p className="text-gray-600">Expert Tutors</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">50+</p>
                    <p className="text-gray-600">Subjects</p>
                </div>
                <div className="text-center">
                    <p className="text-4xl font-bold text-primary mb-2">98%</p>
                    <p className="text-gray-600">Success Rate</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Stats;
