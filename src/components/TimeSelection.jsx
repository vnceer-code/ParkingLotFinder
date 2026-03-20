import { useDispatch, useSelector } from "react-redux";
import {
    setCheckInDate,
    setCheckInTime,
    setCheckOutDate,
    setCheckOutTime,
    setDuration,
} from "../features/bookingSlice";

export default function TimeSelection({ next }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.booking);

    const handleNext = () => {
        const { checkInDate, checkInTime, checkOutDate, checkOutTime } = data;

        if (!checkInDate || !checkInTime || !checkOutDate || !checkOutTime) {
            alert("Fill all fields");
            return;
        }

        const checkIn = new Date(`${checkInDate}T${checkInTime}`);
        const checkOut = new Date(`${checkOutDate}T${checkOutTime}`);
        const diffMs = checkOut - checkIn;

        const hours = diffMs / (1000 * 60 * 60);
        dispatch(setDuration(hours.toFixed(2)));

        if (checkOut <= checkIn) {
            alert("Invalid time");
            return;
        }

        next();
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Select Time</h2>

            <div className="flex gap-2 mb-4">
                <input
                    type="date"
                    className="w-1/2 p-2 border rounded"
                    value={data.checkInDate}
                    onChange={(e) => dispatch(setCheckInDate(e.target.value))}
                />
                <input
                    type="time"
                    className="w-1/2 p-2 border rounded"
                    value={data.checkInTime}
                    onChange={(e) => dispatch(setCheckInTime(e.target.value))}
                />
            </div>

            <div className="flex gap-2 mb-4">
                <input
                    type="date"
                    className="w-1/2 p-2 border rounded"
                    value={data.checkOutDate}
                    onChange={(e) => dispatch(setCheckOutDate(e.target.value))}
                />
                <input
                    type="time"
                    className="w-1/2 p-2 border rounded"
                    value={data.checkOutTime}
                    onChange={(e) => dispatch(setCheckOutTime(e.target.value))}
                />
            </div>

            <button
                onClick={handleNext}
                className="w-full bg-blue-500 text-white py-2 rounded"
            >
                Next
            </button>
        </div>
    );
}