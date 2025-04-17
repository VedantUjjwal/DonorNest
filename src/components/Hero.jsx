import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    try {
        return (
            <div className="hero-section flex items-center justify-center text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Every Drop Counts, Every Life Matters
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Join our mission to save lives through blood donation. Your contribution can make a difference.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/donate" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium">
                            Donate Now
                        </Link>
                        <Link to="/signup" className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 rounded-lg font-medium">
                            Register as Donor
                        </Link>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        return null;
    }
}

export default Hero; 