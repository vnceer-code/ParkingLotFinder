import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowAuthModal } from "../features/authSlice";


const SlotGrid = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [slots, setSlots] = useState([]);
  const loggedinUser = useSelector((state) => state.auth.loggedinUser);
  const parking = useSelector(
    (state) => state.parking.selectedParking
  );

  function generateSlots(totalSlots) {
    console.log(totalSlots);
    let arr = [];

    for (let i = 1; i <= totalSlots; i++) {

      arr.push({
        id: `A${i}`,
        status: "available"
      })

    }

    return arr;

  }

  const handleSlotClick = (slotId) => {

    if (!loggedinUser) {
      dispatch(setShowAuthModal(true));
      return;
    }

    navigate(`/parking/${id}/booking/${slotId}`);

  };

  useEffect(() => {

    const stored = JSON.parse(localStorage.getItem("parkingSlots")) || {};


    if (stored[id]) {

      setSlots(stored[id]);

    } else {

      // create new slots if not exist
      const newSlots = generateSlots(parking?.totalslots || 0);

      stored[id] = newSlots;

      localStorage.setItem("parkingSlots", JSON.stringify(stored));

      setSlots(newSlots);

    }

  }, [id, parking])

  return (

    <div className="grid sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8 2xl:grid-cols-10 gap-4 p-6  shadow-xl rounded-lg bg-white">

      {slots.map((slot) => (
        <div
          key={slot.id}
          className={`p-4 text-center font-semibold rounded-lg cursor-pointer text-white transition
            ${slot.status === "available"
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-gray-200"
            }`}
          onClick={() => handleSlotClick(slot.id)}
        >

          {slot.id}

        </div>
      ))}

    </div>

  )

}

export default SlotGrid