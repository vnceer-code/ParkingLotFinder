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

const BookingPage = () => {
  const [step, setStep] = useState(1);

  const [bookingData, setBookingData] = useState({
    time: "",
    vehicle: "",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-[400px] p-6 rounded-2xl shadow-lg">

        {/* Step Indicator */}
        <div className="flex justify-between mb-6">
          <span className={step === 1 ? "font-bold" : ""}>Time</span>
          <span className={step === 2 ? "font-bold" : ""}>Vehicle</span>
          <span className={step === 3 ? "font-bold" : ""}>Confirm</span>
        </div>

        {step === 1 && (
          <TimeSelection
            data={bookingData}
            setData={setBookingData}
            next={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <VehicleSelection
            data={bookingData}
            setData={setBookingData}
            next={() => setStep(3)}
            back={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <ConfirmBooking
            data={bookingData}
            back={() => setStep(2)}
          />
        )}
      </div>
    </div>
  );
}
export default BookingPage;