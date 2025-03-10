import React from 'react';

const Footer = () => {
    return (
        
    // <!-- Footer -->
    <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                    <h3 className="text-xl font-bold mb-6">Newpage Edu Consult</h3>
                    <p className="text-gray-300 mb-6">
                        Empowering students to achieve academic excellence through personalized tutoring.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/profile.php?id=100083712878044" className="text-gray-300 hover:text-white transition">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/newpage_ec/" className="text-gray-300 hover:text-white transition">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><a href="/#home" className="text-gray-300 hover:text-white transition">Home</a></li>
                        <li><a href="/#services" className="text-gray-300 hover:text-white transition">Services</a></li>
                        <li><a href="/#subjects" className="text-gray-300 hover:text-white transition">Subjects</a></li>
                        <li><a href="/#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a></li>
                        <li><a href="/#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a></li>
                        <li><a href="/#team" className="text-gray-300 hover:text-white transition">Our Team</a></li>
                        <li><a href="/#contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-6">Services</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-300 hover:text-white transition">In-Home Tutoring</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition">Online Tutoring</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition">Group Sessions</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition">Test Preparation</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition">Homework Help</a></li>
                        <li><a href="#" className="text-gray-300 hover:text-white transition">Summer Programs</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-6">Contact Us</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                            <span>3 Wilmot Point Rd<br/>Victoria Island, Lagos, Nigeria 106104</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-phone-alt mt-1 mr-3"></i>
                            <span>+234 803 478 6633</span>
                        </li>
                        <li className="flex items-start">
                            <i className="fas fa-envelope mt-1 mr-3"></i>
                            <span>info@newpageconsult.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                <p className="text-gray-400">
                    &copy; 2025 Newpage Edu Consult. All rights reserved.
                </p>
            </div>
        </div>
    </footer>

    );
}

export default Footer;
