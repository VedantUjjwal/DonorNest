import React from 'react';
import { FaHeartbeat, FaUsers, FaHandHoldingHeart, FaHistory, FaAward, FaGlobe } from 'react-icons/fa';

function About() {
    return (
        <div className="min-h-screen pt-16 bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[400px] bg-red-600">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Blood Donation</h1>
                        <p className="text-xl">Saving Lives, One Donation at a Time</p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="transform transition duration-500 hover:scale-105">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-gray-600 mb-4">
                            We are dedicated to ensuring a safe and sufficient blood supply for patients in need. 
                            Our mission is to connect blood donors with recipients, making the donation process 
                            simple, efficient, and impactful.
                        </p>
                        <p className="text-gray-600">
                            Through our platform, we aim to create a community of regular blood donors who 
                            understand the importance of their contribution to saving lives.
                        </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                            alt="Blood Donation" 
                            className="w-full h-full object-cover transition duration-500 hover:scale-110"
                        />
                    </div>
                </div>
            </div>

            {/* History Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                alt="Blood Donation History" 
                                className="w-full h-full object-cover transition duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="transform transition duration-500 hover:scale-105">
                            <div className="flex items-center mb-6">
                                <FaHistory className="text-red-600 text-3xl mr-4" />
                                <h2 className="text-3xl font-bold text-gray-900">Our History</h2>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Founded in 2010, our organization has grown from a small local initiative to a 
                                nationwide network of blood donation centers. We've been at the forefront of 
                                blood donation technology and awareness campaigns.
                            </p>
                            <p className="text-gray-600">
                                Over the years, we've developed innovative ways to make blood donation more 
                                accessible and efficient, while maintaining the highest standards of safety 
                                and care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-50">
                        <FaHeartbeat className="text-red-600 text-4xl mx-auto mb-4 transform transition duration-500 hover:scale-110" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
                        <p className="text-gray-600">Lives Saved</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-50">
                        <FaUsers className="text-red-600 text-4xl mx-auto mb-4 transform transition duration-500 hover:scale-110" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">5000+</h3>
                        <p className="text-gray-600">Active Donors</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-50">
                        <FaHandHoldingHeart className="text-red-600 text-4xl mx-auto mb-4 transform transition duration-500 hover:scale-110" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
                        <p className="text-gray-600">Partner Hospitals</p>
                    </div>
                </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Achievements</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-white">
                            <FaAward className="text-red-600 text-3xl mb-4 transform transition duration-500 hover:scale-110" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">National Recognition</h3>
                            <p className="text-gray-600">
                                Awarded for excellence in blood donation services and community impact.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-white">
                            <FaGlobe className="text-red-600 text-3xl mb-4 transform transition duration-500 hover:scale-110" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Standards</h3>
                            <p className="text-gray-600">
                                Certified by international health organizations for quality and safety.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg hover:bg-white">
                            <FaUsers className="text-red-600 text-3xl mb-4 transform transition duration-500 hover:scale-110" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Impact</h3>
                            <p className="text-gray-600">
                                Recognized for outstanding community service and awareness programs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Donate Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Donate Blood?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-50">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Save Lives</h3>
                        <p className="text-gray-600">
                            Every blood donation can save up to three lives. Your donation could be the difference 
                            between life and death for someone in need.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-50">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Benefits</h3>
                        <p className="text-gray-600">
                            Regular blood donation helps maintain healthy iron levels and reduces the risk of 
                            heart disease. It also helps in the production of new blood cells.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-50">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Impact</h3>
                        <p className="text-gray-600">
                            By donating blood, you become part of a community that cares for others and 
                            contributes to the well-being of society.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-50">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Preparedness</h3>
                        <p className="text-gray-600">
                            Regular donations ensure that blood banks are well-stocked and ready to respond 
                            to emergencies and disasters.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center transform transition duration-500 hover:scale-105">
                            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 shadow-lg transform transition duration-500 hover:scale-110">
                                <img 
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                    alt="Team Member" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Dr. Sarah Johnson</h3>
                            <p className="text-gray-600">Medical Director</p>
                        </div>
                        <div className="text-center transform transition duration-500 hover:scale-105">
                            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 shadow-lg transform transition duration-500 hover:scale-110">
                                <img 
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                    alt="Team Member" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Michael Chen</h3>
                            <p className="text-gray-600">Operations Manager</p>
                        </div>
                        <div className="text-center transform transition duration-500 hover:scale-105">
                            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 shadow-lg transform transition duration-500 hover:scale-110">
                                <img 
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                                    alt="Team Member" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Emily Rodriguez</h3>
                            <p className="text-gray-600">Community Outreach Coordinator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About; 