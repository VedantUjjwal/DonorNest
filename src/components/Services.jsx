import React from 'react';
import { FaHeartbeat, FaHospital, FaAmbulance, FaCalendarAlt, FaUserPlus, FaClipboardCheck, FaTint, FaRegClock } from 'react-icons/fa';

function Services() {
    return (
        <div className="min-h-screen pt-16 bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[400px] bg-red-600">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                        <p className="text-xl">Comprehensive Blood Donation Solutions</p>
                    </div>
                </div>
            </div>

            {/* Main Services */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-50">
                        <div className="flex items-center mb-6">
                            <FaHeartbeat className="text-red-600 text-4xl mr-4 transform transition duration-500 hover:scale-110" />
                            <h2 className="text-2xl font-bold text-gray-900">Regular Blood Donation</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Our regular blood donation program makes it easy for donors to contribute to saving lives.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Quick and easy registration process
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Comfortable donation environment
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Post-donation refreshments
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-50">
                        <div className="flex items-center mb-6">
                            <FaHospital className="text-red-600 text-4xl mr-4 transform transition duration-500 hover:scale-110" />
                            <h2 className="text-2xl font-bold text-gray-900">Hospital Partnerships</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            We collaborate with hospitals to ensure a steady supply of blood for patients in need.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Direct blood supply to hospitals
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Emergency blood requests
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Regular inventory management
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-50">
                        <div className="flex items-center mb-6">
                            <FaAmbulance className="text-red-600 text-4xl mr-4 transform transition duration-500 hover:scale-110" />
                            <h2 className="text-2xl font-bold text-gray-900">Emergency Response</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Our rapid response team is always ready to handle emergency blood requirements.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                24/7 emergency service
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Quick blood delivery
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Specialized blood types
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-red-50">
                        <div className="flex items-center mb-6">
                            <FaCalendarAlt className="text-red-600 text-4xl mr-4 transform transition duration-500 hover:scale-110" />
                            <h2 className="text-2xl font-bold text-gray-900">Donation Events</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            We organize blood donation camps and community drives to encourage participation.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Community blood drives
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Corporate donation events
                            </li>
                            <li className="flex items-center text-gray-600">
                                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                                Educational campaigns
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Donation Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center transform transition duration-500 hover:scale-105">
                            <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transform transition duration-500 hover:scale-110">
                                <FaUserPlus className="text-red-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Register</h3>
                            <p className="text-gray-600">Quick and easy registration process</p>
                        </div>
                        <div className="text-center transform transition duration-500 hover:scale-105">
                            <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transform transition duration-500 hover:scale-110">
                                <FaClipboardCheck className="text-red-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Screen</h3>
                            <p className="text-gray-600">Health check and eligibility verification</p>
                        </div>
                        <div className="text-center transform transition duration-500 hover:scale-105">
                            <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transform transition duration-500 hover:scale-110">
                                <FaTint className="text-red-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Donate</h3>
                            <p className="text-gray-600">Safe and comfortable donation process</p>
                        </div>
                        <div className="text-center transform transition duration-500 hover:scale-105">
                            <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 transform transition duration-500 hover:scale-110">
                                <FaRegClock className="text-red-600 text-3xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Recover</h3>
                            <p className="text-gray-600">Rest and refreshments after donation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services; 