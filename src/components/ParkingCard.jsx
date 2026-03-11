import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedParking } from "../features/parkingSlice";

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

      {parkingLots.map((lot) => (
        <div
          key={lot.id}
          onClick={() => handleClick(lot)}
          className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer bg-white"
        >

          <h3 className="text-lg font-semibold">
            {lot.name}
          </h3>

          <p className="text-gray-600">
            Total Slots: {lot.totalslots}
          </p>

        </div>
      ))}

    </div>

  );

};

export default ParkingCard;