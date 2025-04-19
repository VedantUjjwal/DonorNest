import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTint } from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const [user] = useAuthState(auth);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="fixed w-full z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link 
                            to="/" 
                            onClick={scrollToTop}
                            className="flex items-center space-x-2"
                        >
                            <FaTint className="text-red-600 text-2xl" />
                            <span className="text-xl font-bold text-gray-900">Blood Donate</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`text-base font-medium transition-colors duration-200 ${
                                isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`text-base font-medium transition-colors duration-200 ${
                                isActive('/about') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                            }`}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/services"
                            className={`text-base font-medium transition-colors duration-200 ${
                                isActive('/services') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                            }`}
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            className={`text-base font-medium transition-colors duration-200 ${
                                isActive('/contact') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                            }`}
                        >
                            Contact
                        </Link>
                        <div className="flex items-center space-x-4">
                            <Link
                                to="/login"
                                className="bg-white text-red-600 border-2 border-red-600 px-4 py-2 rounded-lg text-base font-medium hover:bg-red-600 hover:text-white transition-colors duration-200"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-white text-red-600 border-2 border-red-600 px-4 py-2 rounded-lg text-base font-medium hover:bg-red-600 hover:text-white transition-colors duration-200"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-red-600 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                isActive('/') ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                isActive('/about') ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                            }`}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/services"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                isActive('/services') ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                            }`}
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                isActive('/contact') ? 'text-red-600 bg-red-50' : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                            }`}
                        >
                            Contact
                        </Link>
                        <div className="pt-2 space-y-2">
                            <Link
                                to="/login"
                                className="block px-3 py-2 rounded-md text-base font-medium bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="block px-3 py-2 rounded-md text-base font-medium bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar; 