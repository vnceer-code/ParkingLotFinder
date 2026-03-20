export default function VehicleSelection({ data, setData, next, back }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Select Vehicle</h2>

            <select
                className="w-full p-2 border rounded-lg"
                value={data.vehicle}
                onChange={(e) =>
                    setData({ ...data, vehicle: e.target.value })
                }
            >
                <option value="">Choose</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="truck">Truck</option>
            </select>

            <div className="flex gap-2 mt-4">
                <button
                    onClick={back}
                    className="w-1/2 bg-gray-300 py-2 rounded-lg"
                >
                    Back
                </button>

                <button
                    onClick={next}
                    className="w-1/2 bg-blue-500 text-white py-2 rounded-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
}