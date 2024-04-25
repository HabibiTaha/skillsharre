import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useDarkMode } from './DarkModeContext';
const Navbar = () => {
    return (
        <nav className="bg-green-500">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-white text-lg">
                    <Link to="/" className="font-semibold">SkillSwap</Link>
                </div>
                <ul className="flex items-center">
                    {/* Add links as needed */}
                    <li className="text-white ml-6">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="text-white ml-6">
                        <Link to="/profile">Profile</Link>
                    </li>
                    {/* Profile Icon */}
                    <li className="ml-6">
                        <Link to="/profile">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile" className="w-8 h-8 rounded-full" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const Navibar = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <nav>
            {/* Other navigation items */}
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </nav>
    );
};

export default Navbar;
