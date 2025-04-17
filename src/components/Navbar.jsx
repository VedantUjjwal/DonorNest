import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTint } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = (sectionId) => {
        if (sectionId === 'home') {
            const startPosition = window.pageYOffset;
            const distance = -startPosition;
            const duration = 1000;
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                
                // Easing function for smooth acceleration and deceleration
                const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                
                window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)));
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const startPosition = window.pageYOffset;
                const elementPosition = element.getBoundingClientRect().top;
                const targetPosition = elementPosition + startPosition - navbarHeight;
                const distance = targetPosition - startPosition;
                const duration = 1000;
                let start = null;

                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Easing function for smooth acceleration and deceleration
                    const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                    
                    window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)));
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }

                requestAnimationFrame(animation);
            }
        }
        setIsOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'donate', label: 'Donate' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className={`navbar fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <button
                            onClick={() => handleScroll('home')}
                            className="flex items-center space-x-2 focus:outline-none"
                        >
                            <FaTint className="text-red-600 text-2xl" />
                            <span className="text-xl font-bold text-gray-900">Blood Donate</span>
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className="text-gray-700 hover:text-red-600 transition-colors duration-200"
                            >
                                {item.label}
                            </button>
                        ))}
                        <Link 
                            to="/login" 
                            className="bg-red-600 text-white px-3 py-1.5 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium w-[80px] text-center"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-red-600 focus:outline-none"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
                            >
                                {item.label}
                            </button>
                        ))}
                        <Link
                            to="/login"
                            className="block w-[80px] mx-auto text-center px-3 py-1.5 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar; 