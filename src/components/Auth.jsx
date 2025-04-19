import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function Auth() {
    const location = useLocation();
    const [isLogin, setIsLogin] = useState(location.pathname === '/login');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        countryCode: '+91', // Default to India
        contact: ''
    });
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Array of blood donation related background images
    const loginBackgrounds = [
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9uJTIwaGVscHxlbnwwfHx8fDE3MDU0NzgwMjB8MA&ixlib=rb-4.0.3&q=80&w=1080',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9uJTIwaGVscHxlbnwwfHx8fDE3MDU0NzgwMjB8MA&ixlib=rb-4.0.3&q=80&w=1080',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9uJTIwaGVscHxlbnwwfHx8fDE3MDU0NzgwMjB8MA&ixlib=rb-4.0.3&q=80&w=1080'
    ];

    const signupBackgrounds = [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9uJTIwaGVscHxlbnwwfHx8fDE3MDU0NzgwMjB8MA&ixlib=rb-4.0.3&q=80&w=1080',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9uJTIwaGVscHxlbnwwfHx8fDE3MDU0NzgwMjB8MA&ixlib=rb-4.0.3&q=80&w=1080',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9uJTIwaGVscHxlbnwwfHx8fDE3MDU0NzgwMjB8MA&ixlib=rb-4.0.3&q=80&w=1080'
    ];

    // Function to get random background
    const getRandomBackground = (backgrounds) => {
        return backgrounds[Math.floor(Math.random() * backgrounds.length)];
    };

    const countryCodes = [
        { code: '+91', country: 'IN' },
        { code: '+1', country: 'US' },
        { code: '+44', country: 'UK' },
        { code: '+61', country: 'AU' },
        { code: '+65', country: 'SG' },
        { code: '+971', country: 'AE' },
        { code: '+966', country: 'SA' },
        { code: '+60', country: 'MY' }
    ];

    useEffect(() => {
        setIsLogin(location.pathname === '/login');
    }, [location.pathname]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLogin) {
                // Handle login
                if (!formData.email || !formData.password) {
                    throw new Error('Please fill in all fields');
                }
                await signInWithEmailAndPassword(auth, formData.email, formData.password);
                setSuccessMessage('Login successful!');
                setShowSuccess(true);
                setTimeout(() => {
                    navigate('/profile');
                }, 1500);
            } else {
                // Handle signup
                if (!formData.name || !formData.email || !formData.password || !formData.address || !formData.contact) {
                    throw new Error('Please fill in all fields');
                }
                const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                
                // Save additional user data to Firestore
                await setDoc(doc(db, 'users', userCredential.user.uid), {
                    name: formData.name,
                    email: formData.email,
                    address: formData.address,
                    contact: formData.contact,
                    countryCode: formData.countryCode,
                    createdAt: new Date().toISOString()
                });

                setSuccessMessage('Account created successfully!');
                setShowSuccess(true);
                setTimeout(() => {
                    navigate('/login');
                    setFormData({
                        name: '',
                        email: '',
                        password: '',
                        address: '',
                        countryCode: '+91',
                        contact: ''
                    });
                }, 1500);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const switchMode = () => {
        const newPath = isLogin ? '/signup' : '/login';
        navigate(newPath);
        setError('');
        setFormData({
            name: '',
            email: '',
            password: '',
            address: '',
            countryCode: '+91',
            contact: ''
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
                style={{
                    backgroundImage: `url("${isLogin ? getRandomBackground(loginBackgrounds) : getRandomBackground(signupBackgrounds)}")`,
                    opacity: '0.5'
                }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            
            {/* Content */}
            <div className="relative z-10 w-full">
                <div className={`${isLogin ? 'max-w-md' : 'max-w-2xl'} w-full space-y-8 mx-auto px-4 sm:px-6 lg:px-8`}>
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                            {isLogin ? 'Sign in to your account' : 'Create a new account'}
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        {!isLogin ? (
                            // Registration Form Layout
                            <div className="bg-white py-8 px-6 shadow-lg rounded-lg max-w-2xl mx-auto">
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Personal Information */}
                                        <div className="space-y-6">
                                            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="Enter your full name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="Enter your email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    required
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="Create a password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        {/* Address and Contact */}
                                        <div className="space-y-6">
                                            <h3 className="text-lg font-medium text-gray-900">Address & Contact</h3>
                                            <div>
                                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                                <textarea
                                                    id="address"
                                                    name="address"
                                                    required
                                                    rows="3"
                                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="Enter your complete address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Number</label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <select
                                                        name="countryCode"
                                                        value={formData.countryCode}
                                                        onChange={handleChange}
                                                        className="flex-shrink-0 px-3 py-2 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-gray-500 text-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                                                    >
                                                        {countryCodes.map((country) => (
                                                            <option key={country.code} value={country.code}>
                                                                {country.code} {country.country}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <input
                                                        id="contact"
                                                        name="contact"
                                                        type="tel"
                                                        required
                                                        className="flex-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="Enter your contact number"
                                                        value={formData.contact}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {error && (
                                        <div className="text-red-600 text-sm text-center">
                                            {error}
                                        </div>
                                    )}

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                                        >
                                            {loading ? (
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            ) : null}
                                            {isLogin ? 'Sign in' : 'Sign up'}
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            onClick={switchMode}
                                            className="text-red-600 hover:text-red-700 transition-colors duration-200"
                                        >
                                            Already have an account? Sign in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Login Form Layout
                            <div className="bg-white py-8 px-6 shadow-lg rounded-lg max-w-md mx-auto">
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                            placeholder="Enter your password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {error && (
                                        <div className="text-red-600 text-sm text-center">
                                            {error}
                                        </div>
                                    )}

                                    <div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                                        >
                                            {loading ? (
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                            ) : null}
                                            {isLogin ? 'Sign in' : 'Sign up'}
                                        </button>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            onClick={switchMode}
                                            className="text-red-600 hover:text-red-700 transition-colors duration-200"
                                        >
                                            Need an account? Sign up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {showSuccess && (
                            <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out">
                                {successMessage}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth; 