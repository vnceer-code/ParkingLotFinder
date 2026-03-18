import React from "react";
import { useSelector } from "react-redux";
import SlotGrid from "../components/SlotGrid";
import { getAvailableSlots } from "../utils/slotUtils";
import Navbar from "../components/Navbar";
import { FiMapPin } from "react-icons/fi";

const ParkingDetails = () => {


    const parking = useSelector(
        (state) => state.parking.selectedParking
    )
    const availableSlots = getAvailableSlots(parking.id)

    return (

        <div className=" max-w-6xl mx-auto absolute top-0 left-0 right-0">
            <Navbar />
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
            <div className="flex  items-center  gap-4">
                <div className="flex flex-col items-center gap-2 text-sm">
                    <p className="mt-2 text-gray-600 ">
                        {parking?.totalslots}

                    </p>
                    <p> Total Slots</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-sm">
                    <p className="mt-2 text-gray-600 ">
                        {availableSlots}

                    </p>
                    <p> Available Slots</p>
                </div>
            </div>



            <SlotGrid />

        </div>

    )

}

export default ParkingDetails