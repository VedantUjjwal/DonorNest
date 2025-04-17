import React from 'react';

function DonationProcess() {
    try {
        const steps = [
            {
                title: 'Registration',
                description: 'Sign up and complete your donor profile'
            },
            {
                title: 'Screening',
                description: 'Quick health check and eligibility verification'
            },
            {
                title: 'Donation',
                description: 'Safe and comfortable donation process'
            }
        ];

        return (
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Donation Process
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Simple steps to save lives through blood donation
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="process-step text-center">
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('DonationProcess component error:', error);
        return null;
    }
}

export default DonationProcess; 