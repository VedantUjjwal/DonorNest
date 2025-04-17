import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (formData) => {
        try {
            setError('');
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            // Update user profile with name
            await updateProfile(userCredential.user, {
                displayName: formData.name
            });

            // Create user document in Firestore
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                name: formData.name,
                email: formData.email,
                createdAt: new Date().toISOString()
            });

            console.log('User created:', userCredential.user);
            navigate('/'); // Redirect to home page after successful signup
        } catch (error) {
            console.error('Signup failed:', error);
            setError(error.message);
        }
    };

    return (
        <div data-name="signup-page" className="container">
            <div className="blood-drop-bg"></div>
            <div className="auth-container">
                <h1 data-name="signup-title" className="auth-title">
                    Create Account
                </h1>
                {error && <div className="error-message">{error}</div>}
                <AuthForm isLogin={false} onSubmit={handleSignup} />
                <p data-name="login-link" className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="auth-link">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Signup; 