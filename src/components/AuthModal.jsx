import React, { useState } from "react";
import { FiEye, FiX } from "react-icons/fi";

const AuthModal = ({ closeModal }) => {

    const [isRegister, setIsRegister] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (

        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

            {/* Card */}
            <div className="bg-white w-[400px] p-6 rounded-2xl shadow-xl relative">

                {/* Close button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                    <FiX />
                </button>

                {/* Header */}
                <h2 className="text-xl font-semibold mb-2">
                    {isRegister ? "Create Account" : "Sign In"}
                </h2>

                <p className="text-gray-500 text-sm mb-4">
                    Access your parking dashboard
                </p>

                {/* Tabs */}
                <div className="flex bg-gray-100 rounded-lg mb-4">

                    <button
                        onClick={() => setIsRegister(false)}
                        className={`flex-1 py-2 rounded-lg cursor-pointer ${!isRegister ? "bg-white shadow text-blue-600" : ""
                            }`}
                    >
                        Sign In
                    </button>

                    <button
                        onClick={() => setIsRegister(true)}
                        className={`flex-1 py-2 rounded-lg cursor-pointer ${isRegister ? "bg-white shadow text-blue-600" : ""
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
                    placeholder="Email"
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

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 cursor-pointer">

                    {isRegister ? "Register" : "Sign In"}

                </button>

            </div>

        </div>

    );

};

export default AuthModal;