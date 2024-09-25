import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    // Get the user from the Redux store
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">User Profile</h1>

            {/* Check if user is available */}
            {user ? (
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <p className="text-lg font-medium">Username: <span className="font-bold">{user.username}</span></p>
          
                    <p className="text-lg font-medium">Email: <span className="font-bold">{user.email}</span></p>
                   
                </div>
            ) : (
                <p className="text-lg text-red-600">User not found. Please log in.</p>
            )}
        </div>
    );
};

export default Profile;
