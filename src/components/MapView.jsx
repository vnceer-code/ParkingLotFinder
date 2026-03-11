import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { setSelectedParking } from '../features/parkingSlice';

const DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;



const MapView = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const parkingLots = useSelector(
        (state) => state.parking.parkingLots

    )
    console.log(parkingLots);
    //  
    return (
        <div className="w-full h-[500px]" >
            <MapContainer
                center={[23.5859, 58.4059]}
                zoom={13}
                className="w-full h-full"
               
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
                                    onClick={() => {
                                        dispatch(setSelectedParking(lot));
                                        navigate(`/parking/${lot.id}`);
                                    }}
                                >
                                    View Slots
                                </button>
                            </div>
                        </Popup>
                    </Marker>
                ))}

            </MapContainer>
        </div>
    )
}

export default MapView