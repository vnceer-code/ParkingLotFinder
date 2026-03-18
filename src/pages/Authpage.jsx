import React, { useState } from "react";
import { FiEye } from "react-icons/fi";

const AuthPage = () => {

    const [isRegister, setIsRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center ">

            <div className="bg-white w-[400px] p-6 rounded-2xl shadow-xl">

                {/* Logo */}
                <div className="flex items-center gap-2 mb-3">

                    <div className="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold">
                        P
                    </div>

                    <h2 className="text-lg font-semibold">
                        ParkFinder
                    </h2>

                </div>

                <p className="text-gray-500 text-sm mb-4">
                    Create your account to start booking.
                </p>

                {/* Tabs */}
                <div className="flex bg-gray-100 rounded-lg mb-4">

                    <button
                        onClick={() => setIsRegister(false)}
                        className={`flex-1 py-2 rounded-lg ${!isRegister ? "bg-white shadow" : ""
                            }`}
                    >
                        Sign In
                    </button>

                    <button
                        onClick={() => setIsRegister(true)}
                        className={`flex-1 py-2 rounded-lg ${isRegister ? "bg-white shadow text-blue-600" : ""
                            }`}
                    >
                        Register
                    </button>

                </div>

                {/* Form */}

                {isRegister && (
                    <input
                        type="text"
                        placeholder="Full name"
                        className="w-full border rounded-lg px-3 py-2 mb-3"
                    />
                )}

                <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border rounded-lg px-3 py-2 mb-3"
                />

                <div className="relative">

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full border rounded-lg px-3 py-2"
                    />

                    <FiEye
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                    />

                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700">

                    {isRegister ? "Create Account" : "Sign In"}

                </button>

            </div>

        </div>

    );

};

export default AuthPage;