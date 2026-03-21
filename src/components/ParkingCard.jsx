import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedParking } from "../features/parkingSlice";
import { getAvailableSlots } from "../utils/slotUtils";
import { FiHeart, FiMapPin, FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { toggleFavorite } from "../features/favoriteSlice";
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
  const favorites = useSelector(state => state.favorites.favorites);

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

  console.log(lotsToDisplay);
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      {lotsToDisplay.map((lot) => {

        const availableSlots = getAvailableSlots(lot.id);
        const isFav = favorites.some(item => item.id === lot.id);

        return (
         
          <div className="flex justify-center items-center px-10 py-10" key={lot.id}
            onClick={() => handleClick(lot)} >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[600px] cursor-pointer" >

              {/* Image Section */}
              <div className="relative">

                <img
                  src={lot.image}
                  alt="parking"
                  className="w-full h-48 object-cover"
                />

                {/* Price Badge */}
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-xl font-semibold text-gray-800 shadow">
                  OMR{lot.priceperhr}/hr
                </div>

                
                <button
                  onClick={(e) => { e.stopPropagation(); dispatch(toggleFavorite(lot)); }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-md hover:scale-110 transition"
                >
                  <FiHeart
                    size={20}
                    className={`transition ${isFav
                      ? "text-red-500 fill-red-500"
                      : "text-gray-400"
                      }`}
                  />
                </button>

              </div>

              {/* Content */}
              <div className="p-4">

                {/* Title + Rating dummy data */}
                <div className="flex justify-between items-center">

                  <h3 className="text-lg font-semibold text-gray-800">
                    {lot.name}
                  </h3>

                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span className="text-gray-700 font-medium">3.5</span>
                  </div>

                </div>

                {/* Address */}
                <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
                  <FiMapPin />
                  {lot.address} - {lot.distance} km away
                </div>

                {/* Availability */}
                <div className="mt-3 text-sm font-semibold"
                  style={{ color: availableSlots === 0 ? "#ef4444" : availableSlots <= lot.totalslots * 0.3 ? "#f97316" : "#22c55e" }}>
                  {availableSlots} of {lot.totalslots} free
                </div>

                {/* Progress Bar */}
                {(() => {
                  const occupiedPct = Math.round(((lot.totalslots - availableSlots) / lot.totalslots) * 100);
                  const barColor = occupiedPct >= 90 ? "bg-red-500" : occupiedPct >= 60 ? "bg-orange-400" : "bg-green-500";
                  return (
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                      <div
                        className={`${barColor} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${occupiedPct}%` }}
                      ></div>
                    </div>
                  );
                })()}

                {/* Bottom Section dummy data*/}
                <div className="flex justify-between items-center mt-4 text-sm">

                  <div className="flex items-center gap-2 text-gray-500">
                    <FiClock />
                    08:00–24:00
                  </div>

                  <div className="font-semibold text-gray-800">
                    OMR{lot.priceperday}/day
                  </div>

                </div>

              </div>

            </div>
          </div>


        )

      }





      )}

    </div>

  );

};

export default ParkingCard;