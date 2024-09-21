import React from 'react';
import { FaSave, FaCog } from 'react-icons/fa';

const Header = ({ onSignup, onSignin, isAuthenticated, onLogout, onSave }) => {
    return (
        <header className="flex justify-between items-center w-full mb-4 p-4 bg-gray-800">
            <h1 className="text-2xl font-bold text-white">CodePen Clone</h1>
            <div className="flex items-center">
                {isAuthenticated ? (
                    <>
                        <button 
                            onClick={onSave} 
                            className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400"
                        >
                            <FaSave className="inline mr-1" /> Save
                        </button>
                        <button 
                            onClick={onLogout} 
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button 
                            onClick={onSave} 
                            className="mr-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
                        >
                            <FaSave className="inline mr-1" /> Save
                        </button>
                        <button 
                            onClick={onSave} 
                            className="mr-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
                        >
                            <FaCog className="inline mr-1" /> Settings
                        </button>
                        <button 
                            onClick={onSignup} 
                            className="mr-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
                        >
                            Sign Up
                        </button>
                        <button 
                            onClick={onSignin} 
                            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
                        >
                            Log In
                        </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
