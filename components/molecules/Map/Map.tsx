"use client"


import {MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

export default function Map({}) {
    const position = [40.8054, -74.0241] 

    return (
        <MapContainer 
            center={position} 
            zoom={14} 
            scrollWheelZoom={true}
            className='map'>

            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>Hey ! you found me </Popup>
            </Marker>
    </MapContainer>
    )
}