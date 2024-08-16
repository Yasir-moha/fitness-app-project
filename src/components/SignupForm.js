import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isLogin, setIsLogin] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!isLogin) {
            
            setSuccessMessage('Registration Successful! Redirecting to login...');
            
            setTimeout(() => {
                setIsLogin(true);
                setSuccessMessage('');
            }, 2000); 
        } else {
           
            console.log('Login submitted:', formData);
            navigate('/exercise-form'); 
        }
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setSuccessMessage('');
    };

    return (
        <div className="signup-form-container">
            <h2 className="signup-form-title">{isLogin ? 'Welcome Back' : 'Create Your Account'}</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                {!isLogin && (
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        className="signup-form-input"
                    />
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="signup-form-input"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="signup-form-input"
                />
                {!isLogin && (
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="signup-form-input"
                    />
                )}
                <button type="submit" className="signup-form-button">
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            {successMessage && <p className="signup-form-success-message">{successMessage}</p>}
            <p className="signup-form-switch">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <span onClick={toggleForm}>
                    {isLogin ? 'Sign Up' : 'Login'}
                </span>
            </p>
        </div>
    );
};

export default SignupForm;