import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

function Profile() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userDoc = await getDoc(doc(db, 'users', user.uid));
                    if (userDoc.exists()) {
                        setUserData({
                            ...userDoc.data(),
                            email: user.email // Get email from auth
                        });
                    }
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
        );
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    {/* Profile Header */}
                    <div className="bg-red-600 px-6 py-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-white">Profile</h1>
                                <p className="text-red-100">Welcome back, {userData?.name}</p>
                            </div>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="px-6 py-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Personal Information */}
                            <div className="space-y-3">
                                <h2 className="text-lg font-semibold text-gray-900">Personal Information</h2>
                                <div className="space-y-2">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Full Name</label>
                                        <p className="mt-1 text-gray-900">{userData?.name || 'Not provided'}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Email Address</label>
                                        <p className="mt-1 text-gray-900">{userData?.email || 'Not provided'}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Contact Number</label>
                                        <p className="mt-1 text-gray-900">
                                            {userData?.countryCode && userData?.contact 
                                                ? `${userData.countryCode} ${userData.contact}`
                                                : 'Not provided'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Address Information */}
                            <div className="space-y-3">
                                <h2 className="text-lg font-semibold text-gray-900">Address Information</h2>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Address</label>
                                    <p className="mt-1 text-gray-900">{userData?.address || 'Not provided'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Account Information */}
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">Account Information</h2>
                            <div className="mt-2 space-y-2">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Account Created</label>
                                    <p className="mt-1 text-gray-900">
                                        {userData?.createdAt 
                                            ? new Date(userData.createdAt).toLocaleDateString()
                                            : 'Not available'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logout Button */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-600 text-white px-6 py-2 rounded-lg shadow-sm hover:bg-red-700 transition-colors duration-200"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile; 