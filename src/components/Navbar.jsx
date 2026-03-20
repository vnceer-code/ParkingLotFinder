import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowAuthModal } from "../features/authSlice";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import { FiHeart } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { logout } from "../features/authSlice";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(
    (state) => state.auth.loggedinUser
  );
  const favoriteCount = useSelector((state) => state.favorites.favorites.length);



  return (
    <div className="border-b border-gray-300 fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="bg-white ">

        <div className="px-10  py-3 flex justify-between items-center">

          <h1 className="text-xl font-bold flex items-center gap-2">
            <img src={logo} alt="ParkFinder Logo" className="h-8 w-8" />
            ParkFinder
          </h1>
          <div className="w-1/3 ">
            <SearchBar />
          </div>
          {currentUser ? (<div className="flex gap-4">
            <button className="flex items-center text-gray-600 relative gap-2  focus:bg-gray-100 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => {
               navigate("/favourites")
              }
              }
            >

              <FiHeart className={favoriteCount > 0 ? "text-red-500 fill-red-500" : "text-gray-600"} />

              Saved

              {favoriteCount > 0 && (
                <span className="min-w-5 h-5 px-1 absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs font-semibold flex items-center justify-center">
                  {favoriteCount}
                </span>
              )}

            </button>
            <button className="flex items-center text-gray-600 gap-2  focus:bg-gray-100 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => {
                navigate("/bookings")
              }
              }
            >

              <FiCalendar />

              Bookings

            </button>
            <button onClick={() => { navigate("/") }} className="flex items-center text-gray-600 gap-2  focus:bg-gray-100 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 transition">

              <FaHome className="text-xl" />
            </button>
            <button className="flex items-center text-red-500 gap-2  focus:bg-gray-100 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => {
                dispatch(logout())
              }
              }
            >

              <FiLogOut />

              Sign Out

            </button>
          </div>) :

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
          }

        </div >

      </nav >
    </div >



  )

}

export default Navbar;