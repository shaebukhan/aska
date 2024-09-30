import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import CountryPicker from './CountryPicker';
import 'leaflet/dist/leaflet.css';
import Header from '../components/Header';
import SearchCountry from './SearchCountry';

// Component to change the map's view when a country is selected
const ChangeMapView = ({ center }) => {
    const map = useMap(); // Get the map instance
    map.setView(center, map.getZoom()); // Set the map view
    return null; // This component is just for side-effects, no rendering
};

const GeoView = () => {
    // Default coordinates (London)
    const [selectedCountryCoordinates, setSelectedCountryCoordinates] = useState([51.505, -0.09]);

    // Handle country change to update map center
    const handleCountryChange = (coordinates) => {
        setSelectedCountryCoordinates(coordinates);
    };

    return (
        <div className="container mx-auto">
            <Header />
            <div className="py-8">
                <span className="text-[30px] font-[600]">Geographical View</span>
            </div>
            <div className="map-page">
                <div className="controls">
                    {/* Passing handleCountryChange to CountryPicker */}
                    <CountryPicker onCountryChange={handleCountryChange} />
                </div>
                <div className="map-container">
                    <MapContainer center={selectedCountryCoordinates} zoom={5} style={{ height: '600px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />
                        {/* Change the map view when a new country is selected */}
                        <ChangeMapView center={selectedCountryCoordinates} />
                    </MapContainer>
                </div>
                <SearchCountry />
            </div>
        </div>
    );
};

export default GeoView;
