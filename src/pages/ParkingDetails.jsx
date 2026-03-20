import React from "react";
import { useSelector } from "react-redux";
import SlotGrid from "../components/SlotGrid";
import { getAvailableSlots } from "../utils/slotUtils";
import Navbar from "../components/Navbar";
import { FiMapPin } from "react-icons/fi";
import { useParams } from "react-router-dom";

const ParkingDetails = () => {

    const { id } = useParams();
    const parking = useSelector(
        (state) => state.parking.selectedParking
    )
    const availableSlots = getAvailableSlots(parking.id)

    return (
        <>
            <Navbar />
            <div className=" max-w-6xl mx-auto absolute top-20 left-0 right-0">

                {parking?.name && <img src={parking.image} alt={parking.name} className="w-full h-94 object-cover rounded-lg mt-6" />}

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