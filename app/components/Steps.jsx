import React from 'react';

const Steps = () => {
    return (
        // <!-- How It Works Section -->
    <section id="how-it-works" className="py-16 bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Getting started with NewpageConsult Tutoring is simple and straightforward.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                    <h3 className="text-xl font-bold mb-3">Request a Tutor</h3>
                    <p className="text-gray-600">
                        Fill out our simple form to tell us about your tutoring needs and preferences.
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                    <h3 className="text-xl font-bold mb-3">Match with an Expert</h3>
                    <p className="text-gray-600">
                        We'll match you with a qualified tutor who specializes in your subject and fits your schedule.
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                    <h3 className="text-xl font-bold mb-3">Free Consultation</h3>
                    <p className="text-gray-600">
                        Enjoy a free 30-minute consultation to ensure the tutor is the right fit for your learning needs.
                    </p>
                </div>
                <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">4</div>
                    <h3 className="text-xl font-bold mb-3">Start Learning</h3>
                    <p className="text-gray-600">
                        Begin your personalized tutoring sessions and watch your academic performance improve.
                    </p>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Steps;
