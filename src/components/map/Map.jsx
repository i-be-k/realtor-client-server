import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map({ items = [] }) {
    const validItems = Array.isArray(items) ? items.filter((item) => item?.latitude && item?.longitude) : [];

    const center = validItems.length === 1 ? [parseFloat(validItems[0].latitude), parseFloat(validItems[0].longitude)] : [7.3627, 3.8878];

    return (
        <MapContainer
            center={center}
            zoom={7}
            scrollWheelZoom={false}
            className="map"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {validItems.map(( item ) => (
                <Pin item={item} key={item.id} />
            ))}
        </MapContainer>
    )
}

export default Map;