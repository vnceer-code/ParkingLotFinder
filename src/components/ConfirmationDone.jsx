import { FiCheckCircle, FiMapPin, FiCalendar } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ConfirmationDone = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const bookings = useSelector((state) => state.booking.bookings);
    const persistedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const allBookings = bookings.length ? bookings : persistedBookings;
    const latestBooking = allBookings.find((b) => String(b.id) === String(id));

    if (!latestBooking) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
                <div className="bg-white p-6 rounded-xl shadow text-center">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Booking not found</h2>
                    <p className="text-gray-500">Please open this page from a valid booking confirmation.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">

            {/* ✅ Top Icon */}
            <div className="bg-green-100 p-4 rounded-full mb-4">
                <FiCheckCircle className="text-green-600 text-4xl" />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800">
                Booking Confirmed
            </h1>
            <p className="text-gray-500 mb-6">
                Your spot is reserved. See you there!
            </p>

            {/* Card */}
           
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">

                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 flex justify-between items-center">
                    <div>
                        <p className="text-sm opacity-80">BOOKING REF</p>
                        <p className="font-bold tracking-widest">#{latestBooking.id}</p>
                    </div>
                    <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        CONFIRMED
                    </span>
                </div>

                {/* Body */}
                <div className="p-4 space-y-4">

                    {/* Location */}
                    <div className="flex gap-3 items-start">
                        <FiMapPin className="text-blue-500 mt-1" />
                        <div>
                            <h2 className="font-semibold">{latestBooking.parkingName}</h2>
                            <p className="text-gray-500 text-sm">
                                {latestBooking.address}
                            </p>
                        </div>
                    </div>

                    <hr />

                    {/* Slot + Vehicle */}
                    <div className="flex justify-between text-sm">
                        <div>
                            <p className="text-gray-400 flex items-center gap-1">
                                <FaCar /> Slot
                            </p>
                            <p className="font-semibold">{latestBooking.slotId}</p>
                            {/* <p className="text-gray-500">Floor 1 • Standard</p> */}
                        </div>

                        <div>
                            <p className="text-gray-400 flex items-center gap-1">
                                <FaCar /> Vehicle
                            </p>
                            <p className="font-semibold">{latestBooking.vehicleNumber}</p>
                        </div>
                    </div>

                    {/* Dates */}
                    <div className="flex justify-between text-sm">
                        <div>
                            <p className="text-gray-400 flex items-center gap-1">
                                <FiCalendar /> Check In
                            </p>
                            <p className="font-semibold">{latestBooking.checkInDate}</p>
                            <p className="text-gray-500">{latestBooking.checkInTime}</p>
                        </div>

                        <div>
                            <p className="text-gray-400 flex items-center gap-1">
                                <FiCalendar /> Check Out
                            </p>
                            <p className="font-semibold">{latestBooking.checkOutDate}</p>
                            <p className="text-gray-500">{latestBooking.checkOutTime}</p>
                        </div>
                    </div>

                    {/* Duration */}
                    <p className="text-gray-500 text-sm">
                        ⏱ Duration: <span className="font-medium">{latestBooking.duration}hr</span>
                    </p>

                    {/* Price */}
                    <div className="bg-blue-600 text-white p-4 rounded-xl flex justify-between items-center">
                        <span>Total Paid</span>
                        <span className="text-xl font-bold">OMR {latestBooking.amount}</span>
                    </div>

                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex gap-4 mt-6 w-full max-w-md">
                <button className="flex-1 bg-white shadow rounded-xl py-3" onClick={() => { navigate("/bookings") }}>
                    Bookings
                </button>

                <button className="flex-1 bg-blue-600 text-white rounded-xl py-3" onClick={() => { navigate("/") }}>
                    Home
                </button>
            </div>

        </div>
    );
};

export default ConfirmationDone;