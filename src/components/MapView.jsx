import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-routing-machine";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
const MapView = () => {
    const navigate = useNavigate();
    const parkingLots = useSelector(
        (state) => state.parking.parkingLots
       
    )
     console.log(parkingLots);
    return (
        <MapContainer
            center={[23.5859, 58.4059]}
            zoom={13}
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