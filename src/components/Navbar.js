import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onSave }) => {
    return (
        <header className="bg-gray-800 text-white shadow-lg">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <div className="flex items-center space-x-6">
                    <Link to="/" className="text-lg hover:text-gray-400 p-2">Home</Link>
                    <Link to="/profile" className="text-lg hover:text-gray-400 p-2">Profile</Link>
                    <Link to="/editor" className="text-lg hover:text-gray-400 p-2">Create Pen</Link>
                </div>
                <div className="flex space-x-4">
                    <button 
                        onClick={onSave} 
                        className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-slate-300 transition duration-150 ease-in-out"
                    >
                        Save
                    </button>
                    <Link to="/login">
                        <button className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-slate-300 transition duration-150 ease-in-out">
                            Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-slate-300 transition duration-150 ease-in-out">
                            Signup
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
