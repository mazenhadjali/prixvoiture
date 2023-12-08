// Import necessary dependencies and components
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import { useToast } from '../../toast/ToastProvider';
import { BASEURL } from '../../Apis';

// Define the Register component
const Register = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const [registerErr, setRegisterErr] = useState(false);

    // Handle registration form submission
    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        // Extract form fields
        const name = formData.get('name');
        const family_name = formData.get('family_name');
        const gender = formData.get('gender');
        const nTel = formData.get('nTel');
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            // Send registration request to the server
            await axios.post(`${BASEURL}auth/register`, {
                name,
                family_name,
                gender,
                nTel,
                email,
                password,
            }).then(() => {
                // Display success toast and navigate to login page
                toast?.pushSuccess("Registration successful!", 3000);
                navigate("/login");
            });
        } catch (error) {
            // Handle registration failure
            console.error("Registration failed:", error);
            setRegisterErr(true);
        }
    };

    return (
        <div className="bg-gray-50 h-screen flex items-center justify-center">
            <div className="p-5 bg-white border-2 border-second rounded-lg container max-w-lg flex-1 flex flex-col items-center justify-center">
                <div className="w-full text-center">
                    <h1 className="text-6xl font-bold text-main mb-10">Create Account</h1>
                    <h2 className="m-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-main">Sign up for a new account</h2>
                </div>

                <div className="p-5 w-full">
                    {registerErr && (
                        <div className="bg-red-100 border border-red-400 text-red-700 my-2 px-4 py-3 rounded" role="alert">
                            <strong className="font-bold">Oops!</strong>
                            <span className="block sm:inline"> Something went wrong, please try again!</span>
                        </div>
                    )}
                    <form className="space-y-6" onSubmit={handleRegister}>
                        {/* Repeat this pattern for other fields */}
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-main text-gray-900">Name</label>
                            <input id="name" name="name" type="text" required placeholder='Name' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div>
                            <label htmlFor="family_name" className="block mb-2 text-sm font-medium text-main text-gray-900">Family Name</label>
                            <input id="family_name" name="family_name" type="text" required placeholder='Family name' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div>
                            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-main text-gray-900">Gender</label>
                            <select id="gender" name="gender" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option>Sexe</option>
                                <option value="Homme">Homme</option>
                                <option value="Femme">Femme</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="nTel" className="block mb-2 text-sm font-medium text-main text-gray-900">Phone Number</label>
                            <input id="nTel" name="nTel" type="text" required placeholder='Numero Telephone' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-main text-gray-900">Email</label>
                            <input id="email" name="email" type="email" required placeholder='Email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-main text-gray-900">Password</label>
                            <input id="password" name="password" type="password" required placeholder='Password' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>

                        <div>
                            <Button type="submit" additionalClass={"w-full"}>Sign Up</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
