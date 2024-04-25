import React from 'react';
import { skills } from '../data'

const Dashboard = () => {
    // Placeholder data - replace this with data fetched from your backend
    const skillOffers = ['Web Development', 'Graphic Design'];
    const skillRequests = ['Public Speaking', 'Digital Marketing'];
    const notifications = ['You have a new message', 'New match found: Digital Marketing'];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center my-8 text-green-600">Your Dashboard</h1>

            {/* Skill Offers Section */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-green-500">Your Skill Offers</h2>
                
                <div className="grid grid-cols-5 gap-3">
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-2 text-gray-800 border p-3">
                            <h2>{skill.name}</h2>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skill Requests Section */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-green-500">Your Skill Requests</h2>
                <ul className="list-disc pl-5">
                    {skillRequests.map((skill, index) => (
                        <li key={index} className="mb-2 text-gray-800">{skill}</li>
                    ))}
                </ul>
            </section>

            {/* Notifications Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-green-500">Notifications</h2>
                <ul className="list-disc pl-5">
                    {notifications.map((notification, index) => (
                        <li key={index} className="mb-2 text-gray-800">{notification}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;
