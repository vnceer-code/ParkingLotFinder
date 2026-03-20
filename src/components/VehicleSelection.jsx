import { useDispatch, useSelector } from "react-redux";
import { setVehicleNumber } from "../features/bookingSlice";

export default function VehicleSelection({ next, back }) {
    const regex = /^[A-Z]{2}\s?\d{2}\s?[A-Z]{1,2}\s?\d{4}$/;
    const dispatch = useDispatch();
    const vehicleNumber = useSelector(
        (state) => state.booking.vehicleNumber
    );

    const handleNext = () => {
        if (!vehicleNumber) {
            alert("Please enter vehicle number");
            return;
        }
        if (!regex.test(vehicleNumber)) {
            alert("Invalid vehicle number format");
            return;
        }

        next();
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">
                Enter Vehicle Number
            </h2>

            <input
                type="text"
                placeholder="KL 07 AB 1234"
                className="w-full p-3 border rounded-lg uppercase"
                value={vehicleNumber}
                onChange={(e) =>
                    dispatch(setVehicleNumber(e.target.value.toUpperCase()))
                }
            />

            <p className="text-sm text-gray-500 mt-2">
                Example: KL 07 AB 1234
            </p>

            <div className="flex gap-2 mt-4">
                <button
                    onClick={back}
                    className="w-1/2 bg-gray-300 py-2 rounded-lg"
                >
                    Back
                </button>

                <button
                    onClick={handleNext}
                    className="w-1/2 bg-blue-500 text-white py-2 rounded-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
}