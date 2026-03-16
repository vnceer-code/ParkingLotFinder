import React from 'react'
import MapView from '../components/MapView'
import { parkingLots } from '../data/parkingData';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setParkingLots } from '../features/parkingSlice';
import SearchBar from '../components/SearchBar';
import ParkingCard from '../components/ParkingCard';
import FilterBar from '../components/FilterBar';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';

const Home = () => {
    const dispatch = useDispatch();
    const [filteredLots, setFilteredLots] = useState(parkingLots)
    useEffect(() => {
        dispatch(setParkingLots(filteredLots));
    }, [dispatch, filteredLots])
    const handleSearch = (query) => {

        const results = parkingLots.filter((lot) =>
            lot.name.toLowerCase().includes(query.toLowerCase())
        )

        setFilteredLots(results)

    }

    return (
        <div className=" mx-auto">

            
            <Navbar />
            <SubNavbar />
            {/* <FilterBar /> */}
            {/* <MapView />
            <h2 className="text-xl font-semibold mt-6 mb-5 text-center text-blue-600">
                Nearby Parking
            </h2> */}

            <ParkingCard />
        </div>
    )
}

export default Home