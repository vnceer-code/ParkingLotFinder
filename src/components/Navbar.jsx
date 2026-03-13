import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const Navbar = () => {

  const dispatch = useDispatch();

  const user = useSelector(
    (state) => state.auth.user
  );

  return (

    <nav className="bg-green-600 text-white shadow">

      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        <h1 className="text-xl font-bold">
             Parking Finder
        </h1>

        <div className="flex gap-6 items-center">

          <Link to="/">Home</Link>

          <Link to="/bookings">My Bookings</Link>

          {user ? (

            <button
              onClick={() => dispatch(logout())}
              className="bg-white text-green-600 px-3 py-1 rounded"
            >
              Logout
            </button>

          ) : (

            <Link
              to="/login"
              className="bg-white text-green-600 px-3 py-1 rounded"
            >
              Login
            </Link>

          )}

        </div>

      </div>

    </nav>

  )

}

export default Navbar;