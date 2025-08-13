import { Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { useState } from "react";

const GoogleMap = () => {
    const [center, setCenter] = useState({ lat: 43.1910, lng: -87.9097 });
    const [zoom, setZoom] = useState(9);
    const [selected, setSelected] = useState(null);
    const coordinates = [
      { lat: 43.0410, lng: -87.9097, name: "Milwaukee County" }, // milwaukee 
      { lat: 43.371609, lng: -87.954011, name: "Ozaukee County" }, // ozaukee county 
      { lat: 43.0073, lng: -88.3239, name: "Waukesha County" }, // waukesha county
      { lat: 43.3933, lng: -88.2461, name: "Washington County" } // washington county
    ];
    return (
        <div style={{ height: '400px', width: '400px' }}>
          <Map 
            center={center} 
            zoom={zoom} 
            mapId="YOUR_MAP_ID"
            onZoomChanged={(e) => setZoom(e.detail.zoom)}
            onCenterChanged={(e) => setCenter(e.detail.center)}
            options={{ mapTypeControl: false }}
          > 
            {coordinates.map((coordinate, index) => {
              return (
                <AdvancedMarker 
                  key={index}
                  position={coordinate} 
                  clickable={true} 
                  onClick={() => {
                    setCenter({lat: coordinate.lat, lng: coordinate.lng});
                    setZoom(11);
                    setSelected(coordinate);
                  }}
                >
                  <Pin />
                </AdvancedMarker>
              );
            })}
            {selected && (
              <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {
                  setSelected(null);
                  setZoom(9);
                  setCenter({ lat: 43.1910, lng: -87.9097 });
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
                  {selected.name}
                </div>
              </InfoWindow>
            )}
          </Map>
        </div>
    );
};

export default GoogleMap
