import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {

        const user = {
            email: email
        };

        dispatch(login(user));

        navigate("/");

    };

    return (

        <div className="max-w-md mx-auto p-6">

            <h2 className="text-2xl font-bold mb-4">
                Login
            </h2>

            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full mb-4 rounded"
            />

            <button
                onClick={handleLogin}
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Login
            </button>

        </div>

    )

}

export default Login;