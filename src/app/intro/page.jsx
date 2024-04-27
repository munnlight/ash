import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, Circle, Polyline } from "@react-google-maps/api";
import "./page.css";

function MapContainer() {
  const [map, setMap] = useState(null);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [circles, setCircles] = useState([]);
  const [polylines, setPolylines] = useState([]);
  const colors = [
    "#FF0000", // red strong
    "#FF6666", // red light
    "#FF0000", // red
    "#808080", // grey
    "#FF0000", // red
    "#808080"  // grey
  ];
  const reasons = [
    "Хурд хэтрүүлэлт",
    "Замын эвдрэл",
    "Машины эвдрэл",
    "Хурд хэтрүүлэлт",
    "Хариуцлагагүй байдал",
    "Замын эвдрэл",
  ]


  useEffect(() => {
    if (map && apiLoaded) {
      const citymap = {
        baruunkharaa: {
          center: { lat: 48.6, lng: 106.8 },
          population: 8000,
          label: "Baruunkharaa",
        },
        tunhel: {
          center: { lat: 48.5, lng: 106.2 },
          population: 5000,
          label: "Tunhel",
        },
        knongor: {
          center: { lat: 49.31, lng: 105.92 },
          population: 5000,
          label: "Knongor",
        },
        salkhit: {
          center: { lat: 49.19, lng: 105.87 },
          population: 55000,
          label: "Salkhit",
        },
        zuunkharaa: {
          center: { lat: 48.84, lng: 106.4 },
          population: 10000,
          label: "Zuunkharaa",
        },
        batsumber: {
          center: { lat: 48.36, lng: 106.74 },
          population: 15000,
          label: "Batsumber",
        },
      };

      const cityMarkers = Object.values(citymap).map((city, index) => (
        <Marker
          key={index}
          position={city.center}
          label={{ text: reasons[index], color: "black", fontWeight: "bold" }}
          icon={{ url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" }}
        />
      ));
      const cityCircles = Object.values(citymap).map((city, index) => (
        <Circle
          key={index}
          center={city.center}
          radius={Math.sqrt(city.population) * 100}
          options={{
            strokeColor: colors[index],
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: colors[index],
            fillOpacity: 0.35,
          }}
        />
      ));

      const distanceLine = (
        <Polyline
          key="distance-line"
          path={[
            { lat: 49.4585, lng: 105.9245 }, // Darkhan
            { lat: 47.8864, lng: 106.9057 }  // Ulaanbaatar
          ]}
          options={{
            strokeColor: "#0000FF",
            strokeOpacity: 1.0,
            strokeWeight: 2,
          }}
        />
      );

      setMarkers(cityMarkers);
      setCircles(cityCircles);
      setPolylines([distanceLine]);
    }
  }, [map, apiLoaded]);

  const handleLoad = (map) => {
    setMap(map);
  };

  const handleApiLoad = () => {
    setApiLoaded(true);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div className="my-search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="google-map-container">
        <LoadScript
          googleMapsApiKey={"AIzaSyDCtjmFyHPQ5GfjqaREiqv-Y_6wc2w0eLs"}
          onLoad={handleApiLoad}
        >
          <GoogleMap
            mapContainerStyle={{ width: "100vw", height: "100vh" }}
            zoom={8}
            center={{ lat: 48.6, lng: 106.8 }}
            onLoad={handleLoad}
          >
            {markers}
            {circles}
            {polylines}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default MapContainer;
