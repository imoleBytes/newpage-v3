import React from 'react';

const Map = () => {
    return (
        // <!-- Map Section -->
        <section className="py-16 bg-pattern">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our main office is located in the heart of downtown. Feel free to stop by during business hours.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-96">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3964.7814393129124!2d3.410762!3d6.422122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ac8bf5ab9a7%3A0x1b3acfc4ae0bcf98!2s3%20Wilmot%20Point%20Rd%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1741433612230!5m2!1sen!2sng" width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-3 flex items-center">
                                <i className="fas fa-map-marker-alt text-primary mr-3"></i>
                                Address
                            </h3>
                            <p className="text-gray-600">
                                3 Wilmot Point Rd<br/>
                                Victoria Island<br/>
                                Lagos, Nigeria 106104
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3 flex items-center">
                                <i className="fas fa-clock text-primary mr-3"></i>
                                Business Hours
                            </h3>
                            <p className="text-gray-600">
                                Monday - Friday: 9:00 AM - 7:00 PM<br/>
                                Saturday: 10:00 AM - 4:00 PM<br/>
                                Sunday: Closed
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-3 flex items-center">
                                <i className="fas fa-phone-alt text-primary mr-3"></i>
                                Contact
                            </h3>
                            <p className="text-gray-600">
                                Phone: +234 803 478 6633<br/>
                                Email: info@newpageconsult.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    );
}

export default Map;
