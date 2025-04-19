import React from 'react';

function DonationProcess() {
    try {
        const steps = [
            {
                title: 'Registration',
                description: 'Sign up and complete your donor profile',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9uJTIwcmVnaXN0cmF0aW9ufGVufDB8fHx8MTcwNTQ3ODAyMHww&ixlib=rb-4.0.3&q=80&w=1080'
            },
            {
                title: 'Screening',
                description: 'Quick health check and eligibility verification',
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxibG9vZCUyMGRvbmF0aW9uJTIwc2NyZWVuaW5nfGVufDB8fHx8MTcwNTQ3ODAyMHww&ixlib=rb-4.0.3&q=80&w=1080'
            },
            {
                title: 'Donation',
                description: 'Safe and comfortable donation process',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxibG9vZCUyMGRvbmF0aW9uJTIwcHJvY2Vzc3xlbnwwfHx8fDE3MDU0NzgwMjB8MA&ixlib=rb-4.0.3&q=80&w=1080'
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
                            <div key={index} className="process-step bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={step.image} 
                                        alt={step.title}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
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