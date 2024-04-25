import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleSignUp = () => navigate('/signup');
    const handleLogin = () => navigate('/login');

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center my-8 text-green-600">Welcome to SkillSwap! :D</h1>
            <p className="text-lg text-center my-4 text-gray-800">
                A community-driven platform where you can exchange skills and knowledge.
                Learn something new or share your expertise with others.
            </p>
            <div className="flex justify-center mt-8">
                <button onClick={handleSignUp} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mx-2 transition duration-150 ease-in-out">
                    Sign Up
                </button>
                <button onClick={handleLogin} className="bg-white hover:bg-green-100 text-green-600 font-semibold py-2 px-4 border border-green-500 hover:border-transparent rounded mx-2 transition duration-150 ease-in-out">
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Home;
