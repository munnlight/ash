// "use client";
// import { useState } from "react";
// import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";

// export default function Intro() {
//   const position = { lat: 29, lng: 28 };
//   const apiKey = import.meta.env.NEXT_PUBLIC_KEY_API;

//   return (
//     <APIProvider key={apiKey}>
//       <div className="h-full w-full">
//         <Map zoom={9} center={position}></Map>
//       </div>
//     </APIProvider>
//   );
// }

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
