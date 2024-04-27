import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function MapContainer() {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    if (map && apiLoaded) {
      const bounds = new window.google.maps.LatLngBounds();
      const origin1 = { lat: 49.4585, lng: 105.9245 }; // Darkhan
      const origin2 = { lat: 47.8864, lng: 106.9057 }; // Ulaanbaatar

      // Draw markers for origin points
      const originMarker1 = new window.google.maps.Marker({
        position: origin1,
        label: "O1",
        map,
      });
      const originMarker2 = new window.google.maps.Marker({
        position: origin2,
        label: "O2",
        map,
      });

      // Draw line between origin points
      const distanceLine = new window.google.maps.Polyline({
        path: [origin1, origin2],
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map,
      });

      // Extend bounds to include markers and line
      bounds.extend(originMarker1.getPosition());
      bounds.extend(originMarker2.getPosition());
      bounds.extend(distanceLine.getPath().getAt(0));
      bounds.extend(distanceLine.getPath().getAt(1));

      // Fit map to bounds
      map.fitBounds(bounds);

      // Save markers to state
      setMarkers([originMarker1, originMarker2]);
    }
  }, [map, apiLoaded]);

  const handleLoad = (map) => {
    setMap(map);
  };

  const handleApiLoad = () => {
    setApiLoaded(true);
  };

  const mapOptions = {
    mapTypeControl: false, // Enable MapTypeControl
    linksControl: false,
    panControl: false,
    addressControl: false,
    enableCloseButton: false,
    zoomControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    // mapTypeControlOptions: {
    //   style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR, // Set style of the MapTypeControl
    //   position: window.google.maps.ControlPosition.TOP_RIGHT, // Set position of the MapTypeControl
    // },
  };

  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyA6enwWdxZs2LrmyVGTJs8NCMJYt9ChcFo"}
      onLoad={handleApiLoad}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100vw", height: "100vh" }}
        zoom={10}
        center={{ lat: 55.53, lng: 9.4 }}
        onLoad={handleLoad}
      >
        {/* Child components, such as markers, can go here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;

