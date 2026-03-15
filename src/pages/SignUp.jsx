import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = () => {

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const user = { name, email, password };

        dispatch(signup(user));

        navigate("/");

    };

    return (

        <div className="max-w-md mx-auto p-6">

            <h2 className="text-2xl font-bold mb-4">
                Signup
            </h2>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full mb-3 rounded"
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full mb-3 rounded"
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full mb-3 rounded"
            />

            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border p-2 w-full mb-4 rounded"
            />

            <button
                onClick={handleSignup}
                className="bg-green-600 text-white px-4 py-2 rounded w-full"
            >
                Signup
            </button>

        </div>

    );

};

export default Signup;