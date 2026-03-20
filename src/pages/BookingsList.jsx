import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FiMapPin, FiClock, FiTruck, FiTrash2 } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

export default function BookingsList() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("bookings")) || [];
        setBookings(data);
    }, []);

    const handleDelete = (id) => {
        const updated = bookings.filter((b) => b.id !== id);
        setBookings(updated);
        localStorage.setItem("bookings", JSON.stringify(updated));
    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 pt-24 px-4">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>

                    {bookings.length === 0 ? (
                        <div className="text-center text-gray-500 mt-20">
                            No bookings yet 😴
                        </div>
                    ) : (
                        <div className="space-y-5">

                            {bookings.map((b) => (
                                <div
                                    key={b.id}
                                    className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
                                >

                                    {/* Top Row */}
                                    <div className="flex justify-between items-center">

                                        <div>
                                            <h2 className="text-lg font-semibold">
                                                {b.parkingName || "Parking Lot"}
                                            </h2>

                                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                                <FiMapPin />
                                                Address
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                                <FaCar />
                                                 Slot {b.slotId}
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => handleDelete(b.id)}
                                            className="text-red-500 hover:bg-red-100 p-2 rounded-full"
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t my-4"></div>

                                    {/* Details */}
                                    <div className="grid grid-cols-2 gap-4 text-sm">

                                        {/* Vehicle */}
                                        <div className="flex items-center gap-2">
                                            <FaCar className="text-blue-500" />
                                            <span>{b.vehicleNumber}</span>
                                        </div>

                                        {/* Time */}
                                        <div className="flex items-center gap-2">
                                            <FiClock className="text-green-500" />
                                            <span>
                                                {b.duration} hours
                                            </span>
                                        </div>

                                        {/* Dates */}
                                        <div className="col-span-2 text-gray-600">
                                            <FiCalendar className="inline-block mr-2 text-orange-500" />
                                            {b.checkInDate} → {b.checkOutDate}
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>
                    )}
                </div>
            </div>
        </>
    );
}