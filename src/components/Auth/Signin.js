import React, { useState } from 'react';
import axios from 'axios';

const Signin = ({ onSigninSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/signin', {
                email,
                password,
            });
            setMessage(`Welcome, ${response.data.username}!`);
            localStorage.setItem('token', response.data.token); // Store token for future use
            onSigninSuccess(); // Notify parent about successful signin
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error occurred');
        }
    };

    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign In</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Signin;
