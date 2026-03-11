import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SlotGrid = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const [slots, setSlots] = useState([]);

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

    navigate(`/parking/${id}/booking/${slotId}`);

  };

  useEffect(() => {

    const stored = JSON.parse(localStorage.getItem("parkingSlots")) || {};

    if (stored[id]) {

      setSlots(stored[id]);

    } else {

      // create new slots if not exist
      const newSlots = generateSlots(20);

      stored[id] = newSlots;

      localStorage.setItem("parkingSlots", JSON.stringify(stored));

      setSlots(newSlots);

    }

  }, [id])

  return (

    <div className="grid grid-cols-6 gap-4 mt-6">

      {slots.map((slot) => (
        <div
          key={slot.id}
          className={`p-4 text-center font-semibold rounded-lg cursor-pointer text-white transition
            ${slot.status === "available"
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500"
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