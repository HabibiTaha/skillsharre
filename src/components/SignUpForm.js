import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { getErrorMessage } from '../lib/ErrorHandler';
import { toast } from 'react-hot-toast';

const SignUpForm = () => {
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
            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (res.user) {
                navigate('/login')
            } 
        } catch (error) {
            const errMessage = getErrorMessage(error.message)
            toast.error(`${errMessage}`)
            // console.log(val)
            // console.log(error.message)
        }
       


        // try {
        // const response = await fetch('/api/auth/signup', {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // });

        // if (response.ok) {
        //     const result = await response.json();
        //     console.log(result);
        //     navigate('/Dashboard')
        //     // You may want to do more upon success, like redirect or clear the form.
        // } else {
        //     // If we reach here, the server responded with an error
        //     const errorResult = await response.json();
        //     console.error(errorResult);
        // }
        // } catch (error) {
        // console.error('Sign up failed:', error);
        // }
    };

    return (
        <form className="flex flex-col mt-20 gap-3" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="UserName">Username</label>
                <input
                    id="UserName"
                    type="text"
                    name="username"
                    className="w-full h-10 border pl-2 rounded-md"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                />
            </div>
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
            <button type="submit" className="w-full h-10 bg-green-500 text-white rounded-md mt-7">Sign Up</button>
        </form>
    );
};

export default SignUpForm