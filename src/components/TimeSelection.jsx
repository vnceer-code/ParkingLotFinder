export default function TimeSelection({ data, setData, next }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Select Time</h2>

            <input
                type="time"
                className="w-full p-2 border rounded-lg"
                value={data.time}
                onChange={(e) =>
                    setData({ ...data, time: e.target.value })
                }
            />

            <button
                onClick={next}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
            >
                Next
            </button>
        </div>
    );
}