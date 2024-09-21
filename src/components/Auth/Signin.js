import React, { useState } from 'react';
import axios from 'axios';

const Signin = ({ onSigninSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); 
        setLoading(true); 

        try {
            const response = await axios.post('http://localhost:5000/api/signin', {
                email: email.trim(), // Trim input
                password: password.trim(),
            });

            setMessage(`Welcome, ${response.data.username}!`);
            localStorage.setItem('token', response.data.token); // Store token

            onSigninSuccess(); // Notify parent component
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message || 'Invalid credentials');
            } else {
                setMessage('Failed to sign in. Please try again.');
            }
        } finally {
            setLoading(false); // Remove loading state
        }
    };

    return (
        <div className="signin-container" style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
                {/* Sign In Button */}
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: '10px',
                        backgroundColor: loading ? '#ddd' : '#007BFF',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                >
                    {loading ? 'Signing in...' : 'Sign In'}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Signin;
