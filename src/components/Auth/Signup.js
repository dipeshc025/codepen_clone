import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ onSignupSuccess }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // For loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages
        setLoading(true); // Set loading state

        try {
            const response = await axios.post('http://localhost:5000/api/signup', {
                username: username.trim(), // Trim input
                email: email.trim(),
                password: password.trim(),
            });

            setMessage(response.data.message);
            onSignupSuccess(); 
        } catch (error) {
            // Handle different types of errors
            if (error.response) {
                setMessage(error.response.data.message || 'Error occurred during signup');
            } else {
                setMessage('Network error. Please try again later.');
            }
        } finally {
            setLoading(false); // Remove loading state
        }
    };

    return (
        <div className="signup-container" style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                />
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
                {/* Sign Up Button */}
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: '10px',
                        backgroundColor: loading ? '#ddd' : '#28A745',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                >
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>
            {message && <p>{message}</p>} {/* Display message */}
        </div>
    );
};

export default Signup;
