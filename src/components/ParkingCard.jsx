import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedParking } from "../features/parkingSlice";
import { getAvailableSlots } from "../utils/slotUtils";
import { setSearchQuery, setLocationFilter, setAvailabilityFilter, setDistanceFilter, setPriceFilter } from "../features/parkingSlice";

const ParkingCard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const parkingLots = useSelector(
    (state) => state.parking.parkingLots
  );
  const filters = useSelector(
    (state) => state.parking.filters
  );
  const searchQuery = useSelector(
    (state) => state.parking.searchQuery
  );

  const handleClick = (lot) => {
    dispatch(setSelectedParking(lot));
    navigate(`/parking/${lot.id}`);
  };
  const filteredLots = parkingLots.filter((lot) => {
    if (
      searchQuery &&
      !lot.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }


    if (filters.location && !lot.name.toLowerCase().includes(filters.location)) {
      return false
    }

    if (filters.price && lot.price > filters.price) {
      return false
    }

    if (filters.distance && lot.distance > filters.distance) {
      return false
    }

    if (filters.available) {
      const availableSlots = getAvailableSlots(lot.id);
      if (availableSlots === 0) {
        return false;
      }
    }

    return true;

  })

  const lotsToDisplay =
    filters.location || filters.price || filters.distance || filters.available || searchQuery
      ? filteredLots
      : parkingLots;
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {lotsToDisplay.map((lot) => {

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