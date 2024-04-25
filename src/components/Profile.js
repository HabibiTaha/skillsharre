// src/Profile.js
import React from 'react';

const Profile = () => {
    // Dummy data for skills, you can replace this with real data fetched from a backend or state management
    const skills = ['React', 'Node.js', 'CSS', 'HTML'];

    return (
        <div className="container mx-auto px-4 py-8 text-white bg-gray-800">
            <h1 className="text-2xl font-bold">My Profile</h1>
            <div className="flex items-center mt-2 gap-3">
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile" className="w-14 h-14 rounded-full" />
                </div>
                <h1 className="text-2xl">user1</h1>
            </div>
            <h2 className="mt-4 text-xl">Skills:</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill} className="ml-4">{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
