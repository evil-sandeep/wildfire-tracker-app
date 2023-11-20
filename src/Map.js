import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import Locationinfo from "./Locationinfo";
import { useState } from 'react'

const Map = ({ eventData, center, zoom }) => {
    const [lockInfo, setLockInfo] = useState(null)
    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 0) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng=
                {ev.geometries[0].coordinates[0]}
                onClick={() => setLockInfo({ id: ev.id, title: ev.title })}
            />
        }
        return null;


    });
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
                <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>

            {lockInfo && <Locationinfo info={lockInfo } /> }
        </div>
    );
};

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756,
    },
    zoom: 6,
};

export default Map;
