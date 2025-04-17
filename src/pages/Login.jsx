import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (formData) => {
        try {
            setError('');
            const userCredential = await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
            console.log('User logged in:', userCredential.user);
            navigate('/'); // Redirect to home page after successful login
        } catch (error) {
            console.error('Login failed:', error);
            setError(error.message);
        }
    };

    return (
        <div data-name="login-page" className="container">
            <div className="blood-drop-bg"></div>
            <div className="auth-container">
                <h1 data-name="login-title" className="auth-title">
                    Welcome Back
                </h1>
                {error && <div className="error-message">{error}</div>}
                <AuthForm isLogin={true} onSubmit={handleLogin} />
                <p data-name="signup-link" className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/signup" className="auth-link">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login; 