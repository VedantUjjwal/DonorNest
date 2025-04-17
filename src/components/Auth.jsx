import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        contact: ''
    });
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Basic form validation
        if (isLogin) {
            if (!formData.email || !formData.password) {
                setError('Please fill in all fields');
                return;
            }
        } else {
            if (!formData.name || !formData.email || !formData.password || !formData.address || !formData.contact) {
                setError('Please fill in all fields');
                return;
            }
        }

        if (isLogin) {
            // Handle login
            console.log('Login attempt with:', formData.email);
            setSuccessMessage('Login successful!');
            setShowSuccess(true);
            setTimeout(() => {
                navigate('/profile');
            }, 1500);
        } else {
            // Handle signup
            console.log('Signup attempt with:', formData);
            setSuccessMessage('Account created successfully!');
            setShowSuccess(true);
            setTimeout(() => {
                setIsLogin(true);
                setShowSuccess(false);
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    address: '',
                    contact: ''
                });
            }, 1500);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className={`max-w-${isLogin ? 'md' : '2xl'} w-full space-y-8`}>
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {isLogin ? 'Sign in to your account' : 'Create a new account'}
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {!isLogin ? (
                        // Registration Form Layout
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Personal Information */}
                            <div className="space-y-6 bg-white p-6 rounded-lg shadow">
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
                            <div className="space-y-6 bg-white p-6 rounded-lg shadow">
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
                                    <input
                                        id="contact"
                                        name="contact"
                                        type="tel"
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                        placeholder="Enter your contact number"
                                        value={formData.contact}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        // Login Form Layout
                        <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
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
                            </div>
                        </div>
                    )}

                    {error && (
                        <div className="text-red-600 text-sm text-center">
                            {error}
                        </div>
                    )}

                    {showSuccess && (
                        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out">
                            {successMessage}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                        >
                            {isLogin ? 'Sign in' : 'Sign up'}
                        </button>
                    </div>
                </form>

                <div className="text-center">
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError('');
                            setFormData({
                                name: '',
                                email: '',
                                password: '',
                                address: '',
                                contact: ''
                            });
                        }}
                        className="text-red-600 hover:text-red-700 transition-colors duration-200"
                    >
                        {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Auth; 