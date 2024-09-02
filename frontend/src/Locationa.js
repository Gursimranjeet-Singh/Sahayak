import React, { useState, useEffect } from 'react';
import OpenCageGeocode from "opencage-api-client";

const LocationComponent = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        try {
                            const response = await OpenCageGeocode.geocode({ q: `${latitude},${longitude}`, key: '40fd0b6abd2445e8a61504acc6c59ad0' });
                            const city = response.results[0].components.city;
                            console.log(city)
                            setLocation({ latitude, longitude, city });
                        } catch (error) {
                            console.error('Error getting location:', error);
                        }
                    },
                    (error) => {
                        console.error('Error getting location:', error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        getLocation();
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    return (
        <div>
            {location && (
                <div>
                    Latitude: {location.latitude}, Longitude: {location.longitude}, City: {location.city}
                </div>
            )}
        </div>
    );
};

export default LocationComponent;
