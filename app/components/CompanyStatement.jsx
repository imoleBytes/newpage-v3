import React from 'react';

const CompanyStatement = () => {
    return (
        
    // <!-- Mission and Vision Section -->
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
                    <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At Newpage Edu Consult, our mission is to empower students of all ages and backgrounds to achieve academic excellence through personalized, high-quality tutoring services. We believe that every student has the potential to succeed with the right guidance and support.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        We are committed to fostering a love of learning, building confidence, and developing the skills necessary for long-term academic success and lifelong learning.
                    </p>
                </div>
                <div className="bg-primary/5 p-8 rounded-lg border-l-4 border-primary">
                    <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our vision is to be the leading provider of personalized tutoring services, recognized for our commitment to academic excellence, innovative teaching methods, and positive impact on students' lives.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        We envision a world where all students have access to the educational support they need to reach their full potential and achieve their academic and career goals.
                    </p>
                </div>
            </div>
        </div>
    </section>

    );
}

export default CompanyStatement;
