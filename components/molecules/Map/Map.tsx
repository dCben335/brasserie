"use client"


import {MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

export default function Map({}) {
    return (
        <MapContainer 
            center={[40.8054,-74.0241]} 
            zoom={14} 
            scrollWheelZoom={true}
            className='map'>
                
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[40.8054,-74.0241]}>
                <Popup>Hey ! you found me </Popup>
            </Marker>
    </MapContainer>
    )
}