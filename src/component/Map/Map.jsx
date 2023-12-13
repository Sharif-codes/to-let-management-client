// Map.jsx
import './Map.css';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents
  // ... other imports
} from 'react-leaflet';

const Map = ({ readOnly, location, onChange }) => {
    const gulshanCoordinates = [23.7951, 90.4088];
  return (
    <div className="containerBox">
      <MapContainer
        className="map"
        center={[0,0]}
        zoom={1}
        dragging={!readOnly}
        touchZoom={!readOnly}
        doubleClickZoom={!readOnly}
        scrollWheelZoom={!readOnly}
        boxZoom={!readOnly}
        keyboard={!readOnly}
        attributionControl={false}
      >
       <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'></TileLayer>
       <Marker position={gulshanCoordinates}>
          <Popup>
            Gulshan, Dhaka, Bangladesh
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
