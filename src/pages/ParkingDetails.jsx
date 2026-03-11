import React from "react";
import { useSelector } from "react-redux";
import SlotGrid from "../components/SlotGrid";

const ParkingDetails = () => {

    const parking = useSelector(
        (state) => state.parking.selectedParking
    )

    return (

        <div className="p-6">

            <h1 className="text-3xl font-bold">
                {parking?.name}
            </h1>

            <p className="mt-2 text-gray-600">
                Total Slots : {parking?.totalslots}
            </p>

            <h2 className="text-xl mt-6 font-semibold">
                Available Slots
            </h2>

            <SlotGrid />

        </div>

    )

}

export default ParkingDetails