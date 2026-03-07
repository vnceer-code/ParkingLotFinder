import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

const ParkingDetails = () => {
    const { id } = useParams();
    const [slots, setSlots] = useState([]);

    const parking = useSelector(
        (state) => state.parking.selectedParking

    )
    function generateSlots(totalSlots) {

        let slots = []

        for (let i = 1; i <= totalSlots; i++) {

            slots.push({
                id: `A${i}`,
                status: "available"
            })

        }

        return slots

    }
    useEffect(() => {

        const stored = JSON.parse(localStorage.getItem("parkingSlots")) || {}

        if (stored[id]) {

            setSlots(stored[id])

        } else {

            const newSlots = generateSlots(parking?.totalslots || 0)

            stored[id] = newSlots

            localStorage.setItem("parkingSlots", JSON.stringify(stored))

            setSlots(newSlots)

        }

    }, [id, parking])


    return (
        <div>
            <h1>{parking?.name}</h1>

            <h2>Available Slots</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(16, 80px)", gap: "10px" }}>
                {slots.map((slot) => (
                    <div
                        key={slot.id}
                        style={{
                            background: "green",
                            padding: "20px"
                        }}
                    >

                        {slot.id}

                    </div>
                ))}
            </div>
        </div>
    );
}

export default ParkingDetails