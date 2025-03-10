import React from 'react';

const Contact = () => {
    return (
        
    // <!-- Contact Section -->
    <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Fill out the form below to request a tutor or learn more about our services.
                </p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 bg-primary text-white">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <p className="mb-8">
                            Fill out the form and our team will get back to you within 24 hours.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <i className="fas fa-phone-alt mt-1 mr-4"></i>
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <p>+234 803 478 6633</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <i className="fas fa-envelope mt-1 mr-4"></i>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p>info@newpageconsult.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-4"></i>
                                <div>
                                    <h4 className="font-semibold">Address</h4>
                                    <p>3 Wilmot Point Rd<br/>Victoria Island<br/>
                                        Lagos, Nigeria 106104
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <h4 className="font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/people/Newpage-Educational-Consult/100083712878044/" className="text-white hover:text-gray-200 transition">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-white hover:text-gray-200 transition">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/newpage_ec/" className="text-white hover:text-gray-200 transition">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-white hover:text-gray-200 transition">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="p-8">
                        <form action="https://formsubmit.io/send/48f4bfe5-d208-485b-93ec-d4a9f517ac7b" method="post">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="first_name" className="block text-gray-700 font-medium mb-2">First Name</label>
                                    <input type="text" id="first_name" name="first_name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block text-gray-700 font-medium mb-2">Last Name</label>
                                    <input type="text" id="last_name" name="last_name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"/>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                                <select id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                    <option value="">Select a subject</option>
                                    <option value="math">Mathematics</option>
                                    <option value="science">Science</option>
                                    <option value="english">English</option>
                                    <option value="history">History</option>
                                    <option value="language">Foreign Language</option>
                                    <option value="test_prep">Test Preparation</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Contact;
