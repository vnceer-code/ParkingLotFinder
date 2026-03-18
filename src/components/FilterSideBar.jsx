import React from "react";
import { FiX } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { useDispatch } from "react-redux"
import {
    setLocationFilter,
    setPriceFilter,
    setDistanceFilter,
    setAvailabilityFilter
} from "../features/parkingSlice"

const FilterSidebar = ({ isOpen, closeSidebar }) => {
    const dispatch = useDispatch()

    return (

        <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>

            {/* Background overlay */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={closeSidebar}
            />

            {/* Sidebar */}
            <div className={`absolute left-0 top-0 h-full w-92 bg-white shadow-lg p-5 transform transition-transform duration-300
${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

                {/* Header */}
                <div className="flex justify-between items-center mb-4">

                    <h2 className="text-lg font-semibold text-gray-800 flex flex-row items-center gap-2">
                        <MdFilterList />
                        Filters
                    </h2>

                    <button onClick={closeSidebar}>
                        <FiX size={15}  className="focus:bg-gray-100 cursor-pointer" />
                    </button>

                </div>

                {/* Filter options */}

                <div className="space-y-4">
                    <label className="flex items-center gap-2 font-medium text-gray-500">
                        Location
                    </label>

                    <select onChange={(e) => dispatch(setLocationFilter(e.target.value))} className="w-full border p-2 rounded">
                        <option value="">Location</option>
                        <option value="avenues">Avenues Mall Parking</option>
                        <option value="city">City Centre Muscat Parking</option>
                        <option value="mall of oman">Mall of Oman Parking</option>
                    </select>
                    <label className="flex items-center gap-2 font-medium text-gray-500">
                        Price
                    </label>

                    <select onChange={(e) => dispatch(setPriceFilter(e.target.value))} className="w-full border p-2 rounded">
                        <option value="">Price</option>
                        <option value="1">1OMR</option>
                        <option value="2">2OMR</option>
                        <option value="3">3OMR</option>
                    </select>

                    <label className="flex items-center gap-2">
                        <input type="checkbox"  onChange={(e) => dispatch(setAvailabilityFilter(e.target.checked))} />
                        Available Only
                    </label>

                    <button className="w-full bg-blue-600 text-white py-2 rounded mt-4 cursor-pointer" onClick={closeSidebar}>
                        Apply Filters
                    </button>

                </div>

            </div>

        </div>

    );

};

export default FilterSidebar;