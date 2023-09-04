import React, { useRef, useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';
// import boothData from './heet';
// import HeatmapData from './boothData';
import HeatmapData from './bothData';
import heatData from './heat';
import { Popover, Typography } from '@mui/material';

const MapComponent = () => {
    const mapRef = useRef(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);


    const randomLocationNames = [
        'Central Park',
        'Golden Gate Bridge',
        'Eiffel Tower',
        'Sydney Opera House',
        'Machu Picchu',
        'Great Wall of China',
        'Taj Mahal',
        'Colosseum',
        'Statue of Liberty',
        'Mount Everest',
    ];

    const gradient = {
        0.2: 'blue',
        0.2: 'green',
        0.6: 'red',
        0.8: 'red',
        1.0: 'red',
    };

    useEffect(() => {
        mapRef.current = L.map('map', {
            center: [28.6139, 77.2090],
            zoom: 13,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);






        // Click event to display popover for heatmap points
        // mapRef.current.on('click', (event) => {
        //     if (event.latlng) {
        //         const randomNameIndex = Math.floor(Math.random() * randomLocationNames.length);
        //         const locationName = randomLocationNames[randomNameIndex];
        //         const locationData = {
        //             lat: event.latlng.lat,
        //             lng: event.latlng.lng,
        //             name: locationName,
        //         };

        //         setSelectedLocation(locationData);
        //         setAnchorEl(event.originalEvent.target);
        //     }
        // });


        const markerLayer = L.layerGroup().addTo(mapRef.current);

        const generateRandomMarkers = () => {
            for (let i = 0; i < 5; i++) {
                const randomLat = 28.6 + Math.random() * 0.1;
                const randomLng = 77.2 + Math.random() * 0.1;

                const marker = L.marker([randomLat, randomLng], {
                    icon: L.icon({
                        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                    }),
                }).addTo(markerLayer);

                const randomNameIndex = Math.floor(Math.random() * randomLocationNames.length);
                const locationName = randomLocationNames[randomNameIndex];

                marker.bindPopup(`<div><br />
        <br />
        <br />
        <br />
        <br />
        <strong>${locationName}</strong>
        <br />Latitude: ${randomLat}
        <br />Longitude: ${randomLng}
        <br />
        <br />
        <br />
        <br />
        <br />

        </div>`);
            }
        };

        generateRandomMarkers();

        return () => {
            mapRef.current.remove();
        };
    }, []);

    // const heatmapCoordinates = HeatmapData[0]?.booths.map((booth) => ({
    //     lat: booth.lat,
    //     lng: booth.long,
    // })) || [];
    //const heatmapCoordinates = HeatmapData[0]?.booths.map((booth) => ([booth.lat, booth.long ])) || [];
    const heatmapCoordinates = HeatmapData[0]?.booths.map((booth) => ({
        lat: booth.lat,
        lng: booth.long,
        boothNumber: booth.boothNumber, // Include booth number
    })) || [];

    // Create a heatmap layer using leaflet.heat
    useEffect(() => {
        const heatmapLayer = L.heatLayer(heatmapCoordinates, {
            radius: 50,
            gradient
        }).addTo(mapRef.current);


        const markerLayer = L.layerGroup().addTo(mapRef.current);

        heatmapCoordinates.forEach((point) => {
            const marker = L.marker([point.lat, point.lng], {
                icon: L.divIcon({
                    className: 'custom-popup-icon',
                    iconSize: [30, 30],
                }),
            });

            marker.bindPopup(`Booth Number: ${point.boothNumber}`);
            marker.addTo(markerLayer);
        });

        return () => {
            heatmapLayer.remove();
        };
    }, [heatmapCoordinates])

    return (
        <div>
            <div id="map" style={{ width: '100%', height: '100vh' }} />
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >

                {selectedLocation && (
                    <div style={{ padding: '20px', background: 'white' }}>
                        <Typography variant="h6" style={{ color: 'black' }}>
                            {selectedLocation.name}
                        </Typography>
                        <Typography style={{ color: 'black' }}>Latitude: {selectedLocation.lat}</Typography>
                        <Typography style={{ color: 'black' }}>Longitude: {selectedLocation.lng}</Typography>
                    </div>
                )}
            </Popover>
            <style>
                {`
          .location-box {
            background: white;
            border: 1px solid #ccc;
            padding: 10px;
            position: absolute;
            top: 20px;
            right: 20px;
            max-width: 300px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }
        `}
            </style>
        </div>
    );
};

export default MapComponent;
