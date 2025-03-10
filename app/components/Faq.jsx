"use client"
import React, { useState } from 'react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        { question: "How do you match students with tutors?", answer: "We match students with tutors based on the student's academic needs, learning style, personality, and schedule. We take into account the tutor's expertise, teaching style, and availability to ensure the best possible match for effective learning." },
        { question: "How often should my child meet with a tutor?", answer: "The frequency of tutoring sessions depends on your child's needs and goals. For students who need ongoing support, we typically recommend 1-2 sessions per week. For test preparation or help with specific topics, sessions can be scheduled as needed." },
        { question: "Do you offer group tutoring?", answer: "Yes, we offer small group tutoring sessions for students who prefer a collaborative learning environment or want a more cost-effective option. Groups are limited to 3-4 students to ensure each student receives adequate attention." },
        { question: "What qualifications do your tutors have?", answer: "All our tutors have at minimum a bachelor's degree in their subject area, and many have advanced degrees. They undergo a rigorous screening process, including background checks, and receive ongoing training in effective teaching methods." },
        { question: "How do online tutoring sessions work?", answer: "Online tutoring sessions take place on our secure, interactive platform that includes video conferencing, a virtual whiteboard, screen sharing, and document uploading capabilities. All you need is a computer or tablet with internet access." },
      ];
      

     // FAQ toggle
     function toggleFAQ(index) {
        // const element = event.currentTarget
        setOpenIndex((previndex) =>  (previndex === index ? null : index));
        // const content = element.nextElementSibling;
        // const icon = element.querySelector('i');
        
        // content.classList.toggle('hidden');
        // icon.classList.toggle('rotate-180');
    }


    return (
        // <!-- FAQ Section -->
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Find answers to common questions about our tutoring services.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-6">
                        

                        {faqs.map((faq, index)=>(
                            <div key={index} className="border border-gray-200 rounded-lg">
                                <button className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold focus:outline-none" onClick={() => toggleFAQ(index)}>
                                    <span>{faq.question}</span>
                                    <i className={`fas fa-chevron-down text-primary transition-transform ${openIndex === index ? "rotate-180" : ""}`}></i>
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    
    );
}

export default Faq;
