import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ImageGallery from '../components/ImageGallery';
import DonationProcess from '../components/DonationProcess';
import Footer from '../components/Footer';

function Home() {
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const scrollTargets = document.querySelectorAll('.scroll-target');
        scrollTargets.forEach((target) => observer.observe(target));

        return () => {
            scrollTargets.forEach((target) => observer.unobserve(target));
        };
    }, []);

    return (
        <div data-name="home-page">
            <section id="home">
                <Hero />
            </section>
            <section id="about" className="scroll-transition">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl font-bold text-center mb-12 scroll-target">About Blood Donation</h1>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6 scroll-target">
                            <h2 className="text-2xl font-semibold text-red-600">Why Donate Blood?</h2>
                            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                                <p className="text-gray-700">
                                    Blood donation is a vital act of kindness that can save lives. Every two seconds, someone in the world needs blood. Your donation can help:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Patients undergoing surgery</li>
                                    <li>Cancer patients receiving chemotherapy</li>
                                    <li>Victims of accidents and trauma</li>
                                    <li>Patients with blood disorders like thalassemia</li>
                                    <li>New mothers experiencing complications during childbirth</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-6 scroll-target">
                            <h2 className="text-2xl font-semibold text-red-600">Blood Types and Compatibility</h2>
                            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                                <p className="text-gray-700">
                                    Understanding blood types is crucial for safe transfusions. Here's a quick guide:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Type O-: Universal donor (can donate to all blood types)</li>
                                    <li>Type O+: Can donate to all positive blood types</li>
                                    <li>Type A-: Can donate to A-, A+, AB-, AB+</li>
                                    <li>Type A+: Can donate to A+ and AB+</li>
                                    <li>Type B-: Can donate to B-, B+, AB-, AB+</li>
                                    <li>Type B+: Can donate to B+ and AB+</li>
                                    <li>Type AB-: Can donate to AB- and AB+</li>
                                    <li>Type AB+: Can only donate to AB+</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="features" className="scroll-transition">
                <Features />
            </section>
            <section id="donate" className="scroll-transition">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h1 className="text-4xl font-bold text-center mb-12 scroll-target">Donation Information</h1>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6 scroll-target">
                            <h2 className="text-2xl font-semibold text-red-600">Eligibility Criteria</h2>
                            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                                <h3 className="text-lg font-semibold">Basic Requirements:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Age: 18-65 years</li>
                                    <li>Weight: Minimum 50 kg</li>
                                    <li>Hemoglobin level: Minimum 12.5 g/dL</li>
                                    <li>Good general health</li>
                                    <li>No recent tattoos or piercings (within 6 months)</li>
                                </ul>
                                <h3 className="text-lg font-semibold mt-4">Temporary Deferral:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Recent surgery or illness</li>
                                    <li>Pregnancy or breastfeeding</li>
                                    <li>Recent travel to malaria-endemic areas</li>
                                    <li>Recent vaccination</li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-6 scroll-target">
                            <h2 className="text-2xl font-semibold text-red-600">Pre-Donation Guidelines</h2>
                            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                                <h3 className="text-lg font-semibold">Before Donation:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Get a good night's sleep</li>
                                    <li>Eat a healthy meal before donating</li>
                                    <li>Drink plenty of fluids</li>
                                    <li>Bring valid ID proof</li>
                                </ul>
                                <h3 className="text-lg font-semibold mt-4">After Donation:</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Rest for 10-15 minutes</li>
                                    <li>Drink plenty of fluids</li>
                                    <li>Avoid strenuous exercise for 24 hours</li>
                                    <li>Eat iron-rich foods</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ImageGallery />
                    <DonationProcess />
                </div>
            </section>
            <section id="contact" ref={contactRef} className="py-16 bg-gray-50 scroll-transition">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-center mb-12 scroll-target">Contact Us</h1>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6 scroll-target">
                            <h2 className="text-2xl font-semibold text-red-600">Get in Touch</h2>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Message</label>
                                        <textarea
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                            rows="4"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="space-y-6 scroll-target">
                            <h2 className="text-2xl font-semibold text-red-600">Contact Information</h2>
                            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold">Address</h3>
                                    <p className="text-gray-600">
                                        123 BloodLife Street<br />
                                        Medical District<br />
                                        City, State 12345
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Phone</h3>
                                    <p className="text-gray-600">+1 (123) 456-7890</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Email</h3>
                                    <p className="text-gray-600">info@bloodlife.org</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Emergency Hotline</h3>
                                    <p className="text-gray-600">+1 (123) 456-7891</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home; 