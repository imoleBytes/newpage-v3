import React from 'react';

const Story = () => {
    return (
        // <!-- Our Story Section -->
        <section id="our-story" className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-gray-700 mb-6">
                            Newpage Edu Consult was founded in 2010 by Dr. Robert Williams, a passionate educator with over two decades of experience in academia. After witnessing firsthand the challenges students faced in traditional educational settings, Dr. Williams envisioned a tutoring service that would provide personalized support to help students reach their full potential.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            What began as a small operation with just five dedicated tutors has grown into a comprehensive educational consulting firm with over 200 expert educators serving thousands of students across the country. Throughout our growth, we've maintained our commitment to individualized attention and academic excellence.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Today, Newpage Edu Consult offers a wide range of services, from one-on-one tutoring to test preparation and academic counseling. We've embraced technology to extend our reach through online tutoring while maintaining the personal touch that has been our hallmark since day one.
                        </p>
                        <p className="text-lg text-gray-700">
                            Our name, "Newpage," reflects our philosophy that education is about turning to a fresh page of opportunity with each learning experience. We believe every student deserves the chance to write their own success story, and we're here to guide them through each chapter.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-accent">
                            <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                            <p className="text-gray-700">
                                We believe in a student-centered approach that adapts to individual learning styles, needs, and goals. Our methodology combines proven educational techniques with innovative strategies to create engaging, effective learning experiences.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-primary">
                            <h3 className="text-xl font-bold mb-4">Our Promise</h3>
                            <p className="text-gray-700">
                                At Newpage Edu Consult, we promise to provide exceptional educational support delivered with integrity, compassion, and a commitment to excellence. We measure our success by the academic growth and confidence of our students.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    );
}

export default Story;
