import React from 'react';

function Features() {
    try {
        const features = [
            {
                icon: 'heartbeat',
                title: 'Save Lives',
                description: 'Your donation can save up to 3 lives with a single contribution.'
            },
            {
                icon: 'shield-alt',
                title: 'Safe Process',
                description: 'We follow strict safety protocols and medical standards.'
            },
            {
                icon: 'clock',
                title: 'Quick & Easy',
                description: 'The donation process takes less than an hour of your time.'
            }
        ];

        return (
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Donate Blood?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Blood donation is a noble cause that helps save millions of lives each year.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="text-red-600 text-4xl mb-4">
                                    <i className={`fas fa-${feature.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Features component error:', error);
        return null;
    }
}

export default Features; 