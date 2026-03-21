import { useSelector } from "react-redux";

export default function ConfirmationDone() {
    const data = useSelector((state) => state.booking);

    return (
        <div className="bg-gray-100 p-4 rounded m-5 ">
            <h2 className="text-xl mb-4 text-center font-bold text-gray-500">Avenues Mall</h2>
            <div className="flex flex-col mb-4 items-center justify-center gap-4">
                <div className="flex items-center justify-between w-full">
                    <div className="">
                        <h2 className="text-gray-400 font-semibold text-center">slot</h2>
                        <p className="font-bold">D4</p>
                    </div>
                    <div className="">
                        <h2 className="text-gray-400 font-semibold text-center">Vehicle</h2>
                        <p className="font-bold">{data.vehicleNumber}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="">
                        <h2 className="text-gray-400 font-semibold text-center">Check In</h2>
                        <p className="font-bold">{data.checkInDate} {data.checkInTime}</p>
                    </div>
                    <div className="">
                        <h2 className="text-gray-400 font-semibold text-center">Check Out</h2>
                        <p className="font-bold"> {data.checkOutDate} {data.checkOutTime} </p>
                    </div>
                </div>


            </div>



            <div className="flex gap-2 mt-7 mb-2">
                <button className="w-1/2 bg-gray-300 py-2 rounded cursor-pointer">
                    Home
                </button>
                <button className="w-1/2 bg-blue-500 text-white py-2 rounded cursor-pointer" >
                    Done
                </button>
            </div>
        </div>
    );
}