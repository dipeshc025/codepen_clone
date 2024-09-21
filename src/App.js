import React, { useState, useEffect } from 'react';
import Editor from './components/Editor/Editor';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';
import Header from './components/Header';

function App() {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [srcDoc, setSrcDoc] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showSignin, setShowSignin] = useState(false);
    const [message, setMessage] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
                <html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>
            `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    const handleSignupSuccess = () => {
        setShowSignup(false);
        setShowSignin(true);
    };

    const handleSigninSuccess = () => {
        setIsAuthenticated(true);
        setShowSignin(false);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('token');
    };

    const handleSave = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setMessage('You need to be logged in to save.');
            return;
        }
        // Add your save logic here (e.g., sending data to the backend)
        setMessage('Saved successfully!');
    };

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`min-h-screen flex flex-col items-center p-5 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <Header 
                onSignup={() => setShowSignup(true)}
                onSignin={() => setShowSignin(true)}
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
                onSave={handleSave}
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
            />

            {/* Show Signup or Signin Form */}
            {showSignup && <Signup onSignupSuccess={handleSignupSuccess} />}
            {showSignin && <Signin onSigninSuccess={handleSigninSuccess} />}

            {/* Code Editor */}
            <div className="flex w-full gap-4 mb-4">
                <div className="flex-1">
                    <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
                </div>
                <div className="flex-1">
                    <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
                </div>
                <div className="flex-1">
                    <Editor language="javascript" displayName="JS" value={js} onChange={setJs} />
                </div>
            </div>

            {/* Output iframe */}
            <div className="w-full h-96 mb-4 border border-gray-300 rounded-lg shadow-md">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    className="w-full h-full rounded-lg"
                />
            </div>

            {/* Save Message */}
            {message && <p className="text-red-500">{message}</p>}
        </div>
    );
}

export default App;
