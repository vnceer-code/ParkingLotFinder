import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedParking } from "../features/parkingSlice";
import { getAvailableSlots } from "../utils/slotUtils";

const ParkingCard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const parkingLots = useSelector(
    (state) => state.parking.parkingLots
  );

  const handleClick = (lot) => {
    dispatch(setSelectedParking(lot));
    navigate(`/parking/${lot.id}`);
  };

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {parkingLots.map((lot) => {

        const availableSlots = getAvailableSlots(lot.id)

        return (
          <div
            key={lot.id}
            onClick={() => handleClick(lot)}
            className="border rounded-lg p-4 shadow hover:shadow-lg  cursor-pointer bg-white transition"
          >

            <h3 className="text-lg font-semibold text-green-600">
              {lot.name}
            </h3>

            <p className="text-gray-600 text-gray-600 font-bold ">
              Total Slots: {lot.totalslots}
            </p>

            <p className="text-gray-600">
              Available Slots: <span className="text-green-600 font-bold">{availableSlots}</span>
            </p>

          </div>
        )

      }





      )}

    </div>

  );

};

export default ParkingCard;