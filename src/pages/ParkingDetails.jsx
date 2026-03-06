import React from 'react'
import { useParams } from "react-router-dom";
import { parkingLots } from "../data/parkingData";

const ParkingDetails = () => {
    const { id } = useParams();

    const parking = parkingLots.find((lot) => lot.id === Number(id));

    return (
        <div>
            <h1>{parking.name}</h1>

            <h2>Available Slots</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 80px)", gap: "10px" }}>
                <div style={{ background: "green", padding: "20px" }}>A1</div>
                <div style={{ background: "red", padding: "20px" }}>A2</div>
                <div style={{ background: "green", padding: "20px" }}>A3</div>
                <div style={{ background: "green", padding: "20px" }}>A4</div>
            </div>        
        </div>
    );
}

export default ParkingDetails