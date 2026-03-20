export default function ConfirmBooking({ data, back }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Confirm Booking</h2>

            <p><strong>Time:</strong> {data.time}</p>
            <p><strong>Vehicle:</strong> {data.vehicle}</p>

            <div className="flex gap-2 mt-4">
                <button
                    onClick={back}
                    className="w-1/2 bg-gray-300 py-2 rounded-lg"
                >
                    Back
                </button>

                <button
                    className="w-1/2 bg-green-500 text-white py-2 rounded-lg"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}