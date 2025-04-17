import React from 'react';

function ImageGallery() {
    try {
        const images = [
            {
                url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9ufGVufDB8fHx8MTcwNTQ3NzY0OXww&ixlib=rb-4.0.3&q=80&w=1080',
                title: 'Blood Donation Drive',
                description: 'Community blood donation event'
            },
            {
                url: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxibG9vZCUyMGRvbmF0aW9ufGVufDB8fHx8MTcwNTQ3NzY0OXww&ixlib=rb-4.0.3&q=80&w=1080',
                title: 'Save Lives',
                description: 'Your donation matters'
            },
            {
                url: 'https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxibG9vZCUyMGRvbmF0aW9ufGVufDB8fHx8MTcwNTQ3NzY0OXww&ixlib=rb-4.0.3&q=80&w=1080',
                title: 'Medical Care',
                description: 'Professional medical support'
            },
            {
                url: 'https://images.unsplash.com/photo-1597290282695-edc43d0e7129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxibG9vZCUyMGRvbmF0aW9ufGVufDB8fHx8MTcwNTQ3NzY0OXww&ixlib=rb-4.0.3&q=80&w=1080',
                title: 'Blood Testing',
                description: 'Quality assurance process'
            }
        ];

        return (
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our Impact
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            See how your donations make a difference in our community
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {images.map((image, index) => (
                            <div 
                                key={index} 
                                className="gallery-card overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            >
                                <div className="relative h-64 w-full">
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                                        <div className="absolute bottom-0 left-0 p-6 text-white">
                                            <h3 className="text-xl font-semibold mb-2">
                                                {image.title}
                                            </h3>
                                            <p className="text-sm text-gray-200">
                                                {image.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ImageGallery component error:', error);
        return null;
    }
}

export default ImageGallery;