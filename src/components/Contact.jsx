import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen pt-16 bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[300px] bg-red-600">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl">We're here to help</p>
                    </div>
                </div>
            </div>

            {/* Contact Information and Form */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <FaPhone className="text-red-600 text-xl mt-1 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                    <p className="text-gray-600">+1 (555) 987-6543</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaEnvelope className="text-red-600 text-xl mt-1 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-600">info@blooddonate.com</p>
                                    <p className="text-gray-600">support@blooddonate.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-red-600 text-xl mt-1 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                                    <p className="text-gray-600">123 Blood Donation Center</p>
                                    <p className="text-gray-600">Main Street, City</p>
                                    <p className="text-gray-600">State, Country - 12345</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaClock className="text-red-600 text-xl mt-1 mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
                                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                                    <p className="text-gray-600">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
                    <div className="h-[400px] bg-gray-200 rounded-lg">
                        {/* Replace with actual map component */}
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            Map will be displayed here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact; 