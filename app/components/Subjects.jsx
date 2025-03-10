import React from 'react';

const Subjects = () => {
    return (
        
        // <!-- Subjects Section -->
        <section id="subjects" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Subjects & Courses</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We offer tutoring in a wide range of subjects for all grade levels, from elementary to college.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* <!-- Mathematics --> */}
                    <div className="subject-card bg-gray-800 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                             alt="Mathematics" 
                             className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">Mathematics</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Algebra</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Geometry</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Calculus</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Statistics</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Trigonometry</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- English Language --> */}
                    <div className="subject-card bg-gray-800 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                             alt="English Language" 
                             className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">English Language</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Grammar</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Writing</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Literature</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Speaking</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Reading</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Business & Commerce --> */}
                    <div className="subject-card bg-gray-800 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                             alt="Business & Commerce" 
                             className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">Business & Commerce</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Account</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Commerce</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Economics</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Marketing</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Finance</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Science Subjects --> */}
                    <div className="subject-card bg-gray-800 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                             alt="Science Subjects" 
                             className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">Science Subjects</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Chemistry</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Physics</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Biology</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Biochemistry</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Geology</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Exam Preparation --> */}
                    <div className="subject-card bg-gray-800 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                             alt="Exam Preparation" 
                             className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">Exam Preparation</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">SAT</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">WAEC</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">JAMB</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">GRE</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">GMAT</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">ICAN</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">IELTS</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Others --> */}
                    <div className="subject-card bg-gray-800 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                             alt="Others" 
                             className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">Others</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Musical Instruments</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Software Programming</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Art & Design</span>
                                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Foreign Languages</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-12">
                    <a href="#contact" className="inline-block bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-accent/90 transition">
                        Find a Tutor for Your Subject
                    </a>
                </div>
            </div>
        </section>
    
    );
}

export default Subjects;
