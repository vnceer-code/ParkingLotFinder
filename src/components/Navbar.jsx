import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
const Navbar = () => {

  const dispatch = useDispatch();

  const user = useSelector(
    (state) => state.auth.user
  );

  return (

    <nav className="bg-white border-b border-gray-300">

      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        <h1 className="text-xl font-bold flex items-center gap-2">
          <img src={logo} alt="ParkFinder Logo" className="h-8 w-8" />
          ParkFinder
        </h1>
        <div className="w-1/3 ">
          <SearchBar />
        </div>

        <div className="flex gap-6 items-center">

          <Link to="/">Home</Link>

          <Link to="/bookings"> Bookings</Link>
          <Link to="/bookings"> Favourites</Link>

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