import React from "react"
import { useDispatch } from "react-redux"
import {
    setLocationFilter,
    setPriceFilter,
    setDistanceFilter,
    setAvailabilityFilter
} from "../features/parkingSlice"

const FilterBar = () => {

    const dispatch = useDispatch()

    return (

        <div className="flex gap-4 mb-4 flex-wrap">

            <select
                onChange={(e) => dispatch(setLocationFilter(e.target.value))}
                className="border p-2 rounded"
            >

                <option value="">Location</option>
                <option value="avenues">Avenues Mall Parking</option>
                <option value="citycenter">City Centre Muscat Parking</option>
                <option value="mallofoman">Mall of Oman Parking</option>

            </select>

            <select
                onChange={(e) => dispatch(setPriceFilter(e.target.value))}
                className="border p-2 rounded"
            >

                <option value="">Price</option>
                <option value="1">1OMR</option>
                <option value="2">2OMR</option>
                <option value="3">3OMR</option>

            </select>

            <select
                onChange={(e) => dispatch(setDistanceFilter(e.target.value))}
                className="border p-2 rounded"
            >

                <option value="">Distance</option>
                <option value="1">1 km</option>
                <option value="2">2 km</option>
                 <option value="3">3 km</option>

            </select>

            <label className="flex items-center gap-2">

                <input
                    type="checkbox"
                    onChange={(e) => dispatch(setAvailabilityFilter(e.target.checked))}
                />

                Available Only

            </label>

        </div>

    )

}

export default FilterBar