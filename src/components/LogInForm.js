import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { getErrorMessage } from '../lib/ErrorHandler';
import { toast } from 'react-hot-toast';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { email, password } = formData;
            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res.user) {
                navigate('/dashboard')
            } 
        } catch (error) {
            const errMessage = getErrorMessage(error.message)
            toast.error(`${errMessage}`)
        }
    };

    return (
        <form className="flex flex-col mt-20 gap-3" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Email">Email</label>
                <input
                    id="Email"
                    type="email"
                    name="email"
                    className="w-full h-10 border pl-2 rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <input
                    id="Password"
                    type="password"
                    name="password"
                    className="w-full h-10 border pl-2 rounded-md"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
            </div>
            <button type="submit" className="w-full h-10 bg-green-500 text-white rounded-md mt-7">Login</button>
        </form>
    );
};

export default LoginForm