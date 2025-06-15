import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map(props) {

    const position = props.ipData? [props.ipData.latitude, props.ipData.longitude] : [0, 0];

    const mapKey = props.ipData ? `${props.ipData.latitude}-${props.ipData.longitude}` : 'default';

    return (
        <section className='map-component'>
            <div className='map' style={{ height: '90vh', width: '100%' }}>
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={true}
                    key={mapKey}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                        <Marker position={position}>
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