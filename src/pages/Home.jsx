import React from 'react'
import MapView from '../components/MapView'
import { parkingLots } from '../data/parkingData';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setParkingLots } from '../features/parkingSlice';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setParkingLots(parkingLots));
    }, [dispatch])
    return (
        <div>
            <h1>Parking Lot Finder</h1>
            <MapView />
        </div>
    )
}

export default Home