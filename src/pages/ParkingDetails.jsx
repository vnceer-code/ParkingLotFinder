import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SlotGrid from "../components/SlotGrid";
import { getAvailableSlots } from "../utils/slotUtils";
import Navbar from "../components/Navbar";
import { FiMapPin, FiHeart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { toggleFavorite } from "../features/favoriteSlice";

const ParkingDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const parking = useSelector(
        (state) => state.parking.selectedParking
    )
    const favorites = useSelector((state) => state.favorites.favorites);
    const isFav = favorites.some(item => item.id === parking?.id);
    const availableSlots = getAvailableSlots(parking.id)

    return (
        <>
            <Navbar />
            <div className=" max-w-6xl mx-auto absolute top-20 left-0 right-0">

                {parking?.name && (
                    <div className="relative">
                        <img src={parking.image} alt={parking.name} className="w-full h-94 object-cover rounded-lg mt-6" />
                        <button
                            onClick={() => dispatch(toggleFavorite(parking))}
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
                        >
                            <FiHeart
                                className={`text-xl ${isFav ? "text-red-500 fill-red-500" : "text-gray-500"}`}
                                style={{ fill: isFav ? "currentColor" : "none" }}
                            />
                        </button>
                    </div>
                )}

                <div className=" relative bottom-20 left-10">
                    <h1 className="text-3xl font-bold text-white ">
                        {parking?.name}
                    </h1>
                    <div className="flex items-center gap-2 text-white mt-2 text-sm">
                        <FiMapPin />
                        777 Sports Arena Dr, San Francisco
                    </div>
                </div>
                <div className="flex  items-center justify-between  px-20 py-4 bg-white rounded-lg shadow-lg relative bottom-20">
                    <div className="flex flex-col items-center gap-2 text-sm">
                        <p className="mt-2 text-gray-700 font-bold text-lg">
                            {parking?.totalslots}

                        </p>
                        <p className="text-gray-400 font-bold"> Total Slots</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-sm">
                        <p className="mt-2 text-gray-700 font-bold text-lg">
                            {availableSlots}

                        </p>
                        <p className="text-gray-400 font-bold"> Available Slots</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-sm">
                        <p className="mt-2 text-gray-700 font-bold text-lg">
                            OMR2

                        </p>
                        <p className="text-gray-400 font-bold"> Per Hour</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-sm">
                        <p className="mt-2 text-gray-700 font-bold text-lg">
                            OMR20

                        </p>
                        <p className="text-gray-400 font-bold"> Per Day</p>
                    </div>
                </div>



                <SlotGrid />

            </div>
        </>


    )

}

export default ParkingDetails