"use client"
import { MapContainer, TileLayer,Marker,Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: '/images/logo.png',
    iconRetinaUrl: '/images/logo.png',
    iconSize: new L.Point(60, 75),
});

export default function Map() {
    return (
        <MapContainer center={[47.323426, 5.0403218]} zoom={14} scrollWheelZoom={true} className='map'>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Markers />            
        </MapContainer>
    )
}

function Markers() {
    const map = useMap();

    return (
        <Marker 
            position={[47.323426,5.0403218]} 
            icon={ iconPerson } 
            eventHandlers={{ click: () => map.flyTo([47.323426,5.0403218], 18)}}>
        </Marker>
    )
}
