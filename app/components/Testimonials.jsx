import React from 'react';

const Testimonials = () => {
    return (
        
    // <!-- Testimonials Section -->
    <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Hear from students and parents who have experienced the NewpageConsult difference.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 relative">
                    <div className="absolute -top-5 left-8">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <i className="fas fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6 pt-4">
                        "I've been with the brand for over a year, and they have exceeded my expectations. 
                        The blend of online and in-person works perfectly for my children. I look to 
                        many more mutually beneficial years ahead."
                    </p>
                    <div className="flex items-center">
                        <img src="img/peju.jpg" alt="Adepeju Siyanbola" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-semibold">Mrs Adepeju Siyanbola</h4>
                            <p className="text-gray-500 text-sm">Parent- Lagos, Nigeria</p>
                        </div>
                    </div>
                </div>

                {/* <!-- no image so i commented it out --> */}
                {/* <!-- <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 relative">
                    <div className="absolute -top-5 left-8">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <i className="fas fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6 pt-4">
                        "Newpage Educational Consult is fabulous for my children. The teachers are very passionate about teaching
                        and they make sure their students have a deep understanding of the math problem they solve.
                         I also like that they are flexible and able to change their schedule when needed by us. We hope to continue to learn with them."
                    </p>
                    <div className="flex items-center">
                        <img src="" alt="Tope Habib" className="w-12 h-12 rounded-full mr-4">
                        <div>
                            <h4 className="font-semibold">Mrs Tope Habib</h4>
                            <p className="text-gray-500 text-sm">Mother- Dallas, Texas</p>
                        </div>
                    </div>
                </div> --> */}
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 relative">
                    <div className="absolute -top-5 left-8">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <i className="fas fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6 pt-4">
                        "I was preparing for the SAT and needed help with the math section. My tutor was patient, knowledgeable, and taught me strategies that helped me raise my score by 150 points!"
                    </p>
                    <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-semibold">Michael Chen</h4>
                            <p className="text-gray-500 text-sm">High School Senior</p>
                        </div>
                    </div>
                </div>


                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 relative">
                    <div className="absolute -top-5 left-8">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <i className="fas fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6 pt-4">
                        "My son started lessons with Newpage Educational Consult about 2 years ago. It's 
                        been a wonderful experience. I have been relieved tremendously of studying 
                        with my son after a busy day. The two teachers he had, have been attentive and 
                        patient. They always ensure he prepares well for tests and exams. I particularly 
                        like that they are gentle with him yet firm. We see the great impact of the teacher 
                        and how he is improving daily."
                    </p>
                    <div className="flex items-center">
                        <img src="img/ambi.jpg" alt="ambi Suwukary" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-semibold">Mrs Ambi Suwukary</h4>
                            <p className="text-gray-500 text-sm">Parent- Lagos, Nigeria</p>
                        </div>
                    </div>
                </div>


                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 relative">
                    <div className="absolute -top-5 left-8">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <i className="fas fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6 pt-4">
                        "Newpage Educational Consult comes with young, energetic and highly flexible tutors with 
                        proven excellent track records. While affordable and always available at short notice, their ability 
                        to work with your schedule and the relationship the teachers develop with the children is commendable 
                        and continually puts them ahead of others. I have had course to refer them severally to my 
                        friends and family members."
                    </p>
                    <div className="flex items-center">
                        <img src="img/aletor.jpg" alt="aletor" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-semibold">Mr Adolphus Aletor</h4>
                            <p className="text-gray-500 text-sm">Parent- Lagos, Nigeria</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 relative">
                    <div className="absolute -top-5 left-8">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <i className="fas fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6 pt-4">
                        "Excellent company. Rapid responses and intensive care.
                        Also a friendly learning environment."
                    </p>
                    <div className="flex items-center">
                        <img src="img/damilola.jpg" alt="dami" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-semibold">Ayotola Damilola</h4>
                            <p className="text-gray-500 text-sm">Student- University of North Texas</p>
                        </div>
                    </div>
                </div>


                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 relative">
                    <div className="absolute -top-5 left-8">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <i className="fas fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <p className="text-gray-600 mb-6 pt-4">
                        "My son was struggling with algebra, but after just a few sessions with his NewpageConsult tutor, his confidence and grades improved dramatically. The personalized approach made all the difference."
                    </p>
                    <div className="flex items-center">
                        <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sarah Johnson" className="w-12 h-12 rounded-full mr-4"/>
                        <div>
                            <h4 className="font-semibold">Sarah Johnson</h4>
                            <p className="text-gray-500 text-sm">Parent of 9th Grader</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Testimonials;
