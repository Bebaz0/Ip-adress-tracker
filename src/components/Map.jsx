import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map(props) {

    const position = props.Ipdata? [props.Ipdata.latitude, props.Ipdata.longitude] : [51.505, -0.09];

    const customIcon = new Icon({
        iconUrl: '/icons8-select-24.png',
        iconSize: [20, 20],
        // iconAnchor: [1, 1],
        // popupAnchor: [-0, -76]
    })

    return (
        <section className='map-component'>
            <div className='map' style={{ height: '400px', width: '100%' }}>
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={true}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                        <Marker position={position} icon={customIcon}>
                            <Popup>
                                <div>
                                    <strong>IP: {props.Ipdata?.ip || 'Unknown'}</strong><br/>
                                    Location: {props.Ipdata?.city || 'Unknown'}, {props.Ipdata?.country || 'Unknown'}<br/>
                                    ISP: {props.Ipdata?.org || 'Unknown'}
                                </div>
                            </Popup>
                        </Marker>
                </MapContainer>
            </div>
        </section>

);
}

export default Map;