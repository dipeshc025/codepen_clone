import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux'; 
import store from './redux/store.js';
import Home from './pages/Home.js';
import Editor from './pages/Editor.js';
import Profile from './pages/Profile.js';
import Navbar from './components/Navbar.js';
import Signup from './auth/Signup.js';
import Login from './auth/Login.js';
import NotFound from './pages/NotFound.js'; 

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = useSelector((state) => !!state.auth.user);
    return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/editor/:penId?" element={<ProtectedRoute element={<Editor />} />} />
                    <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
