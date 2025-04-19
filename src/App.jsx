import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DonationProcess from './components/DonationProcess';
import Auth from './components/Auth';
import Profile from './components/Profile';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
        );
    }

    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Features />
                            <DonationProcess />
                        </>
                    } />
                    <Route 
                        path="/login" 
                        element={user ? <Navigate to="/profile" /> : <Auth />} 
                    />
                    <Route 
                        path="/signup" 
                        element={user ? <Navigate to="/profile" /> : <Auth />} 
                    />
                    <Route 
                        path="/profile" 
                        element={user ? <Profile /> : <Navigate to="/login" />} 
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 