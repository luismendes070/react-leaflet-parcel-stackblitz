import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

function App() {
  const [geojsonData, setGeojsonData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data/polygons.geojson');
      const data = await response.json();
      setGeojsonData(data);
    }
    fetchData();
  }, []);

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geojsonData && (
        <GeoJSON data={geojsonData} />
      )}
    </MapContainer>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));