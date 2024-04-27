import React from "react";
import { GoogleMap, LoadScript, StreetViewService } from "@react-google-maps/api";
import "./page.css";

function MapContainer() {
  const containerStyle = {
    width: "430px",
    height: "932px",
  };

  const loca = {
    lat: 47.922,
    lng: 106.924,
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
    <div className="cont">
      <LoadScript googleMapsApiKey={"AIzaSyDCtjmFyHPQ5GfjqaREiqv-Y_6wc2w0eLs"}>
        <GoogleMap mapContainerStyle={containerStyle} center={loca} zoom={20} options={mapOptions}>
          {/* Child components, such as markers, can go here */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapContainer;
