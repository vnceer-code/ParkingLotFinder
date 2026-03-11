import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../features/bookingSlice";

const BookingPage = () => {

  const { id, slotId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const parking = useSelector(
    (state) => state.parking.selectedParking
  )

  console.log(parking);
  const handleConfirmBooking = () => {

    const stored = JSON.parse(localStorage.getItem("parkingSlots")) || {};

    const updatedSlots = stored[id].map((slot) => {

      if (slot.id === slotId) {
        return { ...slot, status: "occupied" }
      }

      return slot;

    });

    stored[id] = updatedSlots;

    localStorage.setItem("parkingSlots", JSON.stringify(stored));

    navigate(`/parking/${id}`);

  };
  const bookingData = {
    parkingId: id,
    slotId: slotId,
    parkingName: parking?.name,
    time: new Date().toLocaleTimeString()
  };
  dispatch(addBooking(bookingData));


  return (

    <div className="p-6 max-w-md mx-auto shadow-xl rounded-lg bg-white mt-20 text-center">

      <h1 className="text-2xl font-bold mb-4">
        Confirm Booking
      </h1>

      <p className="mb-2">
        Parking: <strong>{parking?.name}</strong>
      </p>

      <p className="mb-4">
        Slot: <strong>{slotId}</strong>
      </p>

      <button
        onClick={handleConfirmBooking}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Confirm Booking
      </button>

    </div>

  );

};

export default BookingPage;