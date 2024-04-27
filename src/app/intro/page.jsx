import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function MapContainer() {
  const containerStyle = {
    width: "100vw",
    height: "100vh",
  };

  const loca = {
    lat: 47.922,
    lng: 106.924,
  };

  return (
    <LoadScript googleMapsApiKey={"AIzaSyDCtjmFyHPQ5GfjqaREiqv-Y_6wc2w0eLs"}>
      <GoogleMap mapContainerStyle={containerStyle} center={loca} zoom={20}>
        {/* Child components, such as markers, can go here */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
