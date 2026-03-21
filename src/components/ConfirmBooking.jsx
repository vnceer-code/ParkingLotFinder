import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


export default function ConfirmBooking({ back, onClick }) {
    const { slotId } = useParams();
    const data = useSelector((state) => state.booking);
    const parking = useSelector((state) => state.parking.selectedParking);

    return (
        <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl mb-4 text-center font-bold text-gray-500">{parking?.name}</h2>
            <div className="flex flex-col mb-4 items-center justify-center gap-4">
                <div className="flex items-center justify-between w-full">
                    <div className="">
                        <h2 className="text-gray-400 ">slot</h2>
                        <p className="font-semibold">{slotId}</p>
                    </div>
                    <div className="">
                        <h2 className="text-gray-400 ">Vehicle</h2>
                        <p className="font-semibold">{data.vehicleNumber}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <div className="">
                        <h2 className="text-gray-400  ">Check In</h2>
                        <p className="font-semibold">{data.checkInDate} {data.checkInTime}</p>
                    </div>
                    <div className="">
                        <h2 className="text-gray-400 ">Check Out</h2>
                        <p className="font-semibold"> {data.checkOutDate} {data.checkOutTime} </p>
                    </div>
                </div>
                <p className="text-gray-500 text-sm">
                    ⏱ Duration: <span className="font-medium">{data.duration}hr</span>
                </p>

                {/* Price */}
                <div className=" p-4 rounded-xl flex justify-between items-center">
                    <span>Total Paid </span>
                    <span className="text-xl font-bold"> OMR{data.amount}</span>
                </div>


            </div>



            <div className="flex gap-2 mt-7 mb-2">
                <button onClick={back} className="w-1/2 bg-gray-300 py-2 rounded cursor-pointer">
                    Back
                </button>
                <button className="w-1/2 bg-blue-500 text-white py-2 rounded cursor-pointer" onClick={onClick}>
                    Confirm
                </button>
            </div>
        </div>
    );
}