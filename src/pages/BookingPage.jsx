// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addBooking } from "../features/bookingSlice";

// const BookingPage = () => {

//   const { id, slotId } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const parking = useSelector(
//     (state) => state.parking.selectedParking
//   )

//   console.log(parking);
//   const handleConfirmBooking = () => {

//     const stored = JSON.parse(localStorage.getItem("parkingSlots")) || {};

//     const updatedSlots = stored[id].map((slot) => {

//       if (slot.id === slotId) {
//         return { ...slot, status: "occupied" }
//       }

//       return slot;

//     });

//     stored[id] = updatedSlots;

//     localStorage.setItem("parkingSlots", JSON.stringify(stored));

//     navigate(`/booking-confirmation/${id}/${slotId}`);

//   };
//   const bookingData = {
//     parkingId: id,
//     slotId: slotId,
//     parkingName: parking?.name,
//     time: new Date().toLocaleTimeString()
//   };
//   dispatch(addBooking(bookingData));


//   return (

//     <div className="p-6 max-w-md mx-auto shadow-xl rounded-lg bg-white mt-20 text-center">

//       <h1 className="text-2xl font-bold mb-4 text-blue-600">
//         Complete Booking
//       </h1>

//       <p className="mb-2">
//         Parking: <strong>{parking?.name}</strong>
//       </p>

//       <p className="mb-4">
//         Slot: <strong>{slotId}</strong>
//       </p>

//       <button
//         onClick={handleConfirmBooking}
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Confirm Booking
//       </button>

//     </div>

//   );

// };

// export default BookingPage;
import { useState } from "react";
import TimeSelection from "../components/TimeSelection";
import VehicleSelection from "../components/VehicleSelection";
import ConfirmBooking from "../components/ConfirmBooking";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "../features/bookingSlice";
const BookingPage = () => {
  const { id, slotId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const parking = useSelector(
    (state) => state.parking.selectedParking
  );
  const BookingData = useSelector((state) => state.booking);

  const [step, setStep] = useState(1);

  const handleConfirmBooking = () => {
    console.log(BookingData);

    const stored = JSON.parse(localStorage.getItem("parkingSlots")) || {};

    const updatedSlots = stored[id].map((slot) => {

      if (slot.id === slotId) {
        return { ...slot, status: "occupied" }
      }

      return slot;

    });

    stored[id] = updatedSlots;

    localStorage.setItem("parkingSlots", JSON.stringify(stored));

    const finalBookingData = {
      id: Date.now(),
      parkingId: id,
      slotId: slotId,
      parkingName: parking?.name,
      checkInDate: BookingData.checkInDate,
      checkInTime: BookingData.checkInTime,
      checkOutDate: BookingData.checkOutDate,
      checkOutTime: BookingData.checkOutTime,
      vehicleNumber: BookingData.vehicleNumber,
      duration: BookingData.duration,
      amount: BookingData.amount,
    };
    console.log(finalBookingData);
    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    existingBookings.push(finalBookingData);

    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    dispatch(addBooking(finalBookingData));

    console.log("Saved Booking:", finalBookingData);
    alert("Booking Confirmed!");
    navigate(`/booking-confirmation/${finalBookingData.id}`);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white w-[400px] p-6 rounded-2xl shadow-lg">
          <div className="text-center">
            <h1 className="text-lg font-bold mb-1">Complete Booking</h1>
            <p className="text-gray-500 fond-semibold mb-7">{parking.name} . slot {slotId}</p>
          </div>

          {/* Step Indicator */}
          <div className="flex justify-between mb-6">
            <span className={step === 1 ? "font-bold text-blue-500" : ""}>Time</span>
            <span className={step === 2 ? "font-bold text-blue-500" : ""}>Vehicle</span>
            <span className={step === 3 ? "font-bold text-blue-500" : ""}>Confirm</span>
          </div>

          {step === 1 && (
            <TimeSelection
              next={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <VehicleSelection
              next={() => setStep(3)}
              back={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <ConfirmBooking
              data={BookingData}
              back={() => setStep(2)}
              onClick={handleConfirmBooking}
            />
          )}
        </div>
      </div></>
  );
}
export default BookingPage;