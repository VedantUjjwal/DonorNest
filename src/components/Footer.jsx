import React from 'react';

function Footer() {
    try {
        const handleScroll = (sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        };

        return (
            <footer className="footer py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">BloodLife</h3>
                            <p className="text-gray-400">
                                Connecting donors with those in need
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <button onClick={() => handleScroll('home')} className="text-gray-400 hover:text-white">
                                        Home
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleScroll('about')} className="text-gray-400 hover:text-white">
                                        About
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleScroll('donate')} className="text-gray-400 hover:text-white">
                                        Donate
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2">
                                <li className="text-gray-400">
                                    <i className="fas fa-phone mr-2"></i>
                                    +1 234 567 890
                                </li>
                                <li className="text-gray-400">
                                    <i className="fas fa-envelope mr-2"></i>
                                    contact@bloodlife.com
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white text-xl">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-xl">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-xl">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 BloodLife. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        return null;
    }
}

export default Footer; 