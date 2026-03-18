import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowAuthModal } from "../features/authSlice";

import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
const Navbar = () => {

  const dispatch = useDispatch();

  const user = useSelector(
    (state) => state.auth.user
  );

  return (
    <div className="border-b border-gray-300">
      <nav className="bg-white ">

        <div className="px-10  py-3 flex justify-between items-center">

          <h1 className="text-xl font-bold flex items-center gap-2">
            <img src={logo} alt="ParkFinder Logo" className="h-8 w-8" />
            ParkFinder
          </h1>
          <div className="w-1/3 ">
            <SearchBar />
          </div>

          <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-600 font-medium focus:bg-gray-100 rounded-lg hover:bg-gray-100 transition text-gray-600 cursor-pointer"
              onClick={() => dispatch(setShowAuthModal(true))}
              // className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Sign In
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer"
            onClick={() => dispatch(setShowAuthModal(true))}
            >
              Get Started
            </button>
          </div>

        </div>

      </nav>
    </div>



  )

}

export default Navbar;