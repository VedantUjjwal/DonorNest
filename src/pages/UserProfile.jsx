import React from 'react';

function UserProfile() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 bg-red-600">
                        <h3 className="text-lg leading-6 font-medium text-white">
                            User Profile
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-red-100">
                            Your personal information and account details
                        </p>
                    </div>
                    <div className="border-t border-gray-200">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-gray-500 text-center">
                                Please log in to view your profile.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 bg-red-600">
                        <h3 className="text-lg leading-6 font-medium text-white">
                            Donation History
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-red-100">
                            Your blood donation records
                        </p>
                    </div>
                    <div className="border-t border-gray-200">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-gray-500 text-center">
                                Please log in to view your donation history.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6 bg-red-600">
                        <h3 className="text-lg leading-6 font-medium text-white">
                            Upcoming Appointments
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-red-100">
                            Your scheduled blood donation appointments
                        </p>
                    </div>
                    <div className="border-t border-gray-200">
                        <div className="px-4 py-5 sm:p-6">
                            <p className="text-gray-500 text-center">
                                Please log in to view your appointments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile; 