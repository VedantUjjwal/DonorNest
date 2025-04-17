import React, { useState } from 'react';
import InputField from './InputField';
import { validateForm } from '../utils/validation';

function AuthForm({ isLogin, onSubmit }) {
    try {
        const [formData, setFormData] = useState({
            email: '',
            password: '',
            confirmPassword: '',
            name: ''
        });

        const [errors, setErrors] = useState({});

        const handleSubmit = (e) => {
            e.preventDefault();
            const validationErrors = validateForm(formData, isLogin);
            
            if (Object.keys(validationErrors).length === 0) {
                onSubmit(formData);
            } else {
                setErrors(validationErrors);
            }
        };

        const handleChange = (field) => (e) => {
            setFormData(prev => ({
                ...prev,
                [field]: e.target.value
            }));
            if (errors[field]) {
                setErrors(prev => ({
                    ...prev,
                    [field]: ''
                }));
            }
        };

        return (
            <form data-name="auth-form" className="auth-form" onSubmit={handleSubmit}>
                {!isLogin && (
                    <InputField
                        label="Full Name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange('name')}
                        error={errors.name}
                        icon="user"
                    />
                )}
                <InputField
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    error={errors.email}
                    icon="envelope"
                />
                <InputField
                    label="Password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange('password')}
                    error={errors.password}
                    icon="lock"
                />
                {!isLogin && (
                    <InputField
                        label="Confirm Password"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange('confirmPassword')}
                        error={errors.confirmPassword}
                        icon="lock"
                    />
                )}
                <button 
                    data-name="submit-button"
                    type="submit" 
                    className="auth-button"
                >
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
        );
    } catch (error) {
        console.error('AuthForm component error:', error);
        return null;
    }
}

export default AuthForm; 