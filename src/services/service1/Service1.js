import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline, useMapEvents } from 'react-leaflet';

const Service1 = () => {
  const markerPosition = [51.505, -0.09]; // Define the position here

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  return (
    <MapContainer center={markerPosition} zoom={13} style={{ height: '500px', width: '100%' }} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      <Marker position={markerPosition}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Circle center={markerPosition} radius={200} pathOptions={{ fillColor: 'blue' }} />
      <Polyline positions={[[51.51, -0.12], [51.52, -0.1], [51.53, -0.13]]} pathOptions={{ color: 'green' }} />
    </MapContainer>
  );
};

export default Service1;




