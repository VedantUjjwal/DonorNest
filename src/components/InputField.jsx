import React from 'react';

function InputField({ label, type, value, onChange, error, icon }) {
    try {
        return (
            <div data-name="input-field" className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                    {label}
                </label>
                <div className="relative">
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                            error ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {icon && (
                        <span className="absolute right-3 top-2.5 text-gray-400">
                            <i className={`fas fa-${icon}`}></i>
                        </span>
                    )}
                </div>
                {error && (
                    <p data-name="error-message" className="mt-1 text-sm text-red-500">
                        {error}
                    </p>
                )}
            </div>
        );
    } catch (error) {
        console.error('InputField component error:', error);
        return null;
    }
}

export default InputField; 