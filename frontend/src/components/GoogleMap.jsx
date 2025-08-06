import { Map, Marker } from '@vis.gl/react-google-maps';
import { useState } from "react";

const GoogleMap = () => {
    const center = { lat: 43.2427, lng: -87.9231 }; // Example: Los Angeles
    const defaultZoom = 15;
    return (
        <div style={{ height: '500px', width: '100%' }}>
          <Map defaultCenter={center} defaultZoom={defaultZoom}>
            <Marker position={center} />
          </Map>
        </div>
    );
};

export default GoogleMap
