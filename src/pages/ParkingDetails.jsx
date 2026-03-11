import React from "react";
import { useSelector } from "react-redux";
import SlotGrid from "../components/SlotGrid";
import { getAvailableSlots } from "../utils/slotUtils";

const ParkingDetails = () => {
   

    const parking = useSelector(
        (state) => state.parking.selectedParking
    )
     const availableSlots = getAvailableSlots(parking.id)

    return (

        <div className="p-6">

            <h1 className="text-3xl font-bold text-blue-600 mb-4">
                {parking?.name}
            </h1>

            <p className="mt-2 text-gray-600">
                Total Slots : {parking?.totalslots}
            </p>

            <h2 className="text-xl mt-6 font-semibold">
                Available Slots : <span className="text-green-600 font-bold">{availableSlots}</span>
            </h2>

            <SlotGrid />

        </div>

    )

}

export default ParkingDetails