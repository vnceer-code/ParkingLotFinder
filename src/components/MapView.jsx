import React from 'react'
import { parkingLots } from '../data/parkingData';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-routing-machine";
import { useNavigate } from 'react-router-dom';
const MapView = () => {
    const navigate = useNavigate();
    const parkingLots = useSelector(
        (state) => state.parking.parkingLots
    )
    return (
        <MapContainer
            center={[23.5859, 58.4059]}
            zoom={12}
            style={{ height: "500px", width: "100%" }}
        >
            <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {parkingLots.map((lot) => (
                <Marker key={lot.id} position={lot.location}>
                    <Popup>
                        <div>
                            <h3>{lot.name}</h3>
                            <button
                                onClick={() => navigate(`/parking/${lot.id}`)}
                            >
                                View Slots
                            </button>
                        </div>
                    </Popup>
                </Marker>
            ))}

        </MapContainer>
    )
}

export default MapView