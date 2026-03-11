import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBooking } from "../features/bookingSlice";

const BookingPage = () => {

  const { id, slotId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const confirmBooking = () => {

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

  dispatch(addBooking({
    parkingId: id,
    slotId: slotId
  }))

  return (

    <div>

      <h1>Booking Confirmation</h1>

      <p>Selected Slot: {slotId}</p>

      <button onClick={confirmBooking}>
        Confirm Booking
      </button>

    </div>

  );

};

export default BookingPage;