import React from 'react'
import { parkingLots } from '../data/parkingData';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setParkingLots } from '../features/parkingSlice';
import { setShowAuthModal } from '../features/authSlice';
import SearchBar from '../components/SearchBar';
import ParkingCard from '../components/ParkingCard';
import Navbar from '../components/Navbar';
import SubNavbar from '../components/SubNavbar';
import { setShowFilterSidebar } from '../features/parkingSlice';
import FilterSidebar from '../components/FilterSideBar';
import AuthModal from '../components/AuthModal';
import MapView from '../components/MapView';

const Home = () => {
    const showAuth = useSelector((state) => state.auth.showAuthModal);
    const showMap = useSelector((state) => state.parking.showMap);
    const showFilter = useSelector(
        (state) => state.parking.showFilterSidebar
    );
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
        <div className="mx-auto pt-28">


            <Navbar />
            <SubNavbar />
            <FilterSidebar
                isOpen={showFilter}
                closeSidebar={() => dispatch(setShowFilterSidebar(false))}
            />

            {showMap ? <MapView /> : <ParkingCard />}
            {showAuth && (
                <AuthModal closeModal={() => dispatch(setShowAuthModal(false))} />
            )}
        </div>
    )
}

export default Home